# Auro-hyperlink web component

`<auro-hyperlink>` is a wrapper components for an HTML `<a>` element containing styling and behavior.

## Install

[![Build Status](https://img.shields.io/travis/AlaskaAirlines/ods-hyperlink.svg?branch=master&style=for-the-badge)](https://travis-ci.org/github/AlaskaAirlines/ods-hyperlink)
[![See it on NPM!](https://img.shields.io/npm/v/@alaskaairux/ods-hyperlink.svg?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@alaskaairux/ods-hyperlink)
[![License](https://img.shields.io/npm/l/@alaskaairux/ods-hyperlink.svg?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)

```shell
$ npm i @alaskaairux/auro-hyperlink
```

### Design Token CSS Custom Property dependency

The use of any Web Component has a dependency on the [Auro Design Tokens](https://auro.alaskaair.com/getting-started/developers/design-tokens).

### CSS Custom Property fallbacks

[CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are [not supported](https://auro.alaskaair.com/support/custom-properties) in older browsers. For this, fallback properties are pre-generated and included with the npm.

Any update to the Auro Design Tokens will be immediately reflected with browsers that support CSS custom properties, legacy browsers will require updated components with pre-generated fallback properties.

### Define dependency in project component

Define the component dependency within each component that is using the `<ods-hyperlink>` component.

```javascript
import "@alaskaairux/auro-hyperlink";
```

**Reference component in HTML**

```html
<auro-hyperlink>Hello World!</auro-hyperlink>
```

## Install bundled assets from CDN

In cases where the project is not able to process JS assets, there are pre-processed assets available for use.

**NOTE:** Be sure to replace `:version` in the URL with the version of the asset you want.

### Using Auro assets

```html
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/orion-design-tokens@:version/dist/tokens/CSSCustomProperties.css" />
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/orion-web-core-style-sheets@:version/dist/bundled/essentials.css" />

<script src="https://unpkg.com/@alaskaairux/auro-hyperlink@:version/dist/polyfills.js"></script>
<script src="https://unpkg.com/@alaskaairux/auro-hyperlink@:version/dist/auro-button__bundled.js"></script>
```

### polyfills.js

The `polyfills.js` is packaged with this component, but **IT IS NOT NEEDED** to load a polyfill per component. The `polyfills.js` will work for all additional components added to the project.

### IE11 Support

**Displaimer:** While these components are supported in IE, there may be issues with loading the [web components polyfill](https://www.webcomponents.org/polyfills). Please consult their documentation when supporting IE11.

## Element ods-hyperlink / auro-hyperlink

### hyperlink use cases

The `<auro-hyperlink>` elements should be used in situations where users may:

* stand-alone link element for navigation
* inline link element for navigation
* optional role as button when hyperlink UI is needed for submit action

### Auto URL re-write feature (auro only)

Auro-hyperlink, by default, will re-write your URL to ensure that the domain is `https://www.alaskaair.com`. This feature also ensures that JavaScript URLs are also not passed in.

If a relative URL is required, pass in the `relative` flag to disable the addition of the Alaska Airlines domain. 

## Code Examples

**Default hyperlink**

```html
<auro-hyperlink href="//">Go to Alaska Airlines!</auro-hyperlink>
```

**Nav hyperlink**

```html
<auro-hyperlink href="//" nav>Alaska Airlines!</auro-hyperlink>
```

**Hyperlink with `download` option**

```html
<auro-hyperlink download href="assets/thing.pdf">Download thing.pdf</auro-hyperlink>
```

**Hyperlink with `sms:` or `tel:` protocol**

```html
<auro-hyperlink href="sms:+18005552222">sms link</auro-hyperlink>

<auro-hyperlink href="tel:+18005552222">telephone link</auro-hyperlink>
```

When using the `sms:` or `tel:` protocols, `<auro-hyperlink>` will honor this protocol request in the final rendered URL inside the shadowDOM.

**Hyperlink with `role=button` option**

```html
<auro-hyperlink role="button">Cancel</auro-hyperlink>
```

When using the `role="button"` option, `<auro-hyperlink>` will auto address a11y `aria-pressed` status when using the mouse, return key or spacebar.

**Hyperlink with `rel` option**

```html
<auro-hyperlink rel="nofollow" href="//">SEO nofollow</auro-hyperlink>
```

**Hyperlink with `target` option**

```html
<auro-hyperlink href="//" target="_blank">Go to Alaska Airlines!</auro-hyperlink>
```

**Hyperlink with `cta` option**

```html
<auro-hyperlink href="//" target="_blank" cta>Go to Alaska Airlines!</auro-hyperlink>
```

## Run locally and development

To commit to this project, if you are not part of the core team, you will be required to fork the repo prior to submitting a pull request.

Please be sure to review the [contribution guidelines](https://auro.alaskaair.com/getting-started/developers/contributing) for this project. Please make sure to **pay special attention** to the **conventional commits** section of the document.

### Start development environment

Once the project has been cloned to your local resource and you have installed all the dependencies you will need to open three different shell sessions. One is for the Gulp tasks, the second is for a series of npm tasks and the last is to run the Polymer server.

```shell
// shell terminal two
$ npm run dev

// shell terminal three
$ npm run  serve
```

Open [localhost:3001](http://localhost:3001/)
