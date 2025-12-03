<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | CSS Cascade Simulator</title>
  <meta name="description" content="We collect no personal data. Your CSS rules and simulations never leave your browser." />
  <meta property="og:title" content="Privacy Policy | CSS Cascade Simulator" />
  <meta property="og:description" content="100% client-side tool — no tracking, no cookies, no data collection." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>
    <p class="post-meta">Effective Date: December 3, 2025</p>

    <p>At <strong>CSS Cascade Simulator</strong>, your privacy is our highest priority. This tool was built from the ground up to be <strong>completely private and secure by design</strong>. We believe you should understand exactly how the CSS cascade works without ever compromising your personal information or creative work.</p>

    <h2>No Data Collection Whatsoever</h2>
    <p><strong>We do not collect, store, or transmit any data — period.</strong> Every CSS rule you write, every selector you test, and every simulation you run happens <em>entirely in your browser</em>. Nothing is sent to our servers, third parties, or cloud services. Your stylesheets never leave your device.</p>

    <h2>How the Tool Works</h2>
    <p>All processing occurs locally using JavaScript running in your browser. When you input CSS rules and a target element, the specificity calculation, selector matching, and winner determination are performed instantly on your computer. There is no backend, no database, and no logging. Even if you refresh the page, your input is gone — because we never had it in the first place.</p>

    <h2>No Tracking or Analytics</h2>
    <p>We do not use cookies, localStorage for tracking, fingerprinting, Google Analytics, Meta pixels, or any monitoring tools. There are no advertising partners, no behavioral tracking, and no session recording. You remain completely anonymous at all times.</p>

    <h2>Third-Party Content</h2>
    <p>This site uses only Bootstrap 5 via CDN for styling and Bootstrap Icons for visual clarity. These are static files that do not track users or set cookies. No external scripts run beyond what is necessary for the simulator to function.</p>

    <h2>Your Data Stays Yours</h2>
    <p>Because everything runs client-side, you can safely test proprietary stylesheets, internal design systems, or confidential UI code. Whether you're a solo developer, a large team, or an educator, your work remains <strong>100% private and secure</strong>.</p>

    <h2>Updates to This Policy</h2>
    <p>We may update this Privacy Policy if new features are added. Any changes will be clearly posted here with the updated effective date. We encourage you to review it periodically.</p>

    <h2>Contact</h2>
    <p>Questions? Reach out via the GitHub repository linked in the header.</p>

    <p class="italic-note"><em>Thank you for trusting a tool that respects your privacy as much as you respect great CSS.</em></p>
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