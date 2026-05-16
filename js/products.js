// Product Data Structure — one entry per product folder in images/
const products = [
    // ?? Folder: Gpen/ ??
    {
        id: 1,
        name: "Gpen - Dry Herb Vaporizer",
        category: "vaporizers",
        price: 1999,
        colors: [
            { name: "Green",   hex: "#4caf50" },
            { name: "Purple",  hex: "#9c27b0" },
            { name: "Red",     hex: "#f44336" },
            { name: "Black",   hex: "#212121" },
            { name: "Silver",  hex: "#bdbdbd" },
            { name: "Blue",    hex: "#2196f3" },
            { name: "Gold",    hex: "#ffc107" }
        ],
        image: "images/Gpen/Gpen.jpeg",
        images: [
            "images/Gpen/Gpen.jpeg",
            "images/Gpen/Gpen1.jpeg",
            "images/Gpen/Gpen2.png",
            "images/Gpen/GpenAI.png",
            "images/Gpen/GpenAI1.png"
        ],
        description: "Premium dry herb vaporizer with durable aluminum body and transparent viewing window. Ultra-portable, discreet design perfect for on-the-go sessions.",
        badge: "Best Seller"
    },
    // ?? Folder: gun_lighter/ ??
    {
        id: 2,
        name: "Gun Lighter",
        category: "lighters",
        price: 1799,
        image: "images/gun_lighter/gun.jpeg",
        images: [
            "images/gun_lighter/gun.jpeg",
            "images/gun_lighter/gun1.jpeg",
            "images/gun_lighter/gun2.jpeg"
        ],
        description: "Sleek gun-style lighter with windproof flame and rugged metallic finish. A reliable ignition tool for every occasion.",
        badge: "New"
    },
    // ?? Folder: plastic_grinder/ ??
    {
        id: 3,
        name: "Plastic Herb Grinder",
        category: "grinders",
        price: 699,
        image: "images/plastic_grinder/plastic_grinder.jpeg",
        images: [
            "images/plastic_grinder/plastic_grinder.jpeg",
            "images/plastic_grinder/plastic_grinder1.jpeg",
            "images/plastic_grinder/plastic_grinder2.jpeg"
        ],
        description: "Lightweight and durable plastic herb grinder perfect for daily use. Sharp teeth grind material evenly and quickly.",
        badge: ""
    },
    // ?? Folder: rolling_machine/ ??
    {
        id: 4,
        name: "Rolling Machine",
        category: "rolling-machines",
        price: 1499,
        image: "images/rolling_machine/rolling.jpeg",
        images: [
            "images/rolling_machine/rolling.jpeg",
            "images/rolling_machine/rolling1.jpeg",
            "images/rolling_machine/rolling2.jpeg"
        ],
        description: "Classic manual rolling machine that produces perfectly rolled joints every time. Adjustable tightness, compact and portable.",
        badge: ""
    },
    // ?? Folder: ciggerate_holder/ ??
    {
        id: 5,
        name: "Cigarette Holder",
        category: "misc",
        price: 899,
        image: "images/ciggerate_holder/ciggerate.jpeg",
        images: [
            "images/ciggerate_holder/ciggerate.jpeg",
            "images/ciggerate_holder/ciggerate1.jpeg",
            "images/ciggerate_holder/ciggerate2.jpeg"
        ],
        description: "Elegant cigarette holder with a premium metallic finish. Keeps your hands clean and the experience smoother.",
        badge: ""
    },
    // ?? Folder: plastic_rolling_machine/ ??
    {
        id: 6,
        name: "Plastic Rolling Machine",
        category: "rolling-machines",
        price: 799,
        image: "images/plastic_rolling_machine/rolling.jpeg",
        images: [
            "images/plastic_rolling_machine/rolling.jpeg",
            "images/plastic_rolling_machine/rolling1.jpeg",
            "images/plastic_rolling_machine/rolling2.jpeg",
            "images/plastic_rolling_machine/rolling3.jpeg"
        ],
        description: "Lightweight plastic rolling machine for quick and consistent rolls. Durable build, easy to operate, and compact enough to carry anywhere.",
        badge: ""
    },
    // ?? Folder: rolling_tray/ ??
    {
        id: 7,
        name: "Rolling Tray",
        category: "rolling-trays",
        price: 799,
        image: "images/rolling_tray/rolling_tray.jpeg",
        images: [
            "images/rolling_tray/rolling_tray.jpeg",
            "images/rolling_tray/rolling_tray1.jpeg",
            "images/rolling_tray/rolling_tray2.jpeg",
            "images/rolling_tray/rolling_tray3.jpeg"
        ],
        description: "Spacious rolling tray with raised edges to contain every crumb. Sleek design, easy to clean, and perfect for home or on-the-go sessions.",
        badge: ""
    },
    // ?? Folder: stash_glasses/ ??
    {
        id: 8,
        name: "Stash Glasses",
        category: "misc",
        price: 1199,
        image: "images/stash_glasses/stash_glass.jpeg",
        images: [
            "images/stash_glasses/stash_glass.jpeg",
            "images/stash_glasses/stash_glass1.jpeg",
            "images/stash_glasses/stash_glass2.jpeg"
        ],
        description: "Discreet stash glasses with a hidden compartment. Looks like an ordinary glass — keeps your items safely concealed right in plain sight.",
        badge: "Stealth"
    },
    // ?? Folder: metal_grinder/ ??
    {
        id: 9,
        name: "Metal Herb Grinder",
        category: "grinders",
        price: 1299,
        image: "images/metal_grinder/metal_grinder.jpeg",
        images: [
            "images/metal_grinder/metal_grinder.jpeg",
            "images/metal_grinder/metal_grinder1.jpeg",
            "images/metal_grinder/metal_grinder2.jpeg"
        ],
        description: "Heavy-duty metal herb grinder with anodized finish. Sharp teeth, magnetic lid, and pollen catcher deliver a superior grind every time.",
        badge: ""
    },
    // ?? Folder: stash_belt/ ??
    {
        id: 10,
        name: "Stash Belt",
        category: "misc",
        price: 699,
        image: "images/stash_belt/stash_belt1.jpeg",
        images: [
            "images/stash_belt/stash_belt1.jpeg",
            "images/stash_belt/stash_belt2.jpeg"
        ],
        description: "Discreet stash belt with a secure hidden pocket. Wear it under your clothes — your items are safe, comfortable, and completely out of sight.",
        badge: "Stealth"
    },
    // ?? Full Kit — everything you need in one bundle ??
    {
        id: 11,
        name: "Rolling Kit Full Bundle",
        category: "rolling-kits",
        price: 4999,
        image: "images/rolling_kit/rolling_kit.jpeg",
        images: [
            "images/rolling_kit/rolling_kit.jpeg",
            "images/rolling_kit/rolling_kit1.jpeg",
            "images/rolling_kit/rolling_kit2.jpeg",
            "images/rolling_kit/rolling_kit3.jpeg"
        ],
        description: "The ultimate all-in-one starter bundle at KES 4,999 — includes: Scale, Grinder, Rolling Tray, Storage Can, Rolling Machine, Storage Pipes, Carry Bag, and Cigarette Holder. Everything you need in one package.",
        bundleItems: [
            "Scale",
            "Grinder",
            "Rolling Tray",
            "Storage Can",
            "Rolling Machine",
            "Storage Pipes",
            "Bag",
            "Cigarette Holder"
        ],
        badge: "Bundle"
    }
];

