/**
 * Returns a URL for a static asset in public/, safe for Vercel/Linux (case-sensitive)
 * and mobile/Instagram in-app browsers. Uses PUBLIC_URL and encodeURI so paths
 * are consistent and never 404 due to case or encoding.
 * @param {string} path - Path relative to site root, e.g. "/images/foo bar.png"
 * @returns {string} Full URL path (or absolute if PUBLIC_URL is set)
 */
export function publicAssetUrl(path) {
  const base =
    typeof process !== 'undefined' && process.env && process.env.PUBLIC_URL != null
      ? process.env.PUBLIC_URL
      : '';
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return base + encodeURI(normalized);
}

/**
 * URL for an image in public/images/. Use exact filename (case-sensitive on server).
 * @param {string} filename - e.g. "spotify logo 2.jpg", "instalogo.jpg"
 * @returns {string}
 */
export function imageUrl(filename) {
  return publicAssetUrl(`/images/${filename}`);
}
