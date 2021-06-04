/**
 * https://github.com/WICG/focus-visible#shadow-dom
 * @returns {Boolean} whether the focus-visible polyfill is available
 */
const isFocusVisiblePolyfillAvailable = function() {
  // eslint-disable-next-line
  return window.applyFocusVisiblePolyfill != null;
},


/**
 * @returns {Boolean} whether :focus-visible is supported
 */
isFocusVisibleSupported = function() {
  try {
    document.querySelector(':focus-visible');
  } catch (error) {
    return false;
  }

  return true;
};

export { isFocusVisiblePolyfillAvailable, isFocusVisibleSupported };
