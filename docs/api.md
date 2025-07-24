# auro-hyperlink

`<auro-hyperlink>` is a component that wraps an HTML `<a>` element, providing additional styling and behavior.

## Properties

| Property         | Attribute        | Modifiers | Type      | Default   | Description                                      |
|------------------|------------------|-----------|-----------|-----------|--------------------------------------------------|
| `download`       | `download`       |           | `boolean` | false     | If true, the linked resource will be downloaded when the hyperlink is clicked. |
| `fluid`          | `fluid`          |           | `boolean` |           | If true and `type="cta"`, the hyperlink will have a fluid-width UI. |
| `href`           | `href`           |           | `string`  |           | Defines the URL of the linked page.              |
| `ondark`         | `ondark`         |           | `boolean` | false     | If true, the hyperlink will be styled for use on a dark background. |
| `referrerpolicy` | `referrerpolicy` |           | `boolean` |           | If true, sets `strict-origin-when-cross-origin` to control the referrer information sent with requests. |
| `rel`            | `rel`            |           | `string`  |           | Defines the relationship between the current document and the linked document. |
| `relative`       | `relative`       |           | `boolean` | false     | If true, the auto URL re-write feature will be disabled. |
| `role`           | `role`           |           | `string`  |           | DEPRECATED.                                      |
| `safeUri`        |                  | readonly  | `string`  |           | Returns a safe URI based on the provided `href` and `relative` parameters.<br />If `href` is truthy, it generates a safe URL using the `safeUrl` function.<br />Otherwise, it returns an empty string. |
| `target`         | `target`         |           | `string`  |           | Defines where to open the linked document.       |
| `type`           | `type`           |           | `string`  |           | Defines the type of hyperlink; accepts `nav` or `cta`. |
| `variant`        | `variant`        |           | `string`  | "primary" | Sets button variant option.                      |

## CSS Shadow Parts

| Part         | Description                                      |
|--------------|--------------------------------------------------|
| `link`       | Allows styling to be applied to the `a` element. |
| `targetIcon` | Allows styling to be applied to the icon that appears next to the hyperlink. |
