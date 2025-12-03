<script>
      import { base } from '$app/paths';
    import { simulateCascade, parseRules } from '$lib/specificity.js';

    let cssInput = `#header { color: red; }
.nav { color: blue; }
div { color: gray; }
.active { color: green; }
#header.active { color: purple; }`;

    let targetElement = 'div#header.active';
    let property = 'color';

    let result = null;
    let error = '';

    function runSimulation() {
        error = '';
        result = null;

        if (!cssInput.trim()) {
            error = 'Please enter at least one CSS rule.';
            return;
        }
        if (!targetElement.trim()) {
            error = 'Please specify a target element.';
            return;
        }

        try {
            const rules = parseRules(cssInput);
            result = simulateCascade(rules, targetElement, property);
        } catch (e) {
            error = 'Invalid CSS input. Check your syntax.';
            console.error(e);
        }
    }
</script>

<svelte:head>
  <title>CSS Cascade Simulator – Understand Specificity Instantly</title>
  <meta name="description" content="Free, open-source, client-side tool to visualize how CSS specificity and the cascade work. See exactly which style wins — no guesswork." />
  <meta property="og:title" content="CSS Cascade Simulator – Master Specificity & the Cascade" />
  <meta property="og:description" content="Interactive tool that shows precisely how browsers determine the winning CSS rule based on specificity, source order, and selector type." />
  <meta property="og:url" content="{base}/" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="CSS Cascade Simulator – See Specificity in Action" />
  <meta name="twitter:description" content="Free tool that instantly reveals which CSS rule wins — and why." />
</svelte:head>

