import { fixture, html, expect } from '@open-wc/testing';
import { useAccessibleIt } from "@aurodesignsystem/auro-library/scripts/test-plugin/iterateWithA11Check.mjs";

import '../index.js';

useAccessibleIt();

describe('auro-hyperlink', () => {

  it('auro-hyperlink is relative', async () => {
    const el = await fixture(html`
      <auro-hyperlink href="/auro" relative>It's Auro!</auro-hyperlink>
    `);

    const anchor = el.shadowRoot.querySelector('a');

    expect(anchor).to.have.attribute('href', '/auro');
    expect(anchor).not.to.have.attribute('href', 'https://www.alaskaair.com/auro');
  });

  // eval that JS in the href attr is ignored
  it('auro-hyperlink is javascript', async () => {
    const el = await fixture(html`
      <auro-hyperlink href="javascript:;">It's JavaScript!</auro-hyperlink>
    `);

    const anchor = el.shadowRoot.querySelector('a');

    expect(el).not.to.have.shadowDom;
  });

  // eval that data in the href attr is ignored
  it('auro-hyperlink is data', async () => {
    const el = await fixture(html`
      <auro-hyperlink href="data:text/plain;charset=utf-8,Hello%20World!">It's data!</auro-hyperlink>
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

  it('auro-hyperlink rel = noOpener noReferrer', async () => {
    const el = await fixture(html`
      <auro-hyperlink href="https://www.apple.com" target="_blank">It's Auro!</auro-hyperlink>
    `);

    const anchor = el.shadowRoot.querySelector('a');

    expect(anchor).to.have.attribute('rel', 'noOpener noReferrer');
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

  it('auro-hyperlink custom element is defined', async () => {
    const el = await !!customElements.get("auro-hyperlink");

    await expect(el).to.be.true;
  });

});


describe('safeUrl function', () => {
  let component;

  beforeEach(async () => {
    component = await fixture('<auro-hyperlink></auro-hyperlink>');
  });

  it('returns undefined when href is undefined', () => {
    const result = component.safeUrl(undefined, false);
    expect(result).to.be.undefined;
  });

  it('returns href when protocol is tel:', async () => {
    const result = component.safeUrl('tel:1234567890', false);
    expect(result).to.equal('tel:1234567890');
  });

  it('returns href when protocol is sms:', async () => {
    const result = component.safeUrl('sms:1234567890', false);
    expect(result).to.equal('sms:1234567890');
  });

  it('returns href when protocol is mailto:', async () => {
    const result = component.safeUrl('mailto:example@example.com', false);
    expect(result).to.equal('mailto:example@example.com');
  });

  it('returns href when protocol is https:', async () => {
    const result = component.safeUrl('https://www.example.com', false);
    expect(result).to.equal('https://www.example.com/');
  });

  it('returns href with https protocol when relative is false', async () => {
    const result = component.safeUrl('http://www.example.com', false);
    expect(result).to.equal('https://www.example.com/');
  });

  it('returns href when relative is true', async () => {
    const result = component.safeUrl('/example', true);
    expect(result).to.equal('/example');
  });

  it('returns undefined when href is undefined and relative is true', () => {
    const result = component.safeUrl(undefined, true);
    expect(result).to.be.undefined;
  });
});
