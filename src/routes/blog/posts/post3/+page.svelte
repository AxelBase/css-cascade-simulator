<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Compound Selectors: When Element + ID + Class Wins Everything | CSS Cascade Simulator</title>
  <meta name="description" content="Learn how combining different selector types creates dramatically higher specificity and dominates the cascade." />
  <meta property="og:title" content="Compound Selectors: When Element + ID + Class Wins Everything" />
  <meta property="og:description" content="Discover why a single compound selector can override hundreds of simpler rules." />
  <meta property="og:url" content="{base}/blog/posts/post3" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Compound Selectors Power</p>
  </div>

  <article class="prose">
    <h1>Compound Selectors: When Element + ID + Class Wins Everything</h1>
    <p class="post-meta">Published: December 3, 2025</p>

    <p>A compound selector combines multiple selector types in one rule, such as div with header and .active. When these different types are used together, they create a specificity score that is extremely difficult to override without using equally complex selectors.</p>

    <h2>The Power of Combination</h2>
    <p>Each part of a compound selector contributes to the final score. An element selector adds to the third number, a class adds to the second, and an ID adds to the first. Even one ID in a compound selector gives it massive weight because the first number dominates all comparisons.</p>

    <p>For example, a rule targeting div with header and .active has one ID, two classes, and one element. This creates a specificity far higher than any rule using only classes or elements, no matter how many there are.</p>

    <h2>Real-World Impact</h2>
    <p>In practice, this means a single carefully written compound selector can override entire utility frameworks or component libraries. This is both powerful and dangerous. It allows precise targeting but can make styles hard to override later.</p>

    <h2>Strategic Use</h2>
    <p>Developers use compound selectors when they need absolute confidence that a style will apply. They are common in critical UI components like headers, navigation, or modals where visual consistency is essential.</p>

    <p>However, overusing them leads to specificity wars where increasingly complex selectors are needed to override previous ones. The best practice is to use them intentionally and sparingly.</p>

    <p>This simulator lets you see exactly how these combinations affect the cascade outcome in real time.</p>

    <p class="italic-note">One smart compound selector can beat a thousand simple ones.</p>
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