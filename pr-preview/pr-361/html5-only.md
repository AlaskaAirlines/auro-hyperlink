<auro-header level="1">HTML5 only with Web Core Style Sheets</auro-header>
<p>For situations where the <code>&lt;auro-hyperlink&gt;</code> web component cannot be used, <auro-hyperlink href="https://alaskaairlines.github.io/WebCoreStyleSheets/" target="_blank">Web Core Style Sheets</auro-hyperlink> (WCSS) provides CSS classes that can be applied to a native HTML <code>&lt;a&gt;</code> element to achieve a similar visual appearance. This approach gives you design-system-aligned styling without requiring a custom element.</p>
<auro-header level="2">Available CSS classes</auro-header>
<p>WCSS includes the <code>.hyperlink</code> class and its modifiers as part of the <code>essentials</code> module. To use them, import the essentials stylesheet:</p>
<pre><code>@import "./node_modules/@aurodesignsystem/webcorestylesheets/dist/essentials";</code></pre>
<auro-header level="3">Base hyperlink</auro-header>
<p>Apply the <code>.hyperlink</code> class to any <code>&lt;a&gt;</code> element:</p>
<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/wcss-hyperlink.html) -->
<!-- The below content is automatically added from ./../apiExamples/wcss-hyperlink.html -->
<a href="https://www.alaskaair.com" class="hyperlink">Alaska Airlines</a>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/wcss-hyperlink.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/wcss-hyperlink.html -->

<pre class="language-html"><code class="language-html">&lt;a href="https://www.alaskaair.com" class="hyperlink"&gt;Alaska Airlines&lt;/a&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<auro-header level="3">Dark background (inverse) variant</auro-header>
<p>Use the <code>.hyperlink--ondark</code> modifier for links on dark backgrounds:</p>
<div class="exampleWrapper--ondark">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/wcss-hyperlink-ondark.html) -->
<!-- The below content is automatically added from ./../apiExamples/wcss-hyperlink-ondark.html -->
<a href="https://www.alaskaair.com" class="hyperlink hyperlink--ondark">Alaska Airlines</a>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/wcss-hyperlink-ondark.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/wcss-hyperlink-ondark.html -->

<pre class="language-html"><code class="language-html">&lt;a href="https://www.alaskaair.com" class="hyperlink hyperlink--ondark"&gt;Alaska Airlines&lt;/a&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<auro-header level="3">Navigation variant</auro-header>
<p>Use the <code>.hyperlink--nav</code> modifier for navigation-style links:</p>
<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/wcss-hyperlink-nav.html) -->
<!-- The below content is automatically added from ./../apiExamples/wcss-hyperlink-nav.html -->
<a href="https://www.alaskaair.com" class="hyperlink hyperlink--nav">Alaska Airlines</a>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/wcss-hyperlink-nav.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/wcss-hyperlink-nav.html -->

