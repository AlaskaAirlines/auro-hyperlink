# auro-hyperlink

`<auro-hyperlink>` is a wrapper components for an HTML `<a>` element containing styling and behavior.

## Properties

| Property         | Attribute        | Type      | Default | Description                                      |
|------------------|------------------|-----------|---------|--------------------------------------------------|
| `download`       | `download`       | `Boolean` | false   | Specifies that the target will be downloaded when a user clicks on the hyperlink. |
| `fluid`          | `fluid`          | `boolean` |         |                                                  |
| `href`           | `href`           | `String`  |         | Specifies the URL of the page link.              |
| `ondark`         | `ondark`         | `Boolean` | false   | Specifies dark theme use of hyperlink.           |
| `referrerpolicy` | `referrerpolicy` | `Boolean` |         | Sets `strict-origin-when-cross-origin` to send a full URL when performing a same-origin request, only sends the origin when the protocol security level stays the same (HTTPS→HTTPS), and sends no header to a less secure destination (HTTPS→HTTP). |
| `rel`            | `rel`            | `String`  |         | Specifies the relationship between the current document and the linked document. |
| `relative`       | `relative`       | `Boolean` | false   | Add flag to disable auto URL re-write feature.   |
| `role`           | `role`           | `String`  |         | Use for aria roles; currently supports `button` for extended experiences. |
| `secondary`      | `secondary`      | `Boolean` | false   | Modifier for `type="cta"` secondary UI option.   |
| `target`         | `target`         | `String`  |         | Specifies where to open the linked document.     |
| `type`           | `type`           | `String`  |         | Enumerable attribute; [`nav`, `cta`]             |

## Methods

| Method  | Type       | Description         |
|---------|------------|---------------------|
| `focus` | `(): void` | Focus this element. |
