<style>
  .exampleWrapper--ondark {
    color: var(--ds-color-text-primary-inverse);
  }
</style>
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-hyperlink

The `auro-hyperlink` element is a wrapper for an HTML5 `<a>` anchor element. 
This contains styling enabling multi-brand theme support as well as behavior and accessibility improvements over the HTML5 standard anchor element.

### Properties & Attributes

| Properties     | Attributes     | Modifiers | Type                                                        | Default   | Description                                                                                                                                                                                           |
| -------------- | -------------- | --------- | ----------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appearance     | appearance     |           | `default` \| `inverse`                                      | `default` | Defines whether the component will be on lighter or darker backgrounds.                                                                                                                               |
| download       | download       |           | boolean                                                     |           | If true, the linked resource will be downloaded when the hyperlink is clicked.                                                                                                                        |
| fluid          | fluid          |           | boolean                                                     |           | If true and `type="cta"`, the hyperlink will have a fluid-width UI.                                                                                                                                   |
| href           | href           |           | string                                                      |           | Defines the URL of the linked page.                                                                                                                                                                   |
| ondark         | ondark         |           | boolean                                                     |           | DEPRECATED - use `appearance="inverse"` instead.                                                                                                                                                      |
| referrerpolicy | referrerpolicy |           | boolean                                                     |           | If true, sets `strict-origin-when-cross-origin` to control the referrer information sent with requests.                                                                                               |
| rel            | rel            |           | string                                                      |           | Defines the relationship between the current document and the linked document. Visit [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel) for more information. |
| role           |                |           | string                                                      |           | Defines ARIA roles; currently supports `button` for extended experiences.                                                                                                                             |
| safeUri        |                | readonly  | string                                                      |           | Returns a safe URI based on the provided `href`.<br>If `href` is truthy, it generates a safe URL using the `safeUrl` function.<br>Otherwise, it returns an empty string.                              |
| target         | target         |           | string                                                      |           | Defines where to open the linked document.                                                                                                                                                            |
| type           | type           |           | `nav` \| `cta`                                              |           | Defines the type of hyperlink.                                                                                                                                                                        |
| variant        | variant        |           | `primary` \| `secondary` \| `tertiary` \| `ghost` \| `flat` | `primary` | Sets button variant option when using `type="cta"`.                                                                                                                                                   |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |

### CSS Shadow Parts

| Name       | Description                                                                  |
| ---------- | ---------------------------------------------------------------------------- |
| link       | Allows styling to be applied to the `a` element.                             |
| targetIcon | Allows styling to be applied to the icon that appears next to the hyperlink. |
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basic.html -->
  <auro-hyperlink>No href supplied</auro-hyperlink><br>
  Welcome to <auro-hyperlink href="https://www.alaskaair.com">Alaska Airlines</auro-hyperlink>.
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

```html
<auro-hyperlink>No href supplied</auro-hyperlink><br>
Welcome to <auro-hyperlink href="https://www.alaskaair.com">Alaska Airlines</auro-hyperlink>.
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property & Attribute Examples

### Appearance

Difference appearance options through the `appearance` attribute. This example shows the `inverse` appearance.

<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/appearance-inverse.html) -->
  <!-- The below content is automatically added from ./../apiExamples/appearance-inverse.html -->
  <auro-hyperlink appearance="inverse">No href supplied</auro-hyperlink><br>
  Welcome to <auro-hyperlink appearance="inverse" href="https://www.alaskaair.com">Alaska Airlines</auro-hyperlink>.
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/appearance-inverse.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/appearance-inverse.html -->

```html
<auro-hyperlink appearance="inverse">No href supplied</auro-hyperlink><br>
Welcome to <auro-hyperlink appearance="inverse" href="https://www.alaskaair.com">Alaska Airlines</auro-hyperlink>.
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Relative vs Absolute URLs and HTTPS Enforcement

#### HTTPS Enforcement

Regardless of protocol used with `href` attribute, `auro-hyperlink` will rewrite the final reference with the correct `https` protocol.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/https-enforcement.html) -->
  <!-- The below content is automatically added from ./../apiExamples/https-enforcement.html -->
  http absolute URL <auro-hyperlink href="http://www.alaskaair.com/route-map">to route map</auro-hyperlink> or
  no hypertext transfer protocol absolute URL to <auro-hyperlink href="//www.alaskaair.com/route-map">route map</auro-hyperlink>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/https-enforcement_code.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/https-enforcement_code.html -->

