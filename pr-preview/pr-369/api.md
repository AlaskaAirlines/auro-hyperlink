<style>
  .exampleWrapper--ondark {
    color: var(--ds-color-text-primary-inverse);
  }
</style>
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-hyperlink

An accessible link that takes people to another page, a file, or an email or phone action.
It wraps a standard HTML `<a>` element, adds brand-aware styling and safer handling of
URLs, and passes ARIA attributes, `role`, and `tabindex` from the host to the inner link so screen reader users hear them.

**Key capabilities**
- **Link styles**: Leave `type` unset for a standard inline text link, use `type="nav"` for navigation
  links, or use `type="cta"` for a link that looks like an `<auro-button>`.
- **URL safety**: `href` values that start with `javascript:`, `data:`, or `vbscript:` are dropped so they can't run code,
  and every other `href` except `tel:`, `sms:`, and `mailto:` is upgraded to `https` (unless the page is served from `localhost`).
- **External links**: Setting `target="_blank"` adds a new-window icon for links to the same site or an external-link icon for other sites,
  and standard and `nav` links to other sites also get a `rel` value automatically, while `type="cta"` links use only the `rel` you provide.
- **Light and dark backgrounds**: Setting `appearance="inverse"` switches the link to colors designed for
  dark backgrounds.
- **Button behavior**: Setting `role="button"` gives the link a button role and a tab stop for actions such as
  opening a dialog, but Enter and Space do not currently fire `click`, so handle those keys yourself.

**Example**
<pre class="language-html"><code class="language-html">&lt;auro-hyperlink href="/trips"&gt;View your trips&lt;/auro-hyperlink&gt;</code></pre>

### Properties & Attributes

