# auro-hyperlink

An accessible link that takes people to another page, a file, or an email or phone action.
It wraps a standard HTML `<a>` element and adds brand-aware styling, safer handling of
URLs, and a few accessibility improvements.

**Key capabilities**
- **Link styles**: a standard inline text link by default, `type="nav"` for navigation
  links, and `type="cta"` for a link that looks like an `<auro-button>`.
- **Safer URLs**: `http` links are upgraded to `https`, and `javascript:`, `data:`, and
  `vbscript:` links are dropped so they can't run code.
- **External links**: `target="_blank"` adds a new-window or external-link icon, and sets
  a safe `rel` automatically for links that leave the site.
- **Light & dark backgrounds**: `appearance="inverse"` switches to colors designed for
  dark backgrounds.
- **Button look**: `role="button"` gives the link button behavior for actions such as
  submitting a form.

**Example**
```html
<auro-hyperlink href="/trips">View your trips</auro-hyperlink>
```

### Properties & Attributes

| Properties     | Attributes     | Modifiers | Type                                                        | Default   | Description                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------- | -------------- | --------- | ----------------------------------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appearance     | appearance     |           | `default` \| `inverse`                                      | `default` | Defines whether the component will be on lighter or darker backgrounds.                                                                                                                                                                                                                                                                                                                            |
| download       | download       |           | boolean                                                     |           | If true, the linked resource will be downloaded when the hyperlink is clicked.                                                                                                                                                                                                                                                                                                                     |
| fluid          | fluid          |           | boolean                                                     |           | If true and `type="cta"`, the hyperlink will have a fluid-width UI.                                                                                                                                                                                                                                                                                                                                |
| href           | href           |           | string                                                      |           | The address the link goes to. Relative addresses resolve against the current page, and `http` addresses are upgraded to `https` (except on `localhost`). `tel:`, `sms:`, and `mailto:` addresses are kept as they are. Addresses that could run code (`javascript:`, `data:`, `vbscript:`) are dropped, and without a usable `href` the element shows its content as plain text instead of a link. |
| referrerpolicy | referrerpolicy |           | boolean                                                     |           | If true, sets `strict-origin-when-cross-origin` to control the referrer information sent with requests.                                                                                                                                                                                                                                                                                            |
| rel            | rel            |           | string                                                      |           | Defines the relationship between the current document and the linked document. Visit [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel) for more information.                                                                                                                                                                                              |
| role           |                |           | string                                                      |           | Gives the link button behavior when set to `button`. The link then takes a keyboard tab stop and no longer navigates to `href`, so handle the click yourself. Other values are not supported. Ignored when `type="cta"`.                                                                                                                                                                           |
| safeUri        |                | readonly  | string \| undefined                                         |           | The address the link actually uses, after `href` has been made safe. It's an empty string when `href` isn't set, and `undefined` when `href` was dropped because it could run code.                                                                                                                                                                                                                |
| shape          | shape          |           | `rounded` \| `pill` \| `circle` \| `square`                 | `rounded` | Defines the shape of the button when using `type="cta"`.                                                                                                                                                                                                                                                                                                                                           |
| size           | size           |           | `xs` \| `sm` \| `md` \| `lg` \| `xl`                        | `md`      | Defines the size of the button when using `type="cta"`.                                                                                                                                                                                                                                                                                                                                            |
| target         | target         |           | string                                                      |           | Defines where to open the linked document.                                                                                                                                                                                                                                                                                                                                                         |
| type           | type           |           | `nav` \| `cta`                                              |           | Defines the type of hyperlink.                                                                                                                                                                                                                                                                                                                                                                     |
| variant        | variant        |           | `primary` \| `secondary` \| `tertiary` \| `ghost` \| `flat` | `primary` | Sets button variant option when using `type="cta"`.                                                                                                                                                                                                                                                                                                                                                |
| ondark         | ondark         |           | boolean                                                     |           | Deprecated in favor of `appearance="inverse"`; scheduled for removal in the next major version.                                                                                                                                                                                                                                                                                                    |
| onDark         |                |           | boolean                                                     |           | Deprecated alias of `ondark`, kept for backward compatibility; scheduled for removal in the next major version.                                                                                                                                                                                                                                                                                    |

### Methods

| Name     | Parameters                                                    | Return | Description                                                                                                                                                    |
| -------- | ------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. Use a custom name to run this version alongside another version of `auro-hyperlink` on the same page. |

### Slots

| Name      | Description                                         |
| --------- | --------------------------------------------------- |
| (default) | The link's visible content: text, an icon, or both. |

### CSS Shadow Parts

| Name       | Description                                                                                                      |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| link       | The inner `<a>` element. Not available when `type="cta"`, where the link is drawn by an internal button instead. |
| targetIcon | The new-window or external-link icon shown after the content when `target="_blank"`.                             |