// ?????????????????????????????????????????????????????????????
//  Functions
// ?????????????????????????????????????????????????????????????

// Function to render products
function renderProducts(productsToRender) {
    if (!productsToRender) productsToRender = products;
    var categoryIcons = {
        pipes: 'fa-smoking',
        bongs: 'fa-wine-bottle',
        vaporizers: 'fa-bolt',
        grinders: 'fa-cubes-stacked',
        'rolling-machines': 'fa-cog',
        'rolling-kits': 'fa-box-open',
        'rolling-trays': 'fa-layer-group',
        lighters: 'fa-fire',
        misc: 'fa-wrench'
    };
    var productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    productsGrid.innerHTML = '';

    productsToRender.forEach(function(product) {
        var productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.dataset.category = product.category;
        productCard.dataset.id = product.id;

        var categoryIcon = categoryIcons[product.category] || 'fa-seedling';
        var badgeHtml = product.badge ? '<span class="product-badge">' + product.badge + '</span>' : '';

        productCard.innerHTML =
            '<div class="product-image-container">' +
                '<img src="' + product.image + '" alt="' + product.name + '" class="product-image" loading="lazy">' +
                badgeHtml +
                '<div class="product-actions">' +
                    '<button class="action-btn wishlist-btn" data-product-id="' + product.id + '" title="Add to Wishlist">' +
                        '<i class="fas fa-heart"></i>' +
                    '</button>' +
                    '<button class="action-btn cart-btn" data-product-id="' + product.id + '" title="Add to Cart">' +
                        '<i class="fas fa-cart-plus"></i>' +
                    '</button>' +
                '</div>' +
            '</div>' +
            '<div class="product-info">' +
                '<div class="product-category"><i class="fas ' + categoryIcon + '"></i> ' + product.category + '</div>' +
                '<h3 class="product-title">' + product.name + '</h3>' +
                '<p class="product-description">' + product.description + '</p>' +
                '<div class="product-price">KES ' + product.price.toFixed(0) + '</div>' +
                '<div class="product-buttons">' +
                    '<button class="btn btn-primary view-details-btn" data-product-id="' + product.id + '"><i class="fas fa-eye"></i> View Details</button>' +
                    '<button class="btn btn-outline quick-buy-btn" data-product-id="' + product.id + '">' +
                        '<i class="fas fa-comment-dots"></i> Quick Buy' +
                    '</button>' +
                '</div>' +
            '</div>';

        productsGrid.appendChild(productCard);
    });

    attachProductCardListeners();
}

