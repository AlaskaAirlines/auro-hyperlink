// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

import { AuroIcon } from "@aurodesignsystem/auro-icon/class";
import { transportAllA11yAttributes } from "@aurodesignsystem/auro-library/scripts/runtime/a11yTransporter/a11yTransporter.mjs";
import { AuroDependencyVersioning } from "@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs";
import * as RuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
import { LitElement } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { createRef, ref } from "lit/directives/ref.js";
import { html } from "lit/static-html.js";
import ComponentBase from "./component-base.mjs";
import iconVersion from "./iconVersion.js";

import "./auro-hyperlink-button.js";

import colorCss from "./styles/color.scss";
import styleCss from "./styles/style.scss";
import tokensCss from "./styles/tokens.scss";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * An accessible link that takes people to another page, a file, or an email or phone action.
 * It wraps a standard HTML `<a>` element, adds brand-aware styling and safer handling of
 * URLs, and passes ARIA attributes, `role`, and `tabindex` from the host to the inner link so screen reader users hear them.
 *
 * **Key capabilities**
 * - **Link styles**: Leave `type` unset for a standard inline text link, use `type="nav"` for navigation
 *   links, or use `type="cta"` for a link that looks like an `<auro-button>`.
 * - **URL safety**: `href` values that start with `javascript:`, `data:`, or `vbscript:` are dropped so they can't run code,
 *   and every other `href` except `tel:`, `sms:`, and `mailto:` is upgraded to `https` (unless the page is served from `localhost`).
 * - **External links**: Setting `target="_blank"` adds a new-window icon for links to the same site or an external-link icon for other sites,
 *   and standard and `nav` links to other sites also get a `rel` value automatically, while `type="cta"` links use only the `rel` you provide.
 * - **Light and dark backgrounds**: Setting `appearance="inverse"` switches the link to colors designed for
 *   dark backgrounds.
 * - **Button behavior**: Setting `role="button"` gives the link a button role and a tab stop for actions such as
 *   opening a dialog, but Enter and Space do not currently fire `click`, so handle those keys yourself.
 *
 * **Example**
 * ```html
 * <auro-hyperlink href="/trips">View your trips</auro-hyperlink>
 * ```
 *
 * @summary An accessible link with safe URL handling, external link icons, and optional button styling.
 * @customElement auro-hyperlink
 *
 * @forcePrivate {'layout'}
 *
 * "Role" property needs to stay in this jsdocs block to avoid conflicts with testing framework.
 * @property {string} role - Gives the link button behavior. Only `button` is supported, and the link then takes a keyboard tab stop and no longer navigates to `href`. Enter and Space do not currently fire `click`, so handle those keys and the click yourself. Ignored when `type="cta"`.
 *
 * @slot - The link's visible content: text, an icon, or both.
 * @csspart link - The inner `<a>` element, rendered when the link has a usable `href` or a `role` and `type` isn't `cta`.
 * @csspart targetIcon - The new-window or external-link icon shown after the content when `target="_blank"`.
 * @cssprop --ds-auro-hyperlink-default-color-default - Text color of the link in its default state on light backgrounds.
 * @cssprop --ds-auro-hyperlink-default-color-inverse - Text color of the link in its default state on dark backgrounds.
 * @cssprop --ds-auro-hyperlink-default-container-color-default - Background color of the link in its default state on light backgrounds.
 * @cssprop --ds-auro-hyperlink-default-container-color-inverse - Background color of the link in its default state on dark backgrounds.
 * @cssprop --ds-auro-hyperlink-default-outline-color-default - Outline color of the link in its default state on light backgrounds.
 * @cssprop --ds-auro-hyperlink-default-outline-color-inverse - Outline color of the link in its default state on dark backgrounds.
 * @cssprop --ds-auro-hyperlink-default-border-color-default - Border color of the link in its default state on light backgrounds.
 * @cssprop --ds-auro-hyperlink-default-border-color-inverse - Border color of the link in its default state on dark backgrounds.
 * @cssprop --ds-auro-hyperlink-visited-color-default - Text color of the link after it has been visited on light backgrounds.
 * @cssprop --ds-auro-hyperlink-visited-color-inverse - Text color of the link after it has been visited on dark backgrounds.
 * @cssprop --ds-auro-hyperlink-visited-container-color-default - Background color of the link after it has been visited on light backgrounds.
 * @cssprop --ds-auro-hyperlink-visited-container-color-inverse - Background color of the link after it has been visited on dark backgrounds.
 * @cssprop --ds-auro-hyperlink-visited-outline-color-default - Outline color of the link after it has been visited on light backgrounds.
 * @cssprop --ds-auro-hyperlink-visited-outline-color-inverse - Outline color of the link after it has been visited on dark backgrounds.
 * @cssprop --ds-auro-hyperlink-visited-border-color-default - Border color of the link after it has been visited on light backgrounds.
 * @cssprop --ds-auro-hyperlink-visited-border-color-inverse - Border color of the link after it has been visited on dark backgrounds.
 * @cssprop --ds-auro-hyperlink-focus-color-default - Text color of the link when it has keyboard focus on light backgrounds.
 * @cssprop --ds-auro-hyperlink-focus-color-inverse - Text color of the link when it has keyboard focus on dark backgrounds.
 * @cssprop --ds-auro-hyperlink-focus-container-color-default - Background color of the link when it has keyboard focus on light backgrounds.
 * @cssprop --ds-auro-hyperlink-focus-container-color-inverse - Background color of the link when it has keyboard focus on dark backgrounds.
 * @cssprop --ds-auro-hyperlink-focus-outline-color-default - Outline color of the link when it has keyboard focus on light backgrounds.
 * @cssprop --ds-auro-hyperlink-focus-outline-color-inverse - Outline color of the link when it has keyboard focus on dark backgrounds.
 * @cssprop --ds-auro-hyperlink-focus-border-color-default - Border color of the link when it has keyboard focus on light backgrounds.
 * @cssprop --ds-auro-hyperlink-focus-border-color-inverse - Border color of the link when it has keyboard focus on dark backgrounds.
 * @cssprop --ds-auro-hyperlink-hover-color-default - Text color of the link when you hover over it on light backgrounds.
 * @cssprop --ds-auro-hyperlink-hover-color-inverse - Text color of the link when you hover over it on dark backgrounds.
 * @cssprop --ds-auro-hyperlink-hover-container-color-default - Background color of the link when you hover over it on light backgrounds.
 * @cssprop --ds-auro-hyperlink-hover-container-color-inverse - Background color of the link when you hover over it on dark backgrounds.
 * @cssprop --ds-auro-hyperlink-hover-outline-color-default - Outline color of the link when you hover over it on light backgrounds.
 * @cssprop --ds-auro-hyperlink-hover-outline-color-inverse - Outline color of the link when you hover over it on dark backgrounds.
 * @cssprop --ds-auro-hyperlink-hover-border-color-default - Border color of the link when you hover over it on light backgrounds.
 * @cssprop --ds-auro-hyperlink-hover-border-color-inverse - Border color of the link when you hover over it on dark backgrounds.
 * @cssprop --ds-auro-hyperlink-nav-default-color-default - Text color of the navigation link in its default state on light backgrounds.
 * @cssprop --ds-auro-hyperlink-nav-default-color-inverse - Text color of the navigation link in its default state on dark backgrounds.
 * @cssprop --ds-auro-hyperlink-nav-default-container-color-default - Background color of the navigation link in its default state on light backgrounds.
 * @cssprop --ds-auro-hyperlink-nav-default-container-color-inverse - Background color of the navigation link in its default state on dark backgrounds.
 * @cssprop --ds-auro-hyperlink-nav-default-outline-color-default - Outline color of the navigation link in its default state on light backgrounds.
 * @cssprop --ds-auro-hyperlink-nav-default-outline-color-inverse - Outline color of the navigation link in its default state on dark backgrounds.
 * @cssprop --ds-auro-hyperlink-nav-default-border-color-default - Border color of the navigation link in its default state on light backgrounds.
 * @cssprop --ds-auro-hyperlink-nav-default-border-color-inverse - Border color of the navigation link in its default state on dark backgrounds.
 * @cssprop --ds-auro-hyperlink-nav-visited-color-default - Text color of the navigation link after it has been visited on light backgrounds.
 * @cssprop --ds-auro-hyperlink-nav-visited-color-inverse - Text color of the navigation link after it has been visited on dark backgrounds.
 * @cssprop --ds-auro-hyperlink-nav-visited-container-color-default - Background color of the navigation link after it has been visited on light backgrounds.
 * @cssprop --ds-auro-hyperlink-nav-visited-container-color-inverse - Background color of the navigation link after it has been visited on dark backgrounds.
 * @cssprop --ds-auro-hyperlink-nav-visited-outline-color-default - Outline color of the navigation link after it has been visited on light backgrounds.
 * @cssprop --ds-auro-hyperlink-nav-visited-outline-color-inverse - Outline color of the navigation link after it has been visited on dark backgrounds.
 * @cssprop --ds-auro-hyperlink-nav-visited-border-color-default - Border color of the navigation link after it has been visited on light backgrounds.
 * @cssprop --ds-auro-hyperlink-nav-visited-border-color-inverse - Border color of the navigation link after it has been visited on dark backgrounds.
 * @cssprop --ds-auro-hyperlink-nav-focus-color-default - Text color of the navigation link when it has keyboard focus on light backgrounds.
 * @cssprop --ds-auro-hyperlink-nav-focus-color-inverse - Text color of the navigation link when it has keyboard focus on dark backgrounds.
 * @cssprop --ds-auro-hyperlink-nav-focus-container-color-default - Background color of the navigation link when it has keyboard focus on light backgrounds.
 * @cssprop --ds-auro-hyperlink-nav-focus-container-color-inverse - Background color of the navigation link when it has keyboard focus on dark backgrounds.
 * @cssprop --ds-auro-hyperlink-nav-focus-outline-color-default - Outline color of the navigation link when it has keyboard focus on light backgrounds.
 * @cssprop --ds-auro-hyperlink-nav-focus-outline-color-inverse - Outline color of the navigation link when it has keyboard focus on dark backgrounds.
 * @cssprop --ds-auro-hyperlink-nav-focus-border-color-default - Border color of the navigation link when it has keyboard focus on light backgrounds.
 * @cssprop --ds-auro-hyperlink-nav-focus-border-color-inverse - Border color of the navigation link when it has keyboard focus on dark backgrounds.
 * @cssprop --ds-auro-hyperlink-nav-hover-color-default - Text color of the navigation link when you hover over it on light backgrounds.
 * @cssprop --ds-auro-hyperlink-nav-hover-color-inverse - Text color of the navigation link when you hover over it on dark backgrounds.
 * @cssprop --ds-auro-hyperlink-nav-hover-container-color-default - Background color of the navigation link when you hover over it on light backgrounds.
 * @cssprop --ds-auro-hyperlink-nav-hover-container-color-inverse - Background color of the navigation link when you hover over it on dark backgrounds.
 * @cssprop --ds-auro-hyperlink-nav-hover-outline-color-default - Outline color of the navigation link when you hover over it on light backgrounds.
 * @cssprop --ds-auro-hyperlink-nav-hover-outline-color-inverse - Outline color of the navigation link when you hover over it on dark backgrounds.
 * @cssprop --ds-auro-hyperlink-nav-hover-border-color-default - Border color of the navigation link when you hover over it on light backgrounds.
 * @cssprop --ds-auro-hyperlink-nav-hover-border-color-inverse - Border color of the navigation link when you hover over it on dark backgrounds.
 */

