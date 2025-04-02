
import { AuroHyperlink } from '../../src/auro-hyperlink.js';

/**
 * `<auro-hyperlink>` is a component that wraps an HTML `<a>` element, providing additional styling and behavior.
 */
class AuroHyperlinkWCA extends AuroHyperlink {}

if (!customElements.get("auro-hyperlink")) {
  customElements.define("auro-hyperlink", AuroHyperlinkWCA);
}