```html
<!-- Web component example -->
http absolute URL <auro-hyperlink href="http://www.alaskaair.com/route-map">to route map</auro-hyperlink> or
no hypertext transfer protocol absolute URL to <auro-hyperlink href="//www.alaskaair.com/route-map">route map</auro-hyperlink>
<!-- Output code in shadow DOM element -->
http absolute URL <a class="hyperlink" href="https://www.alaskaair.com/route-map"><slot>to route map</slot></a>
no hypertext transfer protocol absolute URL to <a class="hyperlink" href="https://www.alaskaair.com/route-map"><slot>route map</slot></a>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Relative URLs

Absolute URLs are not always preferred. When using relative URLs `auro-hyperlink` will insert the `https://` protocol and hostname into the `<a>` element in the shadowDOM.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/relative-url.html) -->
  <!-- The below content is automatically added from ./../apiExamples/relative-url.html -->
  Relative href converted to absolute URL to <auro-hyperlink href="/components/hyperlink/api">Hyperlink API page</auro-hyperlink>.
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/relative-url_code.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/relative-url_code.html -->

```html
<!-- Web component example -->
Relative href converted to absolute URL to <auro-hyperlink href="/components/hyperlink/api">Hyperlink API page</auro-hyperlink>.

<!-- Output code in shadow DOM element -->
Relative href converted to absolute URL to <a class="hyperlink" href="https://www.auro.alaskaair.com/components/hyperlink/api"><slot>Hyperlink API page</slot></a>.
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Using telephone/text/mailto URLs Schemes

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/URLscheme.html) -->
  <!-- The below content is automatically added from ./../apiExamples/URLscheme.html -->
  Example <auro-hyperlink href="sms:+18002527522">sms link</auro-hyperlink>.
  Example <auro-hyperlink href="tel:+18002527522">telephone link</auro-hyperlink>.
  Example <auro-hyperlink href="mailto:someone@alaskaair.com?cc=someone-else@alaskaair.com&bcc=someone-else-else@alaskaiar.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">email link</auro-hyperlink>.
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/URLscheme.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/URLscheme.html -->

```html
Example <auro-hyperlink href="sms:+18002527522">sms link</auro-hyperlink>.
Example <auro-hyperlink href="tel:+18002527522">telephone link</auro-hyperlink>.
Example <auro-hyperlink href="mailto:someone@alaskaair.com?cc=someone-else@alaskaair.com&bcc=someone-else-else@alaskaiar.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">email link</auro-hyperlink>.
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### External Links

Hyperlinks when used with the `target="_blank"` attribute are domain aware and return either an internal domain "new-window" icon, or an icon that communicates users will be taken to a new domain.

For link security purposes, when using the `target="_blank"` attribute, this implicitly provides the same `rel` behavior as setting `rel="noopener"`. For additional security, Auro applies `noreferrer` to the `rel` attribute by default.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/external.html) -->
  <!-- The below content is automatically added from ./../apiExamples/external.html -->
  Example link with
  <auro-hyperlink
    target="_blank"
    href="https://www.alaskaair.com">
    external target
  </auro-hyperlink>
  but same domain

  <br>
  Example link with
  <auro-hyperlink
    target="_blank"
    href="https://www.portseattle.org/sea-tac">
    external target
  </auro-hyperlink>
   with external domain
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/external-appearance-inverse.html) -->
  <!-- The below content is automatically added from ./../apiExamples/external-appearance-inverse.html -->
  Example link with
  <auro-hyperlink
    appearance="inverse"
    target="_blank"
    href="https://www.alaskaair.com">
    external target
  </auro-hyperlink>
  but same domain

  <br>
  Example link with
  <auro-hyperlink
    appearance="inverse"
    target="_blank"
    href="https://www.portseattle.org/sea-tac">
    external target
  </auro-hyperlink>
   with external domain
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/external.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/external.html -->

```html
Example link with
<auro-hyperlink
  target="_blank"
  href="https://www.alaskaair.com">
  external target
</auro-hyperlink>
but same domain

<br>
Example link with
<auro-hyperlink
  target="_blank"
  href="https://www.portseattle.org/sea-tac">
  external target
</auro-hyperlink>
 with external domain
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/external-appearance-inverse.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/external-appearance-inverse.html -->

```html
Example link with
<auro-hyperlink
  appearance="inverse"
  target="_blank"
  href="https://www.alaskaair.com">
  external target
