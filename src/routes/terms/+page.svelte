<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms and Conditions | CSS Cascade Simulator</title>
  <meta name="description" content="Terms of use for the free, open-source CSS Cascade Simulator — a client-side educational tool." />
  <meta property="og:title" content="Terms and Conditions | CSS Cascade Simulator" />
  <meta property="og:description" content="Simple, fair terms for using this free educational CSS tool." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms and Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms and Conditions</h1>
    <p class="post-meta">Effective Date: December 3, 2025</p>

    <p>Welcome to <strong>CSS Cascade Simulator</strong>, a free, open-source, client-side educational tool designed to help developers understand CSS specificity and the cascade. By using this website, you agree to the following terms.</p>

    <h2>Permitted Use</h2>
    <p>You may use this tool freely for personal, educational, or commercial purposes. You are encouraged to test any CSS rules, teach others, embed it in tutorials, or use it in your workflow. There are no usage limits or registration requirements.</p>

    <h2>No Warranty</h2>
    <p>This tool is provided <strong>as is</strong> without any warranties, expressed or implied. While we strive for accuracy in replicating browser behavior, results may vary slightly across different browsers or future CSS specifications. We are not responsible for any styling issues that arise from using this simulator.</p>

    <h2>Accuracy and Educational Purpose</h2>
    <p>The CSS Cascade Simulator is an <em>educational reference</em>, not a replacement for official browser developer tools. It implements the standard specificity algorithm faithfully, but edge cases involving !important, inline styles, or animation keyframes are intentionally simplified or excluded for clarity.</p>

    <h2>Intellectual Property</h2>
    <p>The source code is open and available on GitHub under the MIT license. You are free to fork, modify, and redistribute it. The content, design, and name “CSS Cascade Simulator” remain property of the original author unless explicitly released.</p>

    <h2>Liability Limitation</h2>
    <p>In no event shall the creators be liable for any damages arising from the use or inability to use this tool, including but not limited to lost work, incorrect styling decisions, or production issues.</p>

    <h2>Changes to Terms</h2>
    <p>We reserve the right to modify these terms at any time. Continued use of the tool after changes constitutes acceptance of the new terms.</p>

    <h2>Governing Law</h2>
    <p>These terms are governed by general internet norms of goodwill and fairness.</p>

    <p class="italic-note"><em>Thank you for using a tool built for learning, sharing, and mastering CSS.</em></p>
  </article>
</div>

<style>
  .post-layout { max-width: 800px; padding-top: 2rem; padding-bottom: 4rem; margin: 0 auto; }
  .breadcrumbs { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem; font-size: 0.9rem; color: #666; }
  .breadcrumbs a { color: #0066cc; text-decoration: none; }
  .breadcrumbs a:hover { text-decoration: underline; }
  .prose { line-height: 1.8; }
  .prose .post-meta { color: #666; font-size: 0.9rem; margin-bottom: 2rem; border-bottom: 1px solid #eee; padding-bottom: 1rem; }
  .prose h1 { font-size: 2.5rem; margin-bottom: 0.5rem; color: #1a1a1a; }
  .prose h2 { margin-top: 2.5rem; border-bottom: 1px solid #f0f0f0; padding-bottom: 0.5rem; color: #0066cc; }
  .prose p { color: #333; margin-bottom: 1.2rem; }
  .prose .italic-note { font-style: italic; color: #666; text-align: center; margin-top: 3rem; font-size: 1.1rem; }
</style>