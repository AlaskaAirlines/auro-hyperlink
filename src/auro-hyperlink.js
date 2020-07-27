// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { html } from "lit-element";
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { classMap } from 'lit-html/directives/class-map';
import ComponentBase from './component-base';
import externallink from '@alaskaairux/orion-icons/dist/icons/interface/external-link-sm_es6.js';

// import the processed CSS file into the scope of the component
import styleCss from "./style-css.js";

// build the component class
class AuroHyperlink extends ComponentBase {

  constructor() {
    super();

    this.dom = new DOMParser().parseFromString(externallink.svg, 'text/html');
    this.svg = this.dom.body.firstChild;
    this.safeUri = '';
  }

  // function to define props used within the scope of thie component
  static get properties() {
    return {
      ...super.properties
    };
  }

  // Adds styles for light DOM element; styles not defined in base class
  getButtonStyles() {
    return html`
      ${styleCss}
    `;
  }

  getMarkup() {
    this.safeUri = this.safeUrl(this.href, this.relative);

    const classes = {
      'hyperlink': this.safeUri || this.role,
      'hyperlink--nav': this.nav,
      'hyperlink--ondark': this.ondark,
      'hyperlink--button': this.role,
      'hyperlink--cta': this.cta,
      'hyperlink--secondary': this.secondary
    };

    return html`
      ${this.safeUri || this.role ? html`
      <a
        aria-pressed="${ifDefined(this.role === 'button' ? this.ariaPressedState(this.ariapressed) : undefined)}"
        class="${classMap(classes)}"
        href="${ifDefined(this.role ? undefined : this.safeUri)}"
        rel="${ifDefined(this.target || this.rel ? this.getReltype(this.target, this.rel) : undefined)}"
        role="${ifDefined(this.role === 'button' ? this.role : undefined)}"
        ?download="${this.download}"
        target="${ifDefined(this.target ? this.target : undefined)}"
        tabindex="${ifDefined(this.role === 'button' ? '0' : undefined)}"
      ><slot></slot>${this.targetIcon(this.target, this.relative)}</a>`
      : html`<slot></slot>`}
    `;
  }
}

// define the name of the custom component
if (!customElements.get("auro-hyperlink")) {
  customElements.define("auro-hyperlink", AuroHyperlink);
}
