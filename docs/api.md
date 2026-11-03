# auro-hyperlink

An accessible link that takes people to another page, a file, or an email or phone action.
It wraps a standard HTML `<a>` element, adds brand-aware styling and safer handling of
URLs, and passes ARIA attributes, `role`, and `tabindex` from the host to the inner link so screen reader users hear them.

**Key capabilities**
- **Link styles**: Leave `type` unset for a standard inline text link, use `type="nav"` for navigation
  links, or use `type="cta"` for a link that looks like an `<auro-button>`.
- **URL safety**: Drops `href` values that could run code (`javascript:`, `data:`, and `vbscript:`) and upgrades the rest to `https`, except `tel:`, `sms:`, and `mailto:` addresses and pages served from `localhost`.
- **External links**: When the link has a usable `href`, setting `target="_blank"` adds a new-window icon for links to the same site or an external-link icon for other sites.
- **Light and dark backgrounds**: Setting `appearance="inverse"` switches the link to colors designed for
  dark backgrounds.
- **Button behavior**: Setting `role="button"` gives the link a button role and a tab stop for actions such as
  opening a dialog, but Enter and Space do not currently fire `click`, so handle those keys yourself.

**Example**
```html
<auro-hyperlink href="/trips">View your trips</auro-hyperlink>
```

### Properties and attributes

