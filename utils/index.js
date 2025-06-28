// utils.js
export const checkImageURL = (url) => {
  if (!url || typeof url !== 'string') return false;
  return /^https?:\/\/.+\\.(jpe?g|png|gif|bmp|webp)(\\?.*)?$/i.test(url);
};