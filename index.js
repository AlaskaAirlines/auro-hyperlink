import { AuroHyperlink } from './src/auro-hyperlink.mjs';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
export function registerComponent(name = 'custom-hyperlink') {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroHyperlink {});
  }
}

registerComponent('auro-hyperlink');
