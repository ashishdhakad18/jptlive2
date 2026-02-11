document.addEventListener('DOMContentLoaded', () => {



    // Navbar Shop Toggle

    const shopToggle = document.getElementById("shopToggle");
    const shopMenu = document.getElementById("shopMenu");

    let isOpen = false;

    shopToggle.addEventListener("click", function (e) {
        e.preventDefault();

        isOpen = !isOpen;

        if (isOpen) {
            shopMenu.classList.remove("max-h-0", "opacity-0");
            shopMenu.classList.add("max-h-[300px]", "opacity-100");
        } else {
            shopMenu.classList.add("max-h-0", "opacity-0");
            shopMenu.classList.remove("max-h-[300px]", "opacity-100");
        }
    });



    // ---------------------------------------------------------
    // 2. Combo Tabs Logic (Swiper + Tab Filtering)
    // ---------------------------------------------------------
    const comboTabButtons = document.querySelectorAll('.combo-tab-btn');
    const comboCards = document.querySelectorAll('.combo-card');
    const combosSwiperElement = document.querySelector('#combos-swiper');

    if (combosSwiperElement && comboTabButtons.length > 0 && comboCards.length > 0) {
        // Initialize Swiper
        const combosSwiper = new Swiper("#combos-swiper", {
            slidesPerView: 4.5,
            spaceBetween: 28,
        
            grabCursor: true,
            watchOverflow: false,
            navigation: {
                nextEl: "#combos-scroll-right",
                prevEl: "#combos-scroll-left",
            },

            // ✅ RESPONSIVE BREAKPOINTS
            breakpoints: {
                0: {
                    slidesPerView: 1.2,
                    spaceBetween: 16,
                },
                480: {
                    slidesPerView: 1.8,
                    spaceBetween: 16,
                },
                640: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 28,
                },
                1280: {
                    slidesPerView: 4.5,
                    spaceBetween: 28,
                },
            },
        });

        // --- Helper: Update Tab Styling ---
        const updateComboTabStyle = (activeCategory) => {
            comboTabButtons.forEach(btn => {
                if (btn.dataset.category === activeCategory) {
                    btn.classList.add('border-white', 'text-white');
                    btn.classList.remove('text-white/70', 'border-transparent');
                } else {
                    btn.classList.remove('border-white', 'text-white');
                    btn.classList.add('text-white/70', 'border-transparent');
                }
            });
        };

        // --- Helper: Filter Cards ---
        const filterComboCards = (category) => {
            comboCards.forEach(card => {
                card.style.display =
                    card.dataset.category === category ? 'flex' : 'none';
            });

            // 🔁 Update Swiper after DOM changes
            combosSwiper.update();
            combosSwiper.slideTo(0, 0);
        };

        // --- Tab Click Event ---
        comboTabButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const category = btn.dataset.category;
                updateComboTabStyle(category);
                filterComboCards(category);
            });
        });

        // --- Initial State ---
        const initialCategory = comboTabButtons[0].dataset.category || 'Combo 1';
        updateComboTabStyle(initialCategory);
        filterComboCards(initialCategory);
    }


    // ---------------------------------------------------------
    // 3. Add-Ons Logic (Swiper + Tab Filtering)
    // ---------------------------------------------------------
    const addonTabButtons = document.querySelectorAll('.addon-tab-btn');
    const addonCards = document.querySelectorAll('.addon-card');
    const addOnsSwiperElement = document.querySelector('#add-ons-swiper');

    if (addOnsSwiperElement && addonTabButtons.length > 0 && addonCards.length > 0) {
        // Initialize Swiper
        const addonSwiper = new Swiper("#add-ons-swiper", {
            grabCursor: true,
            watchOverflow: false,
            navigation: {
                nextEl: "#add-ons-scroll-right",
                prevEl: "#add-ons-scroll-left",
            },

            // ✅ RESPONSIVE BREAKPOINTS
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                },
                480: {
                    slidesPerView: 1.8,
                    spaceBetween: 16,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
            },
        });

        // --- Helper: Update Tab Styling ---
        const updateAddonTabStyle = (activeCategory) => {
            addonTabButtons.forEach(btn => {
                if (btn.dataset.category === activeCategory) {
                    btn.classList.remove('text-[#7F7F7F]');
                    btn.classList.add('border-b-2', 'border-[#ea0029]', 'text-[#ea0029]');
                } else {
                    btn.classList.remove('border-b-2', 'border-[#ea0029]', 'text-[#ea0029]');
                    btn.classList.add('text-[#7F7F7F]');
                }
            });
        };

        // --- Helper: Filter Cards ---
        const filterAddonCards = (category) => {
            addonCards.forEach(card => {
                card.style.display =
                    card.dataset.category === category ? 'flex' : 'none';
            });

            // 🔁 Update Swiper after DOM change
            addonSwiper.update();
            addonSwiper.slideTo(0, 0);
        };

        // --- Tab Click Event ---
        addonTabButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const category = btn.dataset.category;
                updateAddonTabStyle(category);
                filterAddonCards(category);
            });
        });

        // --- Initial State ---
        const initialAddonCategory = addonTabButtons[0].dataset.category;
        updateAddonTabStyle(initialAddonCategory);
        filterAddonCards(initialAddonCategory);
    }


    // ---------------------------------------------------------
    // 4. Trending Socials Swiper + Progress Bar
    // ---------------------------------------------------------
    const trendingSwiperElement = document.querySelector('#trending-swiper');
    const trendingProgressBar = document.getElementById('trending-progress-bar');

    if (trendingSwiperElement && trendingProgressBar) {
        const getTrendingOffset = () => {
            const section = trendingSwiperElement.closest('section');
            if (!section) return 20;
            const container = section.querySelector('.container');
            if (container) {
                const style = window.getComputedStyle(container);
                const paddingLeft = parseFloat(style.paddingLeft) || 0;
                const rect = container.getBoundingClientRect();
                return rect.left + paddingLeft;
            }
            return 20;
        };

        const trendingSwiper = new Swiper("#trending-swiper", {
            slidesPerView: "auto",
            spaceBetween: 16,
            initialSlide: 0,
            centeredSlides: false,
            loop: false,
            rewind: false,
            grabCursor: true,
            slidesOffsetBefore: getTrendingOffset(),

            breakpoints: {
                360: { spaceBetween: 16 },
                1024: { spaceBetween: 28 }
            },
            on: {
                progress: function (swiper) {
                    const progress = swiper.progress;
                    const clampedProgress = Math.max(0, Math.min(1, progress));
                    trendingProgressBar.style.width = (clampedProgress * 100) + '%';
                },
                resize: function (swiper) {
                    swiper.params.slidesOffsetBefore = getTrendingOffset();
                    swiper.update();
                },
                init: function (swiper) {
                     setTimeout(() => {
                        swiper.params.slidesOffsetBefore = getTrendingOffset();
                        swiper.update();
                     }, 100);
                }
            }
        });
    }

    // ---------------------------------------------------------
    // 5. Bestsellers Swiper + Progress Bar
    // ---------------------------------------------------------
    const bestsellersSwiperElement = document.querySelector('#bestsellers-swiper');
    const bestsellersProgressBar = document.getElementById('bestsellers-progress-bar');
    

    if (bestsellersSwiperElement && bestsellersProgressBar) {
            const getTrendingOffset = () => {
            const section = trendingSwiperElement.closest('section');
            if (!section) return 20;
            const container = section.querySelector('.container');
            if (container) {
                const style = window.getComputedStyle(container);
                const paddingLeft = parseFloat(style.paddingLeft) || 0;
                const rect = container.getBoundingClientRect();
                return rect.left + paddingLeft;
            }
            return 20;
        };
        const bestsellersSwiper = new Swiper("#bestsellers-swiper", {
              slidesPerView: "auto",
            spaceBetween: 16,
            initialSlide: 0,
            centeredSlides: false,
            loop: false,
            rewind: false,
            grabCursor: true,
            slidesOffsetBefore: getTrendingOffset(),
            breakpoints: {
                320: { slidesPerView: 1.2, spaceBetween: 20 },
                1024: {  spaceBetween: 28 }
            },
            on: {
                progress: function (swiper) {
                    const progress = swiper.progress;
                    const clampedProgress = Math.max(0, Math.min(1, progress));
                    bestsellersProgressBar.style.width = (clampedProgress * 100) + '%';
                }
            }
        });
    }

    // ---------------------------------------------------------
    // 6. Limited Time Deals Swiper + Progress Bar
    // ---------------------------------------------------------
    const dealsSwiperElement = document.querySelector('#deals-swiper');
    const dealsProgressBar = document.getElementById('deals-progress-bar');

    if (dealsSwiperElement && dealsProgressBar) {
        
        const dealsSwiper = new Swiper("#deals-swiper", {
            grabCursor: true,
            watchOverflow: false,

            // ✅ RESPONSIVE SETTINGS
            breakpoints: {
                0: {
                    slidesPerView: 1.2,
                    spaceBetween: 16,
                },
                480: {
                    slidesPerView: 1.5,
                    spaceBetween: 18,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2.5,
                    spaceBetween: 24,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 28,
                }
            },

            on: {
                progress: function (swiper) {
                    const progress = swiper.progress;
                    const clampedProgress = Math.max(0, Math.min(1, progress));
                    dealsProgressBar.style.width = `${clampedProgress * 100}%`;
                }
            }
        });
    }


    // ---------------------------------------------------------
    // 7. Pressure Washers Swiper + Progress Bar
    // ---------------------------------------------------------
    const washersSwiperElement = document.querySelector('#washers-swiper');
    const washersProgressBar = document.getElementById('washers-progress-bar');

    if (washersSwiperElement && washersProgressBar) {
        
        const washersSwiper = new Swiper("#washers-swiper", {
            slidesPerView: 3,
            spaceBetween: 28,
            grabCursor: true,
            breakpoints: {
                320: { 
                    slidesPerView: 1.2,
                    spaceBetween: 16 
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1024: { 
                    slidesPerView: 3,
                    spaceBetween: 28 
                }
            },
            on: {
                progress: function (swiper) {
                    const progress = swiper.progress;
                    const clampedProgress = Math.max(0, Math.min(1, progress));
                    washersProgressBar.style.width = (clampedProgress * 100) + '%';
                }
            }
        });
    }

    // ---------------------------------------------------------
    // 8. Power Tools Swiper + Progress Bar
    // ---------------------------------------------------------
    const powerSwiperElement = document.querySelector('#power-swiper');
    const powerProgressBar = document.getElementById('power-progress-bar');

    if (powerSwiperElement && powerProgressBar) {
        const powerSwiper = new Swiper("#power-swiper", {
            slidesPerView: 3,
            spaceBetween: 28,
            grabCursor: true,
            breakpoints: {
                320: { spaceBetween: 20 },
                1024: { spaceBetween: 28 }
            },
            on: {
                progress: function (swiper) {
                    const progress = swiper.progress;
                    const clampedProgress = Math.max(0, Math.min(1, progress));
                    powerProgressBar.style.width = (clampedProgress * 100) + '%';
                }
            }
        });
    }

    // ---------------------------------------------------------
    // 9. Hands Tools Swiper + Progress Bar
    // ---------------------------------------------------------
    const handsSwiperElement = document.querySelector('#hands-swiper');
    const handsProgressBar = document.getElementById('hands-progress-bar');

    if (handsSwiperElement && handsProgressBar) {
        const handsSwiper = new Swiper("#hands-swiper", {
            slidesPerView: 3,
            spaceBetween: 28,
            grabCursor: true,
            breakpoints: {
                320: { spaceBetween: 20 },
                1024: { spaceBetween: 28 }
            },
            on: {
                progress: function (swiper) {
                    const progress = swiper.progress;
                    const clampedProgress = Math.max(0, Math.min(1, progress));
                    handsProgressBar.style.width = (clampedProgress * 100) + '%';
                }
            }
        });
    }

    // ---------------------------------------------------------
    // 10. Bosch Swiper + Progress Bar
    // ---------------------------------------------------------
    const boschSwiperElement = document.querySelector('#bosch-swiper');
    const boschProgressBar = document.getElementById('bosch-progress-bar');

    if (boschSwiperElement && boschProgressBar) {
        const boschSwiper = new Swiper("#bosch-swiper", {
            slidesPerView: 3,
            spaceBetween: 28,
            grabCursor: true,
            breakpoints: {
                320: { spaceBetween: 20 },
                1024: { spaceBetween: 28 }
            },
            on: {
                progress: function (swiper) {
                    const progress = swiper.progress;
                    const clampedProgress = Math.max(0, Math.min(1, progress));
                    boschProgressBar.style.width = (clampedProgress * 100) + '%';
                }
            }
        });
    }

    // ---------------------------------------------------------
    // 11. Refurbished Swiper + Progress Bar
    // ---------------------------------------------------------
    const refurbishedSwiperElement = document.querySelector('#refurbished-swiper');
    const refurbishedProgressBar = document.getElementById('refurbished-progress-bar');

    if (refurbishedSwiperElement && refurbishedProgressBar) {
        const refurbishedSwiper = new Swiper("#refurbished-swiper", {
            slidesPerView: 3,
            spaceBetween: 28,
            grabCursor: true,
            breakpoints: {
                320: { spaceBetween: 20 },
                1024: { spaceBetween: 28 }
            },
            on: {
                progress: function (swiper) {
                    const progress = swiper.progress;
                    const clampedProgress = Math.max(0, Math.min(1, progress));
                    refurbishedProgressBar.style.width = (clampedProgress * 100) + '%';
                }
            }
        });
    }

    // ---------------------------------------------------------
    // 12. You May Also Like Swiper + Progress Bar
    // ---------------------------------------------------------
    const maySwiperElement = document.querySelector('#may-swiper');
    const mayProgressBar = document.getElementById('may-progress-bar');

    if (maySwiperElement && mayProgressBar) {
        const maySwiper = new Swiper("#may-swiper", {
            slidesPerView: 3,
            spaceBetween: 28,
            grabCursor: true,
            breakpoints: {
                320: { spaceBetween: 20 },
                1024: { spaceBetween: 28 }
            },
            on: {
                progress: function (swiper) {
                    const progress = swiper.progress;
                    const clampedProgress = Math.max(0, Math.min(1, progress));
                    mayProgressBar.style.width = (clampedProgress * 100) + '%';
                }
            }
        });
    }

    // ---------------------------------------------------------
    // 13. Blog Pagination Logic
    // ---------------------------------------------------------
    const blogCards = document.querySelectorAll('.blog-card');
    const blogPrevBtn = document.getElementById('prevPage');
    const blogNextBtn = document.getElementById('nextPage');
    const blogPageNumbers = document.getElementById('pageNumbers');

    if (blogCards.length > 0 && blogPrevBtn && blogNextBtn && blogPageNumbers) {
        let currentPage = 1;
        const itemsPerPage = 6; // Standard for blogs grid (3 columns)

        const updateBlogPagination = () => {
            const totalItems = blogCards.length;
            const totalPages = Math.ceil(totalItems / itemsPerPage);

            // Validate page
            if (currentPage < 1) currentPage = 1;
            if (currentPage > totalPages) currentPage = totalPages;

            // Show/Hide cards
            blogCards.forEach((card, index) => {
                const start = (currentPage - 1) * itemsPerPage;
                const end = start + itemsPerPage;

                if (index >= start && index < end) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });

            // Update Page Numbers
            blogPageNumbers.innerHTML = '';
            for (let i = 1; i <= totalPages; i++) {
                const span = document.createElement('span');
                const isActive = i === currentPage;

                span.className = `w-8 h-8 flex items-center justify-center rounded-full cursor-pointer transition-all ${isActive
                    ? 'bg-black text-white'
                    : 'border border-[#E5E5E5] text-[#1D1D1F] hover:bg-gray-100'
                    }`;

                span.textContent = i;
                span.addEventListener('click', () => {
                    currentPage = i;
                    updateBlogPagination();
                });
                blogPageNumbers.appendChild(span);
            }

            // Update Buttons
            blogPrevBtn.disabled = currentPage === 1;
            blogNextBtn.disabled = currentPage === totalPages || totalPages === 0;

            blogPrevBtn.style.opacity = blogPrevBtn.disabled ? '0.5' : '1';
            blogNextBtn.style.opacity = blogNextBtn.disabled ? '0.5' : '1';
        };

        // Event Listeners
        blogPrevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                updateBlogPagination();
            }
        });

        blogNextBtn.addEventListener('click', () => {
            const totalPages = Math.ceil(blogCards.length / itemsPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                updateBlogPagination();
            }
        });

        // Initialize
        updateBlogPagination();
    }

    // ---------------------------------------------------------
    // 14. TOC Modal Logic (Blog Details)
    // ---------------------------------------------------------
    const tocTrigger = document.getElementById('tocTrigger');
    const tocModal = document.getElementById('tocModal');
    const tocOverlay = document.getElementById('tocOverlay');
    const tocCloseBtn = document.getElementById('tocCloseBtn');
    const tocContent = document.getElementById('tocContent');

    if (tocTrigger && tocModal && tocOverlay && tocCloseBtn && tocContent) {

        function openTocModal() {
            // Check if it's mobile view (optional check, but good for safety)
            // The trigger is hidden on desktop via CSS, so this click only happens if visible
            tocModal.classList.remove('opacity-0', 'pointer-events-none');
            tocModal.classList.add('opacity-100', 'pointer-events-auto');

            tocContent.classList.remove('scale-95');
            tocContent.classList.add('scale-100');

            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }

        function closeTocModal() {
            tocModal.classList.remove('opacity-100', 'pointer-events-auto');
            tocModal.classList.add('opacity-0', 'pointer-events-none');

            tocContent.classList.remove('scale-100');
            tocContent.classList.add('scale-95');

            document.body.style.overflow = '';
        }

        tocTrigger.addEventListener('click', openTocModal);
        tocCloseBtn.addEventListener('click', closeTocModal);
        tocOverlay.addEventListener('click', closeTocModal);

    }


    // ---------------------------------------------------------
    // 15. product description Logic
    // ---------------------------------------------------------

    const allDetails = document.querySelectorAll("details");

    allDetails.forEach((detail) => {
        detail.addEventListener("toggle", () => {
            if (detail.open) {
                allDetails.forEach((otherDetail) => {
                    if (otherDetail !== detail) {
                        otherDetail.removeAttribute("open");
                    }
                });
            }
        });
    });


    // ---------------------------------------------------------
    // 16. FAQ Tab Switching Logic
    // ---------------------------------------------------------
    const faqTabButtons = document.querySelectorAll('.faq-tab-btn');
    const faqContentPanes = document.querySelectorAll('.faq-content-pane');

    if (faqTabButtons.length > 0 && faqContentPanes.length > 0) {
        faqTabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetId = btn.getAttribute('data-target');

                // Update Button Styles
                faqTabButtons.forEach(b => {
                    b.classList.remove('text-[#EA0029]', 'border-[#EA0029]');
                    b.classList.add('text-[#7F7F7F]', 'border-transparent');
                });
                btn.classList.add('text-[#EA0029]', 'border-[#EA0029]');
                btn.classList.remove('text-[#7F7F7F]', 'border-transparent');

                // Show/Hide Content Panes
                faqContentPanes.forEach(pane => {
                    if (pane.id === targetId) {
                        pane.classList.remove('hidden');
                    } else {
                        pane.classList.add('hidden');
                    }
                });
            });
        });
    }


    // ---------------------------------------------------------
    // 17. Special Offer Auto-run logic
    // ---------------------------------------------------------
    const offerCards = document.querySelectorAll('.offer-card');
    const offerFills = document.querySelectorAll('.offer-progress-fill');
    let currentOfferIndex = 0;
    const offerDuration = 6000; // 6 seconds per offer
    let offerInterval;
    let startTime;
    let animationFrame;

    if (offerCards.length > 0 && offerFills.length > 0) {
        const updateOffer = (index) => {
            offerCards.forEach((card, i) => {
                if (i === index) {
                    card.classList.remove('hidden');
                    card.classList.add('flex');
                } else {
                    card.classList.add('hidden');
                    card.classList.remove('flex');
                }
            });
        };

        const animateProgress = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / offerDuration, 1);

            // Clear all fills first if we just started a new index
            offerFills.forEach((fill, i) => {
                if (i < currentOfferIndex) {
                    fill.style.width = '100%';
                } else if (i === currentOfferIndex) {
                    fill.style.width = `${progress * 100}%`;
                } else {
                    fill.style.width = '0%';
                }
            });

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animateProgress);
            } else {
                // Time's up! Switch to next
                currentOfferIndex = (currentOfferIndex + 1) % offerCards.length;

                // If we wrap around, reset all fills
                if (currentOfferIndex === 0) {
                    offerFills.forEach(fill => fill.style.width = '0%');
                }

                startTime = null;
                updateOffer(currentOfferIndex);
                animationFrame = requestAnimationFrame(animateProgress);
            }
        };

        // Start the cycle
        updateOffer(currentOfferIndex);
        animationFrame = requestAnimationFrame(animateProgress);
    }

    // ---------------------------------------------------------
    // 18. Card Section Swiper (Shop by Function and Category)
    // ---------------------------------------------------------
    const cardSwiperElement = document.querySelector('#card-swiper-container');
    const cardProgressBar = document.getElementById('card-progress-bar');

    if (cardSwiperElement) {
         const getCardSectionOffset = () => {
            const section = cardSwiperElement.closest('section');
            if (!section) return 20;
            const container = section.querySelector('.container');
            if (container) {
                const style = window.getComputedStyle(container);
                const paddingLeft = parseFloat(style.paddingLeft) || 0;
                const rect = container.getBoundingClientRect();
                return rect.left + paddingLeft;
            }
            return 20;
        };

        const cardSwiper = new Swiper("#card-swiper-container", {
            slidesPerView: "auto",
            spaceBetween: 16,
            grabCursor: true,
            slidesOffsetBefore: getCardSectionOffset(),
            breakpoints: {
                 1024: {
                     spaceBetween: 28,
                 }
            },
            on: {
                 progress: function (swiper) {
                    if (cardProgressBar) {
                        const progress = swiper.progress;
                        const clampedProgress = Math.max(0, Math.min(1, progress));
                        cardProgressBar.style.width = (clampedProgress * 100) + '%';
                    }
                },
                resize: function (swiper) {
                    swiper.params.slidesOffsetBefore = getCardSectionOffset();
                    swiper.update();
                },
                init: function (swiper) {
                     setTimeout(() => {
                        swiper.params.slidesOffsetBefore = getCardSectionOffset();
                        swiper.update();
                     }, 100);
                }
            }
        });
    }

});




