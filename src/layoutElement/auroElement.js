import { LitElement } from "lit";

export class AuroElement extends LitElement {
  static get properties() {
    return {
      /**
       * Defines whether the component should be light colored for use on dark backgrounds.
       * @type {'default' | 'inverse'}
       * @default 'default'
       */
      appearance: {
        type: String,
        reflect: true,
      },

      /**
       * Defines the language of an element.
       * @default 'default'
       */
      layout: {
        type: String,
        attribute: "layout",
        reflect: true,
      },

      /**
       * Defines the shape of the button when using `type="cta"`.
       * @type {'rounded' | 'pill' | 'circle' | 'square'}
       */
      shape: {
        type: String,
        attribute: "shape",
        reflect: true,
      },

      /**
       * Defines the size of the button when using `type="cta"`.
       * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl'}
       */
      size: {
        type: String,
        attribute: "size",
        reflect: true,
      },
    };
  }
}
