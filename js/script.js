// ===== HERO SLIDER =====
function initHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    
    if (!slides.length) return;
    
    let currentSlide = 0;
    let slideInterval;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }
    
    function goToNextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    function goToPrevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    function startAutoSlide() {
        slideInterval = setInterval(goToNextSlide, 5000);
    }
    
    function stopAutoSlide() {
        clearInterval(slideInterval);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            stopAutoSlide();
            goToNextSlide();
            startAutoSlide();
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            stopAutoSlide();
            goToPrevSlide();
            startAutoSlide();
        });
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoSlide();
            currentSlide = index;
            showSlide(currentSlide);
            startAutoSlide();
        });
    });
    
    const sliderContainer = document.querySelector('.hero-slider');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', stopAutoSlide);
        sliderContainer.addEventListener('mouseleave', startAutoSlide);
    }
    
    startAutoSlide();
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            stopAutoSlide();
            goToPrevSlide();
            startAutoSlide();
        } else if (e.key === 'ArrowRight') {
            stopAutoSlide();
            goToNextSlide();
            startAutoSlide();
        }
    });
}

// ===== STATISTICS COUNTER ANIMATION =====
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    
    const animateCounter = (counter) => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const isDecimal = target % 1 !== 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                if (isDecimal) {
                    counter.textContent = current.toFixed(1);
                } else {
                    counter.textContent = Math.floor(current).toLocaleString();
                }
                requestAnimationFrame(updateCounter);
            } else {
                if (isDecimal) {
                    counter.textContent = target.toFixed(1);
                } else {
                    counter.textContent = Math.floor(target).toLocaleString();
                }
            }
        };
        
        updateCounter();
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                animateCounter(counter);
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

// ===== SAMPLE PRODUCTS DATA =====
const products = [
    {
        id: 1,
        name: "Classic Cotton T-Shirt",
        category: "men",
        price: 29.99,
        originalPrice: 39.99,
        rating: 4.5,
        image: "images/Classic Cotton T-Shirt.jpg",
        description: "Comfortable and stylish cotton t-shirt perfect for everyday wear. Made from 100% premium cotton.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#000000", "#ffffff", "#1e40af"],
        badge: "Sale"
    },
    {
        id: 2,
        name: "Slim Fit Jeans",
        category: "men",
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.8,
        image: "images/Slim_Fit_Jeans.png",
        description: "Modern slim fit jeans with stretch denim for ultimate comfort. Perfect for casual or smart-casual occasions.",
        sizes: ["28", "30", "32", "34", "36"],
        colors: ["#1e3a8a", "#000000"],
        badge: "New"
    },
    {
        id: 3,
        name: "Summer Dress",
        category: "women",
        price: 59.99,
        originalPrice: 79.99,
        rating: 4.6,
        image: "images/Summer Dress.png",
        description: "Beautiful floral summer dress with a flattering fit. Perfect for warm weather and special occasions.",
        sizes: ["XS", "S", "M", "L"],
        colors: ["#ec4899", "#8b5cf6", "#06b6d4"],
        badge: "Sale"
    },
    {
        id: 4,
        name: "Leather Jacket",
        category: "women",
        price: 149.99,
        originalPrice: 199.99,
        rating: 4.9,
        image: "images/Leather Jacket.jpg",
        description: "Premium leather jacket with modern design. Durable and stylish for any season.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#000000", "#92400e"],
        badge: "Hot"
    },
    {
        id: 5,
        name: "Kids Hoodie",
        category: "kids",
        price: 34.99,
        originalPrice: 44.99,
        rating: 4.4,
        image: "images/Kids_Hoodie.png",
        description: "Cozy and warm hoodie for kids. Made with soft cotton blend for maximum comfort.",
        sizes: ["4-6Y", "6-8Y", "8-10Y", "10-12Y"],
        colors: ["#3b82f6", "#ef4444", "#10b981"],
        badge: "New"
    },
    {
        id: 6,
        name: "Running Shoes",
        category: "accessories",
        price: 89.99,
        originalPrice: 119.99,
        rating: 4.7,
        image: "images/Running Shoes.jpg",
        description: "High-performance running shoes with excellent cushioning and support. Perfect for athletes.",
        sizes: ["7", "8", "9", "10", "11"],
        colors: ["#000000", "#ffffff", "#ef4444"],
        badge: "Sale"
    },
    {
        id: 7,
        name: "Designer Handbag",
        category: "accessories",
        price: 129.99,
        originalPrice: 179.99,
        rating: 4.8,
        image: "images/Designer_Handbag.png",
        description: "Elegant designer handbag with premium materials. Spacious and stylish for everyday use.",
        sizes: ["One Size"],
        colors: ["#000000", "#92400e", "#dc2626"],
        badge: "Hot"
    },
    {
        id: 8,
        name: "Casual Sneakers",
        category: "men",
        price: 69.99,
        originalPrice: 89.99,
        rating: 4.5,
        image: "images/Casual Sneakers.jpg",
        description: "Comfortable casual sneakers perfect for everyday wear. Lightweight and breathable design.",
        sizes: ["7", "8", "9", "10", "11", "12"],
        colors: ["#ffffff", "#000000", "#1e40af"],
        badge: "Sale"
    }
];

