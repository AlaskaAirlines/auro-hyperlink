# Hyperlink

Hyperlinks form the backbone of how users navigate through a site or app. The following example illustrates how the `auro-hyperlink` component can be used. Common api attributes include `href`, `nav`, `target` and more. For a full list of attributes, see the [api documentation](http://auro.alaskaair.com/components/auro/hyperlink/api).

## Default

If the `href` attribute is not added, the hyperlink element will render back simple text.


<div class="exampleWrapper">
  <auro-hyperlink>No href supplied</auro-hyperlink><br>
  <auro-hyperlink href="https://www.alaskaair.com">Welcome to Alaska Airlines</auro-hyperlink>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-hyperlink>No href supplied</auro-hyperlink>
  <auro-hyperlink href="https://www.alaskaair.com">Welcome to Alaska Airlines</auro-hyperlink>
  ```

</auro-accordion>

## External links

Hyperlinks when used with the `target="_blank"` attribute are domain aware and return either an internal domain new-window icon versus an icon that communicates users will be taken to a new domain

<div class="exampleWrapper">
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
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  Example link with
  <auro-hyperlink
    target="_blank"
    href="https://www.alaskaair.com">
    external target
  </auro-hyperlink>
  but same domain

  Example link with
  <auro-hyperlink
    target="_blank"
    href="https://www.portseattle.org/sea-tac">
    external target
  </auro-hyperlink>
  with external domain
  ```

</auro-accordion>

## Navigation style links

When using `auro-hyperlink` as a navigation style, use `type="nav"` for the alternate UI. With this type, links will appear without an underline, but present the underline feedback on hover.

<div class="exampleWrapper">
  <auro-hyperlink
    type="nav"
    href="https://www.alaskaair.com">
    Navigation style link
  </auro-hyperlink>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-hyperlink
    type="nav"
    href="https://www.alaskaair.com">
    Navigation style link
  </auro-hyperlink>
  ```

</auro-accordion>

## Relative vs absolute URLs and https enforcement

By default the `auro-hyperlink` will assume that the url passed is an absolute URL to `www.alaskaair.com` with the `https` protocol.

<div class="exampleWrapper">
  Relative href converted to absolute URL to <auro-hyperlink href="/route-map" nav>route map</auro-hyperlink>.
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  // Web component example
  Relative href converted to absolute URL to <auro-hyperlink href="/route-map" nav>route map</auro-hyperlink>.

  // Output code in shadow DOM element
  Relative href converted to absolute URL to <a class="hyperlink" href="https://www.alaskaair.com/route-map"><slot>route map</slot></a>.
  ```

</auro-accordion>

#### https enforcement

Regardless of protocol used with `http` property, `auro-hyperlink` will rewrite the final reference with the correct `https` protocol.

<div class="exampleWrapper">
  http absolute URL <auro-hyperlink href="http://www.alaskaair.com/route-map">to route map</auro-hyperlink> or
  no hypertext transfer protocol absolute URL to <auro-hyperlink href="//www.alaskaair.com/route-map">route map</auro-hyperlink>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  // Web component example
  http absolute URL <auro-hyperlink href="http://www.alaskaair.com/route-map">to route map</auro-hyperlink> or
  no hypertext transfer protocol absolute URL to <auro-hyperlink href="//www.alaskaair.com/route-map">route map</auro-hyperlink>

  // Output code in shadow DOM element
  http absolute URL <a class="hyperlink" href="https://www.alaskaair.com/route-map"><slot>to route map</slot></a>
  no hypertext transfer protocol absolute URL to <a class="hyperlink" href="https://www.alaskaair.com/route-map"><slot>route map</slot></a>
  ```

</auro-accordion>

#### Relative URLs

Absolute URLs are not always preferred. When using relative URLs, use the `relative` attribute and `auro-hyperlink` will ignore the domain and the protocol.

<div class="exampleWrapper">
  Example of a <auro-hyperlink relative href="#">relative URL</auro-hyperlink>.
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  // Web component example
  Example of a <auro-hyperlink relative href="#">relative URL</auro-hyperlink>

  // Output code in shadow DOM element
  Example of a <a class="hyperlink" href="#"><slot>relative URL</slot></a>
  ```

</auro-accordion>


## Call to action buttons

Call to action buttons, or "CTA" buttons are a special use case hybrid hyperlink/button solution. Semantically these links are hyperlinks, but take on the appearance of a button. While these look like the `auro-button`, there are slight differences and that is intentional. A `secondary` attribute modifier option is also supported.

CTA buttons share the same icon support as the standard hyperlink for targets that open new browser tabs.

<div class="exampleWrapper">
  <auro-hyperlink type="cta" href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" href="https://www.alaskaair.com" target="_blank" >CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" href="https://www.portseattle.org/sea-tac" target="_blank" >CTA Button</auro-hyperlink>
</div>
<br>
<div class="exampleWrapper">
  <auro-hyperlink type="cta" secondary href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" secondary href="https://www.alaskaair.com" target="_blank" >CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" secondary href="https://www.portseattle.org/sea-tac" target="_blank" >CTA Button</auro-hyperlink>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-hyperlink type="cta" href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" href="https://www.alaskaair.com" target="_blank" >CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" href="https://www.portseattle.org/sea-tac" target="_blank" >CTA Button</auro-hyperlink>

  <auro-hyperlink type="cta" secondary href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" secondary href="https://www.alaskaair.com" target="_blank" >CTA Button</auro-hyperlink>
  <auro-hyperlink type="cta" secondary href="https://www.portseattle.org/sea-tac" target="_blank" >CTA Button</auro-hyperlink>
  ```

</auro-accordion>

## Using role="button"

Aside from the standard hyperlink use-case, the `auro-hyperlink` element is intended to be used for button situations as illustrated below. Assuming the role of button, `auro-hyperlink` also will track the `aria-pressed` state.

**Note:** Any `href` will be ignored when using `role="button"`. A click-event must be passed to the element as illustrated in the example below.

**Accessibility:** Review the code examples, the user of this element are responsible for keyboard support when using `role="button"`.

<div class="exampleWrapper">
  <auro-hyperlink
    href="http://www.alaskaair.com"
    role="button"
    onClick="sayHello()"
    onKeyDown="handleKeyPress(event)">
    Cancel button
  </auro-hyperlink>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-hyperlink
    href="http://www.alaskaair.com"
    role="button"
    onClick="sayHello()"
    onKeyDown="handleKeyPress(event)">
    Cancel button
  </auro-hyperlink>
  ```

  <!-- AURO-GENERATED-CONTENT:START (CODE:src=./util.js) -->
  <!-- The below code snippet is automatically added from ./util.js -->
  ```js
  function sayHello() {
    alert('Hello, you clicked the button!');
  }
  
  function handleKeyPress(event) {
    if(event.keyCode === 13) {
      event.preventDefault();
      alert('Win for a11y! The return key submits!')
    }
    else if(event.keyCode === 32) {
      event.preventDefault();
      alert('Win for a11y! The spacebar submits!')
    }
  }
  ```
  <!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Navigation pattern example

Auro's hyperlink element can be used in many creative ways in combination with other elements for easy-to-manage UI solutions. This example uses the `auro-hyperlink` with the `auro-icon` elements with a little CSS to create a pretty popular nav style UI.

The `auro-icon` element comes with some pre-defined opinions, but these are easily overwritten by binding CSS directly to the custom element itself. Remember to also use the `customColor` attribute with `auro-icon` so that the SVG will inherit the link and hover colors of the hyperlink.

<div class="exampleWrapper" style="display: flex; justify-content: space-between;">
  <auro-hyperlink href="/last" type="nav">
    <auro-icon category="interface" name="chevron-left" customColor style="line-height: 1"></auro-icon>
    Click here to go back
  </auro-hyperlink>

  <auro-hyperlink href="/next" type="nav">
    Click here to go forward
    <auro-icon category="interface" name="chevron-right" customColor style="line-height: 1"></auro-icon>
  </auro-hyperlink>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-hyperlink href="/" type="nav">
    <auro-icon category="interface" name="chevron-left" customColor style="line-height: 1"></auro-icon>
    Click here to go back
  </auro-hyperlink>

  <auro-hyperlink href="/" type="nav">
    Click here to go forward
    <auro-icon category="interface" name="chevron-right" customColor style="line-height: 1"></auro-icon>
  </auro-hyperlink>
  ```

</auro-accordion>