function attachProductCardListeners() {
    document.querySelectorAll('.wishlist-btn').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleWishlist(parseInt(this.dataset.productId));
        });
    });

    document.querySelectorAll('.cart-btn').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            addToCart(parseInt(this.dataset.productId));
        });
    });

    document.querySelectorAll('.view-details-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            viewProduct(parseInt(this.dataset.productId));
        });
    });

    document.querySelectorAll('.quick-buy-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            quickBuy(parseInt(this.dataset.productId));
        });
    });
}

function viewProduct(productId) {
    var product = products.find(function(p) { return p.id === productId; });
    if (!product) return;

    var categoryIcons = {
        pipes: 'fa-smoking',
        bongs: 'fa-wine-bottle',
        vaporizers: 'fa-bolt',
        grinders: 'fa-cubes-stacked',
        'rolling-machines': 'fa-cog',
        'rolling-kits': 'fa-box-open',
        'rolling-trays': 'fa-layer-group',
        lighters: 'fa-fire',
        misc: 'fa-wrench'
    };

    var modal = document.getElementById('productModal');
    if (!modal) return;

    var modalTitle = document.getElementById('modalTitle');
    if (modalTitle) modalTitle.textContent = product.name;

    var modalCategory = document.getElementById('modalCategory');
    if (modalCategory) modalCategory.innerHTML =
        '<i class="fas ' + (categoryIcons[product.category] || 'fa-seedling') + '"></i> ' +
        product.category.charAt(0).toUpperCase() + product.category.slice(1);

    var modalDescription = document.getElementById('modalDescription');
    if (modalDescription) modalDescription.textContent = product.description;

    // Color swatches
    var modalColors = document.getElementById('modalColors');
    var colorSwatchesContainer = document.getElementById('modalColorSwatches');
    if (modalColors && colorSwatchesContainer) {
        colorSwatchesContainer.innerHTML = '';
        if (product.colors && product.colors.length > 0) {
            modalColors.style.display = '';
            product.colors.forEach(function(c) {
                var swatch = document.createElement('div');
                swatch.className = 'color-swatch';
                swatch.style.backgroundColor = c.hex;
                swatch.title = c.name;
                swatch.dataset.colorName = c.name;
                swatch.addEventListener('click', function() {
                    colorSwatchesContainer.querySelectorAll('.color-swatch').forEach(function(s) {
                        s.classList.remove('active');
                    });
                    swatch.classList.add('active');
                    if (typeof showNotification === 'function') {
                        showNotification(c.name + ' selected', 'info');
                    }
                });
                colorSwatchesContainer.appendChild(swatch);
            });
        } else {
            modalColors.style.display = 'none';
        }
    }

    // Bundle items
    var modalBundleItems = document.getElementById('modalBundleItems');
    if (modalBundleItems) {
        if (product.bundleItems && product.bundleItems.length > 0) {
            modalBundleItems.style.display = '';
            modalBundleItems.innerHTML =
                '<span class="modal-bundle-items-label">Bundle Includes:</span>' +
                '<ul class="bundle-list">' +
                product.bundleItems.map(function(item) {
                    return '<li class="bundle-item"><i class="fas fa-check"></i> ' + item + '</li>';
                }).join('') +
                '</ul>';
        } else {
            modalBundleItems.style.display = 'none';
        }
    }

    var modalPrice = document.getElementById('modalPrice');
    if (modalPrice) modalPrice.textContent = 'KES ' + product.price.toFixed(0);

    var modalBadge = document.getElementById('modalBadge');
    if (product.badge) {
        if (modalBadge) {
            modalBadge.textContent = product.badge;
            modalBadge.style.display = 'inline-flex';
        }
    } else {
        if (modalBadge) modalBadge.style.display = 'none';
    }

    // Build modal carousel slides from product.images array
    var images = product.images || [product.image];
    var slideTrack = document.getElementById('modalSlideTrack');
    var dotContainer = document.getElementById('modalSlideDots');
    if (slideTrack && dotContainer) {
        slideTrack.innerHTML = images.map(function(img, i) {
            return '<div class="modal-slide"><img src="' + img + '" alt="' + product.name + ' ' + (i + 1) + '"></div>';
        }).join('');
        dotContainer.innerHTML = images.map(function(_, i) {
            return '<button class="modal-dot' + (i === 0 ? ' active' : '') + '" data-index="' + i + '"></button>';
        }).join('');
    }

    modal.dataset.productId = productId;
    modal.dataset.currentSlide = 0;
    modal.dataset.totalSlides = images.length;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Initialize modal carousel navigation
    setTimeout(initModalCarousel, 50);
}

