// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html } from "lit-element";
import { ifDefined } from 'lit-html/directives/if-defined.js';
// Import touch detection lib
import 'focus-visible/dist/focus-visible.min.js';
import hyperlinkProperties from './tokens/componentShapeProperties-css.js';
import buttonProperties from '@alaskaairux/ods-button/dist/tokens/componentProperties-css.js';
import iconProperties from '@alaskaairux/orion-icons/dist/tokens/CSSTokenProperties-css.js';

// import the processed CSS file into the scope of the component
import styleCss from "./style-css.js";

import stepout from '@alaskaairux/orion-icons/dist/icons/step-out_es6.js';

// build the component class
class OdsHyperlink extends LitElement {
  constructor() {
    super();
    this.ariapressed = 'false';
    this.tabisactive = 'false';

    /*
      If the component requires a touch detection,
      please use this function to determine if a user is
      activelly touching a device, versus detecting if
      the device is touych enables or a handheld device.

      Also uncomment the touch detection lib above
    */
    this.addEventListener('touchstart', function() {
      this.classList.add('is-touching');
    });

    this.dom = new DOMParser().parseFromString(stepout.svg, 'text/html');
    this.svg = this.dom.body.firstChild;
  }

  // function to define props used within the scope of thie component
  static get properties() {
    return {
      cta:              { type: Boolean },  // Style prop
      download:         { type: Boolean },  // Style prop
      darktheme:        { type: Boolean },  // Style prop
      inline:           { type: Boolean },  // Style prop
      tabisactive:      { type: Boolean },  // Style prop
      buttontype:       { type: String },   // Style prop
      href:             { type: String },
      rel:              { type: String },
      role:             { type: String },   // Style prop
      target:           { type: String }
    };
  }

  getStyles() {
    if (this.cta && this.buttontype === 'secondary') {
      return 'hyperlink hyperlink--cta hyperlink--secondaryCta'
    }

    if (this.cta) {
      return 'hyperlink hyperlink--cta'
    }

    if (this.darktheme) {
      return 'hyperlink hyperlink--darktheme'
    }

    if (this.inline) {
      return 'hyperlink hyperlink--inline'
    }

    if (this.role === 'button') {
      return 'hyperlink--button'
    } else if (this.role === 'tab') {
      return 'hyperlink--tab'
    } else {
      return 'hyperlink'
    }
  }

  getTabState(tabisactive) {
    return tabisactive === true ? "is-active" : ''
  }

  getReltype(target, rel) {
    if(target === '_blank') {
      return 'noopener noreferrer'
    } else if (rel) {
      return rel
    }
  }

  targetIcon(target){
    if(target === '_blank') {
      return this.svg;
    }
  }

  ariaPressedState(ariapressed) {
    const ariaToggle = function (event) {
      const ariaPressedNode = this.shadowRoot.querySelector('[aria-pressed]');

      if(event.type == 'mousedown') {
        ariaPressedNode.setAttribute("aria-pressed", 'true')
      }

      if(event.type == 'mouseup') {
        ariaPressedNode.setAttribute("aria-pressed", 'false')
      }

      if(event.type == 'keydown' && event.keyCode === 13 || event.keyCode === 32) {
        ariaPressedNode.setAttribute("aria-pressed", 'true')
      }

      if(event.type == 'keyup' && event.keyCode === 13 || event.keyCode === 32) {
        ariaPressedNode.setAttribute("aria-pressed", 'false')
      }
    };

    // Add our event listeners
    this.addEventListener('mousedown', ariaToggle, false);
    this.addEventListener('keydown', ariaToggle, false);
    this.addEventListener('mouseup', ariaToggle, false);
    this.addEventListener('keyup', ariaToggle, false);

    return ariapressed
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      ${hyperlinkProperties}
      ${buttonProperties}
      ${iconProperties}
      ${styleCss}

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
if(!customElements.get("ods-hyperlink")) {
  customElements.define("ods-hyperlink", OdsHyperlink);
}