// ===== CART MANAGEMENT =====
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => {
            const quantity = parseInt(item.quantity) || 0;
            return sum + quantity;
        }, 0);
        cartCount.textContent = totalItems;
    }
}

function addToCart(productId, size = null, color = null, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const validQuantity = parseInt(quantity) || 1;

    const cartItem = {
        ...product,
        selectedSize: size || product.sizes[0],
        selectedColor: color || product.colors[0],
        quantity: validQuantity
    };

    const existingItemIndex = cart.findIndex(item => 
        item.id === productId && 
        item.selectedSize === cartItem.selectedSize && 
        item.selectedColor === cartItem.selectedColor
    );

    if (existingItemIndex > -1) {
        const currentQuantity = parseInt(cart[existingItemIndex].quantity) || 0;
        cart[existingItemIndex].quantity = currentQuantity + validQuantity;
    } else {
        cart.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification('Product added to cart!');
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    loadCartItems();
}

function updateCartItemQuantity(index, quantity) {
    const validQuantity = parseInt(quantity) || 0;
    
    if (validQuantity < 1) {
        removeFromCart(index);
        return;
    }
    
    cart[index].quantity = validQuantity;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    loadCartItems();
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #10b981;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== RENDER PRODUCTS =====
function renderProducts(productsToRender, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image" style="background: white;">
                <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: contain; object-position: center;">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
                    <span>(${product.rating})</span>
                </div>
                <div class="product-price">
                    <span class="price-current">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? `<span class="price-original">$${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
                <div class="product-actions">
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                    <button class="wishlist-btn" onclick="addToWishlist(${product.id})">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
            </div>
        `;

        productCard.addEventListener('click', (e) => {
            if (!e.target.closest('.add-to-cart') && !e.target.closest('.wishlist-btn')) {
                window.location.href = `product.html?id=${product.id}`;
            }
        });

        container.appendChild(productCard);
    });
}

function addToWishlist(productId) {
    showNotification('Added to wishlist!');
}

// ===== MOBILE MENU TOGGLE =====
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

// ===== NEWSLETTER SUBSCRIPTION =====
function initNewsletter() {
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Thank you for subscribing!');
            newsletterForm.reset();
        });
    }
}

// ===== CONTACT FORM =====
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const firstName = contactForm.querySelector('#firstName').value;
            const lastName = contactForm.querySelector('#lastName').value;
            const email = contactForm.querySelector('#email').value;
            const subject = contactForm.querySelector('#subject').value;
            const message = contactForm.querySelector('#message').value;
            
            // Here you would typically send the form data to a server
            // For now, we'll just show a success message
            
            showNotification(`Thank you ${firstName}! We've received your message and will get back to you soon.`);
            contactForm.reset();
        });
    }
}

