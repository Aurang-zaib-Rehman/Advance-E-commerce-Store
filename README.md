# ModernShop - Ecommerce Store

A modern, responsive ecommerce store built with HTML, CSS, and JavaScript. Features a clean design, shopping cart functionality, product filtering, and a complete checkout process.

## Features

### 🎨 Modern Hero Slider
- **Auto-Scrolling Banner**: Automatic image slider with smooth transitions
- **Multiple Slides**: 3 promotional slides with different content
- **Navigation Controls**: Previous/Next buttons and dot indicators
- **Keyboard Navigation**: Use arrow keys to navigate slides
- **Auto-Play with Pause**: Slides auto-advance but pause on hover
- **Responsive Design**: Adapts beautifully to all screen sizes

### 🏷️ Brand Showcase
- **Auto-Scrolling Brands**: Infinite scrolling brand logos
- **Multiple Brands**: Display of 6+ trusted brands
- **Hover Effect**: Pause animation on hover
- **Smooth Animation**: Seamless looping effect

### 🛍️ Shopping Experience
- **Product Catalog**: Browse through various categories (Men's, Women's, Kids, Accessories)
- **Product Details**: View detailed product information, images, sizes, and colors
- **Shopping Cart**: Add, remove, and update product quantities
- **Wishlist**: Save favorite products for later
- **Product Filtering**: Filter by category, price range, and size
- **Product Sorting**: Sort by price (low to high, high to low) and name

### 💳 Checkout & Payment
- **Secure Checkout**: Multi-step checkout process with form validation
- **Payment Options**: Credit/Debit card and PayPal integration
- **Order Summary**: Review items before purchase
- **Shipping Calculator**: Free shipping on orders over $50
- **Tax Calculation**: Automatic 10% tax calculation

### 👤 User Authentication
- **Login**: User login with email and password
- **Sign Up**: New user registration with validation
- **Social Login**: Google and Facebook login options
- **Remember Me**: Stay logged in option

### 📱 Responsive Design
- Fully responsive layout that works on desktop, tablet, and mobile devices
- Mobile-friendly navigation menu
- Touch-optimized interface

### 🎨 Modern UI/UX
- Clean and modern design
- Smooth animations and transitions
- Interactive product cards
- Toast notifications for user actions
- Gradient backgrounds and shadows

## File Structure

```
ecommerce-store/
│
├── index.html          # Homepage with featured products and categories
├── shop.html           # Product listing page with filters
├── product.html        # Individual product details page
├── cart.html           # Shopping cart page
├── checkout.html       # Checkout and payment page
├── login.html          # User login page
├── signup.html         # User registration page
│
├── css/
│   └── style.css       # Main stylesheet with all styles
│
├── js/
│   └── script.js       # Main JavaScript file with all functionality
│
├── images/
│   ├── products/       # Product images (to be added)
│   └── banners/        # Banner images (to be added)
│
└── README.md           # Project documentation
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons library
- **LocalStorage**: Cart data persistence

## Setup Instructions

1. **Clone or Download** the project files
2. **Open** `index.html` in a web browser
3. No server or build process required - runs directly in the browser!

## Key Functionality

### Shopping Cart
- Cart data is stored in browser's LocalStorage
- Persists across page reloads
- Real-time cart count updates
- Quantity adjustments
- Item removal

### Product Management
- 8 sample products included
- Dynamic product rendering
- Category-based filtering
- Price range filtering
- Multiple sorting options

### Checkout Process
1. Review cart items
2. Apply promo codes
3. Fill in shipping information
4. Select payment method
5. Review order summary
6. Place order

## Customization

### Adding Products
Edit the `products` array in `js/script.js`:

```javascript
{
    id: 9,
    name: "Your Product Name",
    category: "men", // men, women, kids, accessories
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.5,
    description: "Product description here",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff"],
    badge: "New" // Sale, Hot, New
}
```

### Changing Colors
Modify CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --accent-color: #f59e0b;
    /* ... */
}
```

### Adding Product Images
1. Place images in `images/products/` folder
2. Update the image property in product objects
3. Modify the product card HTML to use actual images instead of icons

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features to Add (Future Enhancements)

- [ ] User account dashboard
- [ ] Order history
- [ ] Product reviews and ratings
- [ ] Advanced search functionality
- [ ] Product image galleries
- [ ] Related products recommendations
- [ ] Email notifications
- [ ] Backend integration
- [ ] Payment gateway integration
- [ ] Inventory management
- [ ] Admin panel

## License

This project is open source and available for personal and commercial use.

## Credits

- Icons: [Font Awesome](https://fontawesome.com/)
- Fonts: System fonts (Segoe UI, etc.)

## Support

For questions or issues, please create an issue in the repository or contact support.

---

**ModernShop** - Your Fashion Destination 🛍️