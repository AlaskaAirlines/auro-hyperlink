# ods-hyperlink / auro-hyperlink

[![Build Status](https://travis-ci.org/AlaskaAirlines/OrionStatelessComponents__ods-hyperlink.svg?branch=master)](https://travis-ci.org/AlaskaAirlines/OrionStatelessComponents__ods-hyperlink)
![npm (scoped)](https://img.shields.io/npm/v/@alaskaairux/ods-hyperlink.svg?color=orange)
![NPM](https://img.shields.io/npm/l/@alaskaairux/ods-hyperlink.svg?color=blue)

`<ods-hyperlink>` and `<auro-hyperlink>` are wrapper components for an HTML `<a>` element containing styling and behavior.

## Docs

All information regarding Project Setup, Technical Details, Tests and information regarding ODS Stateless Components can be found in the [./docs](https://github.com/AlaskaAirlines/OrionStatelessComponents__docs) repository.

## Deprecated

During the transition from Orion to Auro, there will be specific actions taken to address a clean transition and proper deprecation of Orion resources.

1. `<ods-hyperlink>` will continue to be supported until an official EOL has been communicated
1. [Alternate build solutions](#alternate-build-solutions) are no longer supported and will be removed with next MAJOR release

## New features

1. A new component `<auro-hyperlink>` is available that only consumes Auro resources to ensure a minimum weight and clean transition process for engineers
1. See [Auro API](#auro-properties) for new Auro component


## Install

```shell
$ npm i @alaskaairux/ods-hyperlink
```

### Design Token CSS Custom Property dependency

The use of any Web Component has a dependency on the [Orion/Auro Design Tokens (npm install)](https://www.npmjs.com/package/@alaskaairux/orion-design-tokens).

See repository and API information [here](https://github.com/AlaskaAirlines/OrionDesignTokens).

### CSS Custom Property fallbacks

CSS Custom Properties are not supported in older browsers. For this, fallback properties are pre-generated and included with the npm. Any update to the Orion Design Tokens will be immediately reflected with browsers that support CSS Custom Properties, legacy browsers will require updated components with pre-generated fallback properties.

### Define dependency in project component

Define the component dependency within each component that is using the `<ods-hyperlink>` component.

```javascript
import "@alaskaairux/ods-hyperlink";

or

import "@alaskaairux/ods-hyperlink/dist/auro-hyperlink";
```

**Reference component in HTML**

```html
<ods-hyperlink>Hello World!</ods-hyperlink>

<auro-hyperlink>Hello World!</auro-hyperlink>
```

## Element ods-hyperlink

### hyperlink use cases

The `<ods-hyperlink>` or `<auro-hyperlink>` elements should be used in situations where users may:

* stand-alone link element for navigation
* inline link element for navigation
* optional role as button when hyperlink UI is needed for submit action
* optional role as tab when hyperlink UI is needed for a tablist

### Orion Properties:

| Attribute | value type | Description |
|----|----|----|
| buttontype | string | Type of button defines the visual styling. Option: `secondary` |
| cta | boolean | Specifies the style of the hyperlink to appear as a CTA button |
| download | boolean | Specifies that the target will be downloaded when a user clicks on the hyperlink |
| darktheme | boolean | Specifies dark theme use of hyperlink |
| href | string | Specifies the URL of the page the link goes to |
| inline | boolean | Displays an element as an inline element. Any height and width properties will have no effect |
| rel | string | Specifies the relationship between the current document and the linked document |
| responsive | boolean | used with `cta` button style; sets button to have automatic responsive layout properties |
| role | string | Use for aria roles; currently support `tab` and `button` for extended experiences |
| tabisactive | boolean | Indicates if tab is to be displayed as active state (true, false)† |
| target | string | Specifies where to open the linked document |

† See `role="tab"` use example below for further details about this feature

### Auro Properties:

| Attribute | value type | Description |
|----|----|----|
| download | boolean | Specifies that the target will be downloaded when a user clicks on the hyperlink |
| href | string | Specifies the URL of the page the link goes to |
| nav | boolean | Displays element as block element for use as navigation |
| ondark | boolean | Specifies dark theme use of hyperlink |
| rel | string | Specifies the relationship between the current document and the linked document |
| role | string | Use for aria roles; currently supports `button` for extended experiences |
| target † | string | Specifies where to open the linked document |

† Using `_blank` will place external-link icon after hyperlink for accessibility and populate `rel` attribute with `noopener noreferre`.

## Role button, keyboard support and accessibility

When using the `role="button"` attribute, `<ods-hyperlink>` and `<auro-hyperlink>` have pre-configured support for `aria-pressed` rules. There is no need to code this outside the scope of the WC.

Managing `onclick` and `onkeypress` events are the responsibility of the user. See the following example for how to use `<ods-hyperlink>` or `<auro-hyperlink>` in concert with keyboard events to meet accessibility standards.

```html
<ods-hyperlink id="cancel" role="button" onclick="clickMe(event)" onkeypress="keyPress(event)">Cancel update!</ods-hyperlink>

<script>
  function clickMe(e) {
    console.log('You clicked me');
  }

  function keyPress(e) {
    if(event.keyCode === 13) {
      e.preventDefault();
      console.log('You pressed either the RETURN key!');
    }

    if(event.keyCode === 32) {
      e.preventDefault();
      console.log('You pressed either the SPACEBAR key!');
    }
  }
</script>
```

## Custom style support

__Not supported with auro-hyperlink__

The default `<ods-hyperlink>` has padding on the LEFT and the RIGHT of the element. If this padding is not required, the following CSS classes are supported:

| Class | Description |
|---|---|
| util_paddingLeft--none | Removes the padding on the LEFT of the element |
| util_paddingRight--none | Removes the padding on the RIGHT of the element |

No additional dependency on Orion Web Core Style Sheets is required.

## API Code Examples

**Default hyperlink**

```html
<ods-hyperlink href="//">Go to Alaska Airlines!</ods-hyperlink>

<auro-hyperlink href="//">Go to Alaska Airlines!</auro-hyperlink>
```

**Inline hyperlink (ods only)**

```html
A link to <ods-hyperlink href="//" inline>Alaska Airlines!</ods-hyperlink> and then ...
```

**Nav hyperlink (auro only)**

```html
<auro-hyperlink href="//" nav>Alaska Airlines!</auro-hyperlink>
```

**Hyperlink with `utility class` option (ods only)**

```html
<ods-hyperlink class="util_paddingLeft--none" href="http://www.alaskaair.com">Go to Alaska Airlines!</ods-hyperlink>
```

**Hyperlink with `download` option**

```html
<ods-hyperlink download href="assets/thing.pdf">Download thing.pdf</ods-hyperlink>

<auro-hyperlink download href="assets/thing.pdf">Download thing.pdf</auro-hyperlink>
```

**Hyperlink with `role=button` option**

```html
<ods-hyperlink role="button">Cancel</ods-hyperlink>

<auro-hyperlink role="button">Cancel</auro-hyperlink>
```

When using the `role="button"` option, `<ods-hyperlink>` will auto address a11y `aria-pressed` status when using the mouse, return key or spacebar.

**Hyperlink with `role=tab` option (orion only)**

```html
<div role="tablist" class="ods-tablist">
  <ods-hyperlink tabisactive="true" role="tab">Tab One</ods-hyperlink>
  <ods-hyperlink role="tab">Tab Two</ods-hyperlink>
</div>
```

When using the `role="tab"` option, `<ods-hyperlink>` is required to be wrapped in a container with `role="tablist"` in order to be a11y compliant. The use of `class="ods-tablist"` will address the desired UI experince. This CSS selector has a dependency on The Orion Web Code Style Sheet library.

**Hyperlink with `rel` option**

```html
<ods-hyperlink rel="nofollow" href="//">SEO nofollow</ods-hyperlink>

<auro-hyperlink rel="nofollow" href="//">SEO nofollow</auro-hyperlink>
```

**Hyperlink with `target` option**

```html
<ods-hyperlink href="//" target="_blank">Go to Alaska Airlines!</ods-hyperlink>

<auro-hyperlink href="//" target="_blank">Go to Alaska Airlines!</auro-hyperlink>
```

**Hyperlink with `cta` option (ods only)**

```html
<ods-hyperlink href="//" target="_blank" cta>Go to Alaska Airlines!</ods-hyperlink>
```

When using the `target` option and the string `_blank`, the \<ods-hyperlink> component will address the necessary [vulnerability issues](https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/) without additional effort from the user of the component.

## Alternate build solutions

__DEPRECATED: support will be removed with next major release__

Why would you need this? With all Orion custom elements the CSS for the element is embedded within the shadow DOM of the custom element. If your development environment is not allowing for the use of shadow DOM elements, the CSS for each element is distributed via additional resources within the npm package.

[Read more about how to use alternate CSS build resources](https://github.com/AlaskaAirlines/OrionStatelessComponents__docs/blob/master/src/ALT_BUILD.md)

## Run locally and development

To commit to this project, if you are not part of the core team, you will be required to fork the repo prior to submitting a pull request.

Please be sure to review the [contribution guidelines](.github/CONTRIBUTING.md) for this project. Please make sure to **pay special attention** to the [conventional commits](.github/CONTRIBUTING.md#conventional-commits) section of the document.

### Start development environment

Once the project has been cloned to your local resource and you have installed all the dependencies you will need to open three different shell sessions. One is for the Gulp tasks, the second is for a series of npm tasks and the last is to run the Polymer server.

```shell
// shell terminal one
$ gulp dev

// shell terminal two
$ npm run dev

// shell terminal three
polymer serve
```

##

<footer>
Alaska Airlines Orion Design System<br>
Copyright 2019 Alaska Airlines, Inc. or its affiliates. All Rights Reserved.
</footer>
