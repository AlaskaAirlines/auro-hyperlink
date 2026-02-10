// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

/* eslint-disable max-lines, no-script-url, no-else-return, require-unicode-regexp, lit/binding-positions, lit/no-invalid-html */

import externalLink from "@alaskaairux/icons/dist/icons/interface/external-link-stroke.mjs";
import newWindow from "@alaskaairux/icons/dist/icons/interface/new-window-stroke.mjs";

import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
import { html } from "lit/static-html.js";
// ---------------------------------------------------------------------
import { AuroElement } from "./layoutElement/auroElement.js";

export default class ComponentBase extends AuroElement {
  constructor() {
    super();

    this._initializeDefaults();

    /*
      If the component requires a touch detection,
      please use this function to determine if a user is
      actively touching a device, versus detecting if
      the device is touch enables or a handheld device.

      Also uncomment the touch detection lib above
    */
    this.addEventListener("touchstart", function () {
      this.classList.add("is-touching");
    });
  }

  _initializeDefaults() {
    this.appearance = "default";
    this.download = false;
    this.ondark = false;
    this.variant = "primary";

    /**
     * @private
     */
    this.layout = this.type === "cta" ? "block" : null;

    /**
     * @private
     */
    this.shape = this.type === "cta" ? "rounded" : null;

    /**
     * @private
     */
    this.size = this.type === "cta" ? "md" : null;

    /**
     * @private
     */
    this.defaultReferrerPolicy = "strict-origin-when-cross-origin";

    /**
     * @private
     */
    this.ariapressed = "false";

    /**
     * @private
     */
    this.tabIsActive = "false";

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      ...AuroElement.properties,

      /**
       * Defines whether the component will be on lighter or darker backgrounds.
       * @type {'default' | 'inverse'}
       * @default 'default'
       */
      appearance: {
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
       * If true and `type="cta"`, the hyperlink will have a fluid-width UI.
       */
      fluid: { type: Boolean },

      /**
       * Defines the URL of the linked page.
       */
      href: {
        type: String,
        reflect: true
      },

      /**
       * DEPRECATED - use `appearance="inverse"` instead.
       */
      ondark: { type: Boolean },

      /**
       * If true, sets `strict-origin-when-cross-origin` to control the referrer information sent with requests.
       */
      referrerpolicy: {
        type: Boolean,
        reflect: true
      },

      /**
       * Defines the relationship between the current document and the linked document. Visit [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel) for more information.
       */
      rel: {
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
       * Defines the type of hyperlink.
       * @type {'nav' | 'cta'}
       */
      type: {
        type: String,
        reflect: true
      },

      /**
       * Sets button variant option when using `type="cta"`.
       * @type {'primary' | 'secondary' | 'tertiary' | 'ghost' | 'flat'}
       * @default 'primary'
       */
      variant: {
        type: String,
        reflect: true
      },
    };
  }

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, "auro-hyperlink");
  }

  /**
   * Returns a safe URI based on the provided `href`.
   * If `href` is truthy, it generates a safe URL using the `safeUrl` function.
   * Otherwise, it returns an empty string.
   *
   * @example
   * // Assuming this.href = 'http://example.com'
   * this.safeUri; // Returns 'http://example.com'
   *
   * @example
   * // Assuming this.href = '' or this.href = null
   * this.safeUri; // Returns ''
   *
   * @returns {string} The safe URI or an empty string.
   */
  get safeUri() {
    return this.href ? this.safeUrl(this.href) : "";
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
    return this.href ? this.safeUri.includes("http") : false;
  }

  /**
   * Generates a safe URL based on the provided `href` parameter.
   * If `href` is falsy, it returns `undefined`.
   *
   * @example
   * // Assuming href = 'http://example.com'
   * this.safeUrl(href); // Returns 'https://example.com'
   *
   * @example
   * // Assuming href = '/path/to/file'
   * this.safeUrl(href); // Returns 'https://<host>/path/to/file'
   *
   * @example
   * // Assuming href = 'javascript:alert("Hello")'
   * this.safeUrl(href); // Returns undefined
   *
   * @private
   * @param {string} href - The original URL.
   * @returns {string|undefined} The safe URL or `undefined`.
   */
  safeUrl(href) {
    let safeUrl;

    if (!href) {
      return undefined;
    }

    const url = new URL(href, window?.location?.href);

    switch (url.protocol) {
      case "tel:":
      case "sms:":
      case "mailto:":
        safeUrl = href;
        break;

      // Specifically want to render NO shadowDOM for the following refs
      case "javascript:":
      case "data:":
      case "vbscript:":
        safeUrl = undefined;
        break;

      default: {
        if (!window?.location?.href.includes("localhost")) {
          url.protocol = "https:";
        }
        safeUrl = url.href;
        break;
      }
    }

    return safeUrl;
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
    const dom = new DOMParser().parseFromString(svgContent, "text/html");
    const svg = dom.body.firstChild;

    svg.setAttribute("slot", "svg");

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
     * Checks if a URL's domain is from the current domain or its subdomains.
     * @param {string} url - The URL to check.
     * @returns {boolean} Returns true if the URL's domain is equals to current domain or one of its subdomains, otherwise false.
     */
    const isCurrentDomain = (url) => {
      const urlObject = new URL(url);
      return urlObject.hostname === window.location.hostname;
    };

    // If target is '_blank' and the URL's domain is equal to the current domain or one of its subdomains, return icon for new window
    if (target === "_blank") {
      if (isCurrentDomain(this.safeUri)) {
        return this.generateIconHtml(newWindow.svg);
      }
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
    return tabIsActive === true ? "is-active" : "";
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

    if (
      target === "_blank" &&
      this.safeUri.includes(window?.location?.hostname)
    ) {
      return undefined;
    }

    if (
      target === "_blank" &&
      this.includesDomain &&
      !this.rel &&
      !this.referrerpolicy
    ) {
      return "noOpener noReferrer";
    }

    if (target === "_blank" && this.referrerpolicy) {
      return "external";
    }

    return undefined;
  }

  // function renders HTML and CSS into the scope of the component
  render() {
    return this.getMarkup();
  }
}
