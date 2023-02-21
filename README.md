# Hyperlink

`<auro-hyperlink>` is a wrapper components for an HTML `<a>` element containing styling and behavior.

### hyperlink use cases

The `<auro-hyperlink>` elements should be used in situations where users may:

* stand-alone link element for navigation
* inline link element for navigation
* optional role as button when hyperlink UI is needed for submit action

## UI development browser support

For the most up to date information on [UI development browser support](https://auro.alaskaair.com/support/browsersSupport)

## Installation and Use

Installation and use of auro-hyperlink can be done as either a <a href="#js-import">JS Import</a> or using the <a href="#cdn-use">bundled CDN asset</a>, then <a href="#using-the-custom-element">reference the Custom Element</a> in your HTML.

[![Build Status](https://img.shields.io/github/workflow/status/AlaskaAirlines/auro-hyperlink/Test%20and%20publish?branch=master&style=for-the-badge)](https://github.com/AlaskaAirlines/auro-hyperlink/actions?query=workflow%3A%22test+and+publish%22)
[![See it on NPM!](https://img.shields.io/npm/v/@aurodesignsystem/auro-hyperlink?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@aurodesignsystem/auro-hyperlink)
[![License](https://img.shields.io/npm/l/@aurodesignsystem/auro-hyperlink?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)

### JS Import

A JS Import is done by installing the NPM package and then importing the JS file into your project.

#### Install

```shell
$ npm i @aurodesignsystem/auro-hyperlink
```

Installing as a direct, dev or peer dependency is up to the user installing the package. If you are unsure as to what type of dependency you should use, consider reading this [stack overflow](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies) answer.

#### Define dependency in project component

Defining the component dependency within each component that is using the `<auro-hyperlink>` component.

```javascript
import "@aurodesignsystem/auro-hyperlink";
```

### CDN Use

In cases where the project is not able to process JS assets, there are pre-processed assets available for use.

#### Install

Include the following HTML code in the `<head>` element of your page.

```html
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/design-tokens@latest/dist/tokens/CSSCustomProperties.css" />
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/webcorestylesheets@latest/dist/bundled/essentials.css" />

<script src="https://unpkg.com/@aurodesignsystem/auro-hyperlink@latest/dist/auro-hyperlink__bundled.js" type="module"></script>
```

**NOTE:** Be sure to replace `@latest` in the URL with the version of the asset you want. @latest is NOT aware of any MAJOR releases, use at your own risk.

### Using the custom element

After the web component is imported by JavaScript or CDN, reference the component in HTML.

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./apiExamples/basic.html -->
```html
<auro-hyperlink>Hello World</auro-hyperlink>
```
<!-- AURO-GENERATED-CONTENT:END -->

Review the <a href="https://auro.alaskaair.com/components/auro/hyperlink/api">API documentation</a> for advanced uses and examples.

### Limitations and Risks

When multiple microsites are combined and result in a custom element being imported more than once, only the first instance of the imported custom element is used. All subsequent attempts to load the custom element will fail. If a microsite loaded into the document subsequently attempts to load a new version of the component with an updated API, it will fail to load. This can result in unexpected API functionality.

For a detailed explanation of this issue, see this article: https://dev.to/florianrappl/versioning-web-components-3bda

### Recommended Use and Version Control

There are two important parts of every Auro Component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the Custom Element. The class is exported and then used as part of defining the Custom Element. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-hyperlink` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `registerComponent(name)` method and pass in a unique name.

```js
import { AuroHyperlink } from './node_modules/@aurodesignsystem/auro-hyperlink';

registerComponent('custom-hyperlink');
```

This will create a new custom element that you can use in your html that will function identical to `auro-hyperlink`.

```html
<custom-hyperlink></custom-hyperlink>
```

### Design Token CSS Custom Property dependency

The use of any Auro custom element has a dependency on the [Auro Design Tokens](https://auro.alaskaair.com/getting-started/developers/design-tokens).

### CSS Custom Property fallbacks

[CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are [not supported](https://auro.alaskaair.com/support/custom-properties) in older browsers. For this, fallback properties are pre-generated and included with the npm.

Any update to the Auro Design Tokens will be immediately reflected with browsers that support CSS custom properties, legacy browsers will require updated components with pre-generated fallback properties.

## Development

In order to develop against this project, if you are not part of the core team, you will be required to fork the project prior to submitting a pull request.

Please be sure to review the [contribution guidelines](https://auro.alaskaair.com/contributing) for this project. Please make sure to **pay special attention** to the **conventional commits** section of the document.

### Start development environment

Once the project has been cloned to your local resource and you have installed all the dependencies you will need to open a shell session to run the **dev server**.

```shell
$ npm run dev
```

Open [localhost:8000](http://localhost:8000/)

If running separate sessions is preferred, please run the following commands in individual terminal shells.

```shell
$ npm run build:watch

$ npm run serve
```

### API generation

The custom element API file is generated in the build and committed back to the repo with a version change. If the API doc has changed without a version change, author's are to run `npm run build:api` to generate the doc and commit to version control.

### Testing

Automated tests are required for every Auro component. See `.\test\auro-hyperlink.test.js` for the tests for this component. Run `npm test` to run the tests and check code coverage. Tests must pass and meet a certain coverage threshold to commit. See [the testing documentation](https://auro.alaskaair.com/support/tests) for more details.

### Bundled assets

Bundled assets are only generated in the remote and not merged back to this repo. To review and/or test a bundled asset locally, run `$ npm run bundler` to generate assets.

### Demo deployment

To deploy a demo version of the component for review, run `npm run build:demo` to create a `./build` directory that can be pushed to any static server.

<small>Built from WC-Generator v3.11.0</small>
