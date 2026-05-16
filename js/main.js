// Main JavaScript File
(function() {
    'use strict';

document.addEventListener('DOMContentLoaded', function() {
        initNavigation();
        initSearch();
        initFilters();
        initLoadMore();
        initModals();
        initContactForm();
        initScrollAnimations();
        initImageFallbacks();
        initHeroParallax();
        initReviewsCarousel();
        initImageModal();
    });

    function initNavigation() {
        var navToggle = document.querySelector('.nav-toggle');
        var navMenu = document.querySelector('.nav-menu');
        var navLinks = document.querySelectorAll('.nav-link');

        if (navToggle && navMenu) {
            navToggle.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
            });
        }

        navLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                if (navMenu) navMenu.classList.remove('active');
                if (navToggle) navToggle.classList.remove('active');

                var href = this.getAttribute('href');
                if (href && href.charAt(0) === '#') {
                    e.preventDefault();
                    var target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            });
        });

        var navbar = document.querySelector('.navbar');
    }

    function initSearch() {
        var searchInput = document.getElementById('searchInput');
        var searchBtn = document.querySelector('.search-btn');

        if (searchBtn) {
            searchBtn.addEventListener('click', function() {
                if (searchInput) {
                    var query = searchInput.value.trim();
                    if (query && typeof searchProducts === 'function') {
                        searchProducts(query);
                    }
                }
            });
        }

        if (searchInput) {
            var debounceTimer;
            searchInput.addEventListener('keyup', function(e) {
                if (e.key === 'Enter') {
                    clearTimeout(debounceTimer);
                    var query = this.value.trim();
                    if (query && typeof searchProducts === 'function') {
                        searchProducts(query);
                    }
                } else {
                    clearTimeout(debounceTimer);
                    debounceTimer = setTimeout(function() {
                        var query = searchInput.value.trim();
                        if (query.length > 2 && typeof searchProducts === 'function') {
                            searchProducts(query);
                        } else if (query.length === 0 && typeof renderProducts === 'function') {
                            renderProducts();
                        }
                    }, 300);
                }
            });
        }
    }

    function initFilters() {
        var filterBtns = document.querySelectorAll('.filter-btn');

        filterBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                filterBtns.forEach(function(b) { b.classList.remove('active'); });
                this.classList.add('active');

                var filter = this.dataset.filter;
                if (typeof filterProducts === 'function') {
                    filterProducts(filter);
                }

                var searchInput = document.getElementById('searchInput');
                if (searchInput) searchInput.value = '';
            });
        });
}

    function initLoadMore() {
        var loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', function() {
                if (typeof loadMoreProducts === 'function') {
                    loadMoreProducts();
                }
            });
        }
    }

    function initModals() {
        var productModal = document.getElementById('productModal');
        var cartModal = document.getElementById('cartModal');
        var wishlistModal = document.getElementById('wishlistModal');
        var cartToggle = document.getElementById('cartToggle');
        var wishlistToggle = document.getElementById('wishlistToggle');

        if (productModal) {
            var closeButtons = productModal.querySelectorAll('.modal-close-btn');
            closeButtons.forEach(function(button) {
                button.addEventListener('click', function() {
                    productModal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                });
            });

            var modalCloseBtn = document.getElementById('modalCloseBtn');
            if (modalCloseBtn) {
                modalCloseBtn.addEventListener('click', function() {
                    productModal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                });
            }

            var modalAddCartBtn = document.getElementById('modalAddCartBtn');
            if (modalAddCartBtn) {
                modalAddCartBtn.addEventListener('click', function() {
                    if (typeof addToCartFromModal === 'function') addToCartFromModal();
                });
            }

            var modalWishlistBtn = document.getElementById('modalWishlistBtn');
            if (modalWishlistBtn) {
                modalWishlistBtn.addEventListener('click', function() {
                    if (typeof addToWishlistFromModal === 'function') addToWishlistFromModal();
                });
            }

            window.addEventListener('click', function(e) {
                if (e.target === productModal) {
                    productModal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
                if (cartModal && e.target === cartModal) {
                    cartModal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
                if (wishlistModal && e.target === wishlistModal) {
                    wishlistModal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
        }

        if (cartToggle && cartModal) {
            cartToggle.addEventListener('click', function(e) {
                e.preventDefault();
                cartModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        }

        if (wishlistToggle && wishlistModal) {
            wishlistToggle.addEventListener('click', function(e) {
                e.preventDefault();
                wishlistModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        }

        window.closeCartModal = function() {
            if (cartModal) {
                cartModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        };

        window.closeWishlistModal = function() {
            if (wishlistModal) {
                wishlistModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        };
    }

    function initContactForm() {
        var contactForm = document.getElementById('orderForm');
        if (!contactForm) return;

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            var formData = new FormData(this);
            var data = {};
            formData.forEach(function(value, key) {
                data[key] = value;
            });

            if (!data.name || !data.email || !data.message) {
                if (typeof showNotification === 'function') {
                    showNotification('Please fill in all required fields', 'error');
                }
                return;
            }

            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                if (typeof showNotification === 'function') {
                    showNotification('Please enter a valid email address', 'error');
                }
                return;
            }

            var submitBtn = this.querySelector('button[type="submit"]');
            var originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(function() {
                if (typeof showNotification === 'function') {
                    showNotification('Message sent successfully! We will get back to you soon.', 'success');
                }
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;

                var whatsappNumber = '254705873806';
                var waMsg = 'Hello! I am interested in the following:\n';
                if (data.name) waMsg += 'Name: ' + data.name + '\n';
                if (data.email) waMsg += 'Email: ' + data.email + '\n';
                if (data.product) waMsg += 'Product: ' + data.product + '\n';
                if (data.message) waMsg += 'Message: ' + data.message + '\n';
                var whatsappUrl = 'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(waMsg);
                window.open(whatsappUrl, '_blank');

                var pm = document.getElementById('productModal');
                if (pm && pm.style.display === 'block') {
                    pm.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            }, 1500);
        });

        var formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
        formInputs.forEach(function(input) {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });

            input.addEventListener('blur', function() {
                if (!this.value) {
                    this.parentElement.classList.remove('focused');
                }
            });
        });
    }

    function initScrollAnimations() {
        var observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        var animateElements = document.querySelectorAll('.product-card, .section-title');
        animateElements.forEach(function(el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
}

    function initImageFallbacks() {
        var images = document.querySelectorAll('img');
        images.forEach(function(img) {
            img.addEventListener('load', function() {
                this.style.animation = 'fadeIn 0.5s ease-out';
            });

            img.addEventListener('error', function() {
                this.src = 'https://picsum.photos/seed/fallback/400/300';
            });
        });
    }

    function initHeroParallax() {
        var hero = document.querySelector('.hero');
        var heroContent = document.querySelector('.hero-content');

        if (!hero || !heroContent) return;

        var ticking = false;

        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(function() {
                    var scrolled = window.pageYOffset;
                    heroContent.style.transform = 'translateY(' + (scrolled * 0.5) + 'px)';
                    heroContent.style.opacity = 1 - scrolled / 600;
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // ─── Reviews Carousel ───────────────────────────────────
    function initReviewsCarousel() {
        var track    = document.getElementById('rcTrack');
        var prevBtn  = document.getElementById('rcPrev');
        var nextBtn  = document.getElementById('rcNext');
        var dotsWrap = document.getElementById('rcDots');
        if (!track || !prevBtn || !nextBtn) return;

        var slides = track.querySelectorAll('.rc-slide');
        var dots   = dotsWrap ? dotsWrap.querySelectorAll('.rc-dot') : [];
        var count  = slides.length;
        if (count < 2) return;

        var current = 0;
        var autoplayTimer;

        function goTo(idx) {
            current = (idx + count) % count;
            track.style.transform = 'translateX(-' + (current * 100) + '%)';
            if (dots.length) {
                dots.forEach(function(d, i) {
                    d.classList.toggle('active', i === current);
                });
            }
        }

        function startAutoplay() {
            clearInterval(autoplayTimer);
            autoplayTimer = setInterval(function() { goTo(current + 1); }, 4500);
        }

        function stopAutoplay() {
            clearInterval(autoplayTimer);
        }

        prevBtn.addEventListener('click', function() { stopAutoplay(); goTo(current - 1); startAutoplay(); });
        nextBtn.addEventListener('click', function() { stopAutoplay(); goTo(current + 1); startAutoplay(); });

        if (dotsWrap) {
            dotsWrap.addEventListener('click', function(e) {
                if (e.target.classList.contains('rc-dot')) {
                    stopAutoplay();
                    goTo(parseInt(e.target.dataset.index));
                    startAutoplay();
                }
            });
        }

        // Touch / swipe support
        var startX = 0;
        track.addEventListener('touchstart', function(e) { startX = e.changedTouches[0].screenX; }, { passive: true });
        track.addEventListener('touchend', function(e) {
            var diff = startX - e.changedTouches[0].screenX;
            if (Math.abs(diff) > 40) {
                stopAutoplay();
                diff > 0 ? goTo(current + 1) : goTo(current - 1);
                startAutoplay();
            }
        }, { passive: true });

        startAutoplay();
        // Pause when section is out of view
        var section = track.closest('section');
        if (section) {
            var observer = new IntersectionObserver(function(entries) {
                entries[0].isIntersecting ? startAutoplay() : stopAutoplay();
            }, { threshold: 0.2 });
            observer.observe(section);
        }
    }

    function initImageModal() {
        var modal = document.getElementById('imageModal');
        var modalImg = document.getElementById('imageModalImg');
        var closeBtn = document.querySelector('.image-modal-close');
        var reviewImages = document.querySelectorAll('.review-card-image');

        if (!modal || !modalImg || !closeBtn) return;
        var imgSources = [];
        reviewImages.forEach(function(img) {
            imgSources.push(img.src);
        });

        var currentIndex = 0;

        function showImage(index) {
            currentIndex = ((index % imgSources.length) + imgSources.length) % imgSources.length;
            modalImg.src = imgSources[currentIndex];
        }

        reviewImages.forEach(function(img) {
            img.addEventListener('click', function() {
                currentIndex = imgSources.indexOf(this.src);
                showImage(currentIndex);
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });

        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
            if (e.key === 'ArrowRight' && modal.style.display === 'block') {
                showImage(currentIndex + 1);
            }
            if (e.key === 'ArrowLeft' && modal.style.display === 'block') {
                showImage(currentIndex - 1);
            }
        });

        // Touch / swipe support
        var touchStartX = 0;
        var touchEndX = 0;

        modal.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        modal.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            var diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 50) {
                diff > 0 ? showImage(currentIndex + 1) : showImage(currentIndex - 1);
            }
        }, { passive: true });
    }
})();
