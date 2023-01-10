import { fixture, html, expect } from '@open-wc/testing';
import './../src/define.js';

describe('auro-hyperlink', () => {

  it('auro-hyperlink is accessible', async () => {
    const el = await fixture(html`
      <auro-hyperlink href="alaska.com">Alaska air</auro-hyperlink>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-hyperlink is button', async () => {
    const el = await fixture(html`
      <auro-hyperlink href="alaska.com" onClick={this.sayHello} role="button">Alaska air</auro-hyperlink>
    `);

    const anchor = el.shadowRoot.querySelector('a');

    expect(anchor).to.have.attribute('role', 'button');
    expect(anchor).to.have.attribute('tabindex', '0');
    expect(anchor).to.have.attribute('aria-pressed', 'false');
    expect(anchor).to.have.class('hyperlink--button');
    expect(anchor).not.to.have.attribute('href');
  });

  it('auro-hyperlink is mailto', async () => {
    const el = await fixture(html`
      <auro-hyperlink href="mailto:someone@alaskaair.com?cc=someone-else@alaskaair.com&bcc=someone-else-else@alaskaiar.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">email link</auro-hyperlink>
    `);

    const anchor = el.shadowRoot.querySelector('a');

    expect(anchor).to.have.attribute('href', 'mailto:someone@alaskaair.com?cc=someone-else@alaskaair.com&bcc=someone-else-else@alaskaiar.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email');
  });

  it('auro-hyperlink is tel', async () => {
    const el = await fixture(html`
      <auro-hyperlink href="tel:+18002527522">telephone link</auro-hyperlink>
    `);

    const anchor = el.shadowRoot.querySelector('a');

    expect(anchor).to.have.attribute('href', 'tel:+18002527522');
  });

  it('auro-hyperlink is sms', async () => {
    const el = await fixture(html`
      <auro-hyperlink href="sms:+18002527522">sms link</auro-hyperlink>
    `);

    const anchor = el.shadowRoot.querySelector('a');

    expect(anchor).to.have.attribute('href', 'sms:+18002527522');
  });

  it('auro-hyperlink is relative', async () => {
    const el = await fixture(html`
      <auro-hyperlink href="/auro" relative>It's Auro!</auro-hyperlink>
    `);

    const anchor = el.shadowRoot.querySelector('a');

    expect(anchor).to.have.attribute('href', '/auro');
    expect(anchor).not.to.have.attribute('href', 'https://www.alaskaair.com/auro');
  });

  it('auro-hyperlink is javascript', async () => {
    const el = await fixture(html`
      <auro-hyperlink href="javascript:;">It's JavaScript!</auro-hyperlink>
    `);

    const anchor = el.shadowRoot.querySelector('a');

    expect(el).not.to.have.shadowDom;
  });

  it('auro-hyperlink has no shadow DOM', async () => {
    const el = await fixture(html`
      <auro-hyperlink>It's Auro!</auro-hyperlink>
    `);

    expect(el).not.to.have.shadowDom;
  });

  it('auro-hyperlink has no rel', async () => {
    const el = await fixture(html`
      <auro-hyperlink href="https://www.alaskaair.com" target="_blank">It's Auro!</auro-hyperlink>
    `);

    const anchor = el.shadowRoot.querySelector('a');

    expect(anchor).not.to.have.attribute('rel');
    expect(anchor).not.to.have.attribute('referrerpolicy');
  });

  it('auro-hyperlink rel = noopener noreferrer', async () => {
    const el = await fixture(html`
      <auro-hyperlink href="https://www.apple.com" target="_blank">It's Auro!</auro-hyperlink>
    `);

    const anchor = el.shadowRoot.querySelector('a');

    expect(anchor).to.have.attribute('rel', 'noopener noreferrer');
    expect(anchor).not.to.have.attribute('referrerpolicy');
  });

  it('auro-hyperlink has custom rel', async () => {
    const el = await fixture(html`
      <auro-hyperlink href="/auro" rel="hyperlink">It's Auro!</auro-hyperlink>
    `);

    const anchor = el.shadowRoot.querySelector('a');

    expect(anchor).to.have.attribute('rel', 'hyperlink');
    expect(anchor).not.to.have.attribute('referrerpolicy');
  });

  it('auro-hyperlink rel = external && default referrerpolicy', async () => {
    const el = await fixture(html`
      <auro-hyperlink href="https://www.apple.com" referrerpolicy target="_blank">It's Apple!</auro-hyperlink>
    `);

    const anchor = el.shadowRoot.querySelector('a');

    expect(anchor).to.have.attribute('rel', 'external');
    expect(anchor).to.have.attribute('referrerpolicy', 'strict-origin-when-cross-origin');
  });

  it('allows programmatic focus', async () => {
    const el = await fixture(html`
      <auro-hyperlink href="https://www.apple.com" referrerpolicy target="_blank">It's Apple!</auro-hyperlink>
    `);
    const shadowLink = el.shadowRoot.querySelector('a');

    el.focus();

    expect(document.activeElement).to.equal(el);
    expect(el.shadowRoot.activeElement).to.equal(shadowLink);
  });

  it('auro-hyperlink custom element is defined', async () => {
    const el = await !!customElements.get("auro-hyperlink");

    await expect(el).to.be.true;
  });

});