| Properties     | Attributes     | Modifiers | Type                                                        | Default   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------- | -------------- | --------- | ----------------------------------------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appearance     | appearance     |           | `default` \| `inverse`                                      | `default` | Sets the color scheme to match the background behind the link. Use `default` on light backgrounds and `inverse` on dark backgrounds.                                                                                                                                                                                                                                                                                                                                                    |
| download       | download       |           | boolean                                                     |           | Downloads the linked file when you select the link, instead of navigating to it. Ignored when `type="cta"`.                                                                                                                                                                                                                                                                                                                                                                             |
| fluid          | fluid          |           | boolean                                                     |           | When using `type="cta"`, stretches the link to fill the width of its container.                                                                                                                                                                                                                                                                                                                                                                                                         |
| href           | href           |           | string                                                      |           | Sets the address the link goes to, such as `/trips` or `https://www.alaskaair.com` (the link's `href`). Without a usable `href`, a standard or `nav` link without a `role` shows its content as plain text, and a `cta` link renders as a button.<br><br>Security: addresses that could run code (`javascript:`, `data:`, and `vbscript:`) are dropped, and every other address except `tel:`, `sms:`, and `mailto:` is upgraded to `https` unless the page is served from `localhost`. |
| referrerpolicy | referrerpolicy |           | boolean                                                     |           | Limits how much of the current page's address the link shares with the page it opens. Links within the same origin send the full address, and links to other origins send only the origin (`strict-origin-when-cross-origin`). Ignored when `type="cta"`.                                                                                                                                                                                                                               |
| rel            | rel            |           | string                                                      |           | Sets how the linked page relates to the current page, such as `nofollow` (the link's `rel`). When `rel` isn't set and `target="_blank"` points to another site, standard and `nav` links use `noOpener noReferrer`, or `external` when `referrerpolicy` is on; links to the same site and `type="cta"` links get no automatic `rel`. Visit [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel) for more information.                             |
| role           |                |           | string                                                      |           | Gives the link button behavior. Only `button` is supported, and the link then takes a keyboard tab stop and no longer navigates to `href`. Enter and Space do not currently fire `click`, so handle those keys and the click yourself. Ignored when `type="cta"`.                                                                                                                                                                                                                       |
| shape          | shape          |           | `rounded` \| `pill` \| `circle` \| `square`                 | `rounded` | When using `type="cta"`, sets the shape of the button: `rounded` corners, a `pill` with fully rounded ends, a `circle`, or a `square`. Use `rounded` (the default) or `pill` for buttons with a text label, and `circle` or `square` for icon-only buttons.                                                                                                                                                                                                                             |
| size           | size           |           | `xs` \| `sm` \| `md` \| `lg` \| `xl`                        | `md`      | When using `type="cta"`, sets the size of the button, from `xs` (smallest) to `xl` (largest). At `xs` and `sm`, the new-window or external-link icon also shrinks to match.                                                                                                                                                                                                                                                                                                             |
| target         | target         |           | string                                                      |           | Sets where the linked page opens, such as `_blank` for a new tab or `_self` for the current tab (the link's `target`). `_blank` also adds an icon after the content: a new-window icon for links to the same site, or an external-link icon for other sites.                                                                                                                                                                                                                            |
| type           | type           |           | `nav` \| `cta`                                              |           | Sets the style of the link. Use `nav` for navigation links, which are underlined on hover and on focus, and `cta` for a link that looks like a button. Leave it unset for a regular underlined text link.                                                                                                                                                                                                                                                                               |
| variant        | variant        |           | `primary` \| `secondary` \| `tertiary` \| `ghost` \| `flat` | `primary` | When using `type="cta"`, sets the button style. Use `primary` for the main action, `secondary` or `tertiary` for supporting actions, and `ghost` or `flat` for the lowest emphasis.                                                                                                                                                                                                                                                                                                     |
| ondark         | ondark         |           | boolean                                                     |           | Deprecated: Use `appearance="inverse"` instead.<br>Switches the link to colors designed for dark backgrounds.                                                                                                                                                                                                                                                                                                                                                                           |
| onDark         |                |           | boolean                                                     |           | Deprecated: Use `appearance="inverse"` instead.<br>Switches the link to colors designed for dark backgrounds.                                                                                                                                                                                                                                                                                                                                                                           |

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
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
<!-- The below content is automatically added from ./../apiExamples/basic.html -->
<auro-hyperlink>No href supplied</auro-hyperlink><br>
  Welcome to <auro-hyperlink href="https://www.alaskaair.com">Alaska Airlines</auro-hyperlink>.
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

<pre class="language-html"><code class="language-html">&lt;auro-hyperlink&gt;No href supplied&lt;/auro-hyperlink&gt;&lt;br&gt;
Welcome to &lt;auro-hyperlink href="https://www.alaskaair.com"&gt;Alaska Airlines&lt;/auro-hyperlink&gt;.</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property and attribute examples

### Appearance

Use the `appearance` attribute to match the link to its background. This example shows the `inverse` appearance for dark backgrounds.

<div class="exampleWrapper--ondark">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/appearance-inverse.html) -->
<!-- The below content is automatically added from ./../apiExamples/appearance-inverse.html -->
<auro-hyperlink appearance="inverse">No href supplied</auro-hyperlink><br>
  Welcome to <auro-hyperlink appearance="inverse" href="https://www.alaskaair.com">Alaska Airlines</auro-hyperlink>.
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/appearance-inverse.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/appearance-inverse.html -->

<pre class="language-html"><code class="language-html">&lt;auro-hyperlink appearance="inverse"&gt;No href supplied&lt;/auro-hyperlink&gt;&lt;br&gt;
Welcome to &lt;auro-hyperlink appearance="inverse" href="https://www.alaskaair.com"&gt;Alaska Airlines&lt;/auro-hyperlink&gt;.</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Relative and absolute URLs and HTTPS enforcement

#### HTTPS enforcement

`auro-hyperlink` upgrades the `href` to `https`, except for `tel:`, `sms:`, and `mailto:` addresses, and except when the page is served from `localhost`.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/https-enforcement.html) -->
<!-- The below content is automatically added from ./../apiExamples/https-enforcement.html -->
  http absolute URL <auro-hyperlink href="http://www.alaskaair.com/route-map">to route map</auro-hyperlink> or
  no hypertext transfer protocol absolute URL to <auro-hyperlink href="//www.alaskaair.com/route-map">route map</auro-hyperlink>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/https-enforcement_code.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/https-enforcement_code.html -->

<pre class="language-html"><code class="language-html">&lt;!-- Web component example --&gt;
http absolute URL &lt;auro-hyperlink href="http://www.alaskaair.com/route-map"&gt;to route map&lt;/auro-hyperlink&gt; or
no hypertext transfer protocol absolute URL to &lt;auro-hyperlink href="//www.alaskaair.com/route-map"&gt;route map&lt;/auro-hyperlink&gt;
&#10;&lt;!-- Output code in shadow DOM element --&gt;
http absolute URL &lt;a class="hyperlink" href="https://www.alaskaair.com/route-map"&gt;&lt;slot&gt;to route map&lt;/slot&gt;&lt;/a&gt;
no hypertext transfer protocol absolute URL to &lt;a class="hyperlink" href="https://www.alaskaair.com/route-map"&gt;&lt;slot&gt;route map&lt;/slot&gt;&lt;/a&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Relative URLs

You can use relative URLs when an absolute URL isn't practical. `auro-hyperlink` resolves a relative `href` against the current page and puts the full `https://` address in the inner `<a>` element in the shadow DOM.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/relative-url.html) -->
<!-- The below content is automatically added from ./../apiExamples/relative-url.html -->
  Relative href converted to absolute URL to <auro-hyperlink href="/components/hyperlink/api">Hyperlink API page</auro-hyperlink>.
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/relative-url_code.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/relative-url_code.html -->

<pre class="language-html"><code class="language-html">&lt;!-- Web component example --&gt;
Relative href converted to absolute URL to &lt;auro-hyperlink href="/components/hyperlink/api"&gt;Hyperlink API page&lt;/auro-hyperlink&gt;.
&#10;&lt;!-- Output code in shadow DOM element --&gt;
Relative href converted to absolute URL to &lt;a class="hyperlink" href="https://www.auro.alaskaair.com/components/hyperlink/api"&gt;&lt;slot&gt;Hyperlink API page&lt;/slot&gt;&lt;/a&gt;.</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Telephone, text message, and email addresses

Use `tel:`, `sms:`, and `mailto:` addresses to start a call, a text message, or an email. `auro-hyperlink` leaves these addresses as you write them.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/URLscheme.html) -->
<!-- The below content is automatically added from ./../apiExamples/URLscheme.html -->
  Example <auro-hyperlink href="sms:+18002527522">sms link</auro-hyperlink>.
  Example <auro-hyperlink href="tel:+18002527522">telephone link</auro-hyperlink>.
  Example <auro-hyperlink href="mailto:someone@alaskaair.com?cc=someone-else@alaskaair.com&bcc=someone-else-else@alaskaiar.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">email link</auro-hyperlink>.
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/URLscheme.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/URLscheme.html -->

<pre class="language-html"><code class="language-html">Example &lt;auro-hyperlink href="sms:+18002527522"&gt;sms link&lt;/auro-hyperlink&gt;.
Example &lt;auro-hyperlink href="tel:+18002527522"&gt;telephone link&lt;/auro-hyperlink&gt;.
Example &lt;auro-hyperlink href="mailto:someone@alaskaair.com?cc=someone-else@alaskaair.com&amp;bcc=someone-else-else@alaskaiar.com&amp;subject=The%20subject%20of%20the%20email&amp;body=The%20body%20of%20the%20email"&gt;email link&lt;/auro-hyperlink&gt;.</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### External links

