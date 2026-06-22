/* Vercel serverless function — contact form (The American Energy).
   POST { name, org, email, topic, message, company_website (honeypot) }
   -> emails the enquiry via Resend (same method as the Digital DNA site).
   Env vars: RESEND_API_KEY (required), MAIL_FROM, CONTACT_TO (optional). */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function esc(s) {
  return String(s).replace(/[&<>"]/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
  });
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (e) { body = {}; }
  }
  body = body || {};

  // Honeypot — real visitors leave this empty. Pretend success for bots.
  if (body.company_website) return res.status(200).json({ ok: true });

  const name    = String(body.name || '').trim();
  const org     = String(body.org || '').trim();
  const email   = String(body.email || '').trim();
  const topic   = String(body.topic || '').trim();
  const message = String(body.message || '').trim();

  if (!name || message.length < 5 || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Please add your name, a valid email, and a short message.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('contact: missing RESEND_API_KEY');
    return res.status(500).json({ error: 'The contact form is not configured yet.' });
  }
  const from = process.env.MAIL_FROM || 'The American Energy <forms@cfourv.com>';
  const to   = process.env.CONTACT_TO || 'shailupreti@gmail.com';

  const safeName = name.replace(/[\r\n]+/g, ' ');
  const subject  = ('The American Energy — ' + (topic || 'Website enquiry') + ' — ' + safeName).replace(/[\r\n]+/g, ' ');

  const html =
    '<h2 style="font-family:sans-serif">New enquiry from The American Energy website</h2>' +
    '<table style="font-family:sans-serif;font-size:14px">' +
    '<tr><td><strong>Name</strong>&nbsp;&nbsp;</td><td>' + esc(safeName) + '</td></tr>' +
    '<tr><td><strong>Email</strong>&nbsp;&nbsp;</td><td>' + esc(email) + '</td></tr>' +
    (org ? '<tr><td><strong>Organization</strong>&nbsp;&nbsp;</td><td>' + esc(org) + '</td></tr>' : '') +
    (topic ? '<tr><td><strong>Topic</strong>&nbsp;&nbsp;</td><td>' + esc(topic) + '</td></tr>' : '') +
    '</table>' +
    '<p style="font-family:sans-serif;font-size:14px"><strong>Message</strong></p>' +
    '<p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">' + esc(message) + '</p>';

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: from,
        to: [to],
        reply_to: email,
        subject: subject,
        html: html
      })
    });

    if (!r.ok) {
      const detail = await r.text();
      console.error('contact: Resend responded', r.status, detail);
      return res.status(502).json({ error: 'Could not send your message. Please try again.' });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('contact: request failed', err);
    return res.status(502).json({ error: 'Could not send your message. Please try again.' });
  }
};
