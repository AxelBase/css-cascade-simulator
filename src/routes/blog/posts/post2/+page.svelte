<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Why Source Order Only Matters When Specificity Ties | CSS Cascade Simulator</title>
  <meta name="description" content="Discover why the last rule doesn’t always win and when source order actually decides the winning style." />
  <meta property="og:title" content="Why Source Order Only Matters When Specificity Ties" />
  <meta property="og:description" content="A clear explanation of when and why the order of CSS rules matters in the cascade." />
  <meta property="og:url" content="{base}/blog/posts/post2" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Source Order and the Cascade</p>
  </div>

  <article class="prose">
    <h1>Why Source Order Only Matters When Specificity Ties</h1>
    <p class="post-meta">Published: December 3, 2025</p>

    <p>One of the most common misunderstandings in CSS is believing that the last rule in a stylesheet always wins. This is not true. Source order is only used as a final tiebreaker when two or more rules have exactly the same specificity score.</p>

    <h2>The Real Decision Process</h2>
    <p>When multiple rules apply to the same element, the browser follows a strict order. First, it compares specificity scores. The rule with the higher specificity wins immediately, regardless of where it appears in the code. Only if the specificity values are identical does the browser look at the order in which the rules were defined.</p>

    <p>This means a lower-specificity rule that comes later will lose to a higher-specificity rule that comes earlier. This behavior surprises many developers who expect the last rule to win no matter what.</p>

    <h2>Practical Examples</h2>
    <p>Two rules with the same class selector will follow source order. If both target .button and have identical specificity, the one defined later wins. But if one rule uses an ID selector and the other uses classes only, the ID rule wins even if it appears first in the file.</p>

    <h2>Why This Design Exists</h2>
    <p>The cascade is designed for predictability and maintainability. Allowing high-specificity selectors to override lower ones regardless of order prevents unexpected behavior in large projects. It encourages intentional styling rather than relying on file order.</p>

    <p>Understanding this rule eliminates many debugging frustrations. When a style doesn’t apply, the issue is almost always specificity, not ordering.</p>

    <p class="italic-note">Source order is the final step, not the first.</p>
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