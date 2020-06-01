# ODS Hyperlink API

| Attribute | value type | Description |
|----|----|----|
| buttontype | string | Type of button defines the visual styling. Option: `secondary` |
| cta | boolean | Specifies the style of the hyperlink to appear as a CTA button |
| download | boolean | Specifies that the target will be downloaded when a user clicks on the hyperlink |
| darktheme | boolean | Specifies dark theme use of hyperlink |
| href | string | Specifies the URL of the page the link goes to |
| inline | boolean | Displays an element as an inline element. Any height and width properties will have no effect |
| rel | string | Specifies the relationship between the current document and the linked document |
| responsive | boolean | used with `cta` button style; sets button to have automatic responsive layout properties |
| role | string | Use for aria roles; currently support `tab` and `button` for extended experiences |
| tabisactive | boolean | Indicates if tab is to be displayed as active state (true, false)† |
| target | string | Specifies where to open the linked document |

† See `role="tab"` use example below for further details about this feature
