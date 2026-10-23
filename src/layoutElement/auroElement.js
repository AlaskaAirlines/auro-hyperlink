import { LitElement } from "lit";

export class AuroElement extends LitElement {
  static get properties() {
    return {
      /**
       * Sets the color scheme to match the background behind the link. Use `default` on light backgrounds and `inverse` on dark backgrounds.
       * @type {'default' | 'inverse'}
       * @default "default"
       * @category ui
       */
      appearance: {
        type: String,
        reflect: true,
      },

      /**
       * Internal: passed to the inner button; not for direct use.
       * @private
       */
      layout: {
        type: String,
        attribute: "layout",
        reflect: true,
      },

      /**
       * Sets the shape of the button: `rounded` corners, a `pill` with fully rounded ends, a `circle`, or a `square`. Use `rounded` or `pill` for buttons with a text label, and `circle` or `square` for icon-only buttons.
       * @type {'rounded' | 'pill' | 'circle' | 'square'}
       * @category ui
       */
      shape: {
        type: String,
        attribute: "shape",
        reflect: true,
      },

      /**
       * Sets the size of the button, from `xs` (smallest) to `xl` (largest). At `xs` and `sm`, the new-window or external-link icon also shrinks to match.
       * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl'}
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
