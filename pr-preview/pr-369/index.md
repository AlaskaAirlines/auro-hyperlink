<!--
 THIS PAGE'S CONTENT SHOULD BE KEPT MINIMAL.
 ONLY ADD EXAMPLES THAT ARE TRULY NECESSARY FOR THE INDEX PAGE — THE BASIC EXAMPLE IS USUALLY ENOUGH.
 ALL OTHER EXAMPLES SHOULD GO IN THE API DOCUMENTATION.
-->

# Hyperlink

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- The below content is automatically added from ./../docs/partials/description.md -->
The `<auro-hyperlink>` element is an accessible link that wraps a standard `<a>` anchor element. It adds brand styling for light and dark backgrounds, blocks addresses that could run code, and shows an icon when a link opens in a new tab.
<!-- AURO-GENERATED-CONTENT:END -->

## Use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./../docs/partials/useCases.md -->
Use `<auro-hyperlink>` in these situations:

* Use a stand-alone link to take people to another page.
* Use an inline link inside a sentence or paragraph to take people to another page.
* Use `role="button"` when you need link styling for an action, such as opening a dialog. Pressing Enter or Space does not currently fire `click`, so keyboard users can't activate it unless you handle those keys too.
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

### Basic

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
