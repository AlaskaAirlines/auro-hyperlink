import { useAccessibleIt } from "@aurodesignsystem/auro-library/scripts/test-plugin/iterateWithA11Check.mjs";
import { expect, fixture, html } from "@open-wc/testing";

import "../src/registered";

useAccessibleIt();

describe("auro-hyperlink", () => {
  it("auro-hyperlink is button", async () => {
    const el = await fixture(html`
      <auro-hyperlink href="alaska.com" role="button">Alaska air</auro-hyperlink>
    `);

    const anchor = el.shadowRoot.querySelector("a");

    expect(anchor).to.have.attribute("role", "button");
    expect(anchor).to.have.attribute("tabindex", "0");
    expect(anchor).to.have.class("hyperlink--button");
    expect(anchor).not.to.have.attribute("href");
  });

  it("auro-hyperlink href is relative URL", async () => {
    const el = await fixture(html`
      <auro-hyperlink href="/auro">It's Auro!</auro-hyperlink>
    `);

    const anchor = el.shadowRoot.querySelector("a");
    const regex = /^http:\/\/localhost:\d+\/auro$/;
    const match = regex.test(anchor.href);

    expect(match).to.be.true;
  });

  it("auro-hyperlink href is absolute URL", async () => {
    const el = await fixture(html`
      <auro-hyperlink href="https://alaskaair.com/auro">It's Auro!</auro-hyperlink>
    `);

    const anchor = el.shadowRoot.querySelector("a");

    expect(anchor).to.have.attribute("href", "https://alaskaair.com/auro");
  });

  // eval that JS in the href attr is ignored
  it("auro-hyperlink is javascript", async () => {
    const el = await fixture(html`
      <auro-hyperlink href="javascript:;">It's JavaScript!</auro-hyperlink>
    `);

    const _anchor = el.shadowRoot.querySelector("a");

    expect(el).not.to.have.shadowDom;
  });

  // eval that data in the href attr is ignored
  it("auro-hyperlink is data", async () => {
    const el = await fixture(html`
      <auro-hyperlink href="data:text/plain;charset=utf-8,Hello%20World!">It's data!</auro-hyperlink>
    `);

    const _anchor = el.shadowRoot.querySelector("a");

    expect(el).not.to.have.shadowDom;
  });

  it("auro-hyperlink has no shadow DOM", async () => {
    const el = await fixture(html`
      <auro-hyperlink>It's Auro!</auro-hyperlink>
    `);

    expect(el).not.to.have.shadowDom;
  });

  it("auro-hyperlink has no rel", async () => {
    const el = await fixture(html`
      <auro-hyperlink href="http://localhost:8000" target="_blank">It's Auro!</auro-hyperlink>
    `);

    const anchor = el.shadowRoot.querySelector("a");

    expect(anchor).not.to.have.attribute("rel");
    expect(anchor).not.to.have.attribute("referrerpolicy");
  });

  it("auro-hyperlink rel = noOpener noReferrer", async () => {
    const el = await fixture(html`
      <auro-hyperlink href="https://www.apple.com" target="_blank">It's Auro!</auro-hyperlink>
    `);

    const anchor = el.shadowRoot.querySelector("a");

    expect(anchor).to.have.attribute("rel", "noOpener noReferrer");
    expect(anchor).not.to.have.attribute("referrerpolicy");
  });

  it("auro-hyperlink has custom rel", async () => {
    const el = await fixture(html`
      <auro-hyperlink href="/auro" rel="hyperlink">It's Auro!</auro-hyperlink>
    `);

    const anchor = el.shadowRoot.querySelector("a");

    expect(anchor).to.have.attribute("rel", "hyperlink");
    expect(anchor).not.to.have.attribute("referrerpolicy");
  });

  it("auro-hyperlink rel = external && default referrerpolicy", async () => {
    const el = await fixture(html`
      <auro-hyperlink href="https://www.apple.com" referrerpolicy target="_blank">It's Apple!</auro-hyperlink>
    `);

    const anchor = el.shadowRoot.querySelector("a");

    expect(anchor).to.have.attribute("rel", "external");
    expect(anchor).to.have.attribute(
      "referrerpolicy",
      "strict-origin-when-cross-origin",
    );
  });

  it("auro-hyperlink custom element is defined", async () => {
    const el = await !!customElements.get("auro-hyperlink");

    await expect(el).to.be.true;
  });

  // Icon spacing is owned by the flex container's gap, never a margin on the
  // icon itself. A collapsed whitespace text node (the historical bug) would
  // add several extra pixels on top of the gap, so the measured space between
  // the text and the icon must match the container gap exactly.
  ["nav", "default"].forEach((type) => {
    it(`auro-hyperlink ${type} target icon spacing comes only from the container gap`, async () => {
      const el = await fixture(html`
        <auro-hyperlink href="https://www.alaskaair.com" target="_blank" type="${type}">Auro hyperlink spec</auro-hyperlink>
      `);
      await el.updateComplete;

      const anchor = el.shadowRoot.querySelector("a");
      const icon = anchor.querySelector('[part="targetIcon"]');
      await icon.updateComplete;

      const textNode = anchor
        .querySelector("slot")
        .assignedNodes()
        .find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
      const range = document.createRange();
      range.selectNodeContents(textNode);

      const textRight = range.getBoundingClientRect().right;
      const iconLeft = icon.getBoundingClientRect().left;
      const containerGap = parseFloat(getComputedStyle(anchor).columnGap);

      expect(parseFloat(getComputedStyle(icon).marginLeft)).to.equal(0);
      expect(iconLeft - textRight).to.be.closeTo(containerGap, 1);
    });
  });

  it("auro-hyperlink CTA target icon uses the same 2px gap as the other link types", async () => {
    const inline = await fixture(html`
      <auro-hyperlink href="https://www.alaskaair.com" target="_blank">Auro hyperlink spec</auro-hyperlink>
    `);
    await inline.updateComplete;
    const expectedGap = parseFloat(getComputedStyle(inline.shadowRoot.querySelector("a")).columnGap);

    const el = await fixture(html`
      <auro-hyperlink href="https://www.alaskaair.com" target="_blank" type="cta">Auro hyperlink spec</auro-hyperlink>
    `);
    await el.updateComplete;

    const icon = el.shadowRoot.querySelector('[part="targetIcon"]');
    await icon.updateComplete;

    const textNode = el.shadowRoot
      .querySelector("slot")
      .assignedNodes()
      .find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
    const range = document.createRange();
    range.selectNodeContents(textNode);

    const gap = icon.getBoundingClientRect().left - range.getBoundingClientRect().right;

    // CTA's icon is slotted into auro-hyperlink-button. We override that button's
    // text-slot gap so it matches the inline/nav spacing instead of the button's
    // larger default gap. The icon itself must carry no margin.
    expect(parseFloat(getComputedStyle(icon).marginLeft)).to.equal(0);
    expect(gap).to.be.closeTo(expectedGap, 1);
  });

  // The gap must resolve from the --ds-size-25 design token, not a hardcoded value.
  // Overriding the token at runtime should move the measured gap to the new value
  // for every link type. This guards the Blink quirk where grouping a ::part()
  // selector with regular selectors silently breaks var() resolution, leaving
  // inline/nav stuck on the Sass fallback while only CTA responds.
  ["nav", "default", "cta"].forEach((type) => {
    it(`auro-hyperlink ${type} target icon gap resolves from the --ds-size-25 token`, async () => {
      const el = await fixture(html`
        <auro-hyperlink href="https://www.alaskaair.com" target="_blank" type="${type}">Auro hyperlink spec</auro-hyperlink>
      `);
      await el.updateComplete;

      const icon = el.shadowRoot.querySelector('[part="targetIcon"]');
      await icon.updateComplete;

      const textNode = el.shadowRoot
        .querySelector("slot")
        .assignedNodes()
        .find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
      const range = document.createRange();
      range.selectNodeContents(textNode);
      const measureGap = () =>
        icon.getBoundingClientRect().left - range.getBoundingClientRect().right;

      const override = 20;
      el.style.setProperty("--ds-size-25", `${override}px`);
      await el.updateComplete;

      expect(measureGap()).to.be.closeTo(override, 1);
    });
  });
});

describe("safeUrl function", () => {
  let component;

  beforeEach(async () => {
    component = await fixture("<auro-hyperlink></auro-hyperlink>");
  });

  it("returns undefined when href is undefined", () => {
    const result = component.safeUrl(undefined);
    expect(result).to.be.undefined;
  });

  it("returns href when protocol is tel:", async () => {
    const result = component.safeUrl("tel:1234567890");
    expect(result).to.equal("tel:1234567890");
  });

  it("returns href when protocol is sms:", async () => {
    const result = component.safeUrl("sms:1234567890");
    expect(result).to.equal("sms:1234567890");
  });

  it("returns href when protocol is mailto:", async () => {
    const result = component.safeUrl("mailto:example@example.com");
    expect(result).to.equal("mailto:example@example.com");
  });

  it("returns href when protocol is https:", async () => {
    const result = component.safeUrl("https://www.example.com");
    expect(result).to.equal("https://www.example.com/");
  });

  it("returns undefined when href is undefined", () => {
    const result = component.safeUrl(undefined);
    expect(result).to.be.undefined;
  });
});
