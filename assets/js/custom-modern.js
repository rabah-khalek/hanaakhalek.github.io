/* ============================================
   MODERN JAVASCRIPT ENHANCEMENTS
   For Artist Portfolio Site
   ============================================ */

(function() {
    'use strict';

    // === SMOOTH SCROLL TO TOP ===
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // === NAVBAR SCROLL EFFECT ===
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // === LAZY LOADING IMAGES ===
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // === ANIMATE ELEMENTS ON SCROLL ===
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.post-preview, .gallery-item, .masonry-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, {
            threshold: 0.1
        });

        elements.forEach(el => observer.observe(el));
    };

    // === ENHANCED GALLERY FOR POST PAGES ===
    const enhanceGallery = () => {
        const container = document.getElementById('paintings-container');
        if (!container) return;

        // Do NOT add masonry grid class - use CSS grid instead
        // container.classList.add('masonry-grid');

        // Enhance each gallery item
        const items = container.querySelectorAll('.col-12, .col-sm-4, .col-lg-4, .col-md-4, [class*="col-"]');
        items.forEach(item => {
            // Do NOT add masonry-item class - let CSS handle the layout
            // item.classList.add('masonry-item');
            const link = item.querySelector('a');
            if (link) {
                link.style.display = 'block';
            }
        });
    };

    // === SMOOTH PARALLAX FOR HERO IMAGES WITH SCROLL HIDE ===
    const parallaxEffect = () => {
        const heroImage = document.querySelector('.intro-header.big-img');
        if (!heroImage) return;

        const heroHeight = heroImage.offsetHeight;
        const hideThreshold = heroHeight * 0.6; // Start hiding at 60% scroll

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            
            // Calculate opacity based on scroll position
            let opacity = 1;
            if (scrolled > hideThreshold) {
                opacity = Math.max(0, 1 - (scrolled - hideThreshold) / (heroHeight * 0.4));
            }
            
            heroImage.style.transform = `translateY(${parallax}px)`;
            heroImage.style.opacity = opacity;
            heroImage.style.transition = 'opacity 0.3s ease-out';
        });
    };

    // === IMPROVED MODAL IMAGE VIEWER ===
    const enhanceModal = () => {
        // Completely disabled - let Bootstrap handle modals naturally
        // Custom enhancements were causing freezing and interaction issues
        return;
    };

    // === GALLERY NAVIGATION ===
    function navigateGallery(direction) {
        const images = Array.from(document.querySelectorAll('.clickable-image'));
        const modalImage = document.getElementById('modalImage');
        const currentSrc = modalImage.src;
        
        const currentIndex = images.findIndex(img => 
            img.getAttribute('data-image').includes(currentSrc.split('/').pop())
        );
        
        let newIndex;
        if (direction === 'next') {
            newIndex = (currentIndex + 1) % images.length;
        } else {
            newIndex = (currentIndex - 1 + images.length) % images.length;
        }
        
        modalImage.src = images[newIndex].getAttribute('data-image');
    }

    // === RESPONSIVE GRID ADJUSTMENT ===
    const adjustGrid = () => {
        const grid = document.querySelector('.gallery-grid');
        if (!grid) return;

        const resizeGrid = () => {
            const width = window.innerWidth;
            let columns;
            
            if (width >= 1200) columns = 4;
            else if (width >= 992) columns = 3;
            else if (width >= 768) columns = 2;
            else columns = 1;
            
            grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        };

        resizeGrid();
        window.addEventListener('resize', resizeGrid);
    };

    // === PRELOAD CRITICAL IMAGES ===
    const preloadImages = () => {
        const criticalImages = document.querySelectorAll('img[data-preload]');
        criticalImages.forEach(img => {
            const newImg = new Image();
            newImg.src = img.dataset.preload;
        });
    };

    // === ADD LOADING ANIMATION ===
    const addLoadingAnimation = () => {
        document.querySelectorAll('img').forEach(img => {
            if (!img.complete) {
                img.style.opacity = '0';
                img.addEventListener('load', function() {
                    this.style.transition = 'opacity 0.3s ease';
                    this.style.opacity = '1';
                });
            }
        });
    };

    // === IMPROVE LINKS BEHAVIOR ===
    const enhanceLinks = () => {
        // Add external link indicator
        document.querySelectorAll('a[href^="http"]').forEach(link => {
            if (!link.hostname.includes(window.location.hostname)) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
                // Optional: add external link icon
                // link.innerHTML += ' <i class="fas fa-external-link-alt fa-xs"></i>';
            }
        });
    };

    // === SOCIAL SHARE ENHANCEMENTS ===
    const enhanceSocialShare = () => {
        const shareButtons = document.querySelectorAll('.share-links a');
        shareButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                // Add click animation
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 100);
            });
        });
    };

    // === READING PROGRESS BAR ===
    const addReadingProgress = () => {
        const post = document.querySelector('.blog-post');
        if (!post) return;

        const progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #3498DB, #2980B9);
            z-index: 9999;
            transition: width 0.1s ease;
            box-shadow: 0 2px 10px rgba(52, 152, 219, 0.3);
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            const scrolled = (window.pageYOffset / documentHeight) * 100;
            progressBar.style.width = scrolled + '%';
        });
    };

    // === CURSOR TRAIL EFFECT (SUBTLE) ===
    const addCursorEffect = () => {
        if (window.innerWidth < 768) return; // Skip on mobile

        const canvas = document.createElement('canvas');
        canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 9998;
        `;
        document.body.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        let mouseX = 0;
        let mouseY = 0;

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 2 - 1;
                this.speedY = Math.random() * 2 - 1;
                this.life = 1;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.life -= 0.02;
                if (this.size > 0.2) this.size -= 0.05;
            }

            draw() {
                ctx.fillStyle = `rgba(52, 152, 219, ${this.life * 0.3})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            if (Math.random() < 0.1) {
                particles.push(new Particle(mouseX, mouseY));
            }
        });

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            for (let i = particles.length - 1; i >= 0; i--) {
                particles[i].update();
                particles[i].draw();
                
                if (particles[i].life <= 0) {
                    particles.splice(i, 1);
                }
            }
            
            requestAnimationFrame(animate);
        }

        animate();

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    };

    // === SECTION REVEAL ANIMATION ===
    const addSectionReveal = () => {
        const sections = document.querySelectorAll('.article-row, .interview-card, .post-preview');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
    };

    // === AMBIENT PAINTINGS BACKGROUND - FULL PAGE MOSAIC ===
    const createAmbientPaintings = () => {
        // Enable on screens wider than tablets
        if (window.innerWidth < 992) return;

        // All available paintings from your posts (verified paths)
        const paintings = [
            '/assets/img/dreams/image1-31.jpeg',
            '/assets/img/dreams/image2-33.jpeg',
            '/assets/img/dreams/image3-35.jpeg',
            '/assets/img/dreams/image4-37.jpeg',
            '/assets/img/dreams/image5-39.jpeg',
            '/assets/img/dreams/image6-41.jpeg',
            '/assets/img/dreams/image7-43.jpeg',
            '/assets/img/dreams/image8-45.jpeg',
            '/assets/img/dreams/image9-47.jpeg',
            '/assets/img/dreams/image10-49.jpeg',
            '/assets/img/dreams/image11-51.jpeg',
            '/assets/img/dreams/image12-53.jpeg',
            '/assets/img/dreams/image13-55.jpeg',
            '/assets/img/dreams/image14-57.jpeg',
            '/assets/img/dreams/image15-59.jpeg',
            '/assets/img/visions_convexes/Final 1-9461.jpg',
            '/assets/img/visions_convexes/Final 1-9463.jpg',
            '/assets/img/visions_convexes/Final 1-9467.jpg',
            '/assets/img/visions_convexes/Final 1-9472.jpg',
            '/assets/img/visions_convexes/Final 1-9475.jpg',
            '/assets/img/visions_convexes/Final 1-9476.jpg',
            '/assets/img/visions_convexes/Final 1-9489.jpg',
            '/assets/img/visions_convexes/Final 1-9498.jpg',
            '/assets/img/visions_convexes/Final 1-9500.jpg',
            '/assets/img/visions_convexes/Final 1-9506.jpg',
            '/assets/img/reflections/image1-31.png',
            '/assets/img/reflections/image2-33.png',
            '/assets/img/reflections/image4-37.png',
            '/assets/img/reflections/image5-39.png',
            '/assets/img/reflections/image6-41.png',
            '/assets/img/reflections/image7-43.png',
            '/assets/img/reflections/image8-45.png',
            '/assets/img/reflections/image9-47.png',
            '/assets/img/reflections/image10-49.png',
            '/assets/img/reflections/image11-51.png',
            '/assets/img/reflections/image12-53.png',
            '/assets/img/reflections/image13-55.png',
            '/assets/img/reflections/image14-57.png',
            '/assets/img/reflections/image15-59.png'
        ];

        // Shuffle paintings
        const shuffled = paintings.sort(() => 0.5 - Math.random());

        // Create container
        const container = document.createElement('div');
        container.id = 'ambient-paintings';
        document.body.prepend(container);

        // Full-page mosaic layout - multiple columns across entire width
        const screenWidth = window.innerWidth;
        const screenHeight = Math.max(window.innerHeight, document.documentElement.scrollHeight);
        const gap = 8; // Gap between paintings
        
        // Calculate number of columns to fill entire width (round up to ensure coverage)
        const columnWidth = 180;
        const numColumns = Math.ceil(screenWidth / (columnWidth + gap)) + 1; // Add 1 extra column to guarantee coverage
        
        // Predefined painting sizes for variety
        const sizes = [
            { width: 160, height: 140 },
            { width: 170, height: 160 },
            { width: 165, height: 150 },
            { width: 155, height: 145 },
            { width: 175, height: 155 },
            { width: 150, height: 165 }
        ];

        // Track the current Y position for each column
        const columnHeights = new Array(numColumns).fill(20);
        let paintingIndex = 0;

        // Fill all columns until EVERY column reaches the bottom (repeat paintings as needed)
        while (Math.min(...columnHeights) < screenHeight) {
            // Find the shortest column
            const shortestColumn = columnHeights.indexOf(Math.min(...columnHeights));
            
            // Get size for this painting
            const size = sizes[paintingIndex % sizes.length];
            
            // Calculate X position based on column
            const xPos = shortestColumn * (columnWidth + gap) + gap;
            const yPos = columnHeights[shortestColumn];
            
            // Create painting element
            const paintingDiv = document.createElement('div');
            paintingDiv.className = 'ambient-painting';
            paintingDiv.style.left = `${xPos}px`;
            paintingDiv.style.top = `${yPos}px`;
            paintingDiv.style.width = `${size.width}px`;
            paintingDiv.style.height = `${size.height}px`;
            paintingDiv.style.animationDelay = `${paintingIndex * 0.5}s`;

            const img = document.createElement('img');
            // Loop through paintings array infinitely
            img.src = shuffled[paintingIndex % shuffled.length];
            img.alt = '';
            img.loading = 'lazy';

            paintingDiv.appendChild(img);
            container.appendChild(paintingDiv);
            
            // Update column height
            columnHeights[shortestColumn] += size.height + gap;
            paintingIndex++;
            
            // Safety break after reasonable number of paintings
            if (paintingIndex > 1000) break;
        }

        // Fade in all paintings with staggered delay
        setTimeout(() => {
            document.querySelectorAll('.ambient-painting').forEach((painting, i) => {
                setTimeout(() => {
                    painting.classList.add('visible', 'animate');
                }, i * 50);
            });
        }, 100);

        // Refresh paintings every 90 seconds with smooth transition
        setInterval(() => {
            const allPaintings = container.querySelectorAll('.ambient-painting');
            const newShuffled = paintings.sort(() => 0.5 - Math.random());
            
            allPaintings.forEach((painting, i) => {
                setTimeout(() => {
                    painting.classList.remove('visible');
                    setTimeout(() => {
                        painting.querySelector('img').src = newShuffled[i % paintings.length];
                        painting.classList.add('visible');
                    }, 1000);
                }, i * 50);
            });
        }, 90000);
    };

    // === INITIALIZE ALL ENHANCEMENTS ===
    const init = () => {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        animateOnScroll();
        enhanceGallery();
        parallaxEffect();
        enhanceModal();
        adjustGrid();
        preloadImages();
        addLoadingAnimation();
        enhanceLinks();
        enhanceSocialShare();
        // Temporarily disable these to test modal freeze
        // addReadingProgress();
        // addCursorEffect();
        addSectionReveal();
        createAmbientPaintings();

        console.log('✨ Sophisticated enhancements loaded successfully!');
    };

    // Start initialization
    init();

})();

// === SCROLL TO TOP BUTTON STYLES (injected) ===
const style = document.createElement('style');
style.textContent = `
    .scroll-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #008AFF, #0085A1);
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 20px rgba(0, 138, 255, 0.3);
    }
    
    .scroll-to-top.show {
        opacity: 1;
        visibility: visible;
    }
    
    .scroll-to-top:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 30px rgba(0, 138, 255, 0.4);
    }
    
    .scroll-to-top:active {
        transform: translateY(-2px);
    }
`;
document.head.appendChild(style);
