# Auro-hyperlink web component

`<ods-hyperlink>` and `<auro-hyperlink>` are wrapper components for an HTML `<a>` element containing styling and behavior.

## Install

[![Build Status](https://img.shields.io/travis/AlaskaAirlines/ods-hyperlink.svg?branch=master&style=for-the-badge)](https://travis-ci.org/github/AlaskaAirlines/ods-hyperlink)
[![See it on NPM!](https://img.shields.io/npm/v/@alaskaairux/ods-hyperlink.svg?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@alaskaairux/ods-hyperlink)
[![License](https://img.shields.io/npm/l/@alaskaairux/ods-hyperlink.svg?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)

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

## Element ods-hyperlink / auro-hyperlink

### hyperlink use cases

The `<ods-hyperlink>` or `<auro-hyperlink>` elements should be used in situations where users may:

* stand-alone link element for navigation
* inline link element for navigation
* optional role as button when hyperlink UI is needed for submit action
* optional role as tab when hyperlink UI is needed for a tablist

### Auto URL re-write feature (auro only)

Auro-hyperlink, by default, will re-write your URL to ensure that the domain is `https://www.alaskaair.com`. This feature also ensures that JavaScript URLs are also not passed in.

If a relative URL is required, pass in the `relative` flag to disable the addition of the Alaska Airlines domain. The `relative` feature and `target="_blank"` cannot be used together. If the component has both attributes, the

## Code Examples

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

**Hyperlink with `sms:` or `tel:` protocol (auro only)**

```html
<auro-hyperlink href="sms:+18005552222">sms link</auro-hyperlink>

<auro-hyperlink href="tel:+18005552222">telephone link</auro-hyperlink>
```

When using the `sms:` or `tel:` protocols, `<auro-hyperlink>` will honor this protocol request in the final rendered URL inside the shadowDOM.

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