</auro-hyperlink>
but same domain

<br>
Example link with
<auro-hyperlink
  appearance="inverse"
  target="_blank"
  href="https://www.portseattle.org/sea-tac">
  external target
</auro-hyperlink>
 with external domain
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### External Links with Referrerpolicy

When using the `target="_blank"` attribute, use the `referrerpolicy` attribute to override the default use of `rel="noreferrer"`.

Using this attribute will use the `strict-origin-when-cross-origin` policy type. This sends a full URL when performing a same-origin request, only sends the origin when the protocol security level stays the same (HTTPS→HTTPS), and sends no header to a less secure destination (HTTPS→HTTP).

This will also set the `rel` attribute to `external`.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/external-referrer.html) -->
<!-- The below content is automatically added from ./../apiExamples/external-referrer.html -->
Example link with
<auro-hyperlink
  target="_blank"
  referrerpolicy
  href="https://www.portseattle.org/sea-tac">
  external target
</auro-hyperlink>
 , external domain with referrerpolicy attribute
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<div class="exampleWrapper--ondark">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/external-referrer-appearance-inverse.html) -->
<!-- The below content is automatically added from ./../apiExamples/external-referrer-appearance-inverse.html -->
Example link with
<auro-hyperlink
  appearance="inverse"
  target="_blank"
  referrerpolicy
  href="https://www.portseattle.org/sea-tac">
  external target
</auro-hyperlink>
 , external domain with referrerpolicy attribute
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/external-referrer.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/external-referrer.html -->

```html
Example link with
<auro-hyperlink
  target="_blank"
  referrerpolicy
  href="https://www.portseattle.org/sea-tac">
  external target
</auro-hyperlink>
 , external domain with referrerpolicy attribute
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/external-referrer-appearance-inverse.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/external-referrer-appearance-inverse.html -->

```html
Example link with
<auro-hyperlink
  appearance="inverse"
  target="_blank"
  referrerpolicy
  href="https://www.portseattle.org/sea-tac">
  external target
</auro-hyperlink>
 , external domain with referrerpolicy attribute
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Navigation Links

When using `auro-hyperlink` as a navigation style, use `type="nav"` for an alternate UI. With this type, links will appear without an underline, but present the underline feedback on hover.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/nav.html) -->
  <!-- The below content is automatically added from ./../apiExamples/nav.html -->
  <auro-hyperlink
    type="nav"
    href="https://www.alaskaair.com">
    Navigation style link
  </auro-hyperlink>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/nav-appearance-inverse.html) -->
  <!-- The below content is automatically added from ./../apiExamples/nav-appearance-inverse.html -->
  <auro-hyperlink
    appearance="inverse"
    type="nav"
    href="https://www.alaskaair.com">
    Navigation style link
  </auro-hyperlink>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/nav.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/nav.html -->

```html
<auro-hyperlink
  type="nav"
  href="https://www.alaskaair.com">
  Navigation style link
</auro-hyperlink>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/nav-appearance-inverse.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/nav-appearance-inverse.html -->

```html
<auro-hyperlink
  appearance="inverse"
  type="nav"
  href="https://www.alaskaair.com">
  Navigation style link
</auro-hyperlink>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Call to Action Buttons

Call to action (CTA) buttons combine hyperlink functionality with button styling. While semantically these are hyperlinks, they visually appear as buttons. Use the `variant` attribute with values `primary`, `secondary`, `tertiary`, `ghost`, or `flat` to modify their appearance as shown below. The `ondark` attribute can be combined with any `type="cta"` option.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/cta.html) -->
  <!-- The below content is automatically added from ./../apiExamples/cta.html -->
  <auro-hyperlink type="cta" href="https://www.alaskaair.com" variant="primary">Primary</auro-hyperlink>
  <auro-hyperlink type="cta" href="https://www.alaskaair.com" variant="secondary">Secondary</auro-hyperlink>
  <auro-hyperlink type="cta" href="https://www.alaskaair.com" variant="tertiary">Tertiary</auro-hyperlink>
  <auro-hyperlink type="cta" href="https://www.alaskaair.com" variant="ghost">Ghost</auro-hyperlink>
  <auro-hyperlink type="cta" href="https://www.alaskaair.com" variant="flat">Flat</auro-hyperlink>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/cta-appearance-inverse.html) -->
  <!-- The below content is automatically added from ./../apiExamples/cta-appearance-inverse.html -->
  <auro-hyperlink type="cta" appearance="inverse" href="https://www.alaskaair.com" variant="primary">Primary</auro-hyperlink>
  <auro-hyperlink type="cta" appearance="inverse" href="https://www.alaskaair.com" variant="secondary">Secondary</auro-hyperlink>
  <auro-hyperlink type="cta" appearance="inverse" href="https://www.alaskaair.com" variant="tertiary">Tertiary</auro-hyperlink>
  <auro-hyperlink type="cta" appearance="inverse" href="https://www.alaskaair.com" variant="ghost">Ghost</auro-hyperlink>
  <auro-hyperlink type="cta" appearance="inverse" href="https://www.alaskaair.com" variant="flat">Flat</auro-hyperlink>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/cta.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/cta.html -->

