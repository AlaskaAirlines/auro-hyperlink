// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

/* eslint-disable max-lines, no-script-url, no-else-return, require-unicode-regexp, lit/binding-positions, lit/no-invalid-html */

// ---------------------------------------------------------------------
import { AuroElement } from "./layoutElement/auroElement.js";
import { html } from 'lit/static-html.js';

import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

import externalLink from '@alaskaairux/icons/dist/icons/interface/external-link-stroke.mjs';
import newWindow from '@alaskaairux/icons/dist/icons/interface/new-window-stroke.mjs';

// build the component class
export default class ComponentBase extends AuroElement {
  constructor() {
    super();

    this.download = false;
    this.relative = false;
    this.secondary = false;
    this.tertiary = false;
    this.ondark = false;
    this.small = false;
    this.layout = 'classic';
    this.shape = 'rounded';
    this.size = 'md';
    this.variant = 'primary';

    /**
     * @private
     */
    this.defaultReferrerPolicy = 'strict-origin-when-cross-origin';

    /**
     * @private
     */
    this.ariapressed = 'false';

    /**
     * @private
     */
    this.tabIsActive = 'false';

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();

    /*
      If the component requires a touch detection,
      please use this function to determine if a user is
      actively touching a device, versus detecting if
      the device is touch enables or a handheld device.

      Also uncomment the touch detection lib above
    */
    this.addEventListener('touchstart', function() {
      this.classList.add('is-touching');
    });
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      ...super.properties,

      /**
       * Defines the URL of the linked page.
       */
      href: {
        type: String,
        reflect: true
      },

      /**
       * Defines the relationship between the current document and the linked document.
       */
      rel: {
        type: String,
        reflect: true
      },

      /**
       * DEPRECATED.
       */
      role: {
        type: String,
        reflect: true
      },

      /**
       * Defines where to open the linked document.
       */
      target: {
        type: String,
        reflect: true
      },

      /**
       * If true, the linked resource will be downloaded when the hyperlink is clicked.
       */
      download: {
        type: Boolean,
        reflect: true
      },

      /**
       * If true, the auto URL re-write feature will be disabled.
       */
      relative: {
        type: Boolean,
        reflect: true
      },

      /**
       * If true and `type="cta"`, the hyperlink will have a secondary UI.
       */
      secondary: {
        type: Boolean,
        reflect: true
      },

      /**
       * If true and `type="cta"`, the hyperlink will have a tertiary UI.
       */
      tertiary: {
        type: Boolean,
        reflect: true
      },

      /**
       * If true, the hyperlink will be styled for use on a dark background.
       */
      ondark: { type: Boolean },

      /**
       * Defines the type of hyperlink; accepts `nav` or `cta`.
       */
      type: {
        type: String,
        reflect: true
      },

      /**
       * If true and `type="cta"`, the hyperlink will have a fluid-width UI.
       */
      fluid: { type: Boolean },

      /**
       * If true, sets `strict-origin-when-cross-origin` to control the referrer information sent with requests.
       */
      referrerpolicy: {
        type: Boolean,
        reflect: true
      },

      /**
       * If true and `type="cta"`, the hyperlink will have a small UI.
       */
      small: { type: Boolean },

      /**
       * Sets button variant option.
       * @default primary
       */
      variant: {
        type: String,
        reflect: true
      },
    };
  }

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, 'auro-hyperlink');
  }

  /**
   * Returns a safe URI based on the provided `href` and `relative` parameters.
   * If `href` is truthy, it generates a safe URL using the `safeUrl` function.
   * Otherwise, it returns an empty string.
   *
   * @example
   * // Assuming this.href = 'http://example.com' and this.relative = false
   * this.safeUri; // Returns 'http://example.com'
   *
   * @example
   * // Assuming this.href = '' or this.href = null
   * this.safeUri; // Returns ''
   *
   * @returns {string} The safe URI or an empty string.
   */
  get safeUri() {
    return this.href ? this.safeUrl(this.href, this.relative) : '';
  }

  /**
   * Checks whether the provided URI (if available) includes the 'http' protocol.
   * If the URI is truthy, it examines whether it contains 'http'.
   * Otherwise, it returns false.
   *
   * @example
   * // Assuming this.href = 'http://example.com'
   * this.includesDomain; // Returns true
   *
   * @example
   * // Assuming this.href = '/path/to/file'
   * this.includesDomain; // Returns false
   *
   * @example
   * // Assuming this.href = '' or this.href = null
   * this.includesDomain; // Returns false
   *
   * @private
   * @returns {boolean} True if the URI includes 'http', false otherwise.
   */
  get includesDomain() {
    return this.href ? this.safeUri.includes('http') : false;
  }

  /**
   * Generates a safe URL based on the provided `href` and `relative` parameters.
   * If `href` is falsy, it returns `undefined`.
   *
   * @example
   * // Assuming href = 'http://example.com' and relative = false
   * this.safeUrl(href, relative); // Returns 'https://example.com'
   *
   * @example
   * // Assuming href = '/path/to/file' and relative = true
   * this.safeUrl(href, relative); // Returns '/path/to/file'
   *
   * @example
   * // Assuming href = 'javascript:alert("Hello")'
   * this.safeUrl(href, relative); // Returns undefined
   *
   * @private
   * @param {string} href - The original URL.
   * @param {boolean} relative - Indicates whether the URL is relative.
   * @returns {string|undefined} The safe URL or `undefined`.
   */
  safeUrl(href, relative) {
    if (!href) {
      return undefined;
    }

    const url = new URL(href, 'https://www.alaskaair.com');

    switch (url.protocol) {
      case 'tel:':
      case 'sms:':
      case 'mailto:':
        return href;

      // Specifically want to render NO shadowDOM for the following refs
      case 'javascript:':
      case 'data:':
      case 'vbscript:':
        return undefined;

      default:
        if (!relative) {
          url.protocol = 'https:';
          return url.href;
        } else {
          return href.replace(/^[^:]+:/, "");
        }
    }
  }

  /**
   * Generates an HTML element containing an SVG icon based on the provided `svgContent`.
   *
   * @example
   * // Assuming svgContent = '<svg><path d="..."/></svg>'
   * this.generateIconHtml(svgContent); // Returns HTML element containing the SVG icon
   *
   * @private
   * @param {string} svgContent - The SVG content to be embedded.
   * @returns {Element} The HTML element containing the SVG icon.
   */
  generateIconHtml(svgContent) {
    const dom = new DOMParser().parseFromString(svgContent, 'text/html');
    const svg = dom.body.firstChild;

    svg.setAttribute('slot', 'svg');

    return html`<${this.iconTag} customColor customSvg part="targetIcon">${svg}</${this.iconTag}>`;
  }

  /**
   * Generates an icon HTML element based on the target attribute.
   *
   * @example
   * // Assuming target = '_blank' and this.safeUri = 'http://alaskaair.com'
   * this.targetIcon(target); // Returns HTML element containing the new window icon
   *
   * @example
   * // Assuming target = '_blank' and this.safeUri = 'http://external.com'
   * this.targetIcon(target); // Returns HTML element containing the external link icon
   *
   * @example
   * // Assuming target = '_self' or this.safeUri = '/relative/path'
   * this.targetIcon(target); // Returns undefined
   *
   * @private
   * @param {string} target - The target attribute of the anchor element.
   * @returns {HTMLElement|undefined} The HTML element containing the icon, or undefined if no icon is generated.
   */
  targetIcon(target) {

    /**
     * Checks if a URL's domain is from the 'alaskaair.com' domain or its subdomains.
     * @param {string} url - The URL to check.
     * @returns {boolean} Returns true if the URL's domain is 'alaskaair.com' or one of its subdomains, otherwise false.
     */
    const isAlaskaAirDomain = (url) => {
      const urlObject = new URL(url);
      return urlObject.hostname.endsWith('.alaskaair.com');
    };

    // If target is '_blank' and the URL's domain is 'alaskaair.com' or one of its subdomains, return icon for new window
    if (target === '_blank' && isAlaskaAirDomain(this.safeUri)) {
      return this.generateIconHtml(newWindow.svg);
    } else if (target === '_blank' && !isAlaskaAirDomain(this.safeUri) && this.includesDomain) {
      // If target is '_blank' and the URL does not belong to 'alaskaair.com' or its subdomains but contains a domain, return icon for external link
      return this.generateIconHtml(externalLink.svg);
    }

    return undefined;
  }

  /**
   * Returns the state of a tab as a string.
   *
   * @example
   * // Assuming tabIsActive = true
   * this.getTabState(tabIsActive); // Returns 'is-active'
   *
   * @example
   * // Assuming tabIsActive = false
   * this.getTabState(tabIsActive); // Returns ''
   *
   * @private
   * @param {boolean} tabIsActive - Indicates whether the tab is active.
   * @returns {string} 'is-active' if the tab is active, otherwise an empty string.
   */
  getTabState(tabIsActive) {
    return tabIsActive === true ? "is-active" : '';
  }

  /**
   * Gets the rel attribute value based on target and rel values.
   *
   * @example
   * // Assuming target = '_blank', rel = 'noFollow', and this.safeUri = 'http://alaskaair.com'
   * this.getRelType(target, rel); // Returns 'noFollow'
   *
   * @example
   * // Assuming target = '_blank', rel = undefined, this.safeUri = 'http://alaskaair.com', and this.includesDomain = true
   * this.getRelType(target, rel); // Returns undefined
   *
   * @example
   * // Assuming target = '_blank', rel = undefined, this.safeUri = 'http://external.com', this.includesDomain = true, and this.referrerpolicy = undefined
   * this.getRelType(target, rel); // Returns 'noOpener noReferrer'
   *
   * @example
   * // Assuming target = '_blank', rel = undefined, this.safeUri = 'http://external.com', this.includesDomain = true, and this.referrerpolicy = 'no-referrer'
   * this.getRelType(target, rel); // Returns 'external'
   *
   * @private
   * @param {string} target - The target attribute of the anchor element.
   * @param {string} rel - The rel attribute of the anchor element.
   * @returns {string|undefined} The rel attribute value or undefined if not applicable.
   */
  getRelType(target, rel) {

    if (rel) {
      return rel;
    }

    if (target === '_blank' && this.safeUri.includes('alaskaair.com')) {
      return rel;
    }

    if (target === '_blank' && this.includesDomain && !this.rel && !this.referrerpolicy) {
      return 'noOpener noReferrer';
    }

    if (target === '_blank' && this.referrerpolicy) {
      return 'external';
    }

    return undefined;
  }

  /**
   * Sets the ARIA pressed state based on user interactions.
   *
   * @example
   * // Assuming ariaPressed = false and user performs a mousedown event
   * this.ariaPressedState(ariaPressed); // Returns true
   *
   * @example
   * // Assuming ariaPressed = true and user performs a mouseup event
   * this.ariaPressedState(ariaPressed); // Returns false
   *
   * @example
   * // Assuming ariaPressed = false and user performs a keydown event with 'Enter' or 'Space'
   * this.ariaPressedState(ariaPressed); // Returns true
   *
   * @example
   * // Assuming ariaPressed = true and user performs a keyup event
   * this.ariaPressedState(ariaPressed); // Returns false
   *
   * @private
   * @param {boolean} ariaPressed - The initial value of the ARIA pressed state.
   * @returns {boolean} The updated ARIA pressed state.
   */
  ariaPressedState(ariaPressed) {
    const ariaToggle = function (event) {
      const ariaPressedNode = this.shadowRoot.querySelector('[aria-pressed]');
      ariaPressedNode.setAttribute("aria-pressed", 'false');

      if (event.type === 'mousedown') {
        ariaPressedNode.ariaPressed = true;
      } else {
        ariaPressedNode.ariaPressed = false;
      }

      if (event.type === 'keydown') {
        if (event.code === 'Enter' || event.code === 'Space') {
          ariaPressedNode.ariaPressed = true;
        } else {
          ariaPressedNode.ariaPressed = false;
        }
      }
    };

    // Add event listeners
    this.addEventListener('mousedown', ariaToggle);
    this.addEventListener('mouseup', ariaToggle);
    this.addEventListener('keydown', ariaToggle);
    this.addEventListener('keyup', ariaToggle);

    return ariaPressed;
  }

  // function renders HTML and CSS into the scope of the component
  render() {
    return this.getMarkup();
  }
}