function filterProducts(category) {
    var filteredProducts = category === 'all'
        ? products
        : products.filter(function(product) { return product.category === category; });
    renderProducts(filteredProducts);
}

function searchProducts(query) {
    var searchQuery = query.toLowerCase();
    var filteredProducts = products.filter(function(product) {
        return product.name.toLowerCase().indexOf(searchQuery) !== -1 ||
               product.description.toLowerCase().indexOf(searchQuery) !== -1 ||
               product.category.toLowerCase().indexOf(searchQuery) !== -1;
    });
    renderProducts(filteredProducts);
}

function loadMoreProducts() {
    var loadMoreBtn = document.getElementById('loadMoreBtn');
    if (!loadMoreBtn) return;
    loadMoreBtn.textContent = 'All Products Loaded';
    loadMoreBtn.disabled = true;
}

// Cart / Wishlist helpers
var cart = JSON.parse(localStorage.getItem('cart')) || [];
var wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function addToCart(productId) {
    var product = products.find(function(p) { return p.id === productId; });
    if (!product) return;

    var existingItem = cart.find(function(item) { return item.id === productId; });
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push(Object.assign({}, product, { quantity: 1 }));
    }

    updateCart();
    if (typeof showNotification === 'function') {
        showNotification(product.name + ' added to cart!', 'success');
    }
}

