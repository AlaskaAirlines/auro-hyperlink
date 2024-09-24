<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

# auro-hyperlink

`<auro-hyperlink>` is a component that wraps an HTML `<a>` element, providing additional styling and behavior.

## Properties

| Property         | Attribute        | Modifiers | Type      | Default | Description                                      |
|------------------|------------------|-----------|-----------|---------|--------------------------------------------------|
| [download](#download)       | `download`       |           | `Boolean` | false   | If true, the linked resource will be downloaded when the hyperlink is clicked. |
| [fluid](#fluid)          | `fluid`          |           | `Boolean` |         | If true and `type="cta"`, the hyperlink will have a fluid-width UI. |
| [href](#href)           | `href`           |           | `String`  |         | Defines the URL of the linked page.              |
| [ondark](#ondark)         | `ondark`         |           | `Boolean` | false   | If true, the hyperlink will be styled for use on a dark background. |
| [referrerpolicy](#referrerpolicy) | `referrerpolicy` |           | `Boolean` |         | If true, sets `strict-origin-when-cross-origin` to control the referrer information sent with requests. |
| [rel](#rel)            | `rel`            |           | `String`  |         | Defines the relationship between the current document and the linked document. |
| [relative](#relative)       | `relative`       |           | `Boolean` | false   | If true, the auto URL re-write feature will be disabled. |
| [role](#role)           | `role`           |           | `String`  |         | Defines ARIA roles; currently supports `button` for extended experiences. |
| [safeUri](#safeUri)        |                  | readonly  | `string`  |         | Returns a safe URI based on the provided `href` and `relative` parameters.<br />If `href` is truthy, it generates a safe URL using the `safeUrl` function.<br />Otherwise, it returns an empty string. |
| [secondary](#secondary)      | `secondary`      |           | `Boolean` | false   | If true and `type="cta"`, the hyperlink will have a secondary UI. |
| [small](#small)          | `small`          |           | `Boolean` | false   | If true and `type="cta"`, the hyperlink will have a small UI. |
| [target](#target)         | `target`         |           | `String`  |         | Defines where to open the linked document.       |
| [tertiary](#tertiary)       | `tertiary`       |           | `Boolean` | false   | If true and `type="cta"`, the hyperlink will have a tertiary UI. |
| [type](#type)           | `type`           |           | `String`  |         | Defines the type of hyperlink; accepts `nav` or `cta`. |

## CSS Shadow Parts

| Part   | Description                                      |
|--------|--------------------------------------------------|
| [link](#link) | Allows styling to be applied to the `a` element. |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-hyperlink>No href supplied</auro-hyperlink><br>
  Welcome to <auro-hyperlink href="https://www.alaskaair.com">Alaska Airlines</auro-hyperlink>.
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic-ondark.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic-ondark.html -->
  <auro-hyperlink ondark>No href supplied</auro-hyperlink><br>
  Welcome to <auro-hyperlink ondark href="https://www.alaskaair.com">Alaska Airlines</auro-hyperlink>.
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-hyperlink>No href supplied</auro-hyperlink><br>
Welcome to <auro-hyperlink href="https://www.alaskaair.com">Alaska Airlines</auro-hyperlink>.
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic-ondark.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic-ondark.html -->

```html
<auro-hyperlink ondark>No href supplied</auro-hyperlink><br>
Welcome to <auro-hyperlink ondark href="https://www.alaskaair.com">Alaska Airlines</auro-hyperlink>.
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## External Links

Hyperlinks when used with the `target="_blank"` attribute are domain aware and return either an internal domain new-window icon versus an icon that communicates users will be taken to a new domain.

For link security purposes, when using the `target="_blank"` attribute, this implicitly provides the same `rel` behavior as setting `rel="noopener"`. For additional security, Auro applies `noreferrer` to the `rel` attribute by default.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/external.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/external.html -->
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
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/external-ondark.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/external-ondark.html -->
  Example link with
  <auro-hyperlink
    ondark
    target="_blank"
    href="https://www.alaskaair.com">
    external target
  </auro-hyperlink>
  but same domain

  <br>
  Example link with
  <auro-hyperlink
    ondark
    target="_blank"
    href="https://www.portseattle.org/sea-tac">
    external target
  </auro-hyperlink>
   with external domain
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/external.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/external.html -->

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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/external-ondark.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/external-ondark.html -->

```html
Example link with
<auro-hyperlink
  ondark
  target="_blank"
  href="https://www.alaskaair.com">
  external target
</auro-hyperlink>
but same domain

<br>
Example link with
<auro-hyperlink
  ondark
  target="_blank"
  href="https://www.portseattle.org/sea-tac">
  external target
</auro-hyperlink>
 with external domain
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### External links with referrerpolicy

When using the `target="_blank"` attribute, to override the default use of `rel="noreferrer"` use the `referrerpolicy` attribute.

Using this attribute will use the `strict-origin-when-cross-origin` policy type. This sends a full URL when performing a same-origin request, only sends the origin when the protocol security level stays the same (HTTPS→HTTPS), and sends no header to a less secure destination (HTTPS→HTTP).

This will also set the `rel` attribute to `external`.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/external-referrer.html) -->
<!-- The below content is automatically added from ./../../apiExamples/external-referrer.html -->
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
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/external-referrer-ondark.html) -->
<!-- The below content is automatically added from ./../../apiExamples/external-referrer-ondark.html -->
Example link with
<auro-hyperlink
  ondark
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/external-referrer.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/external-referrer.html -->

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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/external-referrer-ondark.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/external-referrer-ondark.html -->

```html
Example link with
<auro-hyperlink
  ondark
  target="_blank"
  referrerpolicy
  href="https://www.portseattle.org/sea-tac">
  external target
</auro-hyperlink>
 , external domain with referrerpolicy attribute
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Navigation style links

When using `auro-hyperlink` as a navigation style, use `type="nav"` for the alternate UI. With this type, links will appear without an underline, but present the underline feedback on hover.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/navStyle.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/navStyle.html -->
  <auro-hyperlink
    type="nav"
    href="https://www.alaskaair.com">
    Navigation style link
  </auro-hyperlink>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/navStyle-ondark.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/navStyle-ondark.html -->
  <auro-hyperlink
    ondark
    type="nav"
    href="https://www.alaskaair.com">
    Navigation style link
  </auro-hyperlink>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/navStyle.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/navStyle.html -->

```html
<auro-hyperlink
  type="nav"
  href="https://www.alaskaair.com">
  Navigation style link
</auro-hyperlink>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/navStyle-ondark.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/navStyle-ondark.html -->

```html
<auro-hyperlink
  ondark
  type="nav"
  href="https://www.alaskaair.com">
  Navigation style link
</auro-hyperlink>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Relative vs absolute URLs and https enforcement

By default the `auro-hyperlink` will assume that the url passed is an absolute URL to `www.alaskaair.com` with the `https` protocol.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/relativevsabsolute.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/relativevsabsolute.html -->
  Relative href converted to absolute URL to <auro-hyperlink href="/route-map">route map</auro-hyperlink>.
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/relativevsabsolute_code.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/relativevsabsolute_code.html -->

```html
<!-- Web component example -->
Relative href converted to absolute URL to <auro-hyperlink href="/route-map">route map</auro-hyperlink>.

<!-- Output code in shadow DOM element -->
Relative href converted to absolute URL to <a class="hyperlink" href="https://www.alaskaair.com/route-map"><slot>route map</slot></a>.
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### https enforcement

Regardless of protocol used with `http` property, `auro-hyperlink` will rewrite the final reference with the correct `https` protocol.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/httpsEnforcement.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/httpsEnforcement.html -->
  http absolute URL <auro-hyperlink href="http://www.alaskaair.com/route-map">to route map</auro-hyperlink> or
  no hypertext transfer protocol absolute URL to <auro-hyperlink href="//www.alaskaair.com/route-map">route map</auro-hyperlink>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/httpsEnforcement_code.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/httpsEnforcement_code.html -->

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

Absolute URLs are not always preferred. When using relative URLs, use the `relative` attribute and `auro-hyperlink` will ignore the domain and the protocol.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/relativeUrl.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/relativeUrl.html -->
  Example of a <auro-hyperlink relative href="#">relative URL</auro-hyperlink>.
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/relativeUrl_code.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/relativeUrl_code.html -->

```html
<!-- Web component example -->
Example of a <auro-hyperlink relative href="#">relative URL</auro-hyperlink>
<!-- Output code in shadow DOM element -->
Example of a <a class="hyperlink" href="#"><slot>relative URL</slot></a>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Using telephone/text/mailto URLs protocols

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/URLscheme.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/URLscheme.html -->
  Example <auro-hyperlink href="sms:+18002527522">sms link</auro-hyperlink>.
  Example <auro-hyperlink href="tel:+18002527522">telephone link</auro-hyperlink>.
  Example <auro-hyperlink href="mailto:someone@alaskaair.com?cc=someone-else@alaskaair.com&bcc=someone-else-else@alaskaiar.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">email link</auro-hyperlink>.
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/URLscheme.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/URLscheme.html -->

```html
Example <auro-hyperlink href="sms:+18002527522">sms link</auro-hyperlink>.
Example <auro-hyperlink href="tel:+18002527522">telephone link</auro-hyperlink>.
Example <auro-hyperlink href="mailto:someone@alaskaair.com?cc=someone-else@alaskaair.com&bcc=someone-else-else@alaskaiar.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">email link</auro-hyperlink>.
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Call to action buttons

Call to action buttons, or "CTA" buttons are a special use case hybrid hyperlink/button solution. Semantically these links are hyperlinks, but take on the appearance of a button. While these look like the `auro-button`, there are slight differences and that is intentional. The `secondary` and `tertiary` attribute modifier options are also supported.

CTA buttons share the same icon support as the standard hyperlink for targets that open new browser tabs.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/cta.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/cta.html -->
  <auro-hyperlink type="cta" href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" href="https://www.alaskaair.com" target="_blank" >CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" href="https://www.portseattle.org/sea-tac" target="_blank" >CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" secondary href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" secondary href="https://www.alaskaair.com" target="_blank" >CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" secondary href="https://www.portseattle.org/sea-tac" target="_blank" >CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" tertiary href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" tertiary href="https://www.alaskaair.com" target="_blank" >CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" tertiary href="https://www.portseattle.org/sea-tac" target="_blank" >CTA Button</auro-hyperlink>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/cta-ondark.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/cta-ondark.html -->
  <auro-hyperlink type="cta" ondark href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" ondark href="https://www.alaskaair.com" target="_blank" >CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" ondark href="https://www.portseattle.org/sea-tac" target="_blank" >CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" ondark secondary href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" ondark secondary href="https://www.alaskaair.com" target="_blank" >CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" ondark secondary href="https://www.portseattle.org/sea-tac" target="_blank" >CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" ondark tertiary href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" ondark tertiary href="https://www.alaskaair.com" target="_blank" >CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" ondark tertiary href="https://www.portseattle.org/sea-tac" target="_blank" >CTA Button</auro-hyperlink>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/cta.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/cta.html -->

```html
<auro-hyperlink type="cta" href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
<auro-hyperlink type="cta" href="https://www.alaskaair.com" target="_blank" >CTA Button</auro-hyperlink>
<auro-hyperlink type="cta" href="https://www.portseattle.org/sea-tac" target="_blank" >CTA Button</auro-hyperlink>
<auro-hyperlink type="cta" secondary href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
<auro-hyperlink type="cta" secondary href="https://www.alaskaair.com" target="_blank" >CTA Button</auro-hyperlink>
<auro-hyperlink type="cta" secondary href="https://www.portseattle.org/sea-tac" target="_blank" >CTA Button</auro-hyperlink>
<auro-hyperlink type="cta" tertiary href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
<auro-hyperlink type="cta" tertiary href="https://www.alaskaair.com" target="_blank" >CTA Button</auro-hyperlink>
<auro-hyperlink type="cta" tertiary href="https://www.portseattle.org/sea-tac" target="_blank" >CTA Button</auro-hyperlink>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/cta-ondark.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/cta-ondark.html -->

```html
<auro-hyperlink type="cta" ondark href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
<auro-hyperlink type="cta" ondark href="https://www.alaskaair.com" target="_blank" >CTA Button</auro-hyperlink>
<auro-hyperlink type="cta" ondark href="https://www.portseattle.org/sea-tac" target="_blank" >CTA Button</auro-hyperlink>
<auro-hyperlink type="cta" ondark secondary href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
<auro-hyperlink type="cta" ondark secondary href="https://www.alaskaair.com" target="_blank" >CTA Button</auro-hyperlink>
<auro-hyperlink type="cta" ondark secondary href="https://www.portseattle.org/sea-tac" target="_blank" >CTA Button</auro-hyperlink>
<auro-hyperlink type="cta" ondark tertiary href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
<auro-hyperlink type="cta" ondark tertiary href="https://www.alaskaair.com" target="_blank" >CTA Button</auro-hyperlink>
<auro-hyperlink type="cta" ondark tertiary href="https://www.portseattle.org/sea-tac" target="_blank" >CTA Button</auro-hyperlink>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Fluid call to action buttons

In the following example, see how the `fluid` attribute alters the shape of the button to take up the full width of its parent container.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/cta-fluid.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/cta-fluid.html -->
  <auro-hyperlink type="cta" fluid href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" fluid secondary href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" fluid tertiary href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/cta-fluid.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/cta-fluid.html -->

```html
<auro-hyperlink type="cta" fluid href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
<auro-hyperlink type="cta" fluid secondary href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
<auro-hyperlink type="cta" fluid tertiary href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Small call to action buttons

In the following example, see how the `small` attribute alters the size of the button to be smaller than the normal `cta` button.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/cta-small.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/cta-small.html -->
  <auro-hyperlink type="cta" small href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" small href="https://www.alaskaair.com" target="_blank" >CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" small href="https://www.portseattle.org/sea-tac" target="_blank" >CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" small secondary href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" small secondary href="https://www.alaskaair.com" target="_blank" >CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" small secondary href="https://www.portseattle.org/sea-tac" target="_blank" >CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" small tertiary href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" small tertiary href="https://www.alaskaair.com" target="_blank" >CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" small tertiary href="https://www.portseattle.org/sea-tac" target="_blank" >CTA Button</auro-hyperlink>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/cta-small.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/cta-small.html -->

```html
<auro-hyperlink type="cta" small href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
<auro-hyperlink type="cta" small href="https://www.alaskaair.com" target="_blank" >CTA Button</auro-hyperlink>
<auro-hyperlink type="cta" small href="https://www.portseattle.org/sea-tac" target="_blank" >CTA Button</auro-hyperlink>
<auro-hyperlink type="cta" small secondary href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
<auro-hyperlink type="cta" small secondary href="https://www.alaskaair.com" target="_blank" >CTA Button</auro-hyperlink>
<auro-hyperlink type="cta" small secondary href="https://www.portseattle.org/sea-tac" target="_blank" >CTA Button</auro-hyperlink>
<auro-hyperlink type="cta" small tertiary href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
<auro-hyperlink type="cta" small tertiary href="https://www.alaskaair.com" target="_blank" >CTA Button</auro-hyperlink>
<auro-hyperlink type="cta" small tertiary href="https://www.portseattle.org/sea-tac" target="_blank" >CTA Button</auro-hyperlink>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Theme Support

The component may be restyled using the following code sample and changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../src/tokens.css) -->
<!-- The below code snippet is automatically added from ./../../src/tokens.css -->

```css
/* stylelint-disable custom-property-empty-line-before */
:host {
  --ds-auro-hyperlink-default-color-default: var(--ds-color-text-ui-default-default, #2c67b5);
  --ds-auro-hyperlink-default-container-color-default: transparent;
  --ds-auro-hyperlink-default-outline-color-default: transparent;
  --ds-auro-hyperlink-default-border-color-default: transparent;
  --ds-auro-hyperlink-visited-color-default: var(--ds-color-text-ui-default-default, #2c67b5);
  --ds-auro-hyperlink-visited-container-color-default: transparent;
  --ds-auro-hyperlink-visited-outline-color-default: transparent;
  --ds-auro-hyperlink-visited-border-color-default: transparent;
  --ds-auro-hyperlink-focus-color-default: var(--ds-color-text-ui-focus-default, #2c67b5);
  --ds-auro-hyperlink-focus-container-color-default: transparent;
  --ds-auro-hyperlink-focus-outline-color-default: transparent;
  --ds-auro-hyperlink-focus-border-color-default: transparent;
  --ds-auro-hyperlink-hover-color-default: var(--ds-color-text-ui-hover-default, #193d73);
  --ds-auro-hyperlink-hover-container-color-default: transparent;
  --ds-auro-hyperlink-hover-outline-color-default: transparent;
  --ds-auro-hyperlink-hover-border-color-default: transparent;
  --ds-auro-hyperlink-default-color-inverse: var(--ds-color-text-ui-default-inverse, #56bbde);
  --ds-auro-hyperlink-default-container-color-inverse: transparent;
  --ds-auro-hyperlink-default-outline-color-inverse: transparent;
  --ds-auro-hyperlink-default-border-color-inverse: transparent;
  --ds-auro-hyperlink-visited-color-inverse: var(--ds-color-text-ui-default-inverse, #56bbde);
  --ds-auro-hyperlink-visited-container-color-inverse: transparent;
  --ds-auro-hyperlink-visited-outline-color-inverse: transparent;
  --ds-auro-hyperlink-visited-border-color-inverse: transparent;
  --ds-auro-hyperlink-focus-color-inverse: var(--ds-color-text-ui-focus-inverse, #56bbde);
  --ds-auro-hyperlink-focus-container-color-inverse: transparent;
  --ds-auro-hyperlink-focus-outline-color-inverse: transparent;
  --ds-auro-hyperlink-focus-border-color-inverse: transparent;
  --ds-auro-hyperlink-hover-color-inverse: var(--ds-color-text-ui-hover-inverse, #a8e9f7);
  --ds-auro-hyperlink-hover-container-color-inverse: transparent;
  --ds-auro-hyperlink-hover-outline-color-inverse: transparent;
  --ds-auro-hyperlink-hover-border-color-inverse: transparent;
  --ds-auro-hyperlink-nav-default-color-default: var(--ds-color-text-ui-default-default, #2c67b5);
  --ds-auro-hyperlink-nav-default-container-color-default: transparent;
  --ds-auro-hyperlink-nav-default-outline-color-default: transparent;
  --ds-auro-hyperlink-nav-default-border-color-default: transparent;
  --ds-auro-hyperlink-nav-visited-color-default: var(--ds-color-text-ui-default-default, #2c67b5);
  --ds-auro-hyperlink-nav-visited-container-color-default: transparent;
  --ds-auro-hyperlink-nav-visited-outline-color-default: transparent;
  --ds-auro-hyperlink-nav-visited-border-color-default: transparent;
  --ds-auro-hyperlink-nav-focus-color-default: var(--ds-color-text-primary-inverse, #ffffff);
  --ds-auro-hyperlink-nav-focus-container-color-default: var(--ds-color-container-ui-primary-default-default, #2c67b5);
  --ds-auro-hyperlink-nav-focus-outline-color-default: var(--ds-color-container-ui-primary-default-default, #2c67b5);
  --ds-auro-hyperlink-nav-focus-border-color-default: var(--ds-color-container-ui-primary-default-default, #2c67b5);
  --ds-auro-hyperlink-nav-hover-color-default: var(--ds-color-text-ui-hover-default, #193d73);
  --ds-auro-hyperlink-nav-hover-container-color-default: transparent;
  --ds-auro-hyperlink-nav-hover-outline-color-default: transparent;
  --ds-auro-hyperlink-nav-hover-border-color-default: transparent;
  --ds-auro-hyperlink-nav-default-color-inverse: var(--ds-color-text-ui-default-inverse, #56bbde);
  --ds-auro-hyperlink-nav-default-container-color-inverse: transparent;
  --ds-auro-hyperlink-nav-default-outline-color-inverse: transparent;
  --ds-auro-hyperlink-nav-default-border-color-inverse: transparent;
  --ds-auro-hyperlink-nav-visited-color-inverse: var(--ds-color-text-ui-default-inverse, #56bbde);
  --ds-auro-hyperlink-nav-visited-container-color-inverse: transparent;
  --ds-auro-hyperlink-nav-visited-outline-color-inverse: transparent;
  --ds-auro-hyperlink-nav-visited-border-color-inverse: transparent;
  --ds-auro-hyperlink-nav-focus-color-inverse: var(--ds-color-text-primary-inverse, #ffffff);
  --ds-auro-hyperlink-nav-focus-container-color-inverse: var(--ds-color-container-ui-primary-focus-inverse, #56bbde);
  --ds-auro-hyperlink-nav-focus-outline-color-inverse: var(--ds-color-border-ui-default-inverse, #56bbde);
  --ds-auro-hyperlink-nav-focus-border-color-inverse: var(--ds-color-border-ui-default-inverse, #56bbde);
  --ds-auro-hyperlink-nav-hover-color-inverse: var(--ds-color-text-ui-hover-inverse, #a8e9f7);
  --ds-auro-hyperlink-nav-hover-container-color-inverse: transparent;
  --ds-auro-hyperlink-nav-hover-outline-color-inverse: transparent;
  --ds-auro-hyperlink-nav-hover-border-color-inverse: transparent;
  --ds-auro-hyperlink-cta-default-color-default: var(--ds-color-text-primary-inverse, #ffffff);
  --ds-auro-hyperlink-cta-default-container-color-default: var(--ds-color-ui-default-default, #0074c8);
  --ds-auro-hyperlink-cta-default-outline-color-default: var(--ds-color-ui-default-default, #0074c8);
  --ds-auro-hyperlink-cta-default-border-color-default: var(--ds-color-ui-default-default, #0074c8);
  --ds-auro-hyperlink-cta-visited-color-default: var(--ds-color-text-primary-inverse, #ffffff);
  --ds-auro-hyperlink-cta-visited-container-color-default: var(--ds-color-ui-default-default, #0074c8);
  --ds-auro-hyperlink-cta-visited-outline-color-default: var(--ds-color-ui-default-default, #0074c8);
  --ds-auro-hyperlink-cta-visited-border-color-default: var(--ds-color-ui-default-default, #0074c8);
  --ds-auro-hyperlink-cta-focus-color-default: var(--ds-color-text-primary-inverse, #ffffff);
  --ds-auro-hyperlink-cta-focus-container-color-default: var(--ds-color-ui-default-default, #0074c8);
  --ds-auro-hyperlink-cta-focus-outline-color-default: var(--ds-color-container-ui-secondary-default-default, #ffffff);
  --ds-auro-hyperlink-cta-focus-border-color-default: var(--ds-color-border-ui-focus-default, #2c67b5);
  --ds-auro-hyperlink-cta-hover-color-default: var(--ds-color-text-primary-inverse, #ffffff);
  --ds-auro-hyperlink-cta-hover-container-color-default: var(--ds-color-container-ui-primary-hover-default, #193d73);
  --ds-auro-hyperlink-cta-hover-outline-color-default: var(--ds-color-border-ui-hover-default, #193d73);
  --ds-auro-hyperlink-cta-hover-border-color-default: var(--ds-color-border-ui-hover-default, #193d73);
  --ds-auro-hyperlink-cta-default-color-inverse: var(--ds-color-text-primary-default, #2a2a2a);
  --ds-auro-hyperlink-cta-default-container-color-inverse: var(--ds-color-ui-default-inverse, #00cff0);
  --ds-auro-hyperlink-cta-default-outline-color-inverse: var(--ds-color-ui-default-inverse, #00cff0);
  --ds-auro-hyperlink-cta-default-border-color-inverse: var(--ds-color-ui-default-inverse, #00cff0);
  --ds-auro-hyperlink-cta-visited-color-inverse: var(--ds-color-text-primary-default, #2a2a2a);
  --ds-auro-hyperlink-cta-visited-container-color-inverse: var(--ds-color-ui-default-inverse, #00cff0);
  --ds-auro-hyperlink-cta-visited-outline-color-inverse: var(--ds-color-ui-default-inverse, #00cff0);
  --ds-auro-hyperlink-cta-visited-border-color-inverse: var(--ds-color-ui-default-inverse, #00cff0);
  --ds-auro-hyperlink-cta-focus-color-inverse: var(--ds-color-text-primary-default, #2a2a2a);
  --ds-auro-hyperlink-cta-focus-container-color-inverse: var(--ds-color-ui-default-inverse, #00cff0);
  --ds-auro-hyperlink-cta-focus-outline-color-inverse: var(--ds-color-container-ui-secondary-default-default, #ffffff);
  --ds-auro-hyperlink-cta-focus-border-color-inverse: var(--ds-color-border-ui-focus-inverse, #56bbde);
  --ds-auro-hyperlink-cta-hover-color-inverse: var(--ds-color-text-primary-default, #2a2a2a);
  --ds-auro-hyperlink-cta-hover-container-color-inverse: var(--ds-color-container-ui-primary-hover-inverse, #a8e9f7);
  --ds-auro-hyperlink-cta-hover-outline-color-inverse: var(--ds-color-border-ui-hover-inverse, #a8e9f7);
  --ds-auro-hyperlink-cta-hover-border-color-inverse: var(--ds-color-border-ui-hover-inverse, #a8e9f7);
  --ds-auro-hyperlink-cta-secondary-default-color-default: var(--ds-color-ui-default-default, #0074c8);
  --ds-auro-hyperlink-cta-secondary-default-container-color-default: var(--ds-color-background-lightest, #ffffff);
  --ds-auro-hyperlink-cta-secondary-default-outline-color-default: var(--ds-color-text-link-default, #0074c8);
  --ds-auro-hyperlink-cta-secondary-default-border-color-default: var(--ds-color-text-link-default, #0074c8);
  --ds-auro-hyperlink-cta-secondary-visited-color-default: var(--ds-color-ui-default-default, #0074c8);
  --ds-auro-hyperlink-cta-secondary-visited-container-color-default: var(--ds-color-background-lightest, #ffffff);
  --ds-auro-hyperlink-cta-secondary-visited-outline-color-default: var(--ds-color-text-link-default, #0074c8);
  --ds-auro-hyperlink-cta-secondary-visited-border-color-default: var(--ds-color-text-link-default, #0074c8);
  --ds-auro-hyperlink-cta-secondary-focus-color-default: var(--ds-color-ui-default-default, #0074c8);
  --ds-auro-hyperlink-cta-secondary-focus-container-color-default: var(--ds-color-container-ui-secondary-default-inverse, rgba(255, 255, 255, 0.03));
  --ds-auro-hyperlink-cta-secondary-focus-outline-color-default: var(--ds-color-border-ui-focus-default, #2c67b5);
  --ds-auro-hyperlink-cta-secondary-focus-border-color-default: var(--ds-color-border-ui-focus-default, #2c67b5);
  --ds-auro-hyperlink-cta-secondary-hover-color-default: var(--ds-color-ui-default-default, #0074c8);
  --ds-auro-hyperlink-cta-secondary-hover-container-color-default: var(--ds-color-container-ui-tertiary-hover-default, rgba(0, 0, 0, 0.12));
  --ds-auro-hyperlink-cta-secondary-hover-outline-color-default: var(--ds-color-border-ui-hover-default, #193d73);
  --ds-auro-hyperlink-cta-secondary-hover-border-color-default: var(--ds-color-border-ui-hover-default, #193d73);
  --ds-auro-hyperlink-cta-secondary-default-color-inverse: var(--ds-color-text-ui-default-inverse, #56bbde);
  --ds-auro-hyperlink-cta-secondary-default-container-color-inverse: var(--ds-color-container-ui-secondary-default-inverse, rgba(255, 255, 255, 0.03));
  --ds-auro-hyperlink-cta-secondary-default-outline-color-inverse: var(--ds-color-border-ui-focus-inverse, #56bbde);
  --ds-auro-hyperlink-cta-secondary-default-border-color-inverse: var(--ds-color-border-ui-focus-inverse, #56bbde);
  --ds-auro-hyperlink-cta-secondary-visited-color-inverse: var(--ds-color-text-ui-default-inverse, #56bbde);
  --ds-auro-hyperlink-cta-secondary-visited-container-color-inverse: var(--ds-color-container-ui-secondary-default-inverse, rgba(255, 255, 255, 0.03));
  --ds-auro-hyperlink-cta-secondary-visited-outline-color-inverse: var(--ds-color-border-ui-focus-inverse, #56bbde);
  --ds-auro-hyperlink-cta-secondary-visited-border-color-inverse: var(--ds-color-border-ui-focus-inverse, #56bbde);
  --ds-auro-hyperlink-cta-secondary-focus-color-inverse: var(--ds-color-text-ui-default-inverse, #56bbde);
  --ds-auro-hyperlink-cta-secondary-focus-container-color-inverse: var(--ds-color-container-ui-secondary-default-inverse, rgba(255, 255, 255, 0.03));
  --ds-auro-hyperlink-cta-secondary-focus-outline-color-inverse: var(--ds-color-border-ui-focus-inverse, #56bbde);
  --ds-auro-hyperlink-cta-secondary-focus-border-color-inverse: var(--ds-color-border-ui-focus-inverse, #56bbde);
  --ds-auro-hyperlink-cta-secondary-hover-color-inverse: var(--ds-color-text-ui-hover-inverse, #a8e9f7);
  --ds-auro-hyperlink-cta-secondary-hover-container-color-inverse: var(--ds-color-container-ui-secondary-hover-inverse, rgba(255, 255, 255, 0.12));
  --ds-auro-hyperlink-cta-secondary-hover-outline-color-inverse: var(--ds-color-border-ui-hover-inverse, #a8e9f7);
  --ds-auro-hyperlink-cta-secondary-hover-border-color-inverse: var(--ds-color-border-ui-hover-inverse, #a8e9f7);
  --ds-auro-hyperlink-cta-tertiary-default-color-default: var(--ds-color-ui-default-default, #0074c8);
  --ds-auro-hyperlink-cta-tertiary-default-container-color-default: var(--ds-color-container-tertiary-default, rgba(0, 0, 0, 0.03));
  --ds-auro-hyperlink-cta-tertiary-default-outline-color-default: transparent;
  --ds-auro-hyperlink-cta-tertiary-default-border-color-default: transparent;
  --ds-auro-hyperlink-cta-tertiary-visited-color-default: var(--ds-color-ui-default-default, #0074c8);
  --ds-auro-hyperlink-cta-tertiary-visited-container-color-default: var(--ds-color-container-tertiary-default, rgba(0, 0, 0, 0.03));
  --ds-auro-hyperlink-cta-tertiary-visited-outline-color-default: transparent;
  --ds-auro-hyperlink-cta-tertiary-visited-border-color-default: transparent;
  --ds-auro-hyperlink-cta-tertiary-focus-color-default: var(--ds-color-ui-default-default, #0074c8);
  --ds-auro-hyperlink-cta-tertiary-focus-container-color-default: var(--ds-color-container-tertiary-default, rgba(0, 0, 0, 0.03));
  --ds-auro-hyperlink-cta-tertiary-focus-outline-color-default: var(--ds-color-border-ui-focus-default, #2c67b5);
  --ds-auro-hyperlink-cta-tertiary-focus-border-color-default: transparent;
  --ds-auro-hyperlink-cta-tertiary-hover-color-default: var(--ds-color-ui-default-default, #0074c8);
  --ds-auro-hyperlink-cta-tertiary-hover-container-color-default: var(--ds-color-container-ui-tertiary-hover-default, rgba(0, 0, 0, 0.12));
  --ds-auro-hyperlink-cta-tertiary-hover-outline-color-default: transparent;
  --ds-auro-hyperlink-cta-tertiary-hover-border-color-default: transparent;
  --ds-auro-hyperlink-cta-tertiary-default-color-inverse: var(--ds-color-text-ui-default-inverse, #56bbde);
  --ds-auro-hyperlink-cta-tertiary-default-container-color-inverse: var(--ds-color-container-ui-tertiary-default-inverse, rgba(255, 255, 255, 0.12));
  --ds-auro-hyperlink-cta-tertiary-default-outline-color-inverse: transparent;
  --ds-auro-hyperlink-cta-tertiary-default-border-color-inverse: transparent;
  --ds-auro-hyperlink-cta-tertiary-visited-color-inverse: var(--ds-color-text-ui-default-inverse, #56bbde);
  --ds-auro-hyperlink-cta-tertiary-visited-container-color-inverse: var(--ds-color-container-ui-tertiary-default-inverse, rgba(255, 255, 255, 0.12));
  --ds-auro-hyperlink-cta-tertiary-visited-outline-color-inverse: transparent;
  --ds-auro-hyperlink-cta-tertiary-visited-border-color-inverse: transparent;
  --ds-auro-hyperlink-cta-tertiary-focus-color-inverse: var(--ds-color-text-ui-default-inverse, #56bbde);
  --ds-auro-hyperlink-cta-tertiary-focus-container-color-inverse: var(--ds-color-container-ui-secondary-focus-inverse, rgba(255, 255, 255, 0.03));
  --ds-auro-hyperlink-cta-tertiary-focus-outline-color-inverse: var(--ds-color-border-ui-focus-inverse, #56bbde);
  --ds-auro-hyperlink-cta-tertiary-focus-border-color-inverse: transparent;
  --ds-auro-hyperlink-cta-tertiary-hover-color-inverse: var(--ds-color-text-ui-hover-inverse, #a8e9f7);
  --ds-auro-hyperlink-cta-tertiary-hover-container-color-inverse: var(--ds-color-container-ui-tertiary-hover-inverse, rgba(255, 255, 255, 0.25));
  --ds-auro-hyperlink-cta-tertiary-hover-outline-color-inverse: transparent;
  --ds-auro-hyperlink-cta-tertiary-hover-border-color-inverse: transparent;
}
```
<!-- AURO-GENERATED-CONTENT:END -->