<div class="container py-5 animate-fade-in">
    <div class="row g-5 mb-5">
        <div class="col-lg-6">
            <div class="card h-100">
                <div class="card-header">
                    <h2 class="h5 mb-0 d-flex align-items-center gap-2">
                        <i class="bi bi-code-slash"></i> Input CSS Rules
                    </h2>
                </div>
                <div class="card-body d-flex flex-column">
                    <textarea
                        bind:value={cssInput}
                        class="form-control code-block flex-grow-1 mb-3"
                        rows="15"
                        spellcheck="false"
                        placeholder="Enter CSS rules, one per block..."
                    ></textarea>

                    <div class="row g-3">
                        <div class="col-md-7">
                            <div class="input-group">
                                <span class="input-group-text bg-white border-end-0"><i class="bi bi-cpu text-success"></i></span>
                                <input
                                    type="text"
                                    bind:value={targetElement}
                                    class="form-control border-start-0 ps-0"
                                    placeholder="Target element e.g. div#header.active"
                                />
                            </div>
                        </div>
                        <div class="col-md-3">
                            <select bind:value={property} class="form-select">
                                <option value="color">color</option>
                                <option value="background-color">background-color</option>
                                <option value="font-size">font-size</option>
                                <option value="margin">margin</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <button on:click={runSimulation} class="btn btn-primary w-100 shadow-sm">
                                <i class="bi bi-play-fill"></i> Run
                            </button>
                        </div>
                    </div>

                    {#if error}
                        <div class="alert alert-danger mt-3 rounded-4"><i class="bi bi-exclamation-triangle"></i> {error}</div>
                    {/if}
                </div>
            </div>
        </div>

        <div class="col-lg-6">
            <div class="card h-100">
                <div class="card-header bg-white text-success border-bottom-0 pt-3">
                    <h2 class="h5 mb-0 d-flex align-items-center gap-2">
                        <i class="bi bi-trophy-fill"></i> Cascade Result
                    </h2>
                </div>
                <div class="card-body">
                    {#if result && result.winner}
                        <div class="alert alert-success rounded-4 d-flex align-items-center justify-content-between">
                            <div>
                                <strong>Winning value:</strong>
                                <code class="fs-4 ms-2 text-dark">{result.winner.value}</code>
                            </div>
                            <span class="badge bg-white text-success border border-success fs-6 rounded-pill px-3 py-2">
                                {result.winner.selector}
                            </span>
                        </div>

                        <h5 class="mt-4 mb-3 text-secondary">Specificity Breakdown</h5>
                        <div class="table-responsive rounded-4 border">
                            <table class="table table-hover align-middle mb-0">
                                <thead class="table-light">
                                    <tr>
                                        <th>Selector</th>
                                        <th>Specificity</th>
                                        <th>Value</th>
                                        <th>Winner?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {#each result.allMatching as rule}
                                        <tr class:table-success={rule.selector === result.winner.selector}>
                                            <td><code class="text-dark">{rule.selector}</code></td>
                                            <td>
                                                <span class="specificity-badge">
                                                    ({rule.specificity.join(', ')})
                                                </span>
                                            </td>
                                            <td><code>{rule.value}</code></td>
                                            <td>
                                                {#if rule.selector === result.winner.selector}
                                                    <i class="bi bi-trophy-fill text-success fs-4"></i>
                                                {:else}
                                                    <i class="bi bi-circle text-muted opacity-25"></i>
                                                {/if}
                                            </td>
                                        </tr>
                                    {/each}
                                </tbody>
                            </table>
                        </div>
                    {:else if result}
                        <div class="alert alert-warning rounded-4">
                            No rule matches the target element for property <strong>{property}</strong>.
                        </div>
                    {:else}
                        <div class="text-center text-muted mt-5 py-5">
                            <i class="bi bi-arrow-left-circle fs-1 text-success opacity-50"></i>
                            <p class="mt-3 fs-5">Enter CSS rules and click <strong class="text-success">Run</strong> to see the cascade in action!</p>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </div>

    <hr class="my-5 opacity-25">

<section id="about" class="py-5 bg-light">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <h2 class="display-5 fw-bold text-center mb-4">About CSS Cascade Simulator</h2>
        <p class="lead text-center text-muted mb-5">A professional, open-source, privacy-first tool that reveals exactly how browsers resolve competing CSS rules.</p>

        <div class="p-5 bg-white rounded-4 shadow-lg">
          <p><strong>CSS Cascade Simulator</strong> was created for one purpose: to eliminate confusion around CSS specificity and the cascade. Every developer has experienced the frustration of a style not applying — even when it appears later in the stylesheet. This tool removes the mystery.</p>

          <p>Built entirely in the browser with no backend, no tracking, and no data collection, this simulator runs 100% client-side. Your CSS rules never leave your device. Whether you're learning CSS, debugging a complex layout, or teaching front-end concepts, this tool shows you — in real time — exactly which rule wins and why.</p>

          <p>The cascade algorithm follows the official W3C specification to the letter. It correctly handles compound selectors, ID weighting, class and attribute selectors, element selectors, source order ties, and more. When you input rules and a target element, the simulator performs selector matching, calculates specificity using the standard (a,b,c) scoring system, and visually highlights the winner with full breakdown.</p>

          <p>Unlike browser DevTools that show the final computed style, this tool focuses purely on the cascade resolution process. It answers the question: <em>“Why did this rule win over that one?”</em> — something even Chrome and Firefox don’t explain clearly.</p>

          <p>Perfect for students, educators, senior developers, and anyone who wants predictable, maintainable CSS. Open source on GitHub. No login. No limits. Just pure understanding.</p>

          <p class="mt-4 text-center"><em>Master the cascade. Write better CSS. Debug faster.</em></p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="how-to" class="py-5">
  <div class="container">
    <h2 class="display-5 fw-bold text-center mb-5">How to Use the Simulator</h2>
    <div class="row g-5">
      <div class="col-md-4">
        <div class="p-5 bg-white rounded-4 shadow-sm h-100 text-center">
          <div class="fs-1 text-success mb-4">1</div>
          <h3 class="h4 fw-bold">Write Your CSS Rules</h3>
          <p class="text-muted">Enter any number of standard CSS rules in the left panel. Use normal syntax — one rule per block. You can include comments, multiple declarations, and compound selectors like <code>div#header.active</code>. The editor supports full CSS you’d write in real projects.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-5 bg-white rounded-4 shadow-sm h-100 text-center">
          <div class="fs-1 text-success mb-4">2</div>
          <h3 class="h4 fw-bold">Define the Target Element</h3>
          <p class="text-muted">Type the element you want to test — for example: <code>div#header.active.special</code> or <code>p.intro</code>. This simulates the HTML element the browser is trying to style. The simulator checks which rules actually match this target.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-5 bg-white rounded-4 shadow-sm h-100 text-center">
          <div class="fs-1 text-success mb-4">3</div>
          <h3 class="h4 fw-bold">Click Run & See the Winner</h3>
          <p class="text-muted">Press the Run button. The right panel instantly shows every matching rule, their specificity score, and the final winner highlighted in green. You’ll see exactly why one rule beat another — whether due to an ID, more classes, or source order in a tie.</p>
        </div>
      </div>
    </div>
    <div class="text-center mt-5">
      <p class="text-muted">Works with any valid CSS selector. No registration. No data sent. Instant results.</p>
    </div>
  </div>
</section>

<section id="faq" class="py-5 bg-light">
  <div class="container">
    <h2 class="display-5 fw-bold text-center mb-5">Frequently Asked Questions</h2>
    <div class="accordion shadow-lg rounded-4 overflow-hidden" id="faqAccordion">
      <div class="accordion-item border-0">
        <h2 class="accordion-header">
          <button class="accordion-button fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true">
            What exactly is CSS specificity?
          </button>
        </h2>
        <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Specificity is the scoring system browsers use to decide which CSS rule applies when multiple rules target the same element. It’s calculated using three values: number of IDs (highest weight), number of classes/attributes/pseudo-classes, and number of element selectors. The rule with the highest score wins — regardless of where it appears in the file.
          </div>
        </div>
      </div>

      <div class="accordion-item border-0 border-top">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
            Does source order matter?
          </button>
        </h2>
        <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Only when specificity scores are exactly equal. If two rules have identical weight, the one that appears later in the stylesheet wins. This is why “last rule wins” seems true sometimes — but it’s actually just a tiebreaker.
          </div>
        </div>
      </div>

      <div class="accordion-item border-0 border-top">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
            Is this tool 100% accurate?
          </button>
        </h2>
        <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Yes. It implements the official W3C cascade algorithm used by all modern browsers. It correctly handles compound selectors, element selectors, source order, and specificity comparison. It intentionally excludes !important and inline styles for educational clarity.
          </div>
        </div>
      </div>

      <div class="accordion-item border-0 border-top">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
            Is my CSS private?
          </button>
        </h2>
        <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Completely. Nothing is sent to any server. All processing happens in your browser using JavaScript. You can safely test internal design systems, proprietary code, or client work.
          </div>
        </div>
      </div>

      <div class="accordion-item border-0 border-top">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
            Can I use this offline?
          </button>
        </h2>
        <div id="faq5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Yes! The entire site is static and works perfectly offline if you download it from GitHub. Ideal for workshops, classrooms, or air-gapped environments.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>