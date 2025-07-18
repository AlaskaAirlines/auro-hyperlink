// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------
import { LitElement } from "lit";
import { html } from 'lit/static-html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import ComponentBase from './component-base.mjs';

import { AuroDependencyVersioning } from '@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs';
import * as RuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

import { AuroIcon } from '@aurodesignsystem/auro-icon/src/auro-icon.js';
import iconVersion from './iconVersion.js';

import "./auro-hyperlink-button.js";

// import the processed CSS file into the scope of the component
import styleCss from "./styles/style-css.js";
import colorCss from "./styles/color-css.js";
import tokensCss from "./styles/tokens-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * `<auro-hyperlink>` is a component that wraps an HTML `<a>` element, providing additional styling and behavior.
 *
 * @csspart link - Allows styling to be applied to the `a` element.
 * @csspart targetIcon - Allows styling to be applied to the icon that appears next to the hyperlink.
 */

// build the component class
export class AuroHyperlink extends ComponentBase {
  constructor() {
    super();

    const versioning = new AuroDependencyVersioning();

    /**
     * @private
     */
    this.iconTag = versioning.generateTag('auro-icon', iconVersion, AuroIcon);
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      ...super.properties
    };
  }

  static get styles() {
    return [
      styleCss,
      colorCss,
      tokensCss
    ];
  }

  static get shadowRootOptions() {
    return {
      ...LitElement.shadowRootOptions,
      delegatesFocus: true,
    };
  }


  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-hyperlink"] - The name of element that you want to register to.
   *
   * @example
   * AuroHyperlink.register("custom-hyperlink") // this will register this element to <custom-hyperlink/>
   *
   */
  static register(name = "auro-hyperlink") {
    RuntimeUtils.default.prototype.registerComponent(name, AuroHyperlink);
  }

  /**
   * Renders the default layout for the hyperlink.
   * @returns {TemplateResult}
   * @private
   */
  renderLayoutDefault() {

    const classes = {
      'hyperlink': this.safeUri || this.role,
      'body-default': (this.safeUri || this.role) && !this.small,
      'hyperlink--nav': this.type === 'nav',
      'hyperlink--ondark': this.ondark,
      'hyperlink--button': this.role,
      'body-sm' : this.small,
      'hyperlink--secondary': this.secondary,
      'hyperlink--tertiary': this.tertiary
    };

    return html`
    ${this.safeUri || this.role ? html`
    <a
      part="link"
      aria-pressed="${ifDefined(this.role === 'button' ? this.ariaPressedState(this.ariapressed) : undefined)}"
      class="${classMap(classes)}"
      href="${ifDefined(this.role ? undefined : this.safeUri)}"
      rel="${ifDefined(this.target || this.rel ? this.getRelType(this.target, this.rel) : undefined)}"
      referrerpolicy="${ifDefined(this.referrerpolicy ? this.defaultReferrerPolicy : undefined)}"
      role="${ifDefined(this.role === 'button' ? this.role : undefined)}"
      ?download="${this.download}"
      target="${ifDefined(this.target && this.includesDomain ? this.target : undefined)}"
      tabindex="${ifDefined(this.role === 'button' ? '0' : undefined)}"
    >
      <slot></slot>
      ${this.targetIcon(this.target, this.relative)}
    </a>`
    : html`<slot></slot>`}
    `;
  }

  /**
   * Renders the cta layout for the hyperlink.
   * @returns {TemplateResult}
   * @private
   */
  renderLayoutCTA() {
    return html`
      <auro-hyperlink-button 
        ?ondark="${this.ondark}"
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
      </auro-hyperlink-button>
    `;
  }

  /**
   * Generates an object containing CSS classes based on the properties of the component.
   *
   * @example
   * // Assuming this.safeUri = 'http://example.com', this.role = 'button', this.type = 'cta'
   * this.getMarkup(); // Returns { 'hyperlink': true, 'hyperlink--nav': false, 'hyperlink--ondark': false, 'hyperlink--button': true, 'hyperlink--cta': true, 'hyperlink--secondary': false }
   *
   * @example
   * // Assuming this.safeUri = '', this.role = '', this.type = 'nav', this.ondark = true, this.secondary = true
   * this.getMarkup(); // Returns { 'hyperlink': false, 'hyperlink--nav': true, 'hyperlink--ondark': true, 'hyperlink--button': false, 'hyperlink--cta': false, 'hyperlink--secondary': true }
   *
   * @private
   * @returns {object} An object containing CSS classes.
   */
  getMarkup() {
    switch (this.type) {
      case 'cta':
        return this.renderLayoutCTA();
      default:
        return this.renderLayoutDefault();
    }
  }
}
