<auro-header level="1">Why auro-hyperlink?</auro-header>
<p>The native HTML <code>&lt;a&gt;</code> anchor element provides basic linking, but it falls short for the needs of a secure, accessible, and branded application. <code>auro-hyperlink</code> bridges those gaps with a purpose-built component designed for real-world use.</p>
<auro-header level="2">Security</auro-header>
<p>Native anchor elements accept any value in the <code>href</code> attribute, including potentially dangerous protocols like <code>javascript:</code>, <code>data:</code>, and <code>vbscript:</code>. Developers must remember to sanitize URLs manually every time.</p>
<p><code>auro-hyperlink</code> provides:</p>
<ul>
<li><strong>URL sanitization</strong> — Dangerous protocols (<code>javascript:</code>, <code>data:</code>, <code>vbscript:</code>) are blocked automatically. Only safe protocols (<code>https:</code>, <code>tel:</code>, <code>sms:</code>, <code>mailto:</code>) are rendered</li>
<li><strong>HTTPS enforcement</strong> — Non-localhost URLs are automatically upgraded to <code>https:</code> to prevent accidental insecure links</li>
<li><strong>Referrer policy control</strong> — The <code>referrerpolicy</code> attribute sets <code>strict-origin-when-cross-origin</code> to limit referrer information sent with requests</li>
<li><strong>Automatic <code>rel</code> attributes</strong> — External links opened in a new tab (<code>target="_blank"</code>) automatically receive <code>rel="noOpener noReferrer"</code> to prevent reverse tabnapping attacks</li>
</ul>
<auro-header level="2">Accessibility</auro-header>
<p>Native anchor elements require manual ARIA attribute management, and focus behavior is inconsistent across browsers and contexts.</p>
<p><code>auro-hyperlink</code> provides:</p>
<ul>
<li><strong>ARIA attribute transportation</strong> — Accessibility attributes set on the host element are automatically transported to the inner <code>&lt;a&gt;</code> element inside the shadow DOM, ensuring screen readers receive the correct semantics</li>
<li><strong>Delegated focus</strong> — <code>delegatesFocus</code> is enabled on the shadow root, so focus is properly forwarded to the interactive element inside the component</li>
<li><strong>Focus-visible styling</strong> — Clear, high-contrast focus indicators are applied only on keyboard navigation, following the <code>:focus-visible</code> pattern</li>
<li><strong>Role support</strong> — The <code>role="button"</code> attribute allows the hyperlink to function as a button for screen readers when used for actions rather than navigation</li>
<li><strong>Reduced motion support</strong> — Animations and transitions respect <code>prefers-reduced-motion</code></li>
</ul>
<p>By contrast, a plain <code>&lt;a&gt;</code> element inside a shadow DOM would require manual focus management and custom ARIA handling that is easy to get wrong.</p>
<auro-header level="2">External link indicators</auro-header>
<p>Native anchors provide no visual indication of whether a link navigates to an external site or opens a new window. Users are left without context about what will happen when they click.</p>
<p><code>auro-hyperlink</code> handles this automatically:</p>
<ul>
<li><strong>External link icon</strong> — When <code>target="_blank"</code> points to a domain different from the current site, an external-link icon is displayed</li>
<li><strong>New window icon</strong> — When <code>target="_blank"</code> points to the same domain, a new-window icon is displayed instead</li>
<li><strong>Contextual <code>rel</code> attributes</strong> — The <code>rel</code> attribute is set appropriately based on whether the link is internal or external, with or without a referrer policy</li>
</ul>
<auro-header level="2">Call-to-action variant</auro-header>
<p>HTML has no native concept of a link styled as a prominent call-to-action button. Building one from an <code>&lt;a&gt;</code> element requires custom CSS and careful attention to accessibility.</p>
<p><code>auro-hyperlink</code> supports this with the <code>type="cta"</code> attribute, providing:</p>
<ul>
<li><strong>Button-styled links</strong> — Full button UI powered by <code>auro-button</code> while retaining anchor element semantics and navigation behavior</li>
<li><strong>Multiple variants</strong> — <code>primary</code>, <code>secondary</code>, <code>tertiary</code>, <code>ghost</code>, and <code>flat</code> variants match the design system's button styles</li>
<li><strong>Fluid width</strong> — The <code>fluid</code> attribute makes the CTA span the full width of its container</li>
<li><strong>Appearance support</strong> — Light and dark theme support via <code>appearance="inverse"</code></li>
</ul>
<auro-header level="2">Navigation variant</auro-header>
<p>Native anchors have no built-in concept of navigation-specific link styling (e.g., for menus or nav bars).</p>
<p><code>auro-hyperlink</code> supports this with the <code>type="nav"</code> attribute, providing:</p>
<ul>
<li>Navigation-specific styling with underline-on-focus behavior</li>
<li>Active tab state management</li>
<li>Consistent appearance within navigation contexts</li>
</ul>
<auro-header level="2">URL protocol support</auro-header>
<p>Native anchors support <code>tel:</code>, <code>mailto:</code>, and <code>sms:</code> links, but offer no safeguards against misuse of other protocols.</p>
<p><code>auro-hyperlink</code> handles protocol-specific behavior:</p>
<ul>
<li><strong>Safe protocols</strong> — <code>tel:</code>, <code>sms:</code>, and <code>mailto:</code> links are rendered as-is</li>
<li><strong>Dangerous protocols</strong> — <code>javascript:</code>, <code>data:</code>, and <code>vbscript:</code> links are blocked entirely, rendering no interactive element</li>
<li><strong>Relative URLs</strong> — Relative paths are resolved against the current page and upgraded to <code>https:</code></li>
</ul>
<auro-header level="2">Design system integration</auro-header>
<p>A native <code>&lt;a&gt;</code> element cannot be styled to match a design system across brands without significant custom CSS. Shadow DOM encapsulation makes this even harder.</p>
<p><code>auro-hyperlink</code> is built with the Alaska Airlines Auro Design System:</p>
<ul>
<li>Consistent visual language with other Auro components</li>
<li>Light and dark theme support (<code>appearance="default"</code> or <code>appearance="inverse"</code>)</li>
<li>CSS custom properties for color, focus, and hover states</li>
<li><code>::part(link)</code> and <code>::part(targetIcon)</code> selectors for targeted styling</li>
<li>Multi-brand theme support through design tokens</li>
</ul>
<auro-header level="2">Summary</auro-header>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Native <code>&lt;a&gt;</code></th>
<th><code>auro-hyperlink</code></th>
</tr>
</thead>
<tbody>
<tr>
<td>URL sanitization</td>
<td>None</td>
<td>Blocks dangerous protocols automatically</td>
</tr>
<tr>
<td>HTTPS enforcement</td>
<td>Not supported</td>
<td>Automatic upgrade to <code>https:</code></td>
</tr>
<tr>
<td>External link icons</td>
<td>Not supported</td>
<td>Automatic icons based on target domain</td>
</tr>
<tr>
<td><code>rel</code> security attributes</td>
<td>Manual</td>
<td>Automatic for external <code>_blank</code> links</td>
</tr>
<tr>
<td>ARIA in shadow DOM</td>
<td>Manual, error-prone</td>
<td>Automatic attribute transportation</td>
</tr>
<tr>
<td>Focus delegation</td>
<td>Not applicable</td>
<td><code>delegatesFocus</code> enabled</td>
</tr>
<tr>
<td>CTA / button styling</td>
<td>Custom CSS required</td>
<td>Built-in <code>type="cta"</code> with variants</td>
</tr>
<tr>
<td>Navigation styling</td>
<td>Custom CSS required</td>
<td>Built-in <code>type="nav"</code></td>
</tr>
<tr>
<td>Reduced motion</td>
<td>Manual</td>
<td>Built-in support</td>
</tr>
<tr>
<td>Theming</td>
<td>Minimal</td>
<td>Full design system integration</td>
</tr>
</tbody>
</table>