```html
<auro-hyperlink type="cta" href="https://www.alaskaair.com" variant="primary">Primary</auro-hyperlink>
<auro-hyperlink type="cta" href="https://www.alaskaair.com" variant="secondary">Secondary</auro-hyperlink>
<auro-hyperlink type="cta" href="https://www.alaskaair.com" variant="tertiary">Tertiary</auro-hyperlink>
<auro-hyperlink type="cta" href="https://www.alaskaair.com" variant="ghost">Ghost</auro-hyperlink>
<auro-hyperlink type="cta" href="https://www.alaskaair.com" variant="flat">Flat</auro-hyperlink>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/cta-appearance-inverse.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/cta-appearance-inverse.html -->

```html
<auro-hyperlink type="cta" appearance="inverse" href="https://www.alaskaair.com" variant="primary">Primary</auro-hyperlink>
<auro-hyperlink type="cta" appearance="inverse" href="https://www.alaskaair.com" variant="secondary">Secondary</auro-hyperlink>
<auro-hyperlink type="cta" appearance="inverse" href="https://www.alaskaair.com" variant="tertiary">Tertiary</auro-hyperlink>
<auro-hyperlink type="cta" appearance="inverse" href="https://www.alaskaair.com" variant="ghost">Ghost</auro-hyperlink>
<auro-hyperlink type="cta" appearance="inverse" href="https://www.alaskaair.com" variant="flat">Flat</auro-hyperlink>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### CTA External links

(CTA) buttons can also be used in combinaton with external links. In the following example, see how the `target="_blank"` attribute acts like external links.

CTA buttons share the same icon support as the standard hyperlink for targets that open new browser tabs.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/cta-external-link.html) -->
  <!-- The below content is automatically added from ./../apiExamples/cta-external-link.html -->
  <auro-hyperlink target="_blank" type="cta" href="https://www.alaskaair.com" variant="primary">Primary</auro-hyperlink>
  <auro-hyperlink target="_blank" type="cta" href="https://www.alaskaair.com" variant="secondary">Secondary</auro-hyperlink>
  <auro-hyperlink target="_blank" type="cta" href="https://www.alaskaair.com" variant="tertiary">Tertiary</auro-hyperlink>
  <auro-hyperlink target="_blank" type="cta" href="https://www.alaskaair.com" variant="ghost">Ghost</auro-hyperlink>
  <auro-hyperlink target="_blank" type="cta" href="https://www.alaskaair.com" variant="flat">Flat</auro-hyperlink>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/cta-external-link-appearance-inverse.html) -->
  <!-- The below content is automatically added from ./../apiExamples/cta-external-link-appearance-inverse.html -->
  <auro-hyperlink target="_blank" type="cta" href="https://www.portseattle.org/sea-tac" appearance="inverse" variant="primary">Primary</auro-hyperlink>
  <auro-hyperlink target="_blank" type="cta" href="https://www.portseattle.org/sea-tac" appearance="inverse" variant="secondary">Secondary</auro-hyperlink>
  <auro-hyperlink target="_blank" type="cta" href="https://www.portseattle.org/sea-tac" appearance="inverse" variant="tertiary">Tertiary</auro-hyperlink>
  <auro-hyperlink target="_blank" type="cta" href="https://www.portseattle.org/sea-tac" appearance="inverse" variant="ghost">Ghost</auro-hyperlink>
  <auro-hyperlink target="_blank" type="cta" href="https://www.portseattle.org/sea-tac" appearance="inverse" variant="flat">Flat</auro-hyperlink>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/cta-external-link.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/cta-external-link.html -->

