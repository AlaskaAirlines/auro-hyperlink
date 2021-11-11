import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-hyperlink.js';

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

  it('auro-hyperlink is target _blank', async () => {
    const el = await fixture(html`
      <auro-hyperlink href="/auro" target="_blank">It's Auro!</auro-hyperlink>
    `);

    const anchor = el.shadowRoot.querySelector('a');

    expect(anchor).to.have.attribute('rel', 'noopener noreferrer');
  });

  it('auro-hyperlink is external target _blank', async () => {
    const el = await fixture(html`
      <auro-hyperlink href="https://www.apple.com" target="_blank">It's Auro!</auro-hyperlink>
    `);

    const anchor = el.shadowRoot.querySelector('a');

    expect(anchor).to.have.attribute('rel', 'noopener noreferrer');
  });

  it('auro-hyperlink is pre-defined rel', async () => {
    const el = await fixture(html`
      <auro-hyperlink href="/auro" rel="hyperlink">It's Auro!</auro-hyperlink>
    `);

    const anchor = el.shadowRoot.querySelector('a');

    expect(anchor).to.have.attribute('rel', 'hyperlink');
  });

  it('auro-hyperlink custom element is defined', async () => {
    const el = await !!customElements.get("auro-hyperlink");

    await expect(el).to.be.true;
  });

});
