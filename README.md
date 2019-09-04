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
import "@alaskaairux/ods-hyperlink/dist/ods-hyperlink";
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
| download | boolean | Specifies that the target will be downloaded when a user clicks on the hyperlink |
| darktheme | boolean | Specifies dark theme use of hyperlink |
| inline | boolean | Displays an element as an inline element. Any height and width properties will have no effect |
| tabisactive | string | Indicates if tab is to be displayed as active state (true, false)† |
| href | string | Specifies the URL of the page the link goes to |
| rel | string | Specifies the relationship between the current document and the linked document |
| role | string | Use for aria roles |
| target | string | Specifies where to open the linked document |
| type | string | Specifies the media type of the linked document |
| anchorCallback | function | Function callback hook |

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

When using the `target` option and the string `_blank`, the \<ods-hyperlink> component will address the necessary [vulnerability issues](https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/) without additional effort from the user of the component.

##

Alaska Airlines Orion Design System<br>
Copyright 2019 Alaska Airlines, Inc. or its affiliates. All Rights Reserved.
