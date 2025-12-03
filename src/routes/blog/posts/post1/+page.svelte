<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Understanding CSS Specificity: The Core Algorithm | CSS Cascade Simulator</title>
  <meta name="description" content="Learn how browsers calculate CSS specificity using the three-part scoring system and why certain styles win over others." />
  <meta property="og:title" content="Understanding CSS Specificity: The Core Algorithm" />
  <meta property="og:description" content="A complete explanation of how CSS specificity works and why some styles override others even when they appear later in your stylesheet." />
  <meta property="og:url" content="{base}/blog/posts/post1" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Understanding CSS Specificity</p>
  </div>

  <article class="prose">
    <h1>Understanding CSS Specificity: The Core Algorithm</h1>
    <p class="post-meta">Published: December 3, 2025</p>

    <p>CSS specificity is the mechanism browsers use to decide which style rule wins when multiple rules target the same element. It is not about which rule comes last in the file, but about mathematical weight. Every selector has a specificity score made up of three numbers, often written as a, b, c.</p>

    <h2>How Specificity Is Calculated</h2>
    <p>The first number counts how many ID selectors are in the rule. An ID like header gives a very high score because IDs are meant to be unique. The second number counts class selectors, attribute selectors, and pseudo-classes like hover or focus. These are common but less powerful than IDs. The third number counts element selectors like div, p, or h1, and pseudo-elements like before or after.</p>

    <p>When two rules compete, the browser compares these three numbers from left to right. The rule with the higher value in the first differing position wins. If all three numbers are equal, only then does the order in the file matter, with later rules winning.</p>

    <h2>Why This Matters in Practice</h2>
    <p>A single ID selector will always beat one hundred class selectors. This is why a rule like header wins over .header-text .active .button even if the class rule appears later. Understanding this prevents confusion when styles don’t apply as expected.</p>

    <h2>Common Misconceptions</h2>
    <p>Many developers believe that the last rule always wins. This is only true when specificity is tied. Another common mistake is thinking that more selectors mean higher specificity. Ten classes do not beat one ID. The type of selector matters far more than the quantity.</p>

    <p>By mastering specificity, you write predictable CSS that is easier to maintain and debug. This simulator helps you see exactly how the browser makes its decisions, removing guesswork from styling.</p>

    <p class="italic-note">Mastering specificity is the foundation of professional CSS architecture.</p>
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