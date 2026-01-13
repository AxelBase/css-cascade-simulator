<script lang="ts">
    import '../app.css';
    import { base } from '$app/paths';
    import { page } from '$app/stores';
    import { fly } from 'svelte/transition';

    const currentYear = new Date().getFullYear();
    const buymeacoffeeUsername = 'axelbase';      // ← your Buy Me a Coffee username

    let isDropdownOpen = false;

    function toggleDropdown() {
        isDropdownOpen = !isDropdownOpen;
    }

    function closeDropdown() {
        isDropdownOpen = false;
    }

    // Click outside directive
    function clickOutside(node: HTMLElement) {
        const handleClick = (event: MouseEvent) => {
            if (node && !node.contains(event.target as Node)) {
                node.dispatchEvent(new CustomEvent('click_outside'));
            }
        };
        document.addEventListener('click', handleClick, true);
        return {
            destroy() {
                document.removeEventListener('click', handleClick, true);
            }
        };
    }

    // Smooth scroll for anchor links when already on home page
    function scrollToSection(id: string) {
        if ($page.url.pathname === base + '/' || $page.url.pathname === base) {
            const element = document.getElementById(id);
            if (element) {
                const headerOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }
    }
</script>

<header class="navbar-sticky">
    <nav class="container nav-container">
        <div class="nav-left">
            <a href="{base}/" class="brand-link">
                <img src="{base}/AxelLab-Logo.ico" alt="AxelLab" class="brand-logo" />
                <span class="brand-text">AxelBase</span>
            </a>

            <!-- Buy Me a Coffee + Bitcoin Dropdown -->
            <div class="bmac-wrapper position-relative" use:clickOutside on:click_outside={closeDropdown}>
                <button
                    class="bmac-button d-flex align-items-center gap-2"
                    on:click={toggleDropdown}
                    aria-expanded={isDropdownOpen}
                    aria-label="Support AxelBase"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
                    </svg>
                    <span class="d-none d-sm-inline">Buy me a coffee</span>
                </button>

                {#if isDropdownOpen}
                <div
                    class="bmac-dropdown mt-2"
                    transition:fly={{ y: 10, duration: 220 }}
                >
                    <a
                        href="https://buymeacoffee.com/{buymeacoffeeUsername}"
                        target="_blank"
                        rel="noopener noreferrer"
                        on:click={closeDropdown}
                    >
                        <span class="amount">$3</span> One Coffee
                    </a>

                    <a
                        href="https://buymeacoffee.com/{buymeacoffeeUsername}"
                        target="_blank"
                        rel="noopener noreferrer"
                        on:click={closeDropdown}
                    >
                        <span class="amount">$5</span> Two Coffees
                    </a>

                    <a
                        href="https://buymeacoffee.com/{buymeacoffeeUsername}"
                        target="_blank"
                        rel="noopener noreferrer"
                        on:click={closeDropdown}
                    >
                        <span class="amount">$10</span> Three Coffees
                    </a>

                    <a
                        href="https://buymeacoffee.com/{buymeacoffeeUsername}"
                        target="_blank"
                        rel="noopener noreferrer"
                        on:click={closeDropdown}
                        class="custom-amount"
                    >
                        Custom Amount
                    </a>

                    <a
                        href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
                        target="_blank"
                        rel="noopener noreferrer"
                        on:click={closeDropdown}
                        class="custom-amount bitcoin-option"
                    >
                        Buy via Crypto (Bitcoin)
                    </a>
                </div>
                {/if}
            </div>
        </div>

        <ul class="nav-links">
            <li><a class="nav-link" href="{base}/">Home</a></li>
            <li><a class="nav-link" href="{base}/#about" on:click|preventDefault={() => scrollToSection('about')}>About</a></li>
            <li><a class="nav-link" href="{base}/#how-to" on:click|preventDefault={() => scrollToSection('how-to')}>How to use</a></li>
            <li><a class="nav-link" href="{base}/#faq" on:click|preventDefault={() => scrollToSection('faq')}>FAQ</a></li>
            <li><a class="nav-link" href="{base}/blog">Blog</a></li>
        </ul>
    </nav>
</header>

<main class="content-wrapper">
    <slot />
</main>

<footer class="footer-fixed">
    <div class="container footer-content">
        <span>© {currentYear} AxelBase Crypto Price Target Calculator</span>
        <div class="footer-links">
            <a href="{base}/privacy">Privacy</a>
            <span class="separator">•</span>
            <a href="{base}/terms">Terms</a>
        </div>
    </div>
</footer>

<style>
    /* ───────────────────────────────────────────────
       Navbar & General Layout (from File 2)
    ─────────────────────────────────────────────── */
    .navbar-sticky {
        position: sticky;
        top: 0;
        z-index: 1030;
        background-color: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        box-shadow: 0 4px 20px rgba(45, 87, 44, 0.1);
        padding: 0.8rem 0;
    }

    .nav-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav-left {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }

    .brand-link {
        display: flex;
        align-items: center;
        text-decoration: none;
        gap: 0.75rem;
    }

    .brand-logo {
        height: 40px;
        width: auto;
    }

    .brand-text {
        font-size: 1.5rem;
        font-weight: 800;
        color: var(--axel-green);
        letter-spacing: -0.5px;
    }

    .nav-links {
        display: flex;
        list-style: none;
        margin: 0;
        gap: 2rem;
        padding: 0;
    }

    .nav-link {
        text-decoration: none;
        color: #555;
        font-weight: 600;
        font-size: 1rem;
        transition: color 0.2s ease;
        position: relative;
    }

    .nav-link:hover {
        color: var(--axel-green);
    }

    .nav-link::after {
        content: '';
        position: absolute;
        width: 0;
        height: 3px;
        bottom: -5px;
        left: 0;
        background-color: var(--axel-green);
        transition: width 0.3s ease;
        border-radius: 10px;
    }

    .nav-link:hover::after {
        width: 100%;
    }

    /* ───────────────────────────────────────────────
       Buy Me a Coffee Button & Dropdown (File 1 style + File 2 colors)
    ─────────────────────────────────────────────── */
    .bmac-button {
        background: var(--axel-green);
        color: white;
        border: none;
        padding: 0.6rem 1.25rem;
        border-radius: 50px;
        font-weight: 700;
        font-size: 0.94rem;
        transition: all 0.25s ease;
        box-shadow: 0 4px 12px rgba(45, 87, 44, 0.25);
    }

    .bmac-button:hover {
        background: var(--axel-green-light);
        transform: translateY(-2px);
        box-shadow: 0 7px 18px rgba(45, 87, 44, 0.35);
    }

    .bmac-dropdown {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        width: 245px;
        background: white;
        border-radius: 16px;
        box-shadow: 0 12px 32px rgba(45, 87, 44, 0.22);
        overflow: hidden;
        border: 1px solid rgba(45, 87, 44, 0.12);
        z-index: 1040;
    }

    .bmac-dropdown a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 22px;
        color: #333;
        text-decoration: none;
        font-size: 0.98rem;
        transition: all 0.2s ease;
    }

    .bmac-dropdown a:hover {
        background: rgba(45, 87, 44, 0.07);
        color: var(--axel-green);
        padding-left: 30px;
    }

    .bmac-dropdown .amount {
        font-weight: 800;
        color: var(--axel-green);
        font-size: 1.14rem;
        min-width: 50px;
    }

    .bmac-dropdown .custom-amount {
        font-weight: 700;
        color: var(--axel-green);
        border-top: 1px solid #eee;
        justify-content: center !important;
        padding: 14px 22px;
        margin-top: 4px;
    }

    .bitcoin-option {
        color: #f7931a !important;
        font-weight: 700 !important;
    }

    .bitcoin-option:hover {
        background: rgba(249, 166, 38, 0.08) !important;
        color: #e67e22 !important;
    }

    /* ───────────────────────────────────────────────
       Footer (from File 2)
    ─────────────────────────────────────────────── */
    .footer-fixed {
        position: relative;
        width: 100%;
        background-color: var(--axel-green);
        color: white;
        padding: 1.1rem 0;
        box-shadow: 0 -5px 20px rgba(0,0,0,0.1);
    }

    .footer-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.92rem;
    }

    .footer-links a {
        color: rgba(255,255,255,0.85);
        text-decoration: none;
        transition: color 0.2s;
    }

    .footer-links a:hover {
        color: white;
        text-decoration: underline;
    }

    .separator {
        margin: 0 0.6rem;
        color: rgba(255,255,255,0.4);
    }
</style>    