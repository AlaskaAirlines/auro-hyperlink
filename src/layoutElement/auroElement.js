import { LitElement } from "lit";

export class AuroElement extends LitElement {
  static get properties() {
    return {
      /**
       * Defines whether the component should be light colored for use on dark backgrounds.
       * @type {'default' | 'inverse'}
       * @default "default"
       * @category ui
       */
      appearance: {
        type: String,
        reflect: true,
      },

      /**
       * Internal: selects the layout the component renders; not for direct use.
       * @private
       */
      layout: {
        type: String,
        attribute: "layout",
        reflect: true,
      },

      /**
       * Defines the shape of the button when using `type="cta"`.
       * @type {'rounded' | 'pill' | 'circle' | 'square'}
       * @default "rounded"
       * @relevantWhen type === "cta"
       * @category ui
       */
      shape: {
        type: String,
        attribute: "shape",
        reflect: true,
      },

      /**
       * Defines the size of the button when using `type="cta"`.
       * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl'}
       * @default "md"
       * @relevantWhen type === "cta"
       * @category ui
       */
      size: {
        type: String,
        attribute: "size",
        reflect: true,
      },
    };
  }
}
