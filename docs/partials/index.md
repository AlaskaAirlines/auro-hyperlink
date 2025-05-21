<style>
  .exampleWrapper--ondark {
    color: var(--ds-color-text-primary-inverse);
  }
</style>

<!--
The index.md file is a compiled document. No edits should be made directly to this file.
This file is generated based on a template fetched from `./apiExamples/index.md`
-->

# Hyperlink

Hyperlinks form the backbone of how users navigate through a site or app. The following example illustrates how the `auro-hyperlink` component can be used. Common api attributes include `href`, `nav`, `target` and more. For a full list of attributes, see the [api documentation](http://auro.alaskaair.com/components/auro/hyperlink/api).

## Default

If the `href` attribute is not added, the hyperlink element will render back simple text.

<div class="exampleWrapper" aria-hidden>
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<div class="exampleWrapper--ondark" aria-hidden>
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic-ondark.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic-ondark.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Navigation pattern example

Auro's hyperlink element can be used in many creative ways in combination with other elements for easy-to-manage UI solutions. This example uses the `auro-hyperlink` with the `auro-icon` elements with a little CSS to create a pretty popular nav style UI.

The `auro-icon` element comes with some pre-defined opinions, but these are easily overwritten by binding CSS directly to the custom element itself. Remember to also use the `customColor` attribute with `auro-icon` so that the SVG will inherit the link and hover colors of the hyperlink.

<div class="exampleWrapper" style="display: flex; justify-content: space-between;">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/navPattern.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<div class="exampleWrapper--ondark" style="display: flex; justify-content: space-between;">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/navPattern-ondark.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/navPattern.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/navPattern-ondark.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Unsupported types

Not all URL types are supported for security reasons. Two common types that are worth mentioning are `javaScript:` and `data:`.

The following examples illustrate the use of `<auro-hyperlink>` with either no `href`, `javaScript:` or `data:` protocols being used. Note that `javascript` returns a shadowDOM as simple text. Using an unsupported protocol like `data:`, the protocol is removed from the provided `href` value.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/nonSupported.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/nonSupported.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom element. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-hyperlink` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `AuroHyperlink.register(name)` method and pass in a unique name.

```js
import { AuroHyperlink } from '../src/auro-hyperlink.js';

AuroHyperlink.register('custom-hyperlink');
```

This will create a new custom element that you can use in your HTML that will function identically to the `<auro-hyperlink>` element.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/custom.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/custom.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
