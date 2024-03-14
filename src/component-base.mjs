// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html } from "lit";
// import { isFocusVisibleSupported, isFocusVisiblePolyfillAvailable } from './util';
import externalLink from '@alaskaairux/icons/dist/icons/interface/external-link-stroke.mjs';
import newWindow from '@alaskaairux/icons/dist/icons/interface/new-window-stroke.mjs';

// build the component class
export default class ComponentBase extends LitElement {
  constructor() {
    super();

    this.download = false;
    this.relative = false;
    this.secondary = false;
    this.ondark = false;
    this.small = false;

    /**
     * @private
     */
    this.defaultreferrerpolicy = 'strict-origin-when-cross-origin';

    /**
     * @private
     */
    this.ariapressed = 'false';

    /**
     * @private
     */
    this.tabisactive = 'false';

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
      href:             { type: String },
      rel:              { type: String },
      role:             { type: String },
      target:           { type: String },
      download:         { type: Boolean },
      relative:         { type: Boolean },
      secondary:        { type: Boolean },
      ondark:           { type: Boolean },
      type:             { type: String },
      fluid:            { type: Boolean },
      referrerpolicy:   { type: Boolean },
      small:            { type: Boolean }
    };
  }

  /**
   * Gets the safe URI.
   *
   * @private
   * @type {string}
   */
  get safeUri() {
    return this.href ? this.safeUrl(this.href, this.relative) : '';
  }

  /**
   * Checks if the safe URI includes a domain.
   *
   * @private
   * @type {boolean}
   */
  get includesDomain() {
    return this.href ? this.safeUri.includes('http') : false;
  }

  /**
   * Safely processes a URL.
   *
   * @private
   * @param {string} href - The URL to be processed.
   * @param {boolean} relative - Indicates whether the URL is relative.
   * @returns {string|undefined} The processed URL or undefined if the URL is invalid or if JavaScript is used.
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
   * Generates an HTML element containing SVG content.
   *
   * @private
   * @param {string} svgContent - The SVG content to be parsed.
   * @returns {HTMLElement} The HTML element containing the parsed SVG content.
   */
  generateIconHtml(svgContent) {
    const dom = new DOMParser().parseFromString(svgContent, 'text/html'),
      svg = dom.body.firstChild;

    return svg;
  }

  /**
   * Generates an icon HTML element based on the target attribute.
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
    }
    // If target is '_blank' and the URL does not belong to 'alaskaair.com' or its subdomains but contains a domain, return icon for external link
    else if (target === '_blank' && !isAlaskaAirDomain(this.safeUri) && this.includesDomain) {
      return this.generateIconHtml(externalLink.svg);
    }

    return undefined;
  }

  /**
   * Gets the state of a tab.
   *
   * @private
   * @param {boolean} tabisActive - Indicates whether the tab is active.
   * @returns {string} The state of the tab, either "is-active" if active or an empty string if not active.
   */
  getTabState(tabisactive) {
    return tabisactive === true ? "is-active" : '';
  }

  /**
   * Gets the rel attribute value based on target and rel values.
   *
   * @private
   * @param {string} target - The target attribute of the anchor element.
   * @param {string} rel - The rel attribute of the anchor element.
   * @returns {string|undefined} The rel attribute value or undefined if not applicable.
   */
  getReltype(target, rel) {

    if (rel) {
      return rel;
    }

    if (target === '_blank' && this.safeUri.includes('alaskaair.com')) {
      return rel;
    }

    if (target === '_blank' && this.includesDomain && !this.rel && !this.referrerpolicy) {
      return 'noopener noreferrer';
    }

    if (target === '_blank' && this.referrerpolicy) {
      return 'external';
    }

    return undefined;
  }

  /**
   * Sets the ARIA pressed state based on user interactions.
   *
   * @private
   * @param {boolean} ariaPressed - The initial value of the ARIA pressed state.
   * @returns {boolean} The updated ARIA pressed state.
   */
  ariaPressedState(ariapressed) {
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

    // Add our event listeners
    this.addEventListener('mousedown', ariaToggle);
    this.addEventListener('mouseup', ariaToggle);
    this.addEventListener('keydown', ariaToggle);
    this.addEventListener('keyup', ariaToggle);

    return ariapressed;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      ${this.getMarkup()}
    `;
  }
}