When you use `target="_blank"`, the link shows a new-window icon for links to the same site and an external-link icon for links to other sites.

Browsers already apply `rel="noopener"` behavior to `target="_blank"` links. For additional security, standard and `nav` links to other sites also get `rel="noOpener noReferrer"` by default. Links to your own site and `type="cta"` links get no automatic `rel`.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/external.html) -->
<!-- The below content is automatically added from ./../apiExamples/external.html -->
  Example link with
<auro-hyperlink
    target="_blank"
    href="/">
    external target
</auro-hyperlink>
  but same domain

<br>
  Example link with
<auro-hyperlink
    target="_blank"
    href="https://www.portseattle.org/sea-tac">
    external target
</auro-hyperlink>
   with external domain
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<div class="exampleWrapper--ondark">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/external-appearance-inverse.html) -->
<!-- The below content is automatically added from ./../apiExamples/external-appearance-inverse.html -->
  Example link with
<auro-hyperlink
    appearance="inverse"
    target="_blank"
    href="/">
    external target
</auro-hyperlink>
  but same domain

<br>
  Example link with
<auro-hyperlink
    appearance="inverse"
    target="_blank"
    href="https://www.portseattle.org/sea-tac">
    external target
</auro-hyperlink>
   with external domain
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/external.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/external.html -->

<pre class="language-html"><code class="language-html">Example link with
&lt;auro-hyperlink
  target="_blank"
  href="/"&gt;
  external target
&lt;/auro-hyperlink&gt;
but same domain
&#10;&lt;br&gt;
Example link with
&lt;auro-hyperlink
  target="_blank"
  href="https://www.portseattle.org/sea-tac"&gt;
  external target
&lt;/auro-hyperlink&gt;
 with external domain</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/external-appearance-inverse.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/external-appearance-inverse.html -->

<pre class="language-html"><code class="language-html">Example link with
&lt;auro-hyperlink
  appearance="inverse"
  target="_blank"
  href="/"&gt;
  external target
&lt;/auro-hyperlink&gt;
but same domain
&#10;&lt;br&gt;
Example link with
&lt;auro-hyperlink
  appearance="inverse"
  target="_blank"
  href="https://www.portseattle.org/sea-tac"&gt;
  external target
&lt;/auro-hyperlink&gt;
 with external domain</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### External links with `referrerpolicy`

When you use `target="_blank"`, add the `referrerpolicy` attribute to share the page's origin with the linked site instead of using the default `rel="noOpener noReferrer"`.

The attribute applies the `strict-origin-when-cross-origin` policy. It sends the full URL for same-origin requests, sends only the origin when the protocol security level stays the same (HTTPS to HTTPS), and sends no referrer to a less secure destination (HTTPS to HTTP).

It also sets `rel="external"` unless you provide your own `rel`.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/external-referrer.html) -->
<!-- The below content is automatically added from ./../apiExamples/external-referrer.html -->
Example link with
<auro-hyperlink
  target="_blank"
  referrerpolicy
  href="https://www.portseattle.org/sea-tac">
  external target
</auro-hyperlink>
 , external domain with referrerpolicy attribute
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<div class="exampleWrapper--ondark">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/external-referrer-appearance-inverse.html) -->
<!-- The below content is automatically added from ./../apiExamples/external-referrer-appearance-inverse.html -->
Example link with
<auro-hyperlink
  appearance="inverse"
  target="_blank"
  referrerpolicy
  href="https://www.portseattle.org/sea-tac">
  external target
</auro-hyperlink>
 , external domain with referrerpolicy attribute
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/external-referrer.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/external-referrer.html -->

<pre class="language-html"><code class="language-html">Example link with
&lt;auro-hyperlink
  target="_blank"
  referrerpolicy
  href="https://www.portseattle.org/sea-tac"&gt;
  external target
&lt;/auro-hyperlink&gt;
 , external domain with referrerpolicy attribute</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/external-referrer-appearance-inverse.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/external-referrer-appearance-inverse.html -->

<pre class="language-html"><code class="language-html">Example link with
&lt;auro-hyperlink
  appearance="inverse"
  target="_blank"
  referrerpolicy
  href="https://www.portseattle.org/sea-tac"&gt;
  external target
&lt;/auro-hyperlink&gt;
 , external domain with referrerpolicy attribute</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Navigation links

Use `type="nav"` for links in navigation. Navigation links appear without an underline and show it on hover and on focus.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/nav.html) -->
<!-- The below content is automatically added from ./../apiExamples/nav.html -->
<auro-hyperlink
    type="nav"
    href="https://www.alaskaair.com">
    Navigation style link
</auro-hyperlink>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<div class="exampleWrapper--ondark">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/nav-appearance-inverse.html) -->
<!-- The below content is automatically added from ./../apiExamples/nav-appearance-inverse.html -->
<auro-hyperlink
    appearance="inverse"
    type="nav"
    href="https://www.alaskaair.com">
    Navigation style link
</auro-hyperlink>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/nav.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/nav.html -->

<pre class="language-html"><code class="language-html">&lt;auro-hyperlink
  type="nav"
  href="https://www.alaskaair.com"&gt;
  Navigation style link
&lt;/auro-hyperlink&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/nav-appearance-inverse.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/nav-appearance-inverse.html -->

