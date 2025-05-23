// utils/linkGenerator.js

/**
 * Generates a random download link (for demo purposes, not a real file).
 * @returns {string} A fake download link.
 */
function generateRandomLink() {
  // This could be replaced with a real file service or CDN
  const randomId = Math.random().toString(36).substr(2, 8);
  return `https://example.com/download/${randomId}`;
}

/**
 * Generates a random YouTube Kids video link.
 * @returns {string} A fake YouTube Kids video link.
 */
function generateKidsLink() {
  const randomId = Math.random().toString(36).substr(2, 11);
  return `https://www.youtubekids.com/watch?v=${randomId}`;
}

module.exports = {
  generateRandomLink,
  generateKidsLink,
};