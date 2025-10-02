// Copyright (c) 2022 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { AuroButton } from "@aurodesignsystem/auro-button/src/auro-button.js";

import * as RuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";

import styles from "./styles/hyperlink-button-style-css.js";

// build the component class
export class AuroHyperlinkButton extends AuroButton {
  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-hyperlink-button"] - The name of element that you want to register to.
   *
   * @example
   * AuroHyperlinkButton.register("custom-hyperlink-button") // this will register this element to <custom-hyperlink-button/>
   *
   */
  static register(name = "auro-hyperlink-button") {
    RuntimeUtils.default.prototype.registerComponent(name, AuroHyperlinkButton);
  }

  static get styles() {
    return [...AuroButton.styles, styles];
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-hyperlink-button")) {
  customElements.define("auro-hyperlink-button", AuroHyperlinkButton);
}