| Properties     | Attributes     | Modifiers | Type                                                        | Default   | Category | Relevant when    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------- | -------------- | --------- | ----------------------------------------------------------- | --------- | -------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appearance     | appearance     |           | "default" \| "inverse"                                      | `default` | ui       |                  | Sets the color scheme to match the background behind the link. Use `default` on light backgrounds and `inverse` on dark backgrounds.                                                                                                                                                                                                                                                                                                                                        |
| fluid          | fluid          |           | boolean                                                     |           | ui       | `type === 'cta'` | Stretches the link to fill the width of its container. Applies only when `type="cta"`.                                                                                                                                                                                                                                                                                                                                                                                      |
| shape          | shape          |           | "rounded" \| "pill" \| "circle" \| "square"                 |           | ui       | `type === 'cta'` | Sets the shape of a CTA link's button: `rounded` corners, a `pill` with fully rounded ends, a `circle`, or a `square`. Use `rounded` or `pill` for buttons with a text label, and `circle` or `square` for icon-only buttons. Applies only when `type="cta"`, and uses `auro-button`'s default, `rounded`, when not set ([auro-button API](https://auro.alaskaair.com/components/auro/button/api)).                                                                         |
| size           | size           |           | "xs" \| "sm" \| "md" \| "lg" \| "xl"                        |           | ui       | `type === 'cta'` | Sets the size of a CTA link's button, from `xs` (smallest) to `xl` (largest). At `xs` and `sm`, the new-window or external-link icon also shrinks to match. Applies only when `type="cta"`, and uses `auro-button`'s default, `md`, when not set ([auro-button API](https://auro.alaskaair.com/components/auro/button/api)).                                                                                                                                                |
| type           | type           |           | `nav` \| `cta`                                              |           | ui       |                  | Sets whether the link looks like a regular text link, a navigation link, or a button. Use `nav` for navigation links, which are underlined on hover and on focus, and `cta` for a link that looks like a button. Leave it unset for a regular underlined text link.                                                                                                                                                                                                         |
| variant        | variant        |           | `primary` \| `secondary` \| `tertiary` \| `ghost` \| `flat` | `primary` | ui       | `type === 'cta'` | Sets how much emphasis a CTA link's button gets, from `primary` (strongest) to `ghost` and `flat` (lowest). Applies only when `type="cta"`.                                                                                                                                                                                                                                                                                                                                 |
| ondark         | ondark         |           | boolean                                                     |           | ui       |                  | Deprecated: Use `appearance="inverse"` instead.<br>Switches the link to colors designed for dark backgrounds.                                                                                                                                                                                                                                                                                                                                                               |
| onDark         | ondark         |           | boolean                                                     | `false`   | ui       |                  | Deprecated: Use `appearance="inverse"` instead.<br>Switches the link to colors designed for dark backgrounds.                                                                                                                                                                                                                                                                                                                                                               |
| download       | download       |           | boolean                                                     |           | behavior | `type !== 'cta'` | Downloads the linked file when you select the link, instead of navigating to it. Ignored when `type="cta"`.                                                                                                                                                                                                                                                                                                                                                                 |
| href           | href           |           | string                                                      |           | behavior |                  | Sets the address the link goes to, such as `/trips` or `https://www.alaskaair.com` (the link's `href`). Without a usable `href`, a standard or `nav` link without a `role` shows its content as plain text, and a `cta` link renders as a button.<br><br>Security: a `javascript:`, `data:`, or `vbscript:` address could run code, so the link drops it, but don't pass untrusted input as `href`.                                                                         |
| referrerpolicy | referrerpolicy |           | boolean                                                     |           | behavior | `type !== 'cta'` | Sets the link's referrer policy to `strict-origin-when-cross-origin`: links within the same origin send the full address, links to other origins send only the origin, and links to a less secure destination (HTTPS to HTTP) send nothing. On a `target="_blank"` link to another site, it also shares the origin instead of the default `rel="noOpener noReferrer"` behavior, which sends nothing. Ignored when `type="cta"`.                                             |
| rel            | rel            |           | string                                                      |           | behavior |                  | Sets how the linked page relates to the current page, such as `nofollow` (the link's `rel`). When `rel` isn't set and a `target="_blank"` link's `href` points to another site, standard and `nav` links use `noOpener noReferrer`, or `external` when `referrerpolicy` is on; links to the same site and `type="cta"` links get no automatic `rel`. Visit [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel) for more information. |
| role           | role           |           | string                                                      |           | behavior | `type !== 'cta'` | Gives the link button behavior: any `role` value is passed to the inner link, shows a pointer cursor, and stops the link from navigating to `href`. The value `button` also adds a keyboard tab stop. Enter and Space do not currently fire `click`, so handle those keys yourself. The pointer cursor, `href` handling, and tab stop don't apply when `type="cta"`.                                                                                                        |
| target         | target         |           | string                                                      |           | behavior |                  | Sets where the linked page opens, such as `_blank` for a new tab or `_self` for the current tab (the link's `target`). When the link has a usable `href`, `_blank` also adds an icon after the content: a new-window icon for links to the same site, or an external-link icon for other sites. Links count as another site unless the hostname matches exactly, so `www.` and other subdomains count as other sites.                                                       |

### Methods

| Name     | Parameters                                                    | Return | Description                                                                                                                                                    |
| -------- | ------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. Use a custom name to run this version alongside another version of `auro-hyperlink` on the same page. |

### Slots

| Name      | Description                                         |
| --------- | --------------------------------------------------- |
| (default) | The link's visible content: text, an icon, or both. |

### CSS shadow parts

| Name       | Description                                                                                                           |
| ---------- | --------------------------------------------------------------------------------------------------------------------- |
| link       | The inner `<a>` element, rendered when the link has a usable `href` or a `role`, unless `type` is `cta`.              |
| targetIcon | The new-window or external-link icon shown after the content when `target="_blank"` and the link has a usable `href`. |

### CSS custom properties

| Name                                                    | Relevant when    | Description                                                                              |
| ------------------------------------------------------- | ---------------- | ---------------------------------------------------------------------------------------- |
| --ds-auro-hyperlink-default-color-default               | `type !== 'cta'` | Text color of the link in its default state on light backgrounds.                        |
| --ds-auro-hyperlink-default-color-inverse               | `type !== 'cta'` | Text color of the link in its default state on dark backgrounds.                         |
| --ds-auro-hyperlink-default-container-color-default     | `type !== 'cta'` | Background color of the link in its default state on light backgrounds.                  |
| --ds-auro-hyperlink-default-container-color-inverse     | `type !== 'cta'` | Background color of the link in its default state on dark backgrounds.                   |
| --ds-auro-hyperlink-default-outline-color-default       | `type !== 'cta'` | Outline color of the link in its default state on light backgrounds.                     |
| --ds-auro-hyperlink-default-outline-color-inverse       | `type !== 'cta'` | Outline color of the link in its default state on dark backgrounds.                      |
| --ds-auro-hyperlink-default-border-color-default        | `type !== 'cta'` | Border color of the link in its default state on light backgrounds.                      |
| --ds-auro-hyperlink-default-border-color-inverse        | `type !== 'cta'` | Border color of the link in its default state on dark backgrounds.                       |
| --ds-auro-hyperlink-visited-color-default               | `type !== 'cta'` | Text color of the link after it has been visited on light backgrounds.                   |
| --ds-auro-hyperlink-visited-color-inverse               | `type !== 'cta'` | Text color of the link after it has been visited on dark backgrounds.                    |
| --ds-auro-hyperlink-visited-container-color-default     | `type !== 'cta'` | Background color of the link after it has been visited on light backgrounds.             |
| --ds-auro-hyperlink-visited-container-color-inverse     | `type !== 'cta'` | Background color of the link after it has been visited on dark backgrounds.              |
| --ds-auro-hyperlink-visited-outline-color-default       | `type !== 'cta'` | Outline color of the link after it has been visited on light backgrounds.                |
| --ds-auro-hyperlink-visited-outline-color-inverse       | `type !== 'cta'` | Outline color of the link after it has been visited on dark backgrounds.                 |
| --ds-auro-hyperlink-visited-border-color-default        | `type !== 'cta'` | Border color of the link after it has been visited on light backgrounds.                 |
| --ds-auro-hyperlink-visited-border-color-inverse        | `type !== 'cta'` | Border color of the link after it has been visited on dark backgrounds.                  |
| --ds-auro-hyperlink-focus-color-default                 | `type !== 'cta'` | Text color of the link when it has keyboard focus on light backgrounds.                  |
| --ds-auro-hyperlink-focus-color-inverse                 | `type !== 'cta'` | Text color of the link when it has keyboard focus on dark backgrounds.                   |
| --ds-auro-hyperlink-focus-container-color-default       | `type !== 'cta'` | Background color of the link when it has keyboard focus on light backgrounds.            |
| --ds-auro-hyperlink-focus-container-color-inverse       | `type !== 'cta'` | Background color of the link when it has keyboard focus on dark backgrounds.             |
| --ds-auro-hyperlink-focus-outline-color-default         | `type !== 'cta'` | Outline color of the link when it has keyboard focus on light backgrounds.               |
| --ds-auro-hyperlink-focus-outline-color-inverse         | `type !== 'cta'` | Outline color of the link when it has keyboard focus on dark backgrounds.                |
| --ds-auro-hyperlink-focus-border-color-default          | `type !== 'cta'` | Border color of the link when it has keyboard focus on light backgrounds.                |
| --ds-auro-hyperlink-focus-border-color-inverse          | `type !== 'cta'` | Border color of the link when it has keyboard focus on dark backgrounds.                 |
| --ds-auro-hyperlink-hover-color-default                 | `type !== 'cta'` | Text color of the link when you hover over it on light backgrounds.                      |
| --ds-auro-hyperlink-hover-color-inverse                 | `type !== 'cta'` | Text color of the link when you hover over it on dark backgrounds.                       |
| --ds-auro-hyperlink-hover-container-color-default       | `type !== 'cta'` | Background color of the link when you hover over it on light backgrounds.                |
| --ds-auro-hyperlink-hover-container-color-inverse       | `type !== 'cta'` | Background color of the link when you hover over it on dark backgrounds.                 |
| --ds-auro-hyperlink-hover-outline-color-default         | `type !== 'cta'` | Outline color of the link when you hover over it on light backgrounds.                   |
| --ds-auro-hyperlink-hover-outline-color-inverse         | `type !== 'cta'` | Outline color of the link when you hover over it on dark backgrounds.                    |
| --ds-auro-hyperlink-hover-border-color-default          | `type !== 'cta'` | Border color of the link when you hover over it on light backgrounds.                    |
| --ds-auro-hyperlink-hover-border-color-inverse          | `type !== 'cta'` | Border color of the link when you hover over it on dark backgrounds.                     |
| --ds-auro-hyperlink-nav-default-color-default           | `type !== 'cta'` | Text color of the navigation link in its default state on light backgrounds.             |
| --ds-auro-hyperlink-nav-default-color-inverse           | `type !== 'cta'` | Text color of the navigation link in its default state on dark backgrounds.              |
| --ds-auro-hyperlink-nav-default-container-color-default | `type !== 'cta'` | Background color of the navigation link in its default state on light backgrounds.       |
| --ds-auro-hyperlink-nav-default-container-color-inverse | `type !== 'cta'` | Background color of the navigation link in its default state on dark backgrounds.        |
| --ds-auro-hyperlink-nav-default-outline-color-default   | `type !== 'cta'` | Outline color of the navigation link in its default state on light backgrounds.          |
| --ds-auro-hyperlink-nav-default-outline-color-inverse   | `type !== 'cta'` | Outline color of the navigation link in its default state on dark backgrounds.           |
| --ds-auro-hyperlink-nav-default-border-color-default    | `type !== 'cta'` | Border color of the navigation link in its default state on light backgrounds.           |
| --ds-auro-hyperlink-nav-default-border-color-inverse    | `type !== 'cta'` | Border color of the navigation link in its default state on dark backgrounds.            |
| --ds-auro-hyperlink-nav-visited-color-default           | `type !== 'cta'` | Text color of the navigation link after it has been visited on light backgrounds.        |
| --ds-auro-hyperlink-nav-visited-color-inverse           | `type !== 'cta'` | Text color of the navigation link after it has been visited on dark backgrounds.         |
| --ds-auro-hyperlink-nav-visited-container-color-default | `type !== 'cta'` | Background color of the navigation link after it has been visited on light backgrounds.  |
| --ds-auro-hyperlink-nav-visited-container-color-inverse | `type !== 'cta'` | Background color of the navigation link after it has been visited on dark backgrounds.   |
| --ds-auro-hyperlink-nav-visited-outline-color-default   | `type !== 'cta'` | Outline color of the navigation link after it has been visited on light backgrounds.     |
| --ds-auro-hyperlink-nav-visited-outline-color-inverse   | `type !== 'cta'` | Outline color of the navigation link after it has been visited on dark backgrounds.      |
| --ds-auro-hyperlink-nav-visited-border-color-default    | `type !== 'cta'` | Border color of the navigation link after it has been visited on light backgrounds.      |
| --ds-auro-hyperlink-nav-visited-border-color-inverse    | `type !== 'cta'` | Border color of the navigation link after it has been visited on dark backgrounds.       |
| --ds-auro-hyperlink-nav-focus-color-default             | `type !== 'cta'` | Text color of the navigation link when it has keyboard focus on light backgrounds.       |
| --ds-auro-hyperlink-nav-focus-color-inverse             | `type !== 'cta'` | Text color of the navigation link when it has keyboard focus on dark backgrounds.        |
| --ds-auro-hyperlink-nav-focus-container-color-default   | `type !== 'cta'` | Background color of the navigation link when it has keyboard focus on light backgrounds. |
| --ds-auro-hyperlink-nav-focus-container-color-inverse   | `type !== 'cta'` | Background color of the navigation link when it has keyboard focus on dark backgrounds.  |
| --ds-auro-hyperlink-nav-focus-outline-color-default     | `type !== 'cta'` | Outline color of the navigation link when it has keyboard focus on light backgrounds.    |
| --ds-auro-hyperlink-nav-focus-outline-color-inverse     | `type !== 'cta'` | Outline color of the navigation link when it has keyboard focus on dark backgrounds.     |
| --ds-auro-hyperlink-nav-focus-border-color-default      | `type !== 'cta'` | Border color of the navigation link when it has keyboard focus on light backgrounds.     |
| --ds-auro-hyperlink-nav-focus-border-color-inverse      | `type !== 'cta'` | Border color of the navigation link when it has keyboard focus on dark backgrounds.      |
| --ds-auro-hyperlink-nav-hover-color-default             | `type !== 'cta'` | Text color of the navigation link when you hover over it on light backgrounds.           |
| --ds-auro-hyperlink-nav-hover-color-inverse             | `type !== 'cta'` | Text color of the navigation link when you hover over it on dark backgrounds.            |
| --ds-auro-hyperlink-nav-hover-container-color-default   | `type !== 'cta'` | Background color of the navigation link when you hover over it on light backgrounds.     |
| --ds-auro-hyperlink-nav-hover-container-color-inverse   | `type !== 'cta'` | Background color of the navigation link when you hover over it on dark backgrounds.      |
| --ds-auro-hyperlink-nav-hover-outline-color-default     | `type !== 'cta'` | Outline color of the navigation link when you hover over it on light backgrounds.        |
| --ds-auro-hyperlink-nav-hover-outline-color-inverse     | `type !== 'cta'` | Outline color of the navigation link when you hover over it on dark backgrounds.         |
| --ds-auro-hyperlink-nav-hover-border-color-default      | `type !== 'cta'` | Border color of the navigation link when you hover over it on light backgrounds.         |
| --ds-auro-hyperlink-nav-hover-border-color-inverse      | `type !== 'cta'` | Border color of the navigation link when you hover over it on dark backgrounds.          |