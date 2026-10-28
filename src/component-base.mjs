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
    this._rescuePreUpgradeOnDark();

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

  /**
   * Re-applies an `onDark` value that was assigned before the element upgraded.
   *
   * Lit's pre-upgrade rescue only covers names in `elementProperties`. `onDark` is a
   * plain accessor rather than a reactive property, so a value assigned before upgrade
   * stays behind as an own data property that permanently masks the prototype accessor.
   * As a result, `ondark` never receives it and later writes to either name silently disagree.
   * Deleting the own property and re-assigning routes the value through the setter.
   *
   * @private
   */
  _rescuePreUpgradeOnDark() {
    if (Object.hasOwn(this, "onDark")) {
      const preUpgradeValue = this.onDark;

      Reflect.deleteProperty(this, "onDark");
      this.onDark = preUpgradeValue;
    }
  }

  /**
   * Sets the starting values for the component's properties and internal helpers.
   * @returns {void}
   * @private
   */
  _initializeDefaults() {
    this.appearance = "default";
    this.download = false;
    this.ondark = false;
    this.variant = "primary";

    // `layout`, `shape`, and `size` stay unset: the inner button supplies its own defaults.

    /**
     * @private
     */
    this.defaultReferrerPolicy = "strict-origin-when-cross-origin";

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
       * Sets the color scheme to match the background behind the link. Use `default` on light backgrounds and `inverse` on dark backgrounds.
       * @type {'default' | 'inverse'}
       * @default "default"
       * @category ui
       */
      appearance: {
        type: String,
        reflect: true,
      },

      /**
       * Downloads the linked file when you select the link, instead of navigating to it. Ignored when `type="cta"`.
       * @relevantWhen type !== "cta"
       * @category behavior
       */
      download: {
        type: Boolean,
        reflect: true,
      },

      /**
       * When using `type="cta"`, stretches the link to fill the width of its container.
       * @relevantWhen type === "cta"
       * @category ui
       */
      fluid: { type: Boolean },

      /**
       * Internal: passed to the inner button of a `cta` link; not for direct use. Unset by default, so the inner `auro-button` uses its own layout ([auro-button API](https://auro.alaskaair.com/components/auro/button/api)).
       * @relevantWhen type === "cta"
       * @category ui
       * @private
       */
      layout: {
        type: String,
        attribute: "layout",
        reflect: true,
      },

      /**
       * When using `type="cta"`, sets the shape of the button: `rounded` corners, a `pill` with fully rounded ends, a `circle`, or a `square`. Use `rounded` or `pill` for buttons with a text label, and `circle` or `square` for icon-only buttons. Unset by default, so the inner `auro-button` uses its own shape ([auro-button API](https://auro.alaskaair.com/components/auro/button/api)).
       * @type {'rounded' | 'pill' | 'circle' | 'square'}
       * @relevantWhen type === "cta"
       * @category ui
       */
      shape: {
        type: String,
        attribute: "shape",
        reflect: true,
      },

      /**
       * When using `type="cta"`, sets the size of the button, from `xs` (smallest) to `xl` (largest). At `xs` and `sm`, the new-window or external-link icon also shrinks to match. Unset by default, so the inner `auro-button` uses its own size ([auro-button API](https://auro.alaskaair.com/components/auro/button/api)).
       * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl'}
       * @relevantWhen type === "cta"
       * @category ui
       */
      size: {
        type: String,
        attribute: "size",
        reflect: true,
      },

      /**
       * Sets the address the link goes to, such as `/trips` or `https://www.alaskaair.com` (the link's `href`). Without a usable `href`, a standard or `nav` link without a `role` shows its content as plain text, and a `cta` link renders as a button.
       *
       * Security: don't pass untrusted input as `href`. Addresses that could run code (`javascript:`, `data:`, and `vbscript:`) are dropped, and every other address except `tel:`, `sms:`, and `mailto:` is upgraded to `https` unless the page is served from `localhost`.
       * @category behavior
       */
      href: {
        type: String,
        reflect: true,
      },

      /**
       * Deprecated: Use `appearance="inverse"` instead.
       * Switches the link to colors designed for dark backgrounds.
       * @deprecated Use `appearance="inverse"` instead.
       * @category ui
       */
      ondark: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Limits how much of the current page's address the link shares with the page it opens. Links within the same origin send the full address, links to other origins send only the origin, and links to a less secure destination (HTTPS to HTTP) send nothing (`strict-origin-when-cross-origin`). Ignored when `type="cta"`.
       * @relevantWhen type !== "cta"
       * @category behavior
       */
      referrerpolicy: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Sets how the linked page relates to the current page, such as `nofollow` (the link's `rel`). When `rel` isn't set and a `target="_blank"` link's `href` points to another site, standard and `nav` links use `noOpener noReferrer`, or `external` when `referrerpolicy` is on; links to the same site and `type="cta"` links get no automatic `rel`. Visit [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel) for more information.
       * @category behavior
       */
      rel: {
        type: String,
        reflect: true,
      },

      /**
       * Sets where the linked page opens, such as `_blank` for a new tab or `_self` for the current tab (the link's `target`). When the link has a usable `href`, `_blank` also adds an icon after the content: a new-window icon for links to the same site, or an external-link icon for other sites.
       * @category behavior
       */
      target: {
        type: String,
        reflect: true,
      },

      /**
       * Sets whether the link looks like a regular text link, a navigation link, or a button. Use `nav` for navigation links, which are underlined on hover and on focus, and `cta` for a link that looks like a button. Leave it unset for a regular underlined text link.
       * @type {'nav' | 'cta'}
       * @category ui
       */
      type: {
        type: String,
        reflect: true,
      },

      /**
       * Gives the link button behavior: any `role` value shows a pointer cursor and stops the link from navigating to `href`. The value `button` also gives the link the button role and a keyboard tab stop. Enter and Space do not currently fire `click`, so handle those keys yourself. Ignored when `type="cta"`.
       * @relevantWhen type !== "cta"
       * @category behavior
       */
      role: {
        type: String,
      },

      /**
       * When using `type="cta"`, sets how much emphasis the button gets. Use `primary` for the main action, `secondary` or `tertiary` for supporting actions, and `ghost` or `flat` for the lowest emphasis.
       * @type {'primary' | 'secondary' | 'tertiary' | 'ghost' | 'flat'}
       * @default "primary"
       * @relevantWhen type === "cta"
       * @category ui
       */
      variant: {
        type: String,
        reflect: true,
      },
    };
  }

  /**
   * Deprecated: Use `appearance="inverse"` instead.
   * Switches the link to colors designed for dark backgrounds.
   * @deprecated Use `appearance="inverse"` instead.
   * @category ui
   * @type {boolean}
   */
  get onDark() {
    return this.ondark;
  }

  /**
   * Deprecated: Use `appearance="inverse"` instead.
   * Switches the link to colors designed for dark backgrounds.
   * @deprecated Use `appearance="inverse"` instead.
   * @category ui
   * @type {boolean}
   */
  set onDark(value) {
    this.ondark = value;
  }

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, "auro-hyperlink");
  }

  /**
   * Gets the address the link actually uses, after `href` is made safe. It's an empty string when `href` isn't set, and `undefined` when `href` is dropped because it could run code or can't be parsed.
   *
   * @example
   * // Assuming this.href = 'http://example.com' (not on localhost)
   * this.safeUri; // Returns 'https://example.com/'
   *
   * @example
   * // Assuming this.href = '' or this.href = null
   * this.safeUri; // Returns ''
   *
   * @private
   * @returns {string|undefined} The safe URL, an empty string when `href` isn't set, or `undefined` when `href` is dropped.
   */
  get safeUri() {
    return this.href ? this.safeUrl(this.href) : "";
  }

  /**
   * Checks whether the link's safe address includes `http`. Relative addresses count, because they resolve to full web addresses.
   *
   * @example
   * // Assuming this.href = 'http://example.com'
   * this.includesDomain; // Returns true
   *
   * @example
   * // Assuming this.href = '/path/to/file'
   * this.includesDomain; // Returns true, because the path resolves to a full web address
   *
   * @example
   * // Assuming this.href = '' or this.href = null
   * this.includesDomain; // Returns false
   *
   * @private
   * @returns {boolean} True if the safe address includes `http`; false otherwise.
   */
  get includesDomain() {
    return this.href ? Boolean(this.safeUri?.includes("http")) : false;
  }

  /**
   * Creates a safe version of `href` by resolving it against the current page, upgrading its protocol to `https` (except on `localhost`), and dropping addresses that could run code or can't be parsed. `tel:`, `sms:`, and `mailto:` addresses are returned unchanged. Returns `undefined` when `href` is empty.
   *
   * @example
   * // Assuming href = 'http://example.com'
   * this.safeUrl(href); // Returns 'https://example.com/'
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
   * @returns {string|undefined} The safe URL, or `undefined` if `href` is empty, malformed, or could run code.
   */
  safeUrl(href) {
    let safeUrl;

    if (!href) {
      return undefined;
    }

    let url;

    try {
      url = new URL(href, window?.location?.href);
    } catch {
      // A malformed address can't be made safe, so drop it
      return undefined;
    }

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
   * Creates a template for an icon element that wraps the SVG in the provided `svgContent`.
   *
   * @example
   * // Assuming svgContent = '<svg><path d="..."/></svg>'
   * this.generateIconHtml(svgContent); // Returns a template for the SVG icon
   *
   * @private
   * @param {string} svgContent - The SVG content to be embedded.
   * @returns {TemplateResult} The template for the icon element containing the SVG.
   */
  generateIconHtml(svgContent) {
    const dom = new DOMParser().parseFromString(svgContent, "text/html");
    const svg = dom.body.firstChild;

    svg.setAttribute("slot", "svg");

    return html`<${this.iconTag} customColor customSvg part="targetIcon">${svg}</${this.iconTag}>`;
  }

  /**
   * Checks whether a URL points at the exact host serving the current page.
   *
   * Matching is host-exact, so sibling subdomains are treated as external:
   * on `auro.example.com`, a link to `www.example.com` is a different domain.
   * The URL is parsed without a base, so it must be absolute. A relative URL can't be parsed
   * and never matches; pass the resolved address (`safeUri`), which is always absolute.
   * A URL that is empty, missing, or can't be parsed never matches.
   *
   * @example
   * // Assuming the page is served from example.com
   * this.isCurrentDomain('https://example.com/path'); // Returns true
   * this.isCurrentDomain('https://evil.com/?q=example.com'); // Returns false
   * this.isCurrentDomain(undefined); // Returns false
   * this.isCurrentDomain('/path'); // Returns false, because a relative URL can't be parsed
   *
   * @private
   * @param {string|undefined} url - The URL to check.
   * @returns {boolean} True if the URL's hostname equals the current page's hostname; false otherwise.
   */
  isCurrentDomain(url) {
    if (!url) {
      return false;
    }

    try {
      return new URL(url).hostname === window?.location?.hostname;
    } catch {
      return false;
    }
  }

  /**
   * Creates a template for the new-window or external-link icon when `target` is `_blank` and the link has a usable address. Returns `undefined` otherwise.
   *
   * @example
   * // Assuming target = '_blank' and this.href = '/relative/path', which resolves
   * // to the current page's origin
   * this.targetIcon(target); // Returns a template for the new window icon
   *
   * @example
   * // Assuming target = '_blank' and this.safeUri = 'https://external.com'
   * this.targetIcon(target); // Returns a template for the external link icon
   *
   * @example
   * // Assuming target = '_self'
   * this.targetIcon(target); // Returns undefined
   *
   * @private
   * @param {string} target - The `target` attribute of the anchor element.
   * @returns {TemplateResult|undefined} The template for the icon, or `undefined` if no icon is needed.
   */
  targetIcon(target) {
    // If target is '_blank' and the URL's host is the current page's host, return icon for new window
    if (target === "_blank") {
      // Without a usable href there is no destination to describe
      if (!this.safeUri) {
        return undefined;
      }

      if (this.isCurrentDomain(this.safeUri)) {
        return this.generateIconHtml(newWindow.svg);
      }
      return this.generateIconHtml(externalLink.svg);
    }

    return undefined;
  }

  /**
   * Gets the state of a tab as a string.
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
   * @param {boolean} tabIsActive - The active state of the tab; `true` means the tab is active.
   * @returns {string} The string `is-active` if the tab is active; an empty string otherwise.
   */
  getTabState(tabIsActive) {
    return tabIsActive === true ? "is-active" : "";
  }

  /**
   * Gets the `rel` attribute value based on the `target` and `rel` values.
   *
   * @example
   * // Assuming target = '_blank', rel = 'noFollow', and this.safeUri = 'http://alaskaair.com'
   * this.getRelType(target, rel); // Returns 'noFollow'
   *
   * @example
   * // Assuming target = '_blank', rel = undefined, this.safeUri = 'http://alaskaair.com', and the page is served from alaskaair.com, so the safeUri's hostname matches the page's hostname
   * this.getRelType(target, rel); // Returns undefined
   *
   * @example
   * // Assuming target = '_blank', rel = undefined, this.safeUri = 'http://external.com', this.includesDomain = true, and this.referrerpolicy = undefined
   * this.getRelType(target, rel); // Returns 'noOpener noReferrer'
   *
   * @example
   * // Assuming target = '_blank', rel = undefined, this.safeUri = 'http://external.com', this.includesDomain = true, and this.referrerpolicy = true
   * this.getRelType(target, rel); // Returns 'external'
   *
   * @private
   * @param {string} target - The `target` attribute of the anchor element.
   * @param {string} rel - The `rel` attribute of the anchor element.
   * @returns {string|undefined} The `rel` attribute value, or `undefined` if none applies.
   */
  getRelType(target, rel) {
    if (rel) {
      return rel;
    }

    if (target === "_blank" && this.isCurrentDomain(this.safeUri)) {
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