// ===== HOME PAGE INITIALIZATION =====
function initHomePage() {
    const featuredProducts = products.slice(0, 4);
    renderProducts(featuredProducts, 'featuredProducts');
    initHeroSlider();
    initCounterAnimation();
}

// ===== SHOP PAGE INITIALIZATION =====
function initShopPage() {
    let filteredProducts = [...products];

    renderProducts(filteredProducts, 'productsGrid');

    const categoryFilters = document.querySelectorAll('input[name="category"]');
    const priceFilters = document.querySelectorAll('input[name="price"]');
    const sizeFilters = document.querySelectorAll('input[name="size"]');
    const sortSelect = document.getElementById('sortSelect');
    const clearFiltersBtn = document.getElementById('clearFilters');
    const resultsCount = document.getElementById('resultsCount');

    function applyFilters() {
        filteredProducts = [...products];

        const selectedCategories = Array.from(categoryFilters)
            .filter(cb => cb.checked && cb.value !== 'all')
            .map(cb => cb.value);

        if (selectedCategories.length > 0) {
            filteredProducts = filteredProducts.filter(p => 
                selectedCategories.includes(p.category)
            );
        }

        const selectedPriceElement = document.querySelector('input[name="price"]:checked');
        const selectedPrice = selectedPriceElement ? selectedPriceElement.value : null;
        if (selectedPrice && selectedPrice !== 'all') {
            const [min, max] = selectedPrice.split('-').map(v => v === '+' ? Infinity : parseFloat(v));
            filteredProducts = filteredProducts.filter(p => 
                p.price >= min && (max ? p.price <= max : true)
            );
        }

        const sortValue = sortSelect ? sortSelect.value : null;
        if (sortValue === 'price-low') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortValue === 'price-high') {
            filteredProducts.sort((a, b) => b.price - a.price);
        } else if (sortValue === 'name') {
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        }

        renderProducts(filteredProducts, 'productsGrid');
        if (resultsCount) {
            resultsCount.textContent = `Showing ${filteredProducts.length} products`;
        }
    }

    categoryFilters.forEach(filter => filter.addEventListener('change', applyFilters));
    priceFilters.forEach(filter => filter.addEventListener('change', applyFilters));
    sizeFilters.forEach(filter => filter.addEventListener('change', applyFilters));
    if (sortSelect) sortSelect.addEventListener('change', applyFilters);

    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', () => {
            document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = cb.value === 'all');
            document.querySelectorAll('input[type="radio"]').forEach(rb => rb.checked = rb.value === 'all');
            if (sortSelect) sortSelect.value = 'default';
            applyFilters();
        });
    }
}

