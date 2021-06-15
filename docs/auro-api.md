# Auro Hyperlink API

| Attribute | value type | Description |
|----|----|----|
| download | boolean | Specifies that the target will be downloaded when a user clicks on the hyperlink |
| href † | string | Specifies the URL of the page link |
| nav | boolean | Displays element as block element for use as navigation |
| noexit | boolean | Designates that the targeted link will not exit the domain |
| ondark | boolean | Specifies dark theme use of hyperlink |
| rel | string | Specifies the relationship between the current document and the linked document |
| relative | boolean | Add flag to disable auto URL re-write feature |
| role | string | Use for aria roles; currently supports `button` for extended experiences |
| target †† | string | Specifies where to open the linked document |

† Relative path URLs will be converted to the full `www.alaskaair.com` using the `https://` protocol. Any full URL given using the `http://` or `//` protocol will be converted to `https://`.

†† Using `_blank` will place external-link icon after hyperlink for accessibility and populate `rel` attribute with `noopener noreferre`.
