import { AuroHyperlink } from './auro-hyperlink.js';

export function registerComponent(name = 'custom-hyperlink') {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroHyperlink {});
  }
}

registerComponent('auro-hyperlink');