// ===== PRODUCT DETAILS PAGE =====
function initProductPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);

    if (!product) {
        window.location.href = 'shop.html';
        return;
    }

    const breadcrumb = document.getElementById('breadcrumbProduct');
    if (breadcrumb) {
        breadcrumb.textContent = product.name;
    }

    const productDetails = document.getElementById('productDetails');
    if (productDetails) {
        let selectedSize = product.sizes[0];
        let selectedColor = product.colors[0];
        let quantity = 1;

        productDetails.innerHTML = `
            <div class="product-gallery">
                <div class="main-image" style="background: white;">
                    <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: contain; border-radius: 12px;">
                </div>
            </div>
            <div class="product-details-info">
                <h1>${product.name}</h1>
                <div class="product-meta">
                    <div class="product-rating">
                        ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
                        <span>(${product.rating})</span>
                    </div>
                    <p class="product-category">${product.category}</p>
                </div>
                <div class="product-price">
                    $${product.price.toFixed(2)}
                    ${product.originalPrice ? `<span style="text-decoration: line-through; color: #6b7280; font-size: 1.5rem; margin-left: 1rem;">$${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
                <p class="product-description">${product.description}</p>
                
                <div class="product-options">
                    ${product.sizes.length > 1 ? `
                        <div class="option-group">
                            <label>Size:</label>
                            <div class="size-options-detail" id="sizeOptions">
                                ${product.sizes.map(size => `
                                    <button class="size-btn ${size === selectedSize ? 'active' : ''}" data-size="${size}">${size}</button>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                    
                    ${product.colors.length > 1 ? `
                        <div class="option-group">
                            <label>Color:</label>
                            <div class="color-options" id="colorOptions">
                                ${product.colors.map(color => `
                                    <button class="color-btn" data-color="${color}" style="background-color: ${color}; border: 3px solid ${color === selectedColor ? '#2563eb' : '#e5e7eb'}"></button>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                </div>

                <div class="quantity-selector">
                    <label>Quantity:</label>
                    <div class="quantity-controls">
                        <button type="button" id="decreaseQty">-</button>
                        <input type="number" id="quantityInput" value="1" min="1" max="10">
                        <button type="button" id="increaseQty">+</button>
                    </div>
                </div>

                <div class="product-actions-detail">
                    <button class="btn btn-primary" id="addToCartBtn">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                    <button class="btn btn-secondary" onclick="addToWishlist(${product.id})">
                        <i class="far fa-heart"></i> Wishlist
                    </button>
                </div>
            </div>
        `;

        const sizeButtons = productDetails.querySelectorAll('.size-btn');
        sizeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                sizeButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                selectedSize = btn.dataset.size;
            });
        });

        const colorButtons = productDetails.querySelectorAll('.color-btn');
        colorButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                colorButtons.forEach(b => b.style.borderColor = '#e5e7eb');
                btn.style.borderColor = '#2563eb';
                selectedColor = btn.dataset.color;
            });
        });

        const quantityInput = document.getElementById('quantityInput');
        const decreaseBtn = document.getElementById('decreaseQty');
        const increaseBtn = document.getElementById('increaseQty');

        if (decreaseBtn) {
            decreaseBtn.addEventListener('click', () => {
                if (quantity > 1) {
                    quantity--;
                    quantityInput.value = quantity;
                }
            });
        }

        if (increaseBtn) {
            increaseBtn.addEventListener('click', () => {
                if (quantity < 10) {
                    quantity++;
                    quantityInput.value = quantity;
                }
            });
        }

        if (quantityInput) {
            quantityInput.addEventListener('change', () => {
                quantity = parseInt(quantityInput.value) || 1;
                if (quantity < 1) quantity = 1;
                if (quantity > 10) quantity = 10;
                quantityInput.value = quantity;
            });
        }

        const addToCartBtn = document.getElementById('addToCartBtn');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', () => {
                addToCart(product.id, selectedSize, selectedColor, quantity);
            });
        }
    }

    const relatedProducts = products.filter(p => 
        p.category === product.category && p.id !== product.id
    ).slice(0, 4);
    renderProducts(relatedProducts, 'relatedProducts');
}

// ===== CART PAGE =====
function loadCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    const subtotalEl = document.getElementById('subtotal');
    const shippingEl = document.getElementById('shipping');
    const taxEl = document.getElementById('tax');
    const totalEl = document.getElementById('total');

    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.style.display = 'none';
        if (emptyCart) emptyCart.style.display = 'block';
        const cartSummary = document.querySelector('.cart-summary');
        if (cartSummary) cartSummary.style.display = 'none';
        return;
    }

    if (emptyCart) emptyCart.style.display = 'none';
    cartItemsContainer.style.display = 'block';
    const cartSummary = document.querySelector('.cart-summary');
    if (cartSummary) cartSummary.style.display = 'block';

    cartItemsContainer.innerHTML = '';

    let subtotal = 0;

    cart.forEach((item, index) => {
        const itemQuantity = parseInt(item.quantity) || 1;
        const itemPrice = parseFloat(item.price) || 0;
        const itemTotal = itemPrice * itemQuantity;
        subtotal += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image" style="background: white;">
                <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: contain; border-radius: 8px;">
            </div>
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>Size: ${item.selectedSize}</p>
                <p>Color: <span style="display: inline-block; width: 20px; height: 20px; background-color: ${item.selectedColor}; border-radius: 50%; vertical-align: middle;"></span></p>
                <div class="quantity-controls" style="margin-top: 1rem;">
                    <button onclick="updateCartItemQuantity(${index}, ${itemQuantity - 1})">-</button>
                    <input type="number" value="${itemQuantity}" readonly>
                    <button onclick="updateCartItemQuantity(${index}, ${itemQuantity + 1})">+</button>
                </div>
            </div>
            <div class="cart-item-actions">
                <button class="remove-item" onclick="removeFromCart(${index})">
                    <i class="fas fa-trash"></i>
                </button>
                <div class="cart-item-price">$${itemTotal.toFixed(2)}</div>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    const shipping = subtotal > 50 ? 0 : 10;
    const tax = subtotal * 0.1;
    const total = subtotal + shipping + tax;

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
}

function initCartPage() {
    loadCartItems();

    const applyPromoBtn = document.getElementById('applyPromo');
    if (applyPromoBtn) {
        applyPromoBtn.addEventListener('click', () => {
            const promoCodeInput = document.getElementById('promoCode');
            const promoCode = promoCodeInput ? promoCodeInput.value : '';
            if (promoCode) {
                showNotification('Promo code applied!');
            }
        });
    }

    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn && cart.length === 0) {
        checkoutBtn.style.display = 'none';
    }
}

// ===== CHECKOUT PAGE =====
function initCheckoutPage() {
    if (cart.length === 0) {
        window.location.href = 'cart.html';
        return;
    }

    const summaryItems = document.getElementById('summaryItems');
    if (summaryItems) {
        summaryItems.innerHTML = '';
        
        cart.forEach(item => {
            const itemQuantity = parseInt(item.quantity) || 1;
            const itemPrice = parseFloat(item.price) || 0;
            const itemTotal = itemPrice * itemQuantity;
            
            const summaryItem = document.createElement('div');
            summaryItem.className = 'summary-item';
            summaryItem.innerHTML = `
                <div class="item-info">
                    <h4>${item.name}</h4>
                    <p>Qty: ${itemQuantity} | Size: ${item.selectedSize}</p>
                </div>
                <div class="item-price">$${itemTotal.toFixed(2)}</div>
            `;
            summaryItems.appendChild(summaryItem);
        });
    }

    const subtotal = cart.reduce((sum, item) => {
        const itemQuantity = parseInt(item.quantity) || 1;
        const itemPrice = parseFloat(item.price) || 0;
        return sum + (itemPrice * itemQuantity);
    }, 0);
    
    const shipping = subtotal > 50 ? 0 : 10;
    const tax = subtotal * 0.1;
    const total = subtotal + shipping + tax;

    document.getElementById('checkoutSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('checkoutShipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    document.getElementById('checkoutTax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('checkoutTotal').textContent = `$${total.toFixed(2)}`;

    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            
            alert('Order placed successfully! Thank you for shopping with us.');
            window.location.href = 'index.html';
        });
    }

    const paymentMethods = document.querySelectorAll('input[name="payment"]');
    const cardPayment = document.getElementById('cardPayment');
    
    paymentMethods.forEach(method => {
        method.addEventListener('change', () => {
            if (method.value === 'card') {
                cardPayment.style.display = 'block';
            } else {
                cardPayment.style.display = 'none';
            }
        });
    });
}

// ===== INITIALIZE ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    initMobileMenu();
    initNewsletter();
    initContactForm();

    const path = window.location.pathname;
    
    if (path.includes('index.html') || path.endsWith('/')) {
        initHomePage();
    } else if (path.includes('shop.html')) {
        initShopPage();
    } else if (path.includes('product.html')) {
        initProductPage();
    } else if (path.includes('cart.html')) {
        initCartPage();
    } else if (path.includes('checkout.html')) {
        initCheckoutPage();
    }
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);