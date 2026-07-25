document.addEventListener('DOMContentLoaded', () => {
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile menu when a link is clicked
        const navLinkItems = document.querySelectorAll('.nav-links a');
        navLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileBtn.querySelector('i');
                if(icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // Render Projects
    const projectsContainer = document.getElementById('projects-container');
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close-modal');

    // Make sure projectsData exists (from projects.js)
    if (typeof projectsData !== 'undefined') {
        projectsData.forEach(project => {
            // Create Card
            const card = document.createElement('div');
            card.className = 'project-card fade-up';
            
            // Generate tool tags
            const toolsHtml = project.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('');
            
            card.innerHTML = `
                <img src="${project.thumbnail}" alt="${project.title}" class="project-img">
                <div class="project-content">
                    <div class="project-category">${project.category}</div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-desc">${project.shortDescription}</p>
                    <div class="project-tools">
                        ${toolsHtml}
                    </div>
                    <div class="project-actions">
                        <button class="btn btn-outline btn-sm btn-view-project" data-id="${project.id}">View Project Details</button>
                    </div>
                </div>
            `;
            
            projectsContainer.appendChild(card);
        });
    } else {
        projectsContainer.innerHTML = '<p>Error loading projects data. Please check projects.js.</p>';
    }

    // Modal Logic
    document.querySelectorAll('.btn-view-project').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const projectId = e.target.getAttribute('data-id');
            const project = projectsData.find(p => p.id === projectId);
            
            if (project) {
                populateModal(project);
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore background scrolling
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Resume Modal Logic
    const resumeModal = document.getElementById('resume-modal');
    const openResumeBtn = document.getElementById('open-resume-btn');
    const closeResumeModal = document.getElementById('close-resume-modal');

    if (openResumeBtn && resumeModal && closeResumeModal) {
        openResumeBtn.addEventListener('click', () => {
            resumeModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });

        closeResumeModal.addEventListener('click', () => {
            resumeModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        window.addEventListener('click', (e) => {
            if (e.target === resumeModal) {
                resumeModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Populate Modal Content
    function populateModal(project) {
        // Build Lists
        const insightsHtml = project.insights.map(item => `<li>${item}</li>`).join('');
        const recommendationsHtml = project.recommendations.map(item => `<li>${item}</li>`).join('');
        
        let daxHtml = '';
        if (project.daxMeasures && project.daxMeasures.length > 0) {
            daxHtml = `
                <div class="modal-section">
                    <h3><i class="fas fa-code"></i> DAX Measures</h3>
                    ${project.daxMeasures.map(dax => `<code class="dax-code">${dax}</code>`).join('')}
                </div>
            `;
        }

        const galleryHtml = project.galleryImages.map(img => `<img src="${img}" alt="Gallery Image" class="gallery-img">`).join('');
        const toolsHtml = project.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('');

        modalBody.innerHTML = `
            <div class="modal-header-content" style="text-align: center; border-bottom: none; padding-bottom: 16px;">
                <div class="project-category" style="margin-bottom: 8px;">${project.category}</div>
                <h2 style="font-size: 2.5rem; margin-bottom: 0;">${project.title}</h2>
            </div>
            
            <div class="modal-hero" style="margin-bottom: 32px; padding: 0 40px;">
                <img src="${project.galleryImages[0] || project.thumbnail}" alt="${project.title} Preview" style="width: 100%; height: auto; display: block; border-radius: 8px; border: 1px solid var(--border-color);">
            </div>
            
            <div class="modal-body-content" style="display: block; padding: 0 40px 40px;">
                <div class="modal-main-content">
                    <div class="modal-section">
                        <h3>Project Overview</h3>
                        <p>${project.overview}</p>
                    </div>
                    
                    <div class="modal-section">
                        <h3>Business Problem</h3>
                        <p>${project.businessProblem}</p>
                    </div>
                    
                    <div class="modal-section">
                        <h3>Dataset</h3>
                        <p>${project.datasetDesc}</p>
                    </div>

                    <div class="modal-section">
                        <h3>Data Cleaning</h3>
                        <p>${project.dataCleaning}</p>
                    </div>

                    ${daxHtml}

                    <div class="modal-section">
                        <h3>Key Insights</h3>
                        <ul class="modal-list">
                            ${insightsHtml}
                        </ul>
                    </div>

                    <div class="modal-section">
                        <h3>Recommendations</h3>
                        <ul class="modal-list">
                            ${recommendationsHtml}
                        </ul>
                    </div>
                </div>
                
                <div class="modal-section" style="margin-top: 48px; border-top: 1px solid var(--border-color); padding-top: 32px;">
                    <h3 style="text-align: center; margin-bottom: 24px;">Dashboard Gallery</h3>
                    <div class="gallery-grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
                        ${galleryHtml}
                    </div>
                </div>

                <div class="modal-section" style="margin-top: 40px; text-align: center;">
                    <h3 style="justify-content: center;">Tools Used:</h3>
                    <div class="project-tools" style="justify-content: center; margin-top: 12px;">
                        ${toolsHtml}
                    </div>
                </div>

                <div class="modal-actions" style="justify-content: center; margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--border-color);">
                    ${project.links.github ? `<a href="${project.links.github}" target="_blank" class="btn btn-outline"><i class="fab fa-github"></i> View GitHub</a>` : ''}
                    ${project.links.downloadFile !== '#' && project.links.downloadFile ? `<a href="${project.links.downloadFile}" class="btn btn-primary"><i class="fas fa-download"></i> Download PBIX</a>` : ''}
                    ${project.links.liveDemo !== '#' && project.links.liveDemo ? `<a href="${project.links.liveDemo}" target="_blank" class="btn btn-secondary"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
                </div>
            </div>
        `;
    }

    // --- Intersection Observer for Scroll Animations ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-up, .fade-in, .scale-up, .slide-right, .slide-left');
    animatedElements.forEach(el => scrollObserver.observe(el));

    // --- Custom Cursor ---
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");

    if (cursorDot && cursorOutline && window.innerWidth > 768) {
        window.addEventListener("mousemove", function (e) {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Use animate for smooth trailing effect on the outline
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 300, fill: "forwards" });
        });

        // Add hover effects for clickable elements
        const clickables = document.querySelectorAll('a, button, .project-card, .skill-badge, .nav-links li, .btn');
        
        clickables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.style.width = '60px';
                cursorOutline.style.height = '60px';
                cursorOutline.style.backgroundColor = 'rgba(0, 119, 255, 0.1)';
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.style.width = '40px';
                cursorOutline.style.height = '40px';
                cursorOutline.style.backgroundColor = 'transparent';
            });
        });
    }
});
