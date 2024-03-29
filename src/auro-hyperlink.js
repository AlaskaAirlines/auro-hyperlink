// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { html } from 'lit/html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import ComponentBase from './component-base.mjs';

// import the processed CSS file into the scope of the component
import styleCss from "./style-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * `<auro-hyperlink>` is a wrapper components for an HTML `<a>` element containing styling and behavior.
 *
 * @attr {Boolean} download - Specifies that the target will be downloaded when a user clicks on the hyperlink.
 * @attr {Boolean} fluid - Modifier for `type="cta"` fluid-width UI option.
 * @attr {Boolean} ondark - Specifies dark theme use of hyperlink.
 * @attr {Boolean} relative - Add flag to disable auto URL re-write feature.
 * @attr {Boolean} secondary - Modifier for `type="cta"` secondary UI option.
 * @attr {Boolean} small - Modifier for `type="cta"` small UI option.
 * @attr {Boolean} referrerpolicy - Sets `strict-origin-when-cross-origin` to send a full URL when performing a same-origin request, only sends the origin when the protocol security level stays the same (HTTPS→HTTPS), and sends no header to a less secure destination (HTTPS→HTTP).
 * @attr {String} rel - Specifies the relationship between the current document and the linked document.
 * @attr {String} role - Use for aria roles; currently supports `button` for extended experiences.
 * @attr {String} href - Specifies the URL of the page link.
 * @attr {String} target - Specifies where to open the linked document.
 * @attr {String} type - Enumerable attribute; [`nav`, `cta`]
 * @csspart link - Apply CSS to the `a` element
 */

// build the component class
export class AuroHyperlink extends ComponentBase {
  // function to define props used within the scope of this component
  static get properties() {
    return {
      ...super.properties
    };
  }

  static get styles() {
    return [styleCss];
  }

  /**
   * @private
   * @returns {object} Classes object.
   */
  getMarkup() {
    const classes = {
      'hyperlink': this.safeUri || this.role,
      'hyperlink--nav': this.type === 'nav',
      'hyperlink--ondark': this.ondark,
      'hyperlink--button': this.role,
      'hyperlink--cta': this.type === 'cta',
      'hyperlink--secondary': this.secondary
    };

    return html`
      ${this.safeUri || this.role ? html`
      <a
        part="link"
        aria-pressed="${ifDefined(this.role === 'button' ? this.ariaPressedState(this.ariapressed) : undefined)}"
        class="${classMap(classes)}"
        href="${ifDefined(this.role ? undefined : this.safeUri)}"
        rel="${ifDefined(this.target || this.rel ? this.getReltype(this.target, this.rel) : undefined)}"
        referrerpolicy="${ifDefined(this.referrerpolicy ? this.defaultreferrerpolicy : undefined)}"
        role="${ifDefined(this.role === 'button' ? this.role : undefined)}"
        ?download="${this.download}"
        target="${ifDefined(this.target && this.includesDomain ? this.target : undefined)}"
        tabindex="${ifDefined(this.role === 'button' ? '0' : undefined)}"
      ><slot></slot>${this.targetIcon(this.target, this.relative)}</a>`
      : html`<slot></slot>`}
    `;
  }
}

// default internal definition
if (!customElements.get("auro-hyperlink")) {
  customElements.define("auro-hyperlink", AuroHyperlink);
}
