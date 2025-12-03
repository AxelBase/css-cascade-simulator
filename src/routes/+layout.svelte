<script lang="ts">
    import '../app.css';
    import { base } from '$app/paths';
    import { page } from '$app/stores';
    import { fly } from 'svelte/transition';

    const paypalUsername = 'AxelLab427'; // You said you would enter this later
    const donationAmounts = [1, 3, 5, 10];
    
    let isDropdownOpen = false;
    
    function toggleDropdown() {
        isDropdownOpen = !isDropdownOpen;
    }
    
    function closeDropdown() {
        isDropdownOpen = false;
    }
    
    // Click Outside Directive
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

    // Scroll offset helper for anchor links
    function scrollToSection(id: string) {
        // If we are not on home, go to home first (handled by standard href), 
        // but if we are on home, scroll smoothly.
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

            <div class="bmac-wrapper" use:clickOutside on:click_outside={closeDropdown}>
                <button class="bmac-button" on:click={toggleDropdown} aria-expanded={isDropdownOpen}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup-hot-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5Z"/>
                        <path d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.313 3.313 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.033A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.313 3.313 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.033A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.313 3.313 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.033A.5.5 0 0 1 10.4.8Z"/>
                    </svg>
                    <span>Buy me a coffee</span>
                </button>
            
                {#if isDropdownOpen}
                <div class="bmac-dropdown" transition:fly={{ y: 10, duration: 250 }}>
                    {#each donationAmounts as amount}
                    <a
                        href="https://paypal.me/{paypalUsername}/{amount}"
                        target="_blank"
                        rel="noopener noreferrer"
                        on:click={closeDropdown}
                        class="bmac-option"
                    >
                        ${amount}
                    </a>
                    {/each}
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
        <span>© {new Date().getFullYear()} AxelBase Markdown to HTML Converter</span>
        <div class="footer-links">
            <a href="{base}/privacy">Privacy</a>
            <span class="separator">•</span>
            <a href="{base}/terms">Terms</a>
        </div>
    </div>
</footer>

<style>
    /* Navbar Styles */
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

    /* Links */
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

    /* Buy Me A Coffee Button */
    .bmac-wrapper {
        position: relative;
    }

    .bmac-button {
        background-color: #FFDD00;
        color: #000;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 25px;
        font-family: 'Nunito', sans-serif;
        font-weight: 700;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        box-shadow: 0 4px 10px rgba(255, 221, 0, 0.3);
        transition: transform 0.2s, box-shadow 0.2s;
    }

    .bmac-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 15px rgba(255, 221, 0, 0.4);
    }

    .bmac-dropdown {
        position: absolute;
        top: 120%;
        left: 0;
        background: white;
        min-width: 180px;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        z-index: 1040;
        border: 1px solid #eee;
    }

    .bmac-option {
        padding: 0.75rem 1rem;
        text-decoration: none;
        color: var(--axel-green);
        font-weight: 700;
        border-radius: 10px;
        transition: background 0.2s;
        text-align: center;
    }

    .bmac-option:hover {
        background-color: #e8f5e9;
    }

    /* Fixed Footer */
    .footer-fixed {
        position: relative;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: var(--axel-green);
        color: white;
        padding: 1rem 0;
        z-index: 1020;
        box-shadow: 0 -5px 20px rgba(0,0,0,0.1);
    }

    .footer-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.9rem;
    }

    .footer-links a {
        color: rgba(255,255,255,0.8);
        text-decoration: none;
        transition: color 0.2s;
    }

    .footer-links a:hover {
        color: white;
        text-decoration: underline;
    }

    .separator {
        margin: 0 0.5rem;
        color: rgba(255,255,255,0.4);
    }
</style>