<pre class="language-html"><code class="language-html">&lt;auro-hyperlink
  appearance="inverse"
  type="nav"
  href="https://www.alaskaair.com"&gt;
  Navigation style link
&lt;/auro-hyperlink&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Call to action buttons

Call to action (CTA) links look like buttons but behave as hyperlinks. Use the `variant` attribute with `primary`, `secondary`, `tertiary`, `ghost`, or `flat` to change their appearance, as shown below. Add `appearance="inverse"` to any `type="cta"` link on a dark background.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/cta.html) -->
<!-- The below content is automatically added from ./../apiExamples/cta.html -->
<auro-hyperlink type="cta" href="https://www.alaskaair.com" variant="primary">Primary</auro-hyperlink>
<auro-hyperlink type="cta" href="https://www.alaskaair.com" variant="secondary">Secondary</auro-hyperlink>
<auro-hyperlink type="cta" href="https://www.alaskaair.com" variant="tertiary">Tertiary</auro-hyperlink>
<auro-hyperlink type="cta" href="https://www.alaskaair.com" variant="ghost">Ghost</auro-hyperlink>
<auro-hyperlink type="cta" href="https://www.alaskaair.com" variant="flat">Flat</auro-hyperlink>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<div class="exampleWrapper--ondark">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/cta-appearance-inverse.html) -->
<!-- The below content is automatically added from ./../apiExamples/cta-appearance-inverse.html -->
<auro-hyperlink type="cta" appearance="inverse" href="https://www.alaskaair.com" variant="primary">Primary</auro-hyperlink>
<auro-hyperlink type="cta" appearance="inverse" href="https://www.alaskaair.com" variant="secondary">Secondary</auro-hyperlink>
<auro-hyperlink type="cta" appearance="inverse" href="https://www.alaskaair.com" variant="tertiary">Tertiary</auro-hyperlink>
<auro-hyperlink type="cta" appearance="inverse" href="https://www.alaskaair.com" variant="ghost">Ghost</auro-hyperlink>
<auro-hyperlink type="cta" appearance="inverse" href="https://www.alaskaair.com" variant="flat">Flat</auro-hyperlink>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/cta.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/cta.html -->

<pre class="language-html"><code class="language-html">&lt;auro-hyperlink type="cta" href="https://www.alaskaair.com" variant="primary"&gt;Primary&lt;/auro-hyperlink&gt;
&lt;auro-hyperlink type="cta" href="https://www.alaskaair.com" variant="secondary"&gt;Secondary&lt;/auro-hyperlink&gt;
&lt;auro-hyperlink type="cta" href="https://www.alaskaair.com" variant="tertiary"&gt;Tertiary&lt;/auro-hyperlink&gt;
&lt;auro-hyperlink type="cta" href="https://www.alaskaair.com" variant="ghost"&gt;Ghost&lt;/auro-hyperlink&gt;
&lt;auro-hyperlink type="cta" href="https://www.alaskaair.com" variant="flat"&gt;Flat&lt;/auro-hyperlink&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/cta-appearance-inverse.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/cta-appearance-inverse.html -->

<pre class="language-html"><code class="language-html">&lt;auro-hyperlink type="cta" appearance="inverse" href="https://www.alaskaair.com" variant="primary"&gt;Primary&lt;/auro-hyperlink&gt;
&lt;auro-hyperlink type="cta" appearance="inverse" href="https://www.alaskaair.com" variant="secondary"&gt;Secondary&lt;/auro-hyperlink&gt;
&lt;auro-hyperlink type="cta" appearance="inverse" href="https://www.alaskaair.com" variant="tertiary"&gt;Tertiary&lt;/auro-hyperlink&gt;
&lt;auro-hyperlink type="cta" appearance="inverse" href="https://www.alaskaair.com" variant="ghost"&gt;Ghost&lt;/auro-hyperlink&gt;
&lt;auro-hyperlink type="cta" appearance="inverse" href="https://www.alaskaair.com" variant="flat"&gt;Flat&lt;/auro-hyperlink&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### CTA external links

CTA links also work with external links. Add `target="_blank"` to show the same new-window or external-link icon that standard links get.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/cta-external-link.html) -->
<!-- The below content is automatically added from ./../apiExamples/cta-external-link.html -->
<auro-hyperlink target="_blank" type="cta" href="https://www.alaskaair.com" variant="primary">Primary</auro-hyperlink>
<auro-hyperlink target="_blank" type="cta" href="https://www.alaskaair.com" variant="secondary">Secondary</auro-hyperlink>
<auro-hyperlink target="_blank" type="cta" href="https://www.alaskaair.com" variant="tertiary">Tertiary</auro-hyperlink>
<auro-hyperlink target="_blank" type="cta" href="https://www.alaskaair.com" variant="ghost">Ghost</auro-hyperlink>
<auro-hyperlink target="_blank" type="cta" href="https://www.alaskaair.com" variant="flat">Flat</auro-hyperlink>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<div class="exampleWrapper--ondark">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/cta-external-link-appearance-inverse.html) -->
<!-- The below content is automatically added from ./../apiExamples/cta-external-link-appearance-inverse.html -->
<auro-hyperlink target="_blank" type="cta" href="https://www.portseattle.org/sea-tac" appearance="inverse" variant="primary">Primary</auro-hyperlink>
<auro-hyperlink target="_blank" type="cta" href="https://www.portseattle.org/sea-tac" appearance="inverse" variant="secondary">Secondary</auro-hyperlink>
<auro-hyperlink target="_blank" type="cta" href="https://www.portseattle.org/sea-tac" appearance="inverse" variant="tertiary">Tertiary</auro-hyperlink>
<auro-hyperlink target="_blank" type="cta" href="https://www.portseattle.org/sea-tac" appearance="inverse" variant="ghost">Ghost</auro-hyperlink>
<auro-hyperlink target="_blank" type="cta" href="https://www.portseattle.org/sea-tac" appearance="inverse" variant="flat">Flat</auro-hyperlink>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/cta-external-link.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/cta-external-link.html -->

