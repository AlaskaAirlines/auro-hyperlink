// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { html } from "lit-element";
import { ifDefined } from 'lit-html/directives/if-defined.js';
import ComponentBase from './component-base';
import hyperlinkProperties from './tokens/ods-componentShapeProperties-css.js';
import buttonProperties from '@alaskaairux/ods-button/dist/tokens/componentProperties-css.js';
import iconProperties from '@alaskaairux/orion-icons/dist/tokens/CSSTokenProperties-css.js';
import stepout from '@alaskaairux/orion-icons/dist/icons/step-out_es6.js';

// import the processed CSS file into the scope of the component
import styleCss from "./ods-style-css.js";

// build the component class
class OdsHyperlink extends ComponentBase {

  constructor() {
    super();

    this.dom = new DOMParser().parseFromString(stepout.svg, 'text/html');
    this.svg = this.dom.body.firstChild;
  }

  // function to define props used within the scope of thie component
  static get properties() {
    return {
      ...super.properties,
      cta:              { type: Boolean },
      darktheme:        { type: Boolean },
      inline:           { type: Boolean },
      tabisactive:      { type: Boolean },
      buttontype:       { type: String },
    };
  }

  getStyles() {
    if (this.cta && this.buttontype === 'secondary') {
      return 'hyperlink hyperlink--cta hyperlink--secondaryCta';
    }

    if (this.cta) {
      return 'hyperlink hyperlink--cta';
    } else if (this.darktheme) {
      return 'hyperlink hyperlink--darktheme';
    } else if (this.inline) {
      return 'hyperlink hyperlink--inline';
    }

    if (this.role === 'button' || this.role === 'tab') {
      return `hyperlink--${this.role}`;
    } else if (this.role === undefined) {
      return 'hyperlink';
    }

    return undefined;
  }

  // Adds styles for light DOM element; styles not defined in base class
  getButtonStyles() {
    return html`
      ${hyperlinkProperties}
      ${buttonProperties}
      ${iconProperties}
      ${styleCss}
    `;
  }

  getMarkup() {
    return html`
      <a
        aria-pressed="${ifDefined(this.role === 'button' ? this.ariaPressedState(this.ariapressed) : undefined)}"
        aria-selected="${ifDefined(this.tabisactive === 'true' ? this.tabisactive : undefined)}"
        ?download="${this.download}"
        role="${ifDefined(this.role === 'button' || this.role === 'tab' ? this.role : undefined)}"
        rel="${ifDefined(this.target || this.rel ? this.getReltype(this.target, this.rel) : undefined)}"
        class="${this.getStyles()} ${this.getTabState(this.tabisactive)}"
        href="${ifDefined(this.href ? this.href : undefined)}"
        target="${ifDefined(this.target ? this.target : undefined)}"
        tabindex="${ifDefined(this.role === 'button' || this.role === 'tab' ? '0' : undefined)}"
      ><slot></slot>${this.targetIcon(this.target)}</a>
    `;
  }
}

// define the name of the custom component
if (!customElements.get("ods-hyperlink")) {
  customElements.define("ods-hyperlink", OdsHyperlink);
}