<pre class="language-html"><code class="language-html">&lt;a href="https://www.alaskaair.com" class="hyperlink hyperlink--nav"&gt;Alaska Airlines&lt;/a&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<auro-header level="2">What you lose without auro-hyperlink</auro-header>
<p>While WCSS classes replicate the <strong>visual styling</strong> of <code>auro-hyperlink</code>, they provide <strong>CSS only</strong>. The following functionality built into the <code>auro-hyperlink</code> web component is <strong>not available</strong> when using plain HTML with WCSS classes:</p>
<auro-header level="3">URL sanitization and HTTPS enforcement</auro-header>
<p><code>auro-hyperlink</code> automatically blocks dangerous URL protocols (<code>javascript:</code>, <code>data:</code>, <code>vbscript:</code>) and upgrades URLs to <code>https:</code>. A plain <code>&lt;a&gt;</code> element with WCSS classes will render whatever <code>href</code> value is provided, including potentially dangerous URLs. You must sanitize URLs manually.</p>
<auro-header level="3">Automatic external link and new window icons</auro-header>
<p><code>auro-hyperlink</code> detects <code>target="_blank"</code> links and automatically displays the appropriate icon — an external-link icon for cross-domain links or a new-window icon for same-domain links. With WCSS classes, you must add these icons manually.</p>
<auro-header level="3">Automatic rel security attributes</auro-header>
<p><code>auro-hyperlink</code> automatically adds <code>rel="noOpener noReferrer"</code> to external links opened in new tabs to prevent reverse tabnapping. With a plain <code>&lt;a&gt;</code> element, you must remember to add these attributes yourself on every external link.</p>
<auro-header level="3">Referrer policy management</auro-header>
<p><code>auro-hyperlink</code> provides a <code>referrerpolicy</code> attribute that sets <code>strict-origin-when-cross-origin</code> and adjusts the <code>rel</code> attribute accordingly. With WCSS, you must manage the <code>referrerpolicy</code> and <code>rel</code> attributes manually and keep them in sync.</p>
<auro-header level="3">ARIA attribute transportation</auro-header>
<p>When <code>auro-hyperlink</code> is used inside other web components, it automatically transports ARIA attributes from the host element to the inner <code>&lt;a&gt;</code> element across the shadow DOM boundary. With a plain <code>&lt;a&gt;</code> element, this is not a concern outside of shadow DOM, but it also means you cannot use WCSS-styled anchors as drop-in replacements inside Auro component compositions that expect this behavior.</p>
<p>For example, when an <code>auro-hyperlink</code> is placed in an <code>auro-popover</code> trigger slot, the popover component sets <code>aria-description</code> on the trigger to announce the popover content to screen readers. <code>auro-hyperlink</code> automatically transports that <code>aria-description</code> down to the inner <code>&lt;a&gt;</code> element in its shadow DOM, so screen readers announce it correctly. A plain <code>&lt;a class="hyperlink"&gt;</code> element would work as a popover trigger outside of shadow DOM, but it cannot participate in this cross-shadow-DOM ARIA contract — and as the <code>auro-popover</code> documentation notes, using a hyperlink as a trigger is discouraged because the tap event on mobile will fire both the popover and the navigation. The recommended pattern is to use <code>auro-hyperlink</code> with <code>role="button"</code> instead.</p>
<auro-header level="3">Call-to-action (CTA) variant</auro-header>
<p><code>auro-hyperlink</code> provides a <code>type="cta"</code> mode that renders a fully styled button-link powered by <code>auro-button</code>, with support for <code>primary</code>, <code>secondary</code>, <code>tertiary</code>, <code>ghost</code>, and <code>flat</code> variants, fluid width, and inverse appearance. The <code>.auro_roleButton</code> WCSS class provides only basic button styling and does not support these variants.</p>
<auro-header level="3">Focus delegation</auro-header>
<p><code>auro-hyperlink</code> uses <code>delegatesFocus</code> to ensure proper focus forwarding within its shadow DOM. This is a web component concern and does not apply to plain <code>&lt;a&gt;</code> elements, but it means WCSS-styled anchors cannot replicate the focus behavior of <code>auro-hyperlink</code> when used inside shadow DOM contexts.</p>
<auro-header level="2">Summary</auro-header>
<table>
<thead>
<tr>
<th>Feature</th>
<th>WCSS <code>.hyperlink</code></th>
<th><code>auro-hyperlink</code></th>
</tr>
</thead>
<tbody>
<tr>
<td>Design-system-aligned styling</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td>Dark background support</td>
<td>Yes (<code>.hyperlink--ondark</code>)</td>
<td>Yes (<code>appearance="inverse"</code>)</td>
</tr>
<tr>
<td>Navigation variant</td>
<td>Yes (<code>.hyperlink--nav</code>)</td>
<td>Yes (<code>type="nav"</code>)</td>
</tr>
<tr>
<td>URL sanitization</td>
<td>No</td>
<td>Automatic</td>
</tr>
<tr>
<td>HTTPS enforcement</td>
<td>No</td>
<td>Automatic</td>
</tr>
<tr>
<td>External / new window icons</td>
<td>No</td>
<td>Automatic</td>
</tr>
<tr>
<td>Automatic <code>rel</code> attributes</td>
<td>No</td>
<td>Automatic</td>
</tr>
<tr>
<td>CTA button variants</td>
<td>No</td>
<td>Full variant support</td>
</tr>
<tr>
<td>ARIA attribute transportation</td>
<td>No</td>
<td>Automatic</td>
</tr>
<tr>
<td>Multi-brand theming</td>
<td>Partial (CSS only)</td>
<td>Full (design tokens + component logic)</td>
</tr>
</tbody>
</table>
<auro-header level="2">Recommendation</auro-header>
<p>Use <code>auro-hyperlink</code> whenever possible. Fall back to WCSS <code>.hyperlink</code> classes only in environments where custom elements are not supported or when integrating with third-party systems that require plain HTML.</p>