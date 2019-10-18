<img src="https://resource.alaskaair.net/-/media/2C1969F8FB244C919205CD48429C13AC" alt="Orion Design System Logo" title="Be the change you want to see" width="125" align="right" />

[![Build Status](https://travis-ci.org/AlaskaAirlines/OrionStatelessComponents__ods-hyperlink.svg?branch=master)](https://travis-ci.org/AlaskaAirlines/OrionStatelessComponents__ods-hyperlink)
![npm (scoped)](https://img.shields.io/npm/v/@alaskaairux/ods-hyperlink.svg?color=orange)
![NPM](https://img.shields.io/npm/l/@alaskaairux/ods-hyperlink.svg?color=blue)

# \<ods-hyperlink>

\<ods-hyperlink> is a wrapper component for a HTML \<a> element containing styling and behavior.

## Docs

All information regarding Project Setup, Technical Details, Tests and information regarding ODS Stateless Components can be found in the [./docs](https://github.com/AlaskaAirlines/OrionStatelessComponents__docs) repository.

## Install

```shell
$ npm i @alaskaairux/ods-hyperlink
```

### Design Token CSS Custom Property dependency

The use of any ODS Component has a dependency on the [ODS Design Tokens (npm install)](https://www.npmjs.com/package/@alaskaairux/orion-design-tokens). See repository and API information [here](https://github.com/AlaskaAirlines/OrionDesignTokens).

For additional details in regards to using Orion Design Tokens with components, please see [./docs/TECH_DETAILS.md](https://github.com/AlaskaAirlines/OrionStatelessComponents__docs/blob/master/docs/TECH_DETAILS.md)

### CSS Custom Property fallbacks

CSS Custom Properties are not supported in older browsers. For this, fallback properties are pre-generated and included with the npm. Any update to the Orion Design Tokens will be immediately reflected with browsers that support CSS Custom Properties, legacy browsers will require updated components with pre-generated fallback properties.

### Define dependency in project component

Define the component dependency within each component that is using the \<ods-hyperlink> component.

```javascript
import "@alaskaairux/ods-hyperlink";
```

**Reference component in HTML**

```html
<ods-hyperlink>Hello World!</ods-hyperlink>
```

## Element \<ods-hyperlink>

```javascript
class OdsHyperlink extends LitElement
```

### hyperlink use cases

The \<ods-hyperlink> element should be used in situations where users may:

* stand-alone link element for navigation
* inline link element for navigation
* optional role as button when hyperlink UI is needed for submit action
* optional role as tab when hyperlink UI is needed for a tablist

### Properties:

| Attribute | value type | Description |
|----|----|----|
| anchorCallback | function | Function callback hook |
| cta | boolean | Specifies the style of the hyperlink to appear as a CTA button |
| download | boolean | Specifies that the target will be downloaded when a user clicks on the hyperlink |
| darktheme | boolean | Specifies dark theme use of hyperlink |
| href | string | Specifies the URL of the page the link goes to |
| inline | boolean | Displays an element as an inline element. Any height and width properties will have no effect |
| rel | string | Specifies the relationship between the current document and the linked document |
| responsive | boolean | used with `cta` button style; sets button to have automatic responsive layout properties |
| role | string | Use for aria roles |
| tabisactive | string | Indicates if tab is to be displayed as active state (true, false)† |
| target | string | Specifies where to open the linked document |
| type | string | Specifies the media type of the linked document |

† See `role="tab"` use example below for further details about this feature

### Custom style support

The default \<ods-hyperlink> has padding on the LEFT and the RIGHT of the element. If this padding is not required, the following CSS classes are supported:

| Class | Description |
|---|---|
| util_paddingLeft--none | Removes the padding on the LEFT of the element |
| util_paddingRight--none | Removes the padding on the RIGHT of the element |

No additional dependency on Orion Web Core Style Sheets is required.

### API Code Examples

**Default hyperlink**

```html
<ods-hyperlink href="http://www.alaskaair.com">Go to Alaska Airlines!</ods-hyperlink>
```

**Inline hyperlink**

```html
These are words with a link to <ods-hyperlink href="http://www.alaskaair.com" inline>Go to Alaska Airlines!</ods-hyperlink> and then show more words!
```

**Hyperlink with `utility class` option**

```html
<ods-hyperlink class="util_paddingLeft--none" href="http://www.alaskaair.com">Go to Alaska Airlines!</ods-hyperlink>
```

**Hyperlink with `download` option**

```html
<ods-hyperlink download href="assets/thing.pdf">Download thing.pdf</ods-hyperlink>
```

**Hyperlink with `role` option**

```html
<ods-hyperlink role="button">Cancel</ods-hyperlink>
```

When using the `role="button"` option, \<ods-hyperlink> will auto address a11y `aria-pressed` status when using the mouse, return key or spacebar.

```html
<div role="tablist" class="ods-tablist">
  <ods-hyperlink tabisactive="true" role="tab">Tab One</ods-hyperlink>
  <ods-hyperlink role="tab">Tab Two</ods-hyperlink>
</div>
```

When using the `role="tab"` option, \<ods-hyperlink> is required to be wrapped in a container with `role="tablist"` in order to be a11y compliant. The use of `class="ods-tablist"` will address the desired UI experince. This CSS selector has a dependency on The Orion Web Code Style Sheet library.

**Hyperlink with `rel` option**

```html
<ods-hyperlink rel="nofollow" href="http://www.somewhere.com">SEO nofollow</ods-hyperlink>
```

**Hyperlink with `target` option**

```html
<ods-hyperlink href="http://www.alaskaair.com" target="_blank">Go to Alaska Airlines!</ods-hyperlink>
```

**Hyperlink with `cta` option**

```html
<ods-hyperlink href="http://www.alaskaair.com" target="_blank" cta>Go to Alaska Airlines!</ods-hyperlink>
```

When using the `target` option and the string `_blank`, the \<ods-hyperlink> component will address the necessary [vulnerability issues](https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/) without additional effort from the user of the component.

## Alternate build solutions

Why would you need this? With all Orion custom elements the CSS for the element is embedded within the shadow DOM of the custom element. If your development environment is not allowing for the use of shadow DOM elements, the CSS for each element is distributed via additional resources within the npm package.

[Read more about how to use alternate CSS build resources](https://github.com/AlaskaAirlines/OrionStatelessComponents__docs/blob/master/docs/ALT_BUILD.md)

## Development

In order to develop against this project, if you are not part of the core team, you will be required to fork the project prior to submitting a pull request.

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
