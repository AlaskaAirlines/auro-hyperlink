import { AuroHyperlink } from './auro-hyperlink.js';

export class CustomHyperlink extends AuroHyperlink {
  //
}

if (!customElements.get("custom-hyperlink")) {
  customElements.define("custom-hyperlink", CustomHyperlink);
}