<pre class="language-html"><code class="language-html">&lt;auro-hyperlink target="_blank" type="cta" href="https://www.alaskaair.com" variant="primary"&gt;Primary&lt;/auro-hyperlink&gt;
&lt;auro-hyperlink target="_blank" type="cta" href="https://www.alaskaair.com" variant="secondary"&gt;Secondary&lt;/auro-hyperlink&gt;
&lt;auro-hyperlink target="_blank" type="cta" href="https://www.alaskaair.com" variant="tertiary"&gt;Tertiary&lt;/auro-hyperlink&gt;
&lt;auro-hyperlink target="_blank" type="cta" href="https://www.alaskaair.com" variant="ghost"&gt;Ghost&lt;/auro-hyperlink&gt;
&lt;auro-hyperlink target="_blank" type="cta" href="https://www.alaskaair.com" variant="flat"&gt;Flat&lt;/auro-hyperlink&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/cta-external-link-appearance-inverse.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/cta-external-link-appearance-inverse.html -->

<pre class="language-html"><code class="language-html">&lt;auro-hyperlink target="_blank" type="cta" href="https://www.portseattle.org/sea-tac" appearance="inverse" variant="primary"&gt;Primary&lt;/auro-hyperlink&gt;
&lt;auro-hyperlink target="_blank" type="cta" href="https://www.portseattle.org/sea-tac" appearance="inverse" variant="secondary"&gt;Secondary&lt;/auro-hyperlink&gt;
&lt;auro-hyperlink target="_blank" type="cta" href="https://www.portseattle.org/sea-tac" appearance="inverse" variant="tertiary"&gt;Tertiary&lt;/auro-hyperlink&gt;
&lt;auro-hyperlink target="_blank" type="cta" href="https://www.portseattle.org/sea-tac" appearance="inverse" variant="ghost"&gt;Ghost&lt;/auro-hyperlink&gt;
&lt;auro-hyperlink target="_blank" type="cta" href="https://www.portseattle.org/sea-tac" appearance="inverse" variant="flat"&gt;Flat&lt;/auro-hyperlink&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Fluid CTA links

Add the `fluid` attribute to stretch a CTA link to the full width of its parent container.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/cta-fluid.html) -->
<!-- The below content is automatically added from ./../apiExamples/cta-fluid.html -->
<div style="display: flex; flex-direction: column; gap: 1rem;">
<auro-hyperlink type="cta" fluid href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
<auro-hyperlink type="cta" fluid variant="secondary" href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
<auro-hyperlink type="cta" fluid variant="tertiary" href="https://www.alaskaair.com">CTA Button</auro-hyperlink>
</div>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/cta-fluid.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/cta-fluid.html -->

<pre class="language-html"><code class="language-html">&lt;div style="display: flex; flex-direction: column; gap: 1rem;"&gt;
  &lt;auro-hyperlink type="cta" fluid href="https://www.alaskaair.com"&gt;CTA Button&lt;/auro-hyperlink&gt;
  &lt;auro-hyperlink type="cta" fluid variant="secondary" href="https://www.alaskaair.com"&gt;CTA Button&lt;/auro-hyperlink&gt;
  &lt;auro-hyperlink type="cta" fluid variant="tertiary" href="https://www.alaskaair.com"&gt;CTA Button&lt;/auro-hyperlink&gt;
&lt;/div&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### CTA sizes

Use the `size` attribute to change the size of a CTA link. The available sizes are `xs`, `sm`, `md`, `lg`, and `xl`.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/cta-size.html) -->
<!-- The below content is automatically added from ./../apiExamples/cta-size.html -->
<auro-hyperlink type="cta" href="https://www.alaskaair.com" size="xs">Extra Small</auro-hyperlink>
<auro-hyperlink type="cta" href="https://www.alaskaair.com" size="sm">Small</auro-hyperlink>
<auro-hyperlink type="cta" href="https://www.alaskaair.com" size="md">Medium</auro-hyperlink>
<auro-hyperlink type="cta" href="https://www.alaskaair.com" size="lg">Large</auro-hyperlink>
<auro-hyperlink type="cta" href="https://www.alaskaair.com" size="xl">Extra Large</auro-hyperlink>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/cta-size.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/cta-size.html -->

<pre class="language-html"><code class="language-html">&lt;auro-hyperlink type="cta" href="https://www.alaskaair.com" size="xs"&gt;Extra Small&lt;/auro-hyperlink&gt;
&lt;auro-hyperlink type="cta" href="https://www.alaskaair.com" size="sm"&gt;Small&lt;/auro-hyperlink&gt;
&lt;auro-hyperlink type="cta" href="https://www.alaskaair.com" size="md"&gt;Medium&lt;/auro-hyperlink&gt;
&lt;auro-hyperlink type="cta" href="https://www.alaskaair.com" size="lg"&gt;Large&lt;/auro-hyperlink&gt;
&lt;auro-hyperlink type="cta" href="https://www.alaskaair.com" size="xl"&gt;Extra Large&lt;/auro-hyperlink&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### CTA sizes with external links

