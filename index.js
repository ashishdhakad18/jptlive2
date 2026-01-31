document.addEventListener('DOMContentLoaded', () => {
    // ---------------------------------------------------------
    // 1. Autoplay Video Logic
    // ---------------------------------------------------------
    // const videos = document.querySelectorAll('.js-autoplay-video');
    // videos.forEach(video => {
    //     if (video) {
    //         video.muted = true;
    //         video.loop = true;
    //         video.playsInline = true;

    //         const playPromise = video.play();
    //         if (playPromise !== undefined) {
    //             playPromise.catch(error => {
    //                 console.log("Autoplay was prevented. User interaction may be required.", error);
    //             });
    //         }
    //     }
    // });

    // ---------------------------------------------------------
    // 2. Combo Tabs Logic (Swiper + Tab Filtering)
    // ---------------------------------------------------------
    const comboTabButtons = document.querySelectorAll('.combo-tab-btn');
    const comboCards = document.querySelectorAll('.combo-card');
    const combosSwiperElement = document.querySelector('#combos-swiper');

  if (combosSwiperElement && comboTabButtons.length > 0 && comboCards.length > 0) {
    // Initialize Swiper
    const combosSwiper = new Swiper("#combos-swiper", {
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
                slidesPerView: 5,
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
        const trendingSwiper = new Swiper("#trending-swiper", {
            slidesPerView: "auto",
            spaceBetween: 32,
            grabCursor: true,
            breakpoints: {
                320: { spaceBetween: 16 },
                1024: { spaceBetween: 32 }
            },
            on: {
                // Update progress bar width based on swiper progress
                progress: function (swiper) {
                    const progress = swiper.progress;
                    const clampedProgress = Math.max(0, Math.min(1, progress));
                    trendingProgressBar.style.width = (clampedProgress * 100) + '%';
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
        const bestsellersSwiper = new Swiper("#bestsellers-swiper", {
            slidesPerView: "auto",
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
            slidesPerView: "auto", 
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
            slidesPerView: "auto",
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
            slidesPerView: "auto",
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
            slidesPerView: "auto",
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
            slidesPerView: "auto",
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
            slidesPerView: "auto",
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
});