function removeFromCart(productId) {
    cart = cart.filter(function(item) { return item.id !== productId; });
    updateCart();
}

function updateCartQuantity(productId, quantity) {
    var item = cart.find(function(item) { return item.id === productId; });
    if (item) {
        item.quantity = Math.max(1, quantity);
        updateCart();
    }
}

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCartItems();
    updateCartTotal();
}

function updateCartCount() {
    var count = cart.reduce(function(total, item) { return total + item.quantity; }, 0);
    var el = document.getElementById('cartCount');
    if (el) el.textContent = count;
}

function renderCartItems() {
    var container = document.getElementById('cartItems');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = '<p class="empty-message">Your cart is empty</p>';
        return;
    }

    container.innerHTML = cart.map(function(item) {
        return '<div class="cart-item">' +
            '<img src="' + item.image + '" alt="' + item.name + '" class="cart-item-image">' +
            '<div class="cart-item-info">' +
                '<h4>' + item.name + '</h4>' +
                '<p>KES ' + item.price.toFixed(0) + '</p>' +
                '<div class="quantity-controls">' +
                    '<button onclick="updateCartQuantity(' + item.id + ', ' + (item.quantity - 1) + ')">-</button>' +
                    '<span>' + item.quantity + '</span>' +
                    '<button onclick="updateCartQuantity(' + item.id + ', ' + (item.quantity + 1) + ')">+</button>' +
                '</div>' +
            '</div>' +
            '<button class="remove-btn" onclick="removeFromCart(' + item.id + ')">' +
                '<i class="fas fa-trash"></i>' +
            '</button>' +
        '</div>';
    }).join('');
}

function updateCartTotal() {
    var total = cart.reduce(function(sum, item) { return sum + (item.price * item.quantity); }, 0);
    var el = document.getElementById('cartTotal');
    if (el) el.textContent = total.toFixed(0);
}

function toggleWishlist(productId) {
    var product = products.find(function(p) { return p.id === productId; });
    if (!product) return;

    var index = wishlist.findIndex(function(item) { return item.id === productId; });
    if (index > -1) {
        wishlist.splice(index, 1);
        if (typeof showNotification === 'function') {
            showNotification(product.name + ' removed from wishlist', 'info');
        }
    } else {
        wishlist.push(product);
        if (typeof showNotification === 'function') {
            showNotification(product.name + ' added to wishlist!', 'success');
        }
    }

    updateWishlist();
    updateWishlistButtons();
}

function removeFromWishlist(productId) {
    wishlist = wishlist.filter(function(item) { return item.id !== productId; });
    updateWishlist();
    updateWishlistButtons();
}

function updateWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistCount();
    renderWishlistItems();
}

function updateWishlistCount() {
    var el = document.getElementById('wishlistCount');
    if (el) el.textContent = wishlist.length;
}

function renderWishlistItems() {
    var container = document.getElementById('wishlistItems');
    if (!container) return;

    if (wishlist.length === 0) {
        container.innerHTML = '<p class="empty-message">Your wishlist is empty</p>';
        return;
    }

    container.innerHTML = wishlist.map(function(item) {
        return '<div class="wishlist-item">' +
            '<img src="' + item.image + '" alt="' + item.name + '" class="wishlist-item-image">' +
            '<div class="wishlist-item-info">' +
                '<h4>' + item.name + '</h4>' +
                '<p>KES ' + item.price.toFixed(0) + '</p>' +
            '</div>' +
            '<div class="wishlist-item-actions">' +
                '<button class="btn btn-primary" onclick="addToCart(' + item.id + ')">' +
                    '<i class="fas fa-cart-plus"></i>' +
                '</button>' +
                '<button class="remove-btn" onclick="removeFromWishlist(' + item.id + ')">' +
                    '<i class="fas fa-trash"></i>' +
                '</button>' +
            '</div>' +
        '</div>';
    }).join('');
}

