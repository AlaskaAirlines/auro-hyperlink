# auro-hyperlink

The `auro-hyperlink` element is a wrapper for an HTML5 `<a>` anchor element. 
This contains styling enabling multi-brand theme support as well as behavior and accessibility improvements over the HTML5 standard anchor element.

### Properties & Attributes

| Properties     | Attributes     | Modifiers | Type                                                        | Default   | Description                                                                                                                                                                                           |
| -------------- | -------------- | --------- | ----------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appearance     | appearance     |           | `default` \| `inverse`                                      | `default` | Defines whether the component will be on lighter or darker backgrounds.                                                                                                                               |
| download       | download       |           | boolean                                                     |           | If true, the linked resource will be downloaded when the hyperlink is clicked.                                                                                                                        |
| fluid          | fluid          |           | boolean                                                     |           | If true and `type="cta"`, the hyperlink will have a fluid-width UI.                                                                                                                                   |
| href           | href           |           | string                                                      |           | Defines the URL of the linked page.                                                                                                                                                                   |
| ondark         | ondark         |           | boolean                                                     |           | DEPRECATED - use `appearance="inverse"` instead.                                                                                                                                                      |
| referrerpolicy | referrerpolicy |           | boolean                                                     |           | If true, sets `strict-origin-when-cross-origin` to control the referrer information sent with requests.                                                                                               |
| rel            | rel            |           | string                                                      |           | Defines the relationship between the current document and the linked document. Visit [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel) for more information. |
| role           |                |           | string                                                      |           | Defines ARIA roles; currently supports `button` for extended experiences.                                                                                                                             |
| safeUri        |                | readonly  | string                                                      |           | Returns a safe URI based on the provided `href`.<br>If `href` is truthy, it generates a safe URL using the `safeUrl` function.<br>Otherwise, it returns an empty string.                              |
| target         | target         |           | string                                                      |           | Defines where to open the linked document.                                                                                                                                                            |
| type           | type           |           | `nav` \| `cta`                                              |           | Defines the type of hyperlink.                                                                                                                                                                        |
| variant        | variant        |           | `primary` \| `secondary` \| `tertiary` \| `ghost` \| `flat` | `primary` | Sets button variant option when using `type="cta"`.                                                                                                                                                   |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |

### CSS Shadow Parts

| Name       | Description                                                                  |
| ---------- | ---------------------------------------------------------------------------- |
| link       | Allows styling to be applied to the `a` element.                             |
| targetIcon | Allows styling to be applied to the icon that appears next to the hyperlink. |