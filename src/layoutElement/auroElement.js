import { LitElement } from "lit";

export class AuroElement extends LitElement {
  static get properties() {
    return {
      /**
       * Defines whether the component should be light colored for use on dark backgrounds.
       * @property {'default', 'inverse'}
       * @default 'default'
       */
      appearance: {
        type: String,
        reflect: true,
      },

      /**
       * Defines the language of an element.
       * @default {'default'}
       */
      layout: {
        type: String,
        attribute: "layout",
        reflect: true,
      },

      shape: {
        type: String,
        attribute: "shape",
        reflect: true,
      },

      size: {
        type: String,
        attribute: "size",
        reflect: true,
      },

      onDark: {
        type: Boolean,
        attribute: "ondark",
        reflect: true,
      },
    };
  }
}
