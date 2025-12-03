<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>How This Simulator Calculates the Winner | CSS Cascade Simulator</title>
  <meta name="description" content="A behind-the-scenes look at how the CSS Cascade Simulator determines which style rule wins in any scenario." />
  <meta property="og:title" content="How This Simulator Calculates the Winner" />
  <meta property="og:description" content="Step-by-step explanation of the exact algorithm used to match selectors and compare specificity." />
  <meta property="og:url" content="{base}/blog/posts/post6" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>How the Simulator Works</p>
  </div>

  <article class="prose">
    <h1>How This Simulator Calculates the Winner</h1>
    <p class="post-meta">Published: December 3, 2025</p>

    <p>This tool replicates exactly how modern browsers resolve competing CSS rules. It follows the official cascade algorithm step by step, giving you complete transparency into why a particular style is applied.</p>

    <h2>The Matching Process</h2>
    <p>First, the simulator checks which rules actually apply to the target element. It examines the element type, ID, and classes to determine matches. Only rules that match proceed to the next stage.</p>

    <h2>Specificity Comparison</h2>
    <p>For each matching rule, it calculates the three-part specificity score. It counts IDs, then classes and similar selectors, then element selectors. These scores are compared from left to right exactly as browsers do.</p>

    <h2>Final Tiebreaker</h2>
    <p>When two rules have identical specificity, the simulator uses source order. The rule that appears later in the input wins, just like in real CSS files.</p>

    <h2>Complete Transparency</h2>
    <p>Every step is shown clearly. You see which rules matched, their exact specificity scores, and which one won. This removes all mystery from CSS behavior and helps you debug styling issues instantly.</p>

    <p>The simulator handles compound selectors, source order ties, and edge cases accurately. It is a faithful recreation of browser behavior in a simple, educational interface.</p>

    <p class="italic-note">See exactly what the browser sees — no more guessing.</p>
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