```html
<auro-hyperlink target="_blank" type="cta" href="https://www.alaskaair.com" variant="primary">Primary</auro-hyperlink>
<auro-hyperlink target="_blank" type="cta" href="https://www.alaskaair.com" variant="secondary">Secondary</auro-hyperlink>
<auro-hyperlink target="_blank" type="cta" href="https://www.alaskaair.com" variant="tertiary">Tertiary</auro-hyperlink>
<auro-hyperlink target="_blank" type="cta" href="https://www.alaskaair.com" variant="ghost">Ghost</auro-hyperlink>
<auro-hyperlink target="_blank" type="cta" href="https://www.alaskaair.com" variant="flat">Flat</auro-hyperlink>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/cta-external-link-appearance-inverse.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/cta-external-link-appearance-inverse.html -->

```html
<auro-hyperlink target="_blank" type="cta" href="https://www.portseattle.org/sea-tac" appearance="inverse" variant="primary">Primary</auro-hyperlink>
<auro-hyperlink target="_blank" type="cta" href="https://www.portseattle.org/sea-tac" appearance="inverse" variant="secondary">Secondary</auro-hyperlink>
<auro-hyperlink target="_blank" type="cta" href="https://www.portseattle.org/sea-tac" appearance="inverse" variant="tertiary">Tertiary</auro-hyperlink>
<auro-hyperlink target="_blank" type="cta" href="https://www.portseattle.org/sea-tac" appearance="inverse" variant="ghost">Ghost</auro-hyperlink>
<auro-hyperlink target="_blank" type="cta" href="https://www.portseattle.org/sea-tac" appearance="inverse" variant="flat">Flat</auro-hyperlink>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Fluid CTA links

In the following example, see how the `fluid` attribute alters the shape of the button to take up the full width of its parent container.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/cta-fluid.html) -->
  <!-- The below content is automatically added from ./../apiExamples/cta-fluid.html -->
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <auro-hyperlink type="cta" fluid href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
    <auro-hyperlink type="cta" fluid variant="secondary" href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
    <auro-hyperlink type="cta" fluid variant="tertiary" href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
  </div>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/cta-fluid.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/cta-fluid.html -->

```html
<div style="display: flex; flex-direction: column; gap: 1rem;">
  <auro-hyperlink type="cta" fluid href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" fluid variant="secondary" href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" fluid variant="tertiary" href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
</div>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### CTA sizes

In the following example, see how the `size` attribute alters the size of the cta link. Available sizes are `xs`, `sm`, `md`, `lg`, `xl`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/cta-size.html) -->
  <!-- The below content is automatically added from ./../apiExamples/cta-size.html -->
  <auro-hyperlink type="cta" href="https://www.alaskaair.com" size="xs">Extra Small</auro-hyperlink>
  <auro-hyperlink type="cta" href="https://www.alaskaair.com" size="sm">Small</auro-hyperlink>
  <auro-hyperlink type="cta" href="https://www.alaskaair.com" size="md">Medium</auro-hyperlink>
  <auro-hyperlink type="cta" href="https://www.alaskaair.com" size="lg">Large</auro-hyperlink>
  <auro-hyperlink type="cta" href="https://www.alaskaair.com" size="xl">Extra Large</auro-hyperlink>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/cta-size.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/cta-size.html -->

```html
<auro-hyperlink type="cta" href="https://www.alaskaair.com" size="xs">Extra Small</auro-hyperlink>
<auro-hyperlink type="cta" href="https://www.alaskaair.com" size="sm">Small</auro-hyperlink>
<auro-hyperlink type="cta" href="https://www.alaskaair.com" size="md">Medium</auro-hyperlink>
<auro-hyperlink type="cta" href="https://www.alaskaair.com" size="lg">Large</auro-hyperlink>
<auro-hyperlink type="cta" href="https://www.alaskaair.com" size="xl">Extra Large</auro-hyperlink>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### CTA shape

The `shape` attribute accepts three values: `rounded`, `pill`, or `circle`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/cta-shape.html) -->
  <!-- The below content is automatically added from ./../apiExamples/cta-shape.html -->
  <auro-hyperlink type="cta" href="https://www.alaskaair.com" shape="rounded">Rounded</auro-hyperlink>
  <auro-hyperlink type="cta" href="https://www.alaskaair.com" shape="pill">Pill</auro-hyperlink>
  <auro-hyperlink type="cta" href="https://www.alaskaair.com" aria-label="in-flight" shape="pill">
    Back to Top
    <auro-icon customColor category="interface" name="arrow-up"></auro-icon>
  </auro-hyperlink>
  <auro-hyperlink type="cta" href="https://www.alaskaair.com" shape="circle">
    <auro-icon customcolor category="interface" name="account-filled" appearance="inverse"></auro-icon>
  </auro-hyperlink>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/cta-shape.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/cta-shape.html -->

