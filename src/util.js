/**
 * See https://github.com/WICG/focus-visible#shadow-dom for additional info.
 * @private
 * @returns {Boolean} Whether the focus-visible polyfill is available.
 */
const isFocusVisiblePolyfillAvailable = function() {
  // eslint-disable-next-line
  return window.applyFocusVisiblePolyfill != null;
};


/**
 * @private
 * @returns {Boolean} Whether :focus-visible is supported.
 */
const isFocusVisibleSupported = function() {
  try {
    document.querySelector(':focus-visible');
  } catch (error) {
    return false;
  }

  return true;
};

export { isFocusVisiblePolyfillAvailable, isFocusVisibleSupported };
