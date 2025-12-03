<!-- src/routes/+error.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>404 – Page Not Found | CSS Cascade Simulator</title>
  <meta name="description" content="The page you're looking for doesn't exist. Return home to continue exploring CSS specificity and the cascade." />
  <meta property="og:title" content="404 – Page Not Found | CSS Cascade Simulator" />
  <meta property="og:description" content="Oops! The page moved or never existed. Let's get you back on track." />
  <meta property="og:url" content="{base}/" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout text-center py-5">
  <div class="my-5">
    <h1 class="display-1 fw-bold text-primary">404</h1>
    <p class="lead fs-3 text-muted">Oops! This selector doesn't match anything.</p>
  </div>

  <article class="prose mx-auto">
    <p class="fs-5">The page you’re looking for has been removed, renamed, or is temporarily unavailable.</p>

    <h2 class="mt-5">Where to go now?</h2>
    <div class="d-grid gap-3 d-md-flex justify-content-center mt-4">
      <a href="{base}/" class="btn btn-primary btn-lg px-5">
        Back to Home
      </a>
      <a href="{base}/blog" class="btn btn-outline-primary btn-lg px-5">
        Read the Blog
      </a>
    </div>

    <h2 class="mt-5">Quick links</h2>
    <ul class="list-unstyled mt-4">
      <li class="mb-3"><a href="{base}/" class="fs-5 text-decoration-none">CSS Cascade Simulator</a></li>
      <li class="mb-3"><a href="{base}/blog" class="fs-5 text-decoration-none">Blog & Tutorials</a></li>
      <li class="mb-3"><a href="{base}/privacy" class="fs-5 text-decoration-none">Privacy Policy</a></li>
      <li class="mb-3"><a href="{base}/terms" class="fs-5 text-decoration-none">Terms & Conditions</a></li>
    </ul>

    <p class="italic-note mt-5">
      <em>Don’t worry — even the best selectors sometimes miss their target.<br>
      Let’s get you back to understanding the cascade.</em>
    </p>
  </article>
</div>

<style>
  .post-layout {
    max-width: 800px;
    padding-top: 4rem;
    padding-bottom: 6rem;
    margin: 0 auto;
  }

  .prose {
    line-height: 1.8;
  }

  .prose h2 {
    margin-top: 3rem;
    color: #0d6efd;
    border-bottom: 1px solid #e9ecef;
    padding-bottom: 0.5rem;
  }

  .prose a {
    color: #0d6efd;
    font-weight: 500;
  }

  .prose a:hover {
    text-decoration: underline;
  }

  .italic-note {
    font-style: italic;
    color: #6c757d;
    font-size: 1.1rem;
    margin-top: 4rem;
  }

  @media (max-width: 576px) {

    .btn-lg {
      width: 100%;
    }
  }
</style>