```html
<auro-hyperlink type="cta" href="https://www.alaskaair.com" shape="rounded">Rounded</auro-hyperlink>
<auro-hyperlink type="cta" href="https://www.alaskaair.com" shape="pill">Pill</auro-hyperlink>
<auro-hyperlink type="cta" href="https://www.alaskaair.com" aria-label="in-flight" shape="pill">
  Back to Top
  <auro-icon customColor category="interface" name="arrow-up"></auro-icon>
</auro-hyperlink>
<auro-hyperlink type="cta" href="https://www.alaskaair.com" shape="circle">
  <auro-icon customcolor category="interface" name="account-filled" appearance="inverse"></auro-icon>
</auro-hyperlink>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Common Usage Patterns & Functional Examples

### Using role="button"

Aside from the standard hyperlink use-case, the `auro-hyperlink` element is intended to be used for button situations as illustrated below. Assuming the role of button, `auro-hyperlink` also will track the `aria-pressed` state.

**Note:** Any `href` will be ignored when using `role="button"`. A click-event must be passed to the element as illustrated in the example below.

**Accessibility:** Review the code examples, the user of this element are responsible for keyboard support when using `role="button"`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/role-button.html) -->
  <!-- The below content is automatically added from ./../apiExamples/role-button.html -->
  <auro-hyperlink href="http://www.alaskaair.com" role="button" id="roleButton">Cancel button</auro-hyperlink>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/role-button-appearance-inverse.html) -->
  <!-- The below content is automatically added from ./../apiExamples/role-button-appearance-inverse.html -->
  <auro-hyperlink appearance="inverse" href="http://www.alaskaair.com" role="button" id="roleButton-ondark">Cancel button</auro-hyperlink>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/role-button.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/role-button.html -->

```html
<auro-hyperlink href="http://www.alaskaair.com" role="button" id="roleButton">Cancel button</auro-hyperlink>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/role-button-appearance-inverse.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/role-button-appearance-inverse.html -->

```html
<auro-hyperlink appearance="inverse" href="http://www.alaskaair.com" role="button" id="roleButton-ondark">Cancel button</auro-hyperlink>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/role-button.js) -->
<!-- The below code snippet is automatically added from ./../apiExamples/role-button.js -->

```js
export function roleButtonExample() {
  const roleButton = document.getElementById("roleButton");
  const roleButtonOndark = document.getElementById("roleButton-ondark");

  roleButton.addEventListener("click", () => {
    alert("You clicked the role button!");
  });

  roleButtonOndark.addEventListener("click", () => {
    alert("You clicked the role button!");
  });
}
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Unsupported types

Not all URL types are supported for security reasons. Two common types that are worth mentioning are `javaScript:` and `data:`.

The following examples illustrate the use of `<auro-hyperlink>` with either no `href`, `javaScript:` or `data:` protocols being used. Note that `javascript` returns a shadowDOM as simple text. Using an unsupported protocol like `data:`, the protocol is removed from the provided `href` value.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/non-supported.html) -->
  <!-- The below content is automatically added from ./../apiExamples/non-supported.html -->
  <p>
    <auro-hyperlink>No href supplied</auro-hyperlink>
  </p>
  <p>
    <auro-hyperlink href="javascript:;">JavaScript not supported</auro-hyperlink>
  </p>
  <p>
    <auro-hyperlink href="data:text/plain;charset=utf-8,Hello%20World!">Data type not supported</auro-hyperlink>
  </p>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/non-supported.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/non-supported.html -->

```html
<p>
  <auro-hyperlink>No href supplied</auro-hyperlink>
</p>
<p>
  <auro-hyperlink href="javascript:;">JavaScript not supported</auro-hyperlink>
</p>
<p>
  <auro-hyperlink href="data:text/plain;charset=utf-8,Hello%20World!">Data type not supported</auro-hyperlink>
</p>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Typography

The `auro-hyperlink` component is designed to work with the typography classes provided by the Auro Design System. 

The component will automatically inherit the typography styles from the parent element, allowing for consistent text styling across your application. Classes can also be applied directly onto the `auro-hyperlink` component.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/typography.html) -->
  <!-- The below content is automatically added from ./../apiExamples/typography.html -->
  <div class="body-xs">
    Welcome to <auro-hyperlink href="https://www.alaskaair.com">Alaska Airlines</auro-hyperlink>.
  </div>
  <div class="body-default">
    Welcome to <auro-hyperlink href="https://www.alaskaair.com">Alaska Airlines</auro-hyperlink>.
  </div>
  <div class="body-lg">
    Welcome to <auro-hyperlink href="https://www.alaskaair.com">Alaska Airlines</auro-hyperlink>.
  </div>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/typography.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/typography.html -->

```html
<div class="body-xs">
  Welcome to <auro-hyperlink href="https://www.alaskaair.com">Alaska Airlines</auro-hyperlink>.
</div>
<div class="body-default">
  Welcome to <auro-hyperlink href="https://www.alaskaair.com">Alaska Airlines</auro-hyperlink>.
</div>
<div class="body-lg">
  Welcome to <auro-hyperlink href="https://www.alaskaair.com">Alaska Airlines</auro-hyperlink>.
</div>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle Component with CSS Variables

The component may be restyled by changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

