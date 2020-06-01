# Deprecated

During the transition from Orion to Auro, there will be specific actions taken to address a clean transition and proper deprecation of Orion resources.

1. `<ods-hyperlink>` will continue to be supported until an official EOL has been communicated
1. [Alternate build solutions](#alternate-build-solutions) are no longer supported and will be removed with next MAJOR release

## Custom style support

The default `<ods-hyperlink>` has padding on the LEFT and the RIGHT of the element. If this padding is not required, the following CSS classes are supported:

| Class | Description |
|---|---|
| util_paddingLeft--none | Removes the padding on the LEFT of the element |
| util_paddingRight--none | Removes the padding on the RIGHT of the element |

No additional dependency on Orion Web Core Style Sheets is required.
