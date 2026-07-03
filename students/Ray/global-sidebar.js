/**
 * global-sidebar.js
 * Centralized navigation rendering, active state detection,
 * and high-performance ScrollSpy for Ray's Learning Journey Portfolio.
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Define the Site Map Structure
    const siteMap = [
        {
            title: "Home",
            url: "index.html",
            icon: "🏠",
            key: "home",
            color: "#3498db" // Blue
        },
        {
            title: "Dog Module",
            icon: "🐾",
            key: "dog",
            color: "#e67e22", // Orange
            pages: [
                { title: "Meet Happy", url: "dog.html", key: "dog" },
                { title: "Dog Story", url: "dog-story.html", key: "dog-story" },
                { title: "3D Space", url: "dog-3d.html", key: "dog-3d" }
            ]
        },
        {
            title: "Videos",
            icon: "🎥",
            key: "videos",
            color: "#e74c3c", // Red
            pages: [
                { title: "Video Gallery", url: "videos.html", key: "videos" },
                { title: "Production Journal", url: "production.html", key: "production" }
            ]
        },
        {
            title: "Philosophy",
            url: "philosophy.html",
            icon: "💡",
            key: "philosophy",
            color: "#9b59b6" // Purple
        },
        {
            title: "Research",
            icon: "🔬",
            key: "research",
            color: "#10b981", // Green
            pages: [
                { title: "About Research", url: "research.html", key: "research" },
                { title: "Introduction", url: "intro.html", key: "intro" },
                { title: "Methods", url: "methods.html", key: "methods" },
                { title: "Data", url: "data.html", key: "data" },
                { title: "Analysis", url: "analysis.html", key: "analysis" }
            ]
        },
        {
            title: "Coding",
            icon: "💻",
            key: "coding",
            color: "#34495e", // Navy
            pages: [
                { title: "Tech Overview", url: "coding.html", key: "coding" },
                { title: "Vibrant Calculator", url: "calculator.html", key: "calculator" },
                { title: "Digital Graffiti", url: "graffiti.html", key: "graffiti" }
            ]
        }
    ];

    // 2. Define Page-level Section Anchors (for ScrollSpy/TOC)
    const pageAnchors = {
        "dog.html": [
            { id: "meet-happy", title: "Meet Happy" },
            { id: "campaign-poster", title: "Adoption Poster" },
            { id: "explore-more", title: "Explore More" }
        ],
        "intro.html": [
            { id: "sec-abstract", title: "Abstract" },
            { id: "sec-introduction", title: "Introduction" },
            { id: "sec-predictions", title: "Predictions" }
        ],
        "videos.html": [
            { id: "video1", title: "A Day in the Life" },
            { id: "video2", title: "Practice Video" },
            { id: "video3", title: "Production Journal Hub" }
        ]
    };

    // 3. Detect Current Page
    const path = window.location.pathname;
    let filename = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    // Remove query params/hashes if any
    filename = filename.split('?')[0].split('#')[0];

    // 4. Build Sidebar DOM Structure
    const sidebar = document.createElement("aside");
    sidebar.className = "global-sidebar";

    // Sidebar Header (Branding)
    const brand = document.createElement("div");
    brand.className = "sidebar-brand";
    brand.innerHTML = `
        <div class="brand-title">Ray's Portfolio</div>
        <div class="brand-subtitle">Class 5IN &bull; 10th Grade</div>
        <div class="brand-glow"></div>
    `;
    sidebar.appendChild(brand);

    // Sidebar Menu Navigation List
    const navList = document.createElement("ul");
    navList.className = "sidebar-menu";

    // Track active category color for custom CSS variables
    let activeCategoryColor = "#3498db"; 

    siteMap.forEach(item => {
        const li = document.createElement("li");
        li.style.setProperty("--theme-color", item.color);

        if (item.url) {
            // Simple Item
            const isActive = filename === item.url;
            if (isActive) {
                activeCategoryColor = item.color;
            }
            li.className = `menu-item ${isActive ? "active" : ""}`;
            li.innerHTML = `
                <a href="${item.url}">
                    <span class="menu-icon">${item.icon}</span>
                    <span class="menu-text">${item.title}</span>
                </a>
            `;
        } else if (item.pages) {
            // Accordion Category
            const isChildActive = item.pages.some(p => p.url === filename);
            if (isChildActive) {
                activeCategoryColor = item.color;
            }
            li.className = `menu-item has-submenu ${isChildActive ? "active-category expanded" : ""}`;
            
            let submenuHTML = `<ul class="sidebar-submenu">`;
            item.pages.forEach(subPage => {
                const isSubActive = filename === subPage.url;
                submenuHTML += `
                    <li class="submenu-item ${isSubActive ? "active" : ""}">
                        <a href="${subPage.url}">
                            <span class="submenu-bullet"></span>
                            <span class="submenu-text">${subPage.title}</span>
                        </a>
                `;
                
                // If this sub-page is active and has page section anchors, render them (TOC)
                if (isSubActive && pageAnchors[subPage.url]) {
                    submenuHTML += `<ul class="sidebar-toc">`;
                    pageAnchors[subPage.url].forEach(anchor => {
                        submenuHTML += `
                            <li class="toc-item">
                                <a href="#${anchor.id}" data-scroll-to="${anchor.id}">
                                    <span class="toc-dot"></span>
                                    <span class="toc-text">${anchor.title}</span>
                                </a>
                            </li>
                        `;
                    });
                    submenuHTML += `</ul>`;
                }
                
                submenuHTML += `</li>`;
            });
            submenuHTML += `</ul>`;

            li.innerHTML = `
                <div class="submenu-trigger">
                    <span class="menu-icon">${item.icon}</span>
                    <span class="menu-text">${item.title}</span>
                    <span class="menu-arrow">▼</span>
                </div>
                ${submenuHTML}
            `;

            // Add click listener to accordion triggers
            const trigger = li.querySelector(".submenu-trigger");
            trigger.addEventListener("click", () => {
                li.classList.toggle("expanded");
            });
        }

        navList.appendChild(li);
    });

    sidebar.appendChild(navList);
    document.body.style.setProperty("--active-theme-color", activeCategoryColor);

    // 5. Build Mobile Top-bar and Overlay
    const mobileTopbar = document.createElement("div");
    mobileTopbar.className = "mobile-topbar";
    mobileTopbar.innerHTML = `
        <button class="sidebar-toggle" aria-label="Toggle Navigation Menu">
            <span class="toggle-bar"></span>
            <span class="toggle-bar"></span>
            <span class="toggle-bar"></span>
        </button>
        <span class="mobile-brand">Ray's Learning Journey</span>
    `;

    const overlay = document.createElement("div");
    overlay.className = "sidebar-overlay";

    // 6. Prepend Navigation to the DOM
    document.body.prepend(overlay);
    document.body.prepend(mobileTopbar);
    document.body.prepend(sidebar);

    // 7. Mobile Sidebar Toggle Functionality
    const toggleBtn = mobileTopbar.querySelector(".sidebar-toggle");
    
    function toggleMobileMenu() {
        sidebar.classList.toggle("open");
        overlay.classList.toggle("open");
        toggleBtn.classList.toggle("open");
    }

    toggleBtn.addEventListener("click", toggleMobileMenu);
    overlay.addEventListener("click", toggleMobileMenu);

    // Close mobile menu when clicking a link
    const allLinks = sidebar.querySelectorAll("a");
    allLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const href = link.getAttribute("href");
            // If it's a page anchor scroll link
            if (href.startsWith("#")) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetEl = document.getElementById(targetId);
                if (targetEl) {
                    // Close mobile drawer first
                    if (sidebar.classList.contains("open")) {
                        toggleMobileMenu();
                    }
                    
                    // Smooth Scroll with Offset for Mobile Header
                    const isMobile = window.innerWidth <= 992;
                    const offset = isMobile ? 80 : 30; // 80px offset on mobile for header height
                    const elementPosition = targetEl.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });

                    // Update hash in URL
                    window.history.pushState(null, null, href);
                }
            } else {
                // Regular page change, show page transition feel
                document.body.style.opacity = "0.7";
            }
        });
    });

    // 8. ScrollSpy Implementation
    const currentAnchors = pageAnchors[filename];
    if (currentAnchors && currentAnchors.length > 0) {
        const tocItems = sidebar.querySelectorAll(".toc-item");
        
        // Options for IntersectionObserver
        const observerOptions = {
            root: null, // viewport
            rootMargin: "-20% 0px -60% 0px", // triggers when element occupies middle section of viewport
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");
                    
                    // Remove active classes from all TOC items
                    tocItems.forEach(item => {
                        const link = item.querySelector("a");
                        if (link.getAttribute("href") === `#${id}`) {
                            item.classList.add("active");
                        } else {
                            item.classList.remove("active");
                        }
                    });
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Start observing each section anchor element on the page
        currentAnchors.forEach(anchor => {
            const targetEl = document.getElementById(anchor.id);
            if (targetEl) {
                observer.observe(targetEl);
            }
        });
    }
});