```scss
/* stylelint-disable custom-property-empty-line-before */

@use "@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska" as v;

:host(:not([type='cta'])) {
  // default hyperlink

  --ds-auro-hyperlink-default-color-default: var(--ds-advanced-color-hyperlink-text, #{v.$ds-advanced-color-hyperlink-text});
  --ds-auro-hyperlink-default-container-color-default: transparent;
  --ds-auro-hyperlink-default-outline-color-default: transparent;
  --ds-auro-hyperlink-default-border-color-default: transparent;

  --ds-auro-hyperlink-visited-color-default: var(--ds-advanced-color-hyperlink-text, #{v.$ds-advanced-color-hyperlink-text});
  --ds-auro-hyperlink-visited-container-color-default: transparent;
  --ds-auro-hyperlink-visited-outline-color-default: transparent;
  --ds-auro-hyperlink-visited-border-color-default: transparent;

  --ds-auro-hyperlink-focus-color-default: var(--ds-advanced-color-hyperlink-text, #{v.$ds-advanced-color-hyperlink-text});
  --ds-auro-hyperlink-focus-container-color-default: transparent;
  --ds-auro-hyperlink-focus-outline-color-default: var(--ds-advanced-color-state-focused, #{v.$ds-advanced-color-state-focused});
  --ds-auro-hyperlink-focus-border-color-default: transparent;

  --ds-auro-hyperlink-hover-color-default: var(--ds-advanced-color-hyperlink-text-hover, #{v.$ds-advanced-color-hyperlink-text-hover});
  --ds-auro-hyperlink-hover-container-color-default: transparent;
  --ds-auro-hyperlink-hover-outline-color-default: transparent;
  --ds-auro-hyperlink-hover-border-color-default: transparent;

  // default ondark hyperlink

  --ds-auro-hyperlink-default-color-inverse: var(--ds-advanced-color-hyperlink-text-inverse, #{v.$ds-advanced-color-hyperlink-text-inverse});
  --ds-auro-hyperlink-default-container-color-inverse: transparent;
  --ds-auro-hyperlink-default-outline-color-inverse: transparent;
  --ds-auro-hyperlink-default-border-color-inverse: transparent;

  --ds-auro-hyperlink-visited-color-inverse: var(--ds-advanced-color-hyperlink-text-inverse, #{v.$ds-advanced-color-hyperlink-text-inverse});
  --ds-auro-hyperlink-visited-container-color-inverse: transparent;
  --ds-auro-hyperlink-visited-outline-color-inverse: transparent;
  --ds-auro-hyperlink-visited-border-color-inverse: transparent;

  --ds-auro-hyperlink-focus-color-inverse: var(--ds-advanced-color-hyperlink-text-inverse, #{v.$ds-advanced-color-hyperlink-text-inverse});
  --ds-auro-hyperlink-focus-container-color-inverse: transparent;
  --ds-auro-hyperlink-focus-outline-color-inverse: var(--ds-advanced-color-state-focused-inverse, #{v.$ds-advanced-color-state-focused-inverse});
  --ds-auro-hyperlink-focus-border-color-inverse: transparent;

  --ds-auro-hyperlink-hover-color-inverse: var(--ds-advanced-color-hyperlink-text-inverse, #{v.$ds-advanced-color-hyperlink-text-inverse});
  --ds-auro-hyperlink-hover-container-color-inverse: transparent;
  --ds-auro-hyperlink-hover-outline-color-inverse: transparent;
  --ds-auro-hyperlink-hover-border-color-inverse: transparent;

  // nav hyperlink

  --ds-auro-hyperlink-nav-default-color-default: var(--ds-advanced-color-hyperlink-text, #{v.$ds-advanced-color-hyperlink-text});
  --ds-auro-hyperlink-nav-default-container-color-default: transparent;
  --ds-auro-hyperlink-nav-default-outline-color-default: transparent;
  --ds-auro-hyperlink-nav-default-border-color-default: transparent;

  --ds-auro-hyperlink-nav-visited-color-default: var(--ds-advanced-color-hyperlink-text, #{v.$ds-advanced-color-hyperlink-text});
  --ds-auro-hyperlink-nav-visited-container-color-default: transparent;
  --ds-auro-hyperlink-nav-visited-outline-color-default: transparent;
  --ds-auro-hyperlink-nav-visited-border-color-default: transparent;

  --ds-auro-hyperlink-nav-focus-color-default: var(--ds-advanced-color-hyperlink-text-inverse, #{v.$ds-advanced-color-hyperlink-text-inverse});
  --ds-auro-hyperlink-nav-focus-container-color-default: var(--ds-advanced-color-state-focused, #{v.$ds-advanced-color-state-focused});
  --ds-auro-hyperlink-nav-focus-outline-color-default: var(--ds-advanced-color-state-focused, #{v.$ds-advanced-color-state-focused});
  --ds-auro-hyperlink-nav-focus-border-color-default: var(--ds-advanced-color-state-focused, #{v.$ds-advanced-color-state-focused});

  --ds-auro-hyperlink-nav-hover-color-default: var(--ds-advanced-color-hyperlink-text-hover, #{v.$ds-advanced-color-hyperlink-text-hover});
  --ds-auro-hyperlink-nav-hover-container-color-default: transparent;
  --ds-auro-hyperlink-nav-hover-outline-color-default: transparent;
  --ds-auro-hyperlink-nav-hover-border-color-default: transparent;

  // nav ondark hyperlink

  --ds-auro-hyperlink-nav-default-color-inverse: var(--ds-advanced-color-hyperlink-text-inverse, #{v.$ds-advanced-color-hyperlink-text-inverse});
  --ds-auro-hyperlink-nav-default-container-color-inverse: transparent;
  --ds-auro-hyperlink-nav-default-outline-color-inverse: transparent;
  --ds-auro-hyperlink-nav-default-border-color-inverse: transparent;

  --ds-auro-hyperlink-nav-visited-color-inverse: var(--ds-advanced-color-hyperlink-text-inverse, #{v.$ds-advanced-color-hyperlink-text-inverse});
  --ds-auro-hyperlink-nav-visited-container-color-inverse: transparent;
  --ds-auro-hyperlink-nav-visited-outline-color-inverse: transparent;
  --ds-auro-hyperlink-nav-visited-border-color-inverse: transparent;

  --ds-auro-hyperlink-nav-focus-color-inverse: var(--ds-advanced-color-hyperlink-text, #{v.$ds-advanced-color-hyperlink-text});
  --ds-auro-hyperlink-nav-focus-container-color-inverse: var(--ds-advanced-color-state-focused-inverse, #{v.$ds-advanced-color-state-focused-inverse});
  --ds-auro-hyperlink-nav-focus-outline-color-inverse: var(--ds-advanced-color-state-focused-inverse, #{v.$ds-advanced-color-state-focused-inverse});
  --ds-auro-hyperlink-nav-focus-border-color-inverse: var(--ds-advanced-color-state-focused-inverse, #{v.$ds-advanced-color-state-focused-inverse});

  --ds-auro-hyperlink-nav-hover-color-inverse: var(--ds-advanced-color-hyperlink-text-inverse, #{v.$ds-advanced-color-hyperlink-text-inverse});
  --ds-auro-hyperlink-nav-hover-container-color-inverse: transparent;
  --ds-auro-hyperlink-nav-hover-outline-color-inverse: transparent;
  --ds-auro-hyperlink-nav-hover-border-color-inverse: transparent;
}
```
<!-- AURO-GENERATED-CONTENT:END -->