When a CTA link uses `target="_blank"`, the new-window or external-link icon follows the `size` attribute.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/cta-size-external-link.html) -->
<!-- The below content is automatically added from ./../apiExamples/cta-size-external-link.html -->
<auro-hyperlink type="cta" target="_blank" href="https://www.alaskaair.com" size="xs">Extra Small</auro-hyperlink>
<auro-hyperlink type="cta" target="_blank" href="https://www.alaskaair.com" size="sm">Small</auro-hyperlink>
<auro-hyperlink type="cta" target="_blank" href="https://www.alaskaair.com" size="md">Medium</auro-hyperlink>
<auro-hyperlink type="cta" target="_blank" href="https://www.alaskaair.com" size="lg">Large</auro-hyperlink>
<auro-hyperlink type="cta" target="_blank" href="https://www.alaskaair.com" size="xl">Extra Large</auro-hyperlink>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/cta-size-external-link.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/cta-size-external-link.html -->

<pre class="language-html"><code class="language-html">&lt;auro-hyperlink type="cta" target="_blank" href="https://www.alaskaair.com" size="xs"&gt;Extra Small&lt;/auro-hyperlink&gt;
&lt;auro-hyperlink type="cta" target="_blank" href="https://www.alaskaair.com" size="sm"&gt;Small&lt;/auro-hyperlink&gt;
&lt;auro-hyperlink type="cta" target="_blank" href="https://www.alaskaair.com" size="md"&gt;Medium&lt;/auro-hyperlink&gt;
&lt;auro-hyperlink type="cta" target="_blank" href="https://www.alaskaair.com" size="lg"&gt;Large&lt;/auro-hyperlink&gt;
&lt;auro-hyperlink type="cta" target="_blank" href="https://www.alaskaair.com" size="xl"&gt;Extra Large&lt;/auro-hyperlink&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### CTA shape

The `shape` attribute accepts four values: `rounded`, `pill`, `circle`, or `square`. The `circle` and `square` shapes are sized for icon-only content.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/cta-shape.html) -->
<!-- The below content is automatically added from ./../apiExamples/cta-shape.html -->
<auro-hyperlink type="cta" href="https://www.alaskaair.com" shape="rounded">Rounded</auro-hyperlink>
<auro-hyperlink type="cta" href="https://www.alaskaair.com" shape="pill">Pill</auro-hyperlink>
<auro-hyperlink type="cta" href="https://www.alaskaair.com" aria-label="in-flight" shape="pill">
    Back to Top
<auro-icon customColor category="interface" name="arrow-up"></auro-icon>
</auro-hyperlink>
<auro-hyperlink type="cta" href="https://www.alaskaair.com" shape="circle">
<auro-icon customcolor category="interface" name="account-filled" appearance="inverse"></auro-icon>
</auro-hyperlink>
<auro-hyperlink type="cta" href="https://www.alaskaair.com" aria-label="Search" shape="square">
<auro-icon customcolor category="interface" name="search" appearance="inverse"></auro-icon>
</auro-hyperlink>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/cta-shape.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/cta-shape.html -->

<pre class="language-html"><code class="language-html">&lt;auro-hyperlink type="cta" href="https://www.alaskaair.com" shape="rounded"&gt;Rounded&lt;/auro-hyperlink&gt;
&lt;auro-hyperlink type="cta" href="https://www.alaskaair.com" shape="pill"&gt;Pill&lt;/auro-hyperlink&gt;
&lt;auro-hyperlink type="cta" href="https://www.alaskaair.com" aria-label="in-flight" shape="pill"&gt;
  Back to Top
  &lt;auro-icon customColor category="interface" name="arrow-up"&gt;&lt;/auro-icon&gt;
&lt;/auro-hyperlink&gt;
&lt;auro-hyperlink type="cta" href="https://www.alaskaair.com" shape="circle"&gt;
  &lt;auro-icon customcolor category="interface" name="account-filled" appearance="inverse"&gt;&lt;/auro-icon&gt;
&lt;/auro-hyperlink&gt;
&lt;auro-hyperlink type="cta" href="https://www.alaskaair.com" aria-label="Search" shape="square"&gt;
  &lt;auro-icon customcolor category="interface" name="search" appearance="inverse"&gt;&lt;/auro-icon&gt;
&lt;/auro-hyperlink&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Common usage patterns and functional examples

### Using `role="button"`

Use `role="button"` when you need link styling for an action, such as opening a dialog.

**Note:** `auro-hyperlink` ignores `href` when you use `role="button"`, so handle the `click` event yourself, as the following example shows.

**Accessibility:** Enter and Space don't currently fire `click` on the link, so keyboard users can't activate it unless you handle those keys yourself. The example's script listens only for `click`.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/role-button.html) -->
<!-- The below content is automatically added from ./../apiExamples/role-button.html -->
<auro-hyperlink href="http://www.alaskaair.com" role="button" id="roleButton">Cancel button</auro-hyperlink>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<div class="exampleWrapper--ondark">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/role-button-appearance-inverse.html) -->
<!-- The below content is automatically added from ./../apiExamples/role-button-appearance-inverse.html -->
<auro-hyperlink appearance="inverse" href="http://www.alaskaair.com" role="button" id="roleButton-ondark">Cancel button</auro-hyperlink>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/role-button.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/role-button.html -->

<pre class="language-html"><code class="language-html">&lt;auro-hyperlink href="http://www.alaskaair.com" role="button" id="roleButton"&gt;Cancel button&lt;/auro-hyperlink&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/role-button-appearance-inverse.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/role-button-appearance-inverse.html -->

<pre class="language-html"><code class="language-html">&lt;auro-hyperlink appearance="inverse" href="http://www.alaskaair.com" role="button" id="roleButton-ondark"&gt;Cancel button&lt;/auro-hyperlink&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/role-button.js) -->
<!-- The below code snippet is automatically added from ./../apiExamples/role-button.js -->

