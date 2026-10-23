# auro-hyperlink

An accessible link that takes people to another page, a file, or an email or phone action.
It wraps a standard HTML `<a>` element, adds brand-aware styling and safer handling of
URLs, and passes ARIA attributes, `role`, and `tabindex` from the host to the inner link so screen reader users hear them.

**Key capabilities**
- **Link styles**: Leave `type` unset for a standard inline text link, use `type="nav"` for navigation
  links, or use `type="cta"` for a link that looks like an `<auro-button>`.
- **URL safety**: Drops `href` values that could run code (`javascript:`, `data:`, and `vbscript:`) and upgrades the rest to `https`, except `tel:`, `sms:`, and `mailto:` addresses and pages served from `localhost`.
- **External links**: Setting `target="_blank"` adds a new-window icon for links to the same site or an external-link icon for other sites.
- **Light and dark backgrounds**: Setting `appearance="inverse"` switches the link to colors designed for
  dark backgrounds.
- **Button behavior**: Setting `role="button"` gives the link a button role and a tab stop for actions such as
  opening a dialog, but Enter and Space do not currently fire `click`, so handle those keys yourself.

**Example**
```html
<auro-hyperlink href="/trips">View your trips</auro-hyperlink>
```

### Properties & Attributes

| Properties     | Attributes     | Modifiers | Type                                                        | Default   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -------------- | -------------- | --------- | ----------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appearance     | appearance     |           | `default` \| `inverse`                                      | `default` | Sets the color scheme to match the background behind the link. Use `default` on light backgrounds and `inverse` on dark backgrounds.                                                                                                                                                                                                                                                                                                                                                                                          |
| download       | download       |           | boolean                                                     |           | Downloads the linked file when you select the link, instead of navigating to it. Ignored when `type="cta"`.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| fluid          | fluid          |           | boolean                                                     |           | When using `type="cta"`, stretches the link to fill the width of its container.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| href           | href           |           | string                                                      |           | Sets the address the link goes to, such as `/trips` or `https://www.alaskaair.com` (the link's `href`). Without a usable `href`, a standard or `nav` link without a `role` shows its content as plain text, and a `cta` link renders as a button.<br><br>Security: don't pass untrusted input as `href`. Addresses that could run code (`javascript:`, `data:`, and `vbscript:`) are dropped, and every other address except `tel:`, `sms:`, and `mailto:` is upgraded to `https` unless the page is served from `localhost`. |
| referrerpolicy | referrerpolicy |           | boolean                                                     |           | Limits how much of the current page's address the link shares with the page it opens. Links within the same origin send the full address, links to other origins send only the origin, and links to a less secure destination (HTTPS to HTTP) send nothing (`strict-origin-when-cross-origin`). Ignored when `type="cta"`.                                                                                                                                                                                                    |
| rel            | rel            |           | string                                                      |           | Sets how the linked page relates to the current page, such as `nofollow` (the link's `rel`). When `rel` isn't set and a `target="_blank"` link's `href` points to another site, standard and `nav` links use `noOpener noReferrer`, or `external` when `referrerpolicy` is on; links to the same site and `type="cta"` links get no automatic `rel`. Visit [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel) for more information.                                                   |
| role           |                |           | string                                                      |           | Gives the link button behavior: any `role` value shows a pointer cursor and stops the link from navigating to `href`. The value `button` also gives the link the button role and a keyboard tab stop. Enter and Space do not currently fire `click`, so handle those keys yourself. Ignored when `type="cta"`.                                                                                                                                                                                                                |
| shape          | shape          |           | `rounded` \| `pill` \| `circle` \| `square`                 |           | When using `type="cta"`, sets the shape of the button: `rounded` corners, a `pill` with fully rounded ends, a `circle`, or a `square`. Use `rounded` or `pill` for buttons with a text label, and `circle` or `square` for icon-only buttons.                                                                                                                                                                                                                                                                                 |
| size           | size           |           | `xs` \| `sm` \| `md` \| `lg` \| `xl`                        |           | When using `type="cta"`, sets the size of the button, from `xs` (smallest) to `xl` (largest). At `xs` and `sm`, the new-window or external-link icon also shrinks to match.                                                                                                                                                                                                                                                                                                                                                   |
| target         | target         |           | string                                                      |           | Sets where the linked page opens, such as `_blank` for a new tab or `_self` for the current tab (the link's `target`). `_blank` also adds an icon after the content: a new-window icon for links to the same site, or an external-link icon for other sites.                                                                                                                                                                                                                                                                  |
| type           | type           |           | `nav` \| `cta`                                              |           | Sets whether the link looks like a regular text link, a navigation link, or a button. Use `nav` for navigation links, which are underlined on hover and on focus, and `cta` for a link that looks like a button. Leave it unset for a regular underlined text link.                                                                                                                                                                                                                                                           |
| variant        | variant        |           | `primary` \| `secondary` \| `tertiary` \| `ghost` \| `flat` | `primary` | When using `type="cta"`, sets how much emphasis the button gets. Use `primary` for the main action, `secondary` or `tertiary` for supporting actions, and `ghost` or `flat` for the lowest emphasis.                                                                                                                                                                                                                                                                                                                          |
| ondark         | ondark         |           | boolean                                                     |           | Deprecated: Use `appearance="inverse"` instead.<br>Switches the link to colors designed for dark backgrounds.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| onDark         |                |           | boolean                                                     |           | Deprecated: Use `appearance="inverse"` instead.<br>Switches the link to colors designed for dark backgrounds.                                                                                                                                                                                                                                                                                                                                                                                                                 |

### Methods

| Name     | Parameters                                                    | Return | Description                                                                                                                                                    |
| -------- | ------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. Use a custom name to run this version alongside another version of `auro-hyperlink` on the same page. |

### Slots

| Name      | Description                                         |
| --------- | --------------------------------------------------- |
| (default) | The link's visible content: text, an icon, or both. |

### CSS Shadow Parts

| Name       | Description                                                                                             |
| ---------- | ------------------------------------------------------------------------------------------------------- |
| link       | The inner `<a>` element, rendered when the link has a usable `href` or a `role` and `type` isn't `cta`. |
| targetIcon | The new-window or external-link icon shown after the content when `target="_blank"`.                    |

### CSS Custom Properties

| Name                                                    | Description                                                                              |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| --ds-auro-hyperlink-default-color-default               | Text color of the link in its default state on light backgrounds.                        |
| --ds-auro-hyperlink-default-color-inverse               | Text color of the link in its default state on dark backgrounds.                         |
| --ds-auro-hyperlink-default-container-color-default     | Background color of the link in its default state on light backgrounds.                  |
| --ds-auro-hyperlink-default-container-color-inverse     | Background color of the link in its default state on dark backgrounds.                   |
| --ds-auro-hyperlink-default-outline-color-default       | Outline color of the link in its default state on light backgrounds.                     |
| --ds-auro-hyperlink-default-outline-color-inverse       | Outline color of the link in its default state on dark backgrounds.                      |
| --ds-auro-hyperlink-default-border-color-default        | Border color of the link in its default state on light backgrounds.                      |
| --ds-auro-hyperlink-default-border-color-inverse        | Border color of the link in its default state on dark backgrounds.                       |
| --ds-auro-hyperlink-visited-color-default               | Text color of the link after it has been visited on light backgrounds.                   |
| --ds-auro-hyperlink-visited-color-inverse               | Text color of the link after it has been visited on dark backgrounds.                    |
| --ds-auro-hyperlink-visited-container-color-default     | Background color of the link after it has been visited on light backgrounds.             |
| --ds-auro-hyperlink-visited-container-color-inverse     | Background color of the link after it has been visited on dark backgrounds.              |
| --ds-auro-hyperlink-visited-outline-color-default       | Outline color of the link after it has been visited on light backgrounds.                |
| --ds-auro-hyperlink-visited-outline-color-inverse       | Outline color of the link after it has been visited on dark backgrounds.                 |
| --ds-auro-hyperlink-visited-border-color-default        | Border color of the link after it has been visited on light backgrounds.                 |
| --ds-auro-hyperlink-visited-border-color-inverse        | Border color of the link after it has been visited on dark backgrounds.                  |
| --ds-auro-hyperlink-focus-color-default                 | Text color of the link when it has keyboard focus on light backgrounds.                  |
| --ds-auro-hyperlink-focus-color-inverse                 | Text color of the link when it has keyboard focus on dark backgrounds.                   |
| --ds-auro-hyperlink-focus-container-color-default       | Background color of the link when it has keyboard focus on light backgrounds.            |
| --ds-auro-hyperlink-focus-container-color-inverse       | Background color of the link when it has keyboard focus on dark backgrounds.             |
| --ds-auro-hyperlink-focus-outline-color-default         | Outline color of the link when it has keyboard focus on light backgrounds.               |
| --ds-auro-hyperlink-focus-outline-color-inverse         | Outline color of the link when it has keyboard focus on dark backgrounds.                |
| --ds-auro-hyperlink-focus-border-color-default          | Border color of the link when it has keyboard focus on light backgrounds.                |
| --ds-auro-hyperlink-focus-border-color-inverse          | Border color of the link when it has keyboard focus on dark backgrounds.                 |
| --ds-auro-hyperlink-hover-color-default                 | Text color of the link when you hover over it on light backgrounds.                      |
| --ds-auro-hyperlink-hover-color-inverse                 | Text color of the link when you hover over it on dark backgrounds.                       |
| --ds-auro-hyperlink-hover-container-color-default       | Background color of the link when you hover over it on light backgrounds.                |
| --ds-auro-hyperlink-hover-container-color-inverse       | Background color of the link when you hover over it on dark backgrounds.                 |
| --ds-auro-hyperlink-hover-outline-color-default         | Outline color of the link when you hover over it on light backgrounds.                   |
| --ds-auro-hyperlink-hover-outline-color-inverse         | Outline color of the link when you hover over it on dark backgrounds.                    |
| --ds-auro-hyperlink-hover-border-color-default          | Border color of the link when you hover over it on light backgrounds.                    |
| --ds-auro-hyperlink-hover-border-color-inverse          | Border color of the link when you hover over it on dark backgrounds.                     |
| --ds-auro-hyperlink-nav-default-color-default           | Text color of the navigation link in its default state on light backgrounds.             |
| --ds-auro-hyperlink-nav-default-color-inverse           | Text color of the navigation link in its default state on dark backgrounds.              |
| --ds-auro-hyperlink-nav-default-container-color-default | Background color of the navigation link in its default state on light backgrounds.       |
| --ds-auro-hyperlink-nav-default-container-color-inverse | Background color of the navigation link in its default state on dark backgrounds.        |
| --ds-auro-hyperlink-nav-default-outline-color-default   | Outline color of the navigation link in its default state on light backgrounds.          |
| --ds-auro-hyperlink-nav-default-outline-color-inverse   | Outline color of the navigation link in its default state on dark backgrounds.           |
| --ds-auro-hyperlink-nav-default-border-color-default    | Border color of the navigation link in its default state on light backgrounds.           |
| --ds-auro-hyperlink-nav-default-border-color-inverse    | Border color of the navigation link in its default state on dark backgrounds.            |
| --ds-auro-hyperlink-nav-visited-color-default           | Text color of the navigation link after it has been visited on light backgrounds.        |
| --ds-auro-hyperlink-nav-visited-color-inverse           | Text color of the navigation link after it has been visited on dark backgrounds.         |
| --ds-auro-hyperlink-nav-visited-container-color-default | Background color of the navigation link after it has been visited on light backgrounds.  |
| --ds-auro-hyperlink-nav-visited-container-color-inverse | Background color of the navigation link after it has been visited on dark backgrounds.   |
| --ds-auro-hyperlink-nav-visited-outline-color-default   | Outline color of the navigation link after it has been visited on light backgrounds.     |
| --ds-auro-hyperlink-nav-visited-outline-color-inverse   | Outline color of the navigation link after it has been visited on dark backgrounds.      |
| --ds-auro-hyperlink-nav-visited-border-color-default    | Border color of the navigation link after it has been visited on light backgrounds.      |
| --ds-auro-hyperlink-nav-visited-border-color-inverse    | Border color of the navigation link after it has been visited on dark backgrounds.       |
| --ds-auro-hyperlink-nav-focus-color-default             | Text color of the navigation link when it has keyboard focus on light backgrounds.       |
| --ds-auro-hyperlink-nav-focus-color-inverse             | Text color of the navigation link when it has keyboard focus on dark backgrounds.        |
| --ds-auro-hyperlink-nav-focus-container-color-default   | Background color of the navigation link when it has keyboard focus on light backgrounds. |
| --ds-auro-hyperlink-nav-focus-container-color-inverse   | Background color of the navigation link when it has keyboard focus on dark backgrounds.  |
| --ds-auro-hyperlink-nav-focus-outline-color-default     | Outline color of the navigation link when it has keyboard focus on light backgrounds.    |
| --ds-auro-hyperlink-nav-focus-outline-color-inverse     | Outline color of the navigation link when it has keyboard focus on dark backgrounds.     |
| --ds-auro-hyperlink-nav-focus-border-color-default      | Border color of the navigation link when it has keyboard focus on light backgrounds.     |
| --ds-auro-hyperlink-nav-focus-border-color-inverse      | Border color of the navigation link when it has keyboard focus on dark backgrounds.      |
| --ds-auro-hyperlink-nav-hover-color-default             | Text color of the navigation link when you hover over it on light backgrounds.           |
| --ds-auro-hyperlink-nav-hover-color-inverse             | Text color of the navigation link when you hover over it on dark backgrounds.            |
| --ds-auro-hyperlink-nav-hover-container-color-default   | Background color of the navigation link when you hover over it on light backgrounds.     |
| --ds-auro-hyperlink-nav-hover-container-color-inverse   | Background color of the navigation link when you hover over it on dark backgrounds.      |
| --ds-auro-hyperlink-nav-hover-outline-color-default     | Outline color of the navigation link when you hover over it on light backgrounds.        |
| --ds-auro-hyperlink-nav-hover-outline-color-inverse     | Outline color of the navigation link when you hover over it on dark backgrounds.         |
| --ds-auro-hyperlink-nav-hover-border-color-default      | Border color of the navigation link when you hover over it on light backgrounds.         |
| --ds-auro-hyperlink-nav-hover-border-color-inverse      | Border color of the navigation link when you hover over it on dark backgrounds.          |