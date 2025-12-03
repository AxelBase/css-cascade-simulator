<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    {
      href: '/blog/posts/post1',
      title: 'Understanding CSS Specificity: The Core Algorithm',
      description: 'A deep dive into how browsers calculate specificity using the (a,b,c) scoring system and why IDs beat classes.'
    },
    {
      href: '/blog/posts/post2',
      title: 'Why Source Order Only Matters When Specificity Ties',
      description: 'Exploring the critical rule that later rules win only when specificity scores are identical.'
    },
    {
      href: '/blog/posts/post3',
      title: 'Compound Selectors: When "div#header.active" Beats "#header"',
      description: 'How combining element, ID, and class selectors creates exponentially higher specificity.'
    },
    {
      href: '/blog/posts/post4',
      title: 'The Hidden Power of the Element Selector',
      description: 'Why even a single tag name like "div" contributes to specificity — and when it decides the winner.'
    },
    {
      href: '/blog/posts/post5',
      title: 'Testing Edge Cases: Pseudo-classes, Attributes, and Universal Selectors',
      description: 'What happens when selectors include :hover, [type="text"], or * — and how specificity handles them.'
    },
    {
      href: '/blog/posts/post6',
      title: 'Visualizing the Cascade: How This Simulator Works Under the Hood',
      description: 'Step-by-step breakdown of selector matching, specificity comparison, and winner selection logic.'
    },
    {
      href: '/blog/posts/post7',
      title: 'Mastering Specificity: Best Practices for Predictable CSS',
      description: 'Real-world strategies to avoid specificity wars and write maintainable, debuggable styles.'
    }
  ];
</script>

<svelte:head>
  <title>Blog | CSS Cascade Simulator Insights</title>
  <meta name="description" content="Deep technical articles on CSS specificity, cascade behavior, selector matching, and advanced debugging techniques." />
</svelte:head>

<div class="container py-5 blog-index">
  <header class="text-center mb-5">
    <h1 class="display-4 fw-bold">
      <i class="bi bi-journal-code"></i> Blog: Cascade Deep Dives
    </h1>
    <p class="lead text-muted col-lg-8 mx-auto">
      Advanced technical insights into CSS specificity, cascade resolution, selector behavior, and how browsers determine the winning style — explained with clarity.
    </p>
  </header>

  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    {#each posts as post}
      <div class="col">
        <a href="{base}{post.href}" class="text-decoration-none h-100">
          <div class="card h-100 shadow-sm border-0 hover-shadow transition">
            <div class="card-body d-flex flex-column">
              <h3 class="card-title h5 fw-bold text-primary mb-3">
                {post.title}
              </h3>
              <p class="card-text text-muted flex-grow-1 small">
                {post.description}
              </p>
              <div class="mt-auto pt-3">
                <span class="text-primary fw-semibold">
                  Read Article <i class="bi bi-arrow-right"></i>
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
    {/each}
  </div>
</div>

<style>
  .hover-shadow {
    transition: all 0.3s ease;
  }
  .hover-shadow:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15) !important;
  }
  .transition {
    transition: all 0.3s ease;
  }
</style>