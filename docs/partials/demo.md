# Hyperlink

Hyperlinks form the backbone of how users navigate through a site or app. The following example illustrates how the `auro-hyperlink` component can be used. Common api attributes include `href`, `nav`, `target` and more. For a full list of attributes, see the [api documentation](http://auro.alaskaair.com/components/auro/hyperlink/api).

## Default

If the `href` attribute is not added, the hyperlink element will render back simple text.

<div class="exampleWrapper" aria-hidden>
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../demo/partials/default.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../demo/partials/default.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## External links

Hyperlinks when used with the `target="_blank"` attribute are domain aware and return either an internal domain new-window icon versus an icon that communicates users will be taken to a new domain.

For link security purposes, when using the `target="_blank"` attribute, this implicitly provides the same `rel` behavior as setting `rel="noopener"`. For additional security, Auro applies `noreferrer` to the `rel` attribute by default.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../demo/partials//external.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../demo/partials/external.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### External links with referrerpolicy

When using the `target="_blank"` attribute, to override the default use of `rel="noreferrer"` use the `referrerpolicy` attribute.

Using this attribute will use the `strict-origin-when-cross-origin` policy type. This sends a full URL when performing a same-origin request, only sends the origin when the protocol security level stays the same (HTTPS→HTTPS), and sends no header to a less secure destination (HTTPS→HTTP).

This will also set the `rel` attribute to `external`.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../demo/partials/external-referrer.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../demo/partials/external-referrer.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Navigation style links

When using `auro-hyperlink` as a navigation style, use `type="nav"` for the alternate UI. With this type, links will appear without an underline, but present the underline feedback on hover.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../demo/partials/navStyle.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../demo/partials/navStyle.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

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

#### Using telephone/text/mailto URLs protocols

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../demo/partials/URLscheme.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../demo/partials/URLscheme.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Call to action buttons

Call to action buttons, or "CTA" buttons are a special use case hybrid hyperlink/button solution. Semantically these links are hyperlinks, but take on the appearance of a button. While these look like the `auro-button`, there are slight differences and that is intentional. A `secondary` attribute modifier option is also supported.

CTA buttons share the same icon support as the standard hyperlink for targets that open new browser tabs.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../demo/partials/cta.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../demo/partials/cta.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Fluid call to action buttons

In the following example, see how the `fluid` attribute alters the shape of the button to take up the full width of its parent container.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../demo/partials/cta-fluid.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../demo/partials/cta-fluid.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Small call to action buttons

In the following example, see how the `small` attribute alters the size of the button to be smaller than the normal `cta` button.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../demo/partials/cta-small.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../demo/partials/cta-small.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Using role="button"

Aside from the standard hyperlink use-case, the `auro-hyperlink` element is intended to be used for button situations as illustrated below. Assuming the role of button, `auro-hyperlink` also will track the `aria-pressed` state.

**Note:** Any `href` will be ignored when using `role="button"`. A click-event must be passed to the element as illustrated in the example below.

**Accessibility:** Review the code examples, the user of this element are responsible for keyboard support when using `role="button"`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../demo/partials/roleButton.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../demo/partials/roleButton.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../demo/util.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Navigation pattern example

Auro's hyperlink element can be used in many creative ways in combination with other elements for easy-to-manage UI solutions. This example uses the `auro-hyperlink` with the `auro-icon` elements with a little CSS to create a pretty popular nav style UI.

The `auro-icon` element comes with some pre-defined opinions, but these are easily overwritten by binding CSS directly to the custom element itself. Remember to also use the `customColor` attribute with `auro-icon` so that the SVG will inherit the link and hover colors of the hyperlink.

<div class="exampleWrapper" style="display: flex; justify-content: space-between;">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../demo/partials/navPattern.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../demo/partials/navPattern.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Setting focus programmatically

The following example illustrates a use case where a user may want to set a user's focus programmatically. I.e. through another click event.

<auro-button onclick="getFocus()">click me for focus</auro-button>

<div class="exampleWrapper" style="display: flex; justify-content: space-between;">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../demo/partials/focus.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../../demo/util_focus.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../demo/partials/focus.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