// build the component class
export class AuroHyperlink extends ComponentBase {
  constructor() {
    super();
    this._createRefs(); // eslint-disable-line

    const versioning = new AuroDependencyVersioning();

    /**
     * @private
     */
    this.iconTag = versioning.generateTag("auro-icon", iconVersion, AuroIcon);
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      ...ComponentBase.properties,
    };
  }

  static get styles() {
    return [styleCss, colorCss, tokensCss];
  }

  static get shadowRootOptions() {
    return {
      ...LitElement.shadowRootOptions,
      delegatesFocus: true,
    };
  }

  /**
   * Creates references to the internal elements.
   * @returns {void}
   * @private
   */
  _createRefs() {
    this.hyperlinkRef = createRef();
  }

  connectedCallback() {
    super.connectedCallback();
    this.runtimeUtils.handleComponentTagRename(this, "auro-hyperlink");
  }

  firstUpdated() {
    // Initialize the transportation of ARIA attributes to the target element and get the disconnect function for cleanup
    if (this.hyperlinkRef.value) {
      this.attributeWatcher = transportAllA11yAttributes({
        host: this,
        target: this.hyperlinkRef.value,
      });
    }
  }

  disconnectedCallback() {
    if (this.attributeWatcher) {
      this.attributeWatcher.cleanup();
      this.attributeWatcher = null;
    }
  }

  /**
   * Registers the element with the browser under a tag name. Use a custom name to run this version alongside another version of `auro-hyperlink` on the same page.
   * @param {string} [name="auro-hyperlink"] - The tag name to register the element under.
   *
   * @example
   * AuroHyperlink.register("custom-hyperlink") // makes the element available as <custom-hyperlink>
   *
   */
  static register(name = "auro-hyperlink") {
    RuntimeUtils.default.prototype.registerComponent(name, AuroHyperlink);
  }

  /**
   * Renders the standard link: an `<a>` when the link has a safe `href` or a `role`, or just the slotted content otherwise.
   * @returns {TemplateResult} The template for the standard link.
   * @private
   */
  renderLayoutDefault() {
    const classes = {
      hyperlink: this.safeUri || this.role,
      "hyperlink--nav": this.type === "nav",
      "hyperlink--ondark": this.appearance === "inverse" || this.ondark,
      "hyperlink--button": this.role,
      "hyperlink--secondary": this.variant === "secondary",
      "hyperlink--tertiary": this.variant === "tertiary",
    };

    return html`
    ${
      this.safeUri || this.role
        ? html`
    <a
      ${ref(this.hyperlinkRef)}
      part="link"
      class="${classMap(classes)}"
      href="${ifDefined(this.role ? undefined : this.safeUri)}"
      .rel="${ifDefined(this.target || this.rel ? this.getRelType(this.target, this.rel) : undefined)}"
      referrerpolicy="${ifDefined(this.referrerpolicy ? this.defaultReferrerPolicy : undefined)}"
      role="${ifDefined(this.role === "button" ? this.role : undefined)}"
      ?download="${this.download}"
      .target="${ifDefined(this.target ? this.target : undefined)}"
      tabindex="${ifDefined(this.role === "button" ? "0" : undefined)}"
    >
      <slot></slot>
      ${this.targetIcon(this.target)}
    </a>`
        : html`<slot></slot>`
    }
    `;
  }

  /**
   * Renders the `cta` layout: an internal button element that draws the link with button styling.
   * @returns {TemplateResult} The template for the button-style link.
   * @private
   */
  renderLayoutCTA() {
    return html`
      <auro-hyperlink-button
        ${ref(this.hyperlinkRef)}
        appearance="${this.ondark ? "inverse" : this.appearance}"
        ?fluid="${this.fluid}"
        variant="${ifDefined(this.variant || undefined)}"
        shape="${ifDefined(this.shape || undefined)}"
        size="${ifDefined(this.size || undefined)}"
        layout="${ifDefined(this.layout || undefined)}"
        buttonHref="${ifDefined(this.safeUri || undefined)}"
        buttonRel="${ifDefined(this.rel || undefined)}"
        buttonTarget="${ifDefined(this.target || undefined)}"
      >
        <slot></slot>
        ${this.targetIcon(this.target)}
      </auro-hyperlink-button>
    `;
  }

  /**
   * Chooses which layout to render based on `type`.
   *
   * @example
   * // Assuming this.type = 'cta'
   * this.getMarkup(); // Returns the result of renderLayoutCTA()
   *
   * @example
   * // Assuming this.type = 'nav' or is not set
   * this.getMarkup(); // Returns the result of renderLayoutDefault()
   *
   * @private
   * @returns {TemplateResult} The template for the chosen layout.
   */
  getMarkup() {
    switch (this.type) {
      case "cta":
        return this.renderLayoutCTA();
      default:
        return this.renderLayoutDefault();
    }
  }
}
