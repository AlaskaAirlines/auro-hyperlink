// Copyright (c) 2026 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { AuroButton } from "@aurodesignsystem/auro-button/class";

import * as RuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";

import styles from "./styles/hyperlink-button-style.scss";

/**
 * @internal
 */
export class AuroHyperlinkButton extends AuroButton {
  /**
   * Registers the element with the browser under a tag name.
   * @param {string} [name="auro-hyperlink-button"] - The tag name to register the element under.
   *
   * @example
   * AuroHyperlinkButton.register("custom-hyperlink-button") // makes the element available as <custom-hyperlink-button>
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