<pre class="language-js"><code class="language-js">export function roleButtonExample() {
  const roleButton = document.getElementById("roleButton");
  const roleButtonOndark = document.getElementById("roleButton-ondark");
&#10;  roleButton.addEventListener("click", () =&gt; {
    alert("You clicked the role button!");
  });
&#10;  roleButtonOndark.addEventListener("click", () =&gt; {
    alert("You clicked the role button!");
  });
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Unsupported types

For security, `auro-hyperlink` drops `javascript:`, `data:`, and `vbscript:` addresses so they can't run code.

The following examples show `<auro-hyperlink>` with no `href`, a `javascript:` address, and a `data:` address. In each case, the link renders only its slotted content as plain text instead of an `<a>` element.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/non-supported.html) -->
<!-- The below content is automatically added from ./../apiExamples/non-supported.html -->
<p>
<auro-hyperlink>No href supplied</auro-hyperlink>
</p>
<p>
<auro-hyperlink href="javascript:;">JavaScript not supported</auro-hyperlink>
</p>
<p>
<auro-hyperlink href="data:text/plain;charset=utf-8,Hello%20World!">Data type not supported</auro-hyperlink>
</p>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/non-supported.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/non-supported.html -->

<pre class="language-html"><code class="language-html">&lt;p&gt;
  &lt;auro-hyperlink&gt;No href supplied&lt;/auro-hyperlink&gt;
&lt;/p&gt;
&lt;p&gt;
  &lt;auro-hyperlink href="javascript:;"&gt;JavaScript not supported&lt;/auro-hyperlink&gt;
&lt;/p&gt;
&lt;p&gt;
  &lt;auro-hyperlink href="data:text/plain;charset=utf-8,Hello%20World!"&gt;Data type not supported&lt;/auro-hyperlink&gt;
&lt;/p&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Typography

`auro-hyperlink` works with the typography classes from the Auro Design System. It inherits typography styles from its parent element, so text stays consistent across your application. You can also apply typography classes directly to the `auro-hyperlink` element.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/typography.html) -->
<!-- The below content is automatically added from ./../apiExamples/typography.html -->
<div class="body-xs">
    Welcome to <auro-hyperlink href="https://www.alaskaair.com">Alaska Airlines</auro-hyperlink>.
</div>
<div class="body-default">
    Welcome to <auro-hyperlink href="https://www.alaskaair.com">Alaska Airlines</auro-hyperlink>.
</div>
<div class="body-lg">
    Welcome to <auro-hyperlink href="https://www.alaskaair.com">Alaska Airlines</auro-hyperlink>.
</div>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/typography.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/typography.html -->

<pre class="language-html"><code class="language-html">&lt;div class="body-xs"&gt;
  Welcome to &lt;auro-hyperlink href="https://www.alaskaair.com"&gt;Alaska Airlines&lt;/auro-hyperlink&gt;.
&lt;/div&gt;
&#10;&lt;div class="body-default"&gt;
  Welcome to &lt;auro-hyperlink href="https://www.alaskaair.com"&gt;Alaska Airlines&lt;/auro-hyperlink&gt;.
&lt;/div&gt;
&#10;&lt;div class="body-lg"&gt;
  Welcome to &lt;auro-hyperlink href="https://www.alaskaair.com"&gt;Alaska Airlines&lt;/auro-hyperlink&gt;.
&lt;/div&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle the component with CSS custom properties

You can restyle the component by changing the values of the following custom properties.

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

<pre class="language-scss"><code class="language-scss">/* stylelint-disable custom-property-empty-line-before */
&#10;@use "@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska" as v;
&#10;:host(:not([type='cta'])) {
  // default hyperlink
  &#10;  --ds-auro-hyperlink-default-color-default: var(--ds-advanced-color-hyperlink-text, #{v.$ds-advanced-color-hyperlink-text});
  --ds-auro-hyperlink-default-container-color-default: transparent;
  --ds-auro-hyperlink-default-outline-color-default: transparent;
  --ds-auro-hyperlink-default-border-color-default: transparent;
&#10;  --ds-auro-hyperlink-visited-color-default: var(--ds-advanced-color-hyperlink-text, #{v.$ds-advanced-color-hyperlink-text});
  --ds-auro-hyperlink-visited-container-color-default: transparent;
  --ds-auro-hyperlink-visited-outline-color-default: transparent;
  --ds-auro-hyperlink-visited-border-color-default: transparent;
