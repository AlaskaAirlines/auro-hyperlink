// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html } from "lit-element";
import 'focus-visible/dist/focus-visible.min.js';
import { isFocusVisibleSupported, isFocusVisiblePolyfillAvailable } from './util';
import externalLink from '@alaskaairux/icons/dist/icons/interface/external-link_es6.js';
import newWindow from '@alaskaairux/icons/dist/icons/interface/new-window_es6.js';

// build the component class
export default class ComponentBase extends LitElement {
  constructor() {
    super();

    this.download = false;
    this.relative = false;
    this.secondary = false;
    this.ondark = false;
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

  connectedCallback() {
    super.connectedCallback();
    if (!isFocusVisibleSupported() && isFocusVisiblePolyfillAvailable()) {
      window.applyFocusVisiblePolyfill(this.shadowRoot);
    }
  }

  // function to define props used within the scope of thie component
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
      referrerpolicy:   { type: Boolean }
    };
  }

  /**
   * @private
   * @returns {string} Cleaned URL.
   */
  get safeUri() {
    return this.href ? this.safeUrl(this.href, this.relative) : '';
  }

  /**
   * @private
   * @returns {boolean} Whether or not URL includes protocol.
   */
  get includesDomain() {
    return this.href ? this.safeUri.includes('http') : false;
  }

  /**
   * @private
   * @param {string} href - Include href value.
   * @param {boolean} relative - Include relative value.
   * @returns {string} URL definition.
   */
  safeUrl(href, relative) {
    if (href !== undefined) {
      const url = new URL(href, 'https://www.alaskaair.com');

      switch (url.protocol) {
        case 'javascript:': // eslint-disable-line
          return '';

        case 'tel:':
          return href;

        case 'sms:':
          return href;

        case 'mailto:':
          return href;

        default:
          if (!relative) {
            url.protocol = 'https:';

            return url.href;

          } else if (relative) {
            return href;
          }
      }

    } else if (href === undefined) {
      return undefined;
    }

    return undefined;
  }

  /**
   * Internal function to generate the HTML for the icon to use.
   * @private
   * @param {string} svgContent - The imported svg icon.
   * @returns {string} - The html template for the icon.
   */
  generateIconHtml(svgContent) {
    const dom = new DOMParser().parseFromString(svgContent, 'text/html'),
      svg = dom.body.firstChild;

    return svg;
  }

  /**
   * @private
   * @param {string} target - Link destination target.
   * @returns {string} Correct icon.
   */
  targetIcon(target) {

    if (target === '_blank' && this.safeUri.includes('alaskaair.com')) {
      return this.generateIconHtml(newWindow.svg);
    } else if (target === '_blank' && this.includesDomain) {
      return this.generateIconHtml(externalLink.svg);
    }

    return undefined;
  }

  /**
   * @private
   * @param {boolean} tabisactive - Tab state.
   * @returns {string} CSS class for active state.
   */
  getTabState(tabisactive) {
    return tabisactive === true ? "is-active" : '';
  }

  /**
   * @private
   * @param {string} target - Link destination target.
   * @param {string} rel - Defined rel option.
   * @returns {string} SEO security options.
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
   * @private
   * @param {boolean} ariapressed - Aria state.
   * @returns {string} Aria attribute definition.
   */
  ariaPressedState(ariapressed) {
    const ariaToggle = function (event) {
      const ariaPressedNode = this.shadowRoot.querySelector('[aria-pressed]');

      if (event.type === 'touchstart' || event.type === 'mousedown') {
        ariaPressedNode.setAttribute("aria-pressed", 'true');
      } else {
        ariaPressedNode.setAttribute("aria-pressed", 'false');
      }

      if (event.type === 'keydown') {
        if (event.keyCode === 13 || event.keyCode === 32) {
          ariaPressedNode.setAttribute("aria-pressed", 'true');
        } else {
          ariaPressedNode.setAttribute("aria-pressed", 'false');
        }
      }
    };

    // Add our event listeners
    this.addEventListener('mousedown', ariaToggle, false);
    this.addEventListener('keydown', ariaToggle, false);

    return ariapressed;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      ${this.getMarkup()}
    `;
  }
}
