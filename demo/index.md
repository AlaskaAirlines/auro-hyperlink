<!--
The index.md file is a compiled document. No edits should be made directly to this file.
This file is generated based on a template fetched from `./apiExamples/index.md`
-->

# Hyperlink

Hyperlinks form the backbone of how users navigate through a site or app. The following example illustrates how the `auro-hyperlink` component can be used. Common api attributes include `href`, `nav`, `target` and more. For a full list of attributes, see the [api documentation](http://auro.alaskaair.com/components/auro/hyperlink/api).

## Default

If the `href` attribute is not added, the hyperlink element will render back simple text.

<div class="exampleWrapper" aria-hidden>
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-hyperlink>No href supplied</auro-hyperlink><br>
  Welcome to <auro-hyperlink href="https://www.alaskaair.com">Alaska Airlines</auro-hyperlink>.
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
</auro-accordion>

## Navigation pattern example

Auro's hyperlink element can be used in many creative ways in combination with other elements for easy-to-manage UI solutions. This example uses the `auro-hyperlink` with the `auro-icon` elements with a little CSS to create a pretty popular nav style UI.

The `auro-icon` element comes with some pre-defined opinions, but these are easily overwritten by binding CSS directly to the custom element itself. Remember to also use the `customColor` attribute with `auro-icon` so that the SVG will inherit the link and hover colors of the hyperlink.

<div class="exampleWrapper" style="display: flex; justify-content: space-between;">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/navPattern.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/navPattern.html -->
  <auro-hyperlink href="/last" type="nav">
    <auro-icon category="interface" name="chevron-left" customColor style="line-height: 1"></auro-icon>
    Click here to go back
  </auro-hyperlink>
  <auro-hyperlink href="/next" type="nav">
    Click here to go forward
    <auro-icon category="interface" name="chevron-right" customColor style="line-height: 1"></auro-icon>
  </auro-hyperlink>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/navPattern.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/navPattern.html -->

```html
<auro-hyperlink href="/last" type="nav">
  <auro-icon category="interface" name="chevron-left" customColor style="line-height: 1"></auro-icon>
  Click here to go back
</auro-hyperlink>
<auro-hyperlink href="/next" type="nav">
  Click here to go forward
  <auro-icon category="interface" name="chevron-right" customColor style="line-height: 1"></auro-icon>
</auro-hyperlink>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Using role="button"

Aside from the standard hyperlink use-case, the `auro-hyperlink` element is intended to be used for button situations as illustrated below. Assuming the role of button, `auro-hyperlink` also will track the `aria-pressed` state.

**Note:** Any `href` will be ignored when using `role="button"`. A click-event must be passed to the element as illustrated in the example below.

**Accessibility:** Review the code examples, the user of this element are responsible for keyboard support when using `role="button"`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/roleButton.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/roleButton.html -->
  <auro-hyperlink href="http://www.alaskaair.com" role="button" id="roleButton">Cancel button</auro-hyperlink>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/roleButton.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/roleButton.html -->

```html
<auro-hyperlink href="http://www.alaskaair.com" role="button" id="roleButton">Cancel button</auro-hyperlink>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/roleButton.js) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/roleButton.js -->

```js
export function roleButtonExample() {
  const roleButton = document.getElementById('roleButton');

  roleButton.addEventListener('click', () => {
    alert(`You clicked the role button!`);
  });

  roleButton.addEventListener('keydown', handleKeyPress);
}

function handleKeyPress(event) {
  if(event.key === 'Enter') {
    event.preventDefault();
    alert('Win for a11y! The return key submits!')
  }
  else if(event.key === ' ') {
    event.preventDefault();
    alert('Win for a11y! The spacebar submits!')
  }
}
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom clement. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-hyperlink` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `registerComponent(name)` method and pass in a unique name.

```js
import './node_modules/@aurodesignsystem/auro-hyperlink';
registerComponent('custom-hyperlink');
```

This will create a new custom element that you can use in your HTML that will function identically to the `<auro-hyperlink>` element.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/custom.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/custom.html -->
  <custom-hyperlink>No href supplied</custom-hyperlink><br>
  Welcome to <custom-hyperlink href="https://www.alaskaair.com">Alaska Airlines</custom-hyperlink>.
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/custom.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/custom.html -->

```html
<custom-hyperlink>No href supplied</custom-hyperlink><br>
Welcome to <custom-hyperlink href="https://www.alaskaair.com">Alaska Airlines</custom-hyperlink>.
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