&#10;  --ds-auro-hyperlink-focus-color-default: var(--ds-advanced-color-hyperlink-text, #{v.$ds-advanced-color-hyperlink-text});
  --ds-auro-hyperlink-focus-container-color-default: transparent;
  --ds-auro-hyperlink-focus-outline-color-default: var(--ds-advanced-color-state-focused, #{v.$ds-advanced-color-state-focused});
  --ds-auro-hyperlink-focus-border-color-default: transparent;
&#10;  --ds-auro-hyperlink-hover-color-default: var(--ds-advanced-color-hyperlink-text-hover, #{v.$ds-advanced-color-hyperlink-text-hover});
  --ds-auro-hyperlink-hover-container-color-default: transparent;
  --ds-auro-hyperlink-hover-outline-color-default: transparent;
  --ds-auro-hyperlink-hover-border-color-default: transparent;
&#10;  // default ondark hyperlink
&#10;  --ds-auro-hyperlink-default-color-inverse: var(--ds-advanced-color-hyperlink-text-inverse, #{v.$ds-advanced-color-hyperlink-text-inverse});
  --ds-auro-hyperlink-default-container-color-inverse: transparent;
  --ds-auro-hyperlink-default-outline-color-inverse: transparent;
  --ds-auro-hyperlink-default-border-color-inverse: transparent;
&#10;  --ds-auro-hyperlink-visited-color-inverse: var(--ds-advanced-color-hyperlink-text-inverse, #{v.$ds-advanced-color-hyperlink-text-inverse});
  --ds-auro-hyperlink-visited-container-color-inverse: transparent;
  --ds-auro-hyperlink-visited-outline-color-inverse: transparent;
  --ds-auro-hyperlink-visited-border-color-inverse: transparent;
&#10;  --ds-auro-hyperlink-focus-color-inverse: var(--ds-advanced-color-hyperlink-text-inverse, #{v.$ds-advanced-color-hyperlink-text-inverse});
  --ds-auro-hyperlink-focus-container-color-inverse: transparent;
  --ds-auro-hyperlink-focus-outline-color-inverse: var(--ds-advanced-color-state-focused-inverse, #{v.$ds-advanced-color-state-focused-inverse});
  --ds-auro-hyperlink-focus-border-color-inverse: transparent;
&#10;  --ds-auro-hyperlink-hover-color-inverse: var(--ds-advanced-color-hyperlink-text-inverse, #{v.$ds-advanced-color-hyperlink-text-inverse});
  --ds-auro-hyperlink-hover-container-color-inverse: transparent;
  --ds-auro-hyperlink-hover-outline-color-inverse: transparent;
  --ds-auro-hyperlink-hover-border-color-inverse: transparent;
&#10;  // nav hyperlink
&#10;  --ds-auro-hyperlink-nav-default-color-default: var(--ds-advanced-color-hyperlink-text, #{v.$ds-advanced-color-hyperlink-text});
  --ds-auro-hyperlink-nav-default-container-color-default: transparent;
  --ds-auro-hyperlink-nav-default-outline-color-default: transparent;
  --ds-auro-hyperlink-nav-default-border-color-default: transparent;
&#10;  --ds-auro-hyperlink-nav-visited-color-default: var(--ds-advanced-color-hyperlink-text, #{v.$ds-advanced-color-hyperlink-text});
  --ds-auro-hyperlink-nav-visited-container-color-default: transparent;
  --ds-auro-hyperlink-nav-visited-outline-color-default: transparent;
  --ds-auro-hyperlink-nav-visited-border-color-default: transparent;
&#10;  --ds-auro-hyperlink-nav-focus-color-default: var(--ds-advanced-color-hyperlink-text-inverse, #{v.$ds-advanced-color-hyperlink-text-inverse});
  --ds-auro-hyperlink-nav-focus-container-color-default: var(--ds-advanced-color-state-focused, #{v.$ds-advanced-color-state-focused});
  --ds-auro-hyperlink-nav-focus-outline-color-default: var(--ds-advanced-color-state-focused, #{v.$ds-advanced-color-state-focused});
  --ds-auro-hyperlink-nav-focus-border-color-default: var(--ds-advanced-color-state-focused, #{v.$ds-advanced-color-state-focused});
&#10;  --ds-auro-hyperlink-nav-hover-color-default: var(--ds-advanced-color-hyperlink-text-hover, #{v.$ds-advanced-color-hyperlink-text-hover});
  --ds-auro-hyperlink-nav-hover-container-color-default: transparent;
  --ds-auro-hyperlink-nav-hover-outline-color-default: transparent;
  --ds-auro-hyperlink-nav-hover-border-color-default: transparent;
&#10;  // nav ondark hyperlink
  &#10;  --ds-auro-hyperlink-nav-default-color-inverse: var(--ds-advanced-color-hyperlink-text-inverse, #{v.$ds-advanced-color-hyperlink-text-inverse});
  --ds-auro-hyperlink-nav-default-container-color-inverse: transparent;
  --ds-auro-hyperlink-nav-default-outline-color-inverse: transparent;
  --ds-auro-hyperlink-nav-default-border-color-inverse: transparent;
&#10;  --ds-auro-hyperlink-nav-visited-color-inverse: var(--ds-advanced-color-hyperlink-text-inverse, #{v.$ds-advanced-color-hyperlink-text-inverse});
  --ds-auro-hyperlink-nav-visited-container-color-inverse: transparent;
  --ds-auro-hyperlink-nav-visited-outline-color-inverse: transparent;
  --ds-auro-hyperlink-nav-visited-border-color-inverse: transparent;
&#10;  --ds-auro-hyperlink-nav-focus-color-inverse: var(--ds-advanced-color-hyperlink-text, #{v.$ds-advanced-color-hyperlink-text});
  --ds-auro-hyperlink-nav-focus-container-color-inverse: var(--ds-advanced-color-state-focused-inverse, #{v.$ds-advanced-color-state-focused-inverse});
  --ds-auro-hyperlink-nav-focus-outline-color-inverse: var(--ds-advanced-color-state-focused-inverse, #{v.$ds-advanced-color-state-focused-inverse});
  --ds-auro-hyperlink-nav-focus-border-color-inverse: var(--ds-advanced-color-state-focused-inverse, #{v.$ds-advanced-color-state-focused-inverse});
&#10;  --ds-auro-hyperlink-nav-hover-color-inverse: var(--ds-advanced-color-hyperlink-text-inverse, #{v.$ds-advanced-color-hyperlink-text-inverse});
  --ds-auro-hyperlink-nav-hover-container-color-inverse: transparent;
  --ds-auro-hyperlink-nav-hover-outline-color-inverse: transparent;
  --ds-auro-hyperlink-nav-hover-border-color-inverse: transparent;
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