function updateWishlistButtons() {
    document.querySelectorAll('.wishlist-btn').forEach(function(btn) {
        var productId = parseInt(btn.dataset.productId);
        var isInWishlist = wishlist.some(function(item) { return item.id === productId; });
        btn.classList.toggle('active', isInWishlist);
    });
}

function checkoutWhatsApp() {
    if (cart.length === 0) {
        if (typeof showNotification === 'function') {
            showNotification('Your cart is empty!', 'error');
        }
        return;
    }

    var whatsappNumber = '25481473918';
    var message = 'Hello! I would like to order:\n\n';

    cart.forEach(function(item, index) {
        message += (index + 1) + '. ' + item.name + ' - Quantity: ' + item.quantity + ' - KES ' + (item.price * item.quantity).toFixed(0) + '\n';
    });

    var total = cart.reduce(function(sum, item) { return sum + (item.price * item.quantity); }, 0);
    message += '\nTotal: KES ' + total.toFixed(0) + '\n\nPlease send details on delivery and payment.';

    var whatsappUrl = 'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(message);
    window.open(whatsappUrl, '_blank');
}

function quickBuy(productId) {
    var product = products.find(function(p) { return p.id === productId; });
    if (!product) return;

    var whatsappNumber = '25481473918';
    var message = 'Hello! I would like to order: ' + product.name + ' - KES ' + product.price.toFixed(0) + '\n\nPlease send delivery and payment details.';

    var whatsappUrl = 'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(message);
    window.open(whatsappUrl, '_blank');
}

function addToCartFromModal() {
    var modal = document.getElementById('productModal');
    var productId = parseInt(modal.dataset.productId);
    if (productId) {
        addToCart(productId);
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function addToWishlistFromModal() {
    var modal = document.getElementById('productModal');
    var productId = parseInt(modal.dataset.productId);
    if (productId) {
        toggleWishlist(productId);
    }
}

function initModalCarousel() {
    var modalSlideTrack = document.getElementById('modalSlideTrack');
    var modalSlideDots = document.getElementById('modalSlideDots');
    var modalPrev = document.getElementById('modalPrev');
    var modalNext = document.getElementById('modalNext');

    if (!modalSlideTrack) return;

    var slides = modalSlideTrack.querySelectorAll('.modal-slide');
    var totalSlides = slides.length;
    if (totalSlides <= 1) return;

    var currentSlide = parseInt(document.getElementById('productModal').dataset.currentSlide) || 0;

    function updateModalSlide() {
        modalSlideTrack.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
        if (modalSlideDots) {
            modalSlideDots.querySelectorAll('.modal-dot').forEach(function(dot, index) {
                dot.classList.toggle('active', index === currentSlide);
            });
        }
    }

    function nextModalSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateModalSlide();
    }

    function prevModalSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateModalSlide();
    }

    if (modalPrev) {
        modalPrev.addEventListener('click', function(e) {
            e.stopPropagation();
            prevModalSlide();
        });
    }

    if (modalNext) {
        modalNext.addEventListener('click', function(e) {
            e.stopPropagation();
            nextModalSlide();
        });
    }

    if (modalSlideDots) {
        modalSlideDots.addEventListener('click', function(e) {
            if (e.target.classList.contains('modal-dot')) {
                currentSlide = parseInt(e.target.dataset.index);
                updateModalSlide();
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    updateCart();
    updateWishlist();
    updateWishlistButtons();
});
