<style>
  .exampleWrapper--ondark {
    color: var(--ds-color-text-primary-inverse);
  }
</style>

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Property and attribute examples

### Appearance

Use the `appearance` attribute to match the link to its background. This example shows the `inverse` appearance for dark backgrounds.

<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/appearance-inverse.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/appearance-inverse.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Relative and absolute URLs and HTTPS enforcement

#### HTTPS enforcement

`auro-hyperlink` upgrades the `href` to `https`, except for `tel:`, `sms:`, and `mailto:` addresses, and except when the page is served from `localhost`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/https-enforcement.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/https-enforcement_code.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Relative URLs

Use relative URLs when an absolute URL isn't practical. `auro-hyperlink` resolves a relative `href` against the current page and puts the full `https://` address in the inner `<a>` element in the shadow DOM.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/relative-url.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/relative-url_code.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Telephone, text message, and email addresses

Use `tel:`, `sms:`, and `mailto:` addresses to start a call, a text message, or an email. `auro-hyperlink` leaves these addresses as you write them.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/URLscheme.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/URLscheme.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### External links

When you use `target="_blank"`, the link shows a new-window icon for links to the same site and an external-link icon for links to other sites.

Browsers already apply `rel="noopener"` behavior to `target="_blank"` links. For additional security, standard and `nav` links to other sites also get `rel="noOpener noReferrer"` by default. Links to your own site and `type="cta"` links get no automatic `rel`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/external.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/external-appearance-inverse.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/external.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/external-appearance-inverse.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### External links with `referrerpolicy`

When you use `target="_blank"`, add the `referrerpolicy` attribute to share the page's origin with the linked site instead of using the default `rel="noOpener noReferrer"`.

The attribute applies the `strict-origin-when-cross-origin` policy. It sends the full URL for same-origin requests, sends only the origin when the protocol security level stays the same (HTTPS to HTTPS), and sends no referrer to a less secure destination (HTTPS to HTTP).

For links to other sites, it also sets `rel="external"` unless you provide your own `rel`.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/external-referrer.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</div>

<div class="exampleWrapper--ondark">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/external-referrer-appearance-inverse.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/external-referrer.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/external-referrer-appearance-inverse.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Navigation links

Use `type="nav"` for links in navigation. Navigation links appear without an underline and show it on hover and on focus.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/nav.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/nav-appearance-inverse.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/nav.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/nav-appearance-inverse.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Call to action buttons

Call to action (CTA) links look like buttons but behave as hyperlinks. Use the `variant` attribute with `primary`, `secondary`, `tertiary`, `ghost`, or `flat` to change their appearance, as shown below. Add `appearance="inverse"` to any `type="cta"` link on a dark background.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/cta.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/cta-appearance-inverse.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/cta.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/cta-appearance-inverse.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### CTA external links

CTA links also work with external links. Add `target="_blank"` to show the same new-window or external-link icon that standard links get.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/cta-external-link.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/cta-external-link-appearance-inverse.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/cta-external-link.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/cta-external-link-appearance-inverse.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Fluid CTA links

Add the `fluid` attribute to stretch a CTA link to the full width of its parent container.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/cta-fluid.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/cta-fluid.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### CTA sizes

Use the `size` attribute to change the size of a CTA link. The available sizes are `xs`, `sm`, `md`, `lg`, and `xl`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/cta-size.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/cta-size.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### CTA sizes with external links

When a CTA link uses `target="_blank"`, the new-window or external-link icon follows the `size` attribute.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/cta-size-external-link.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/cta-size-external-link.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### CTA shape

The `shape` attribute accepts four values: `rounded`, `pill`, `circle`, or `square`. The `circle` and `square` shapes are sized for icon-only content.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/cta-shape.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/cta-shape.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Common usage patterns

### Using `role="button"`

Use `role="button"` when you need link styling for an action, such as opening a dialog.

**Note:** `auro-hyperlink` ignores `href` when you use `role="button"`, so handle the `click` event yourself, as the following example shows.

**Accessibility:** Enter and Space don't currently fire `click` on the link, so keyboard users can't activate it unless you handle those keys yourself. The example's script listens only for `click`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/role-button.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/role-button-appearance-inverse.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/role-button.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/role-button-appearance-inverse.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/role-button.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Unsupported types

For security, `auro-hyperlink` drops `javascript:`, `data:`, and `vbscript:` addresses so they can't run code.

The following examples show `<auro-hyperlink>` with no `href`, a `javascript:` address, and a `data:` address. In each case, the link renders only its slotted content as plain text instead of an `<a>` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/non-supported.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/non-supported.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Typography

`auro-hyperlink` works with the typography classes from the Auro Design System. It inherits typography styles from its parent element, so text stays consistent across your application. Apply typography classes directly to the `auro-hyperlink` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/typography.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/typography.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Restyle with CSS custom properties

Restyle the component by changing the values of the following custom properties.

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- AURO-GENERATED-CONTENT:END -->
