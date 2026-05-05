const { createClient } = require('@supabase/supabase-js');

function getRequestBody(req) {
  return new Promise((resolve, reject) => {
    if (req.body && typeof req.body === 'object' && !Buffer.isBuffer(req.body)) {
      resolve(req.body);
      return;
    }
    if (typeof req.body === 'string' && req.body.length) {
      try {
        resolve(JSON.parse(req.body));
      } catch (e) {
        reject(e);
      }
      return;
    }
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
    });
    req.on('end', () => {
      if (!data) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(data));
      } catch (e) {
        reject(e);
      }
    });
    req.on('error', reject);
  });
}

function isValidEmail(value) {
  const s = typeof value === 'string' ? value.trim() : '';
  if (!s || s.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    res.statusCode = 503;
    res.end(JSON.stringify({ error: 'Email signup is not configured' }));
    return;
  }

  let body;
  try {
    body = await getRequestBody(req);
  } catch (_) {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: 'Invalid request body' }));
    return;
  }

  const emailRaw = body && typeof body.email === 'string' ? body.email.trim() : '';
  if (!isValidEmail(emailRaw)) {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: 'Invalid email address' }));
    return;
  }

  const email = emailRaw.toLowerCase();

  try {
    const supabase = createClient(url, key, {
      auth: { persistSession: false },
    });

    const { error } = await supabase.from('email_subscribers').insert({ email });

    if (error) {
      if (error.code === '23505') {
        res.statusCode = 200;
        res.end(JSON.stringify({ ok: true }));
        return;
      }
      console.error('Supabase insert error:', error.message);
      res.statusCode = 500;
      res.end(JSON.stringify({ error: 'Could not save your email right now.' }));
      return;
    }

    res.statusCode = 200;
    res.end(JSON.stringify({ ok: true }));
  } catch (e) {
    console.error('subscribe handler:', e);
    res.statusCode = 500;
    res.end(JSON.stringify({ error: 'Could not save your email right now.' }));
  }
};
