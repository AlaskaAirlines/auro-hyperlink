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
 * It wraps a standard HTML `<a>` element and adds brand-aware styling, safer handling of
 * URLs, and a few accessibility improvements.
 *
 * **Key capabilities**
 * - **Link styles**: a standard inline text link by default, `type="nav"` for navigation
 *   links, and `type="cta"` for a link that looks like an `<auro-button>`.
 * - **Safer URLs**: `http` links are upgraded to `https`, and `javascript:`, `data:`, and
 *   `vbscript:` links are dropped so they can't run code.
 * - **External links**: `target="_blank"` adds a new-window or external-link icon, and sets
 *   a safe `rel` automatically for links that leave the site.
 * - **Light & dark backgrounds**: `appearance="inverse"` switches to colors designed for
 *   dark backgrounds.
 * - **Button look**: `role="button"` gives the link button behavior for actions such as
 *   submitting a form.
 *
 * **Example**
 * ```html
 * <auro-hyperlink href="/trips">View your trips</auro-hyperlink>
 * ```
 *
 * @summary Accessible link for navigating to a page or file, with safe URL handling and optional button styling.
 * @customElement auro-hyperlink
 *
 * @forcePrivate {'layout'}
 *
 * "Role" property needs to stay in this jsdocs block to avoid conflicts with testing framework.
 * @property {string} role - Gives the link button behavior when set to `button`. The link then takes a keyboard tab stop and no longer navigates to `href`, so handle the click yourself. Other values are not supported. Ignored when `type="cta"`.
 *
 * @slot - The link's visible content: text, an icon, or both.
 * @csspart link - The inner `<a>` element. Not available when `type="cta"`, where the link is drawn by an internal button instead.
 * @csspart targetIcon - The new-window or external-link icon shown after the content when `target="_blank"`.
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
   * Create usable refs to internal elements
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
   * Renders the standard link: an `<a>` when there is a safe `href` or a `role`, or just the slotted content when there isn't.
   * @returns {TemplateResult}
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
   * @returns {TemplateResult}
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
   * @returns {TemplateResult} - The template for the chosen layout.
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
