/**
 * Utility function to get image source string from various input types
 * Handles both Vite (string) and Next.js (object) import formats
 * @param {string | object} imageSrc - Image source from import or string path
 * @returns {string} - Image URL string
 */
export const getImageSrc = (imageSrc) => {
  if (!imageSrc) return '';
  
  // If it's already a string, return it
  if (typeof imageSrc === 'string') {
    return imageSrc;
  }
  
  // If it's an object with a 'default' property (Next.js static import)
  if (imageSrc.default) {
    return typeof imageSrc.default === 'string' ? imageSrc.default : imageSrc.default.src;
  }
  
  // If it's an object with a 'src' property
  if (imageSrc.src) {
    return imageSrc.src;
  }
  
  // Fallback: try to stringify or return the object as-is (will show [object Object])
  return imageSrc;
};

/**
 * Hook for safely using image sources in img tags
 * @param {string | object} imageSrc - Image source
 * @returns {string} - Safe image URL string
 */
export const useSafeImageSrc = (imageSrc) => {
  return getImageSrc(imageSrc);
};
