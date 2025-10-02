import { LitElement } from "lit";

export class AuroElement extends LitElement {
  static get properties() {
    return {
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
