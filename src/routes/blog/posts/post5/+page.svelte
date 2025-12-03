<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Pseudo-classes and Attributes in Specificity | CSS Cascade Simulator</title>
  <meta name="description" content="Explore how :hover, :focus, [type=text] and other advanced selectors affect specificity scoring." />
  <meta property="og:title" content="Pseudo-classes and Attributes in Specificity" />
  <meta property="og:description" content="A clear guide to how pseudo-classes and attribute selectors are treated exactly like classes in the cascade." />
  <meta property="og:url" content="{base}/blog/posts/post5" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Pseudo-classes & Attributes</p>
  </div>

  <article class="prose">
    <h1>Pseudo-classes and Attributes in Specificity</h1>
    <p class="post-meta">Published: December 3, 2025</p>

    <p>Pseudo-classes and attribute selectors are powerful tools in CSS, but many developers are unsure how they affect specificity. The answer is simple and important: they count exactly the same as class selectors in the middle position of the specificity score.</p>

    <h2>Equal Weight with Classes</h2>
    <p>A rule using hover has the same weight as one using .active. Similarly, an attribute selector like input with type equal to text counts the same as a class. This means a single pseudo-class or attribute can override a regular class selector if everything else is equal.</p>

    <h2>Common Examples</h2>
    <p>A link with hover state will beat a link with .highlight class if both rules have no other selectors. The same applies when comparing button with disabled attribute versus button with .disabled class. The browser treats them identically in terms of priority.</p>

    <h2>Practical Implications</h2>
    <p>This behavior allows clean, semantic styling. You can style form states using actual attributes rather than adding extra classes, without sacrificing control over the cascade. It also means pseudo-classes like focus-visible carry real weight and should be used intentionally.</p>

    <h2>Universal Selector Behavior</h2>
    <p>The universal selector has zero specificity. It never wins against any real selector, even an element selector. This makes it safe for global resets but useless for targeted styling.</p>

    <p>Understanding these rules helps you write more accurate and maintainable stylesheets. This simulator clearly shows how these selectors compete in real time.</p>

    <p class="italic-note">Pseudo-classes and attributes are full citizens of the specificity system.</p>
  </article>
</div>

<style>
  .post-layout { max-width: 800px; padding-top: 2rem; padding-bottom: 4rem; }
  .breadcrumbs { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem; font-size: 0.9rem; color: #666; }
  .breadcrumbs a { color: #0066cc; text-decoration: none; }
  .breadcrumbs a:hover { text-decoration: underline; }
  .breadcrumbs p { margin: 0; color: #333; }
  .prose { line-height: 1.8; }
  .prose .post-meta { color: #666; font-size: 0.9rem; margin-bottom: 2rem; border-bottom: 1px solid #eee; padding-bottom: 1rem; }
  .prose h1 { font-size: 2.5rem; margin-bottom: 0.5rem; color: #1a1a1a; }
  .prose h2 { margin-top: 2.5rem; border-bottom: 1px solid #f0f0f0; padding-bottom: 0.5rem; color: #0066cc; }
  .prose p { color: #333; margin-bottom: 1.2rem; }
  .prose .italic-note { font-style: italic; color: #666; text-align: center; margin-top: 3rem; }
</style>