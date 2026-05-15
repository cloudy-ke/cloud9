# Premium Smoke Accessories - E-Commerce Showcase

A beautiful, modern e-commerce showcase website for smoking accessories and weed products. Built with pure HTML, CSS, and JavaScript - perfect for GitHub Pages deployment.

## 🌟 Features

- **Responsive Design**: Looks stunning on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Product Catalog**: Dynamic product grid with filtering and search functionality
- **Interactive Elements**: Hover effects, modal popups, and smooth scrolling
- **Contact Form**: Functional contact form with validation
- **Category Filtering**: Easy product categorization and filtering
- **Search Functionality**: Real-time product search with debouncing
- **Performance Optimized**: Fast loading with optimized images and minimal dependencies

## 🚀 Live Demo

[View Live Site](https://yourusername.github.io/smoking-accessories-catalogue/)

## 📁 Project Structure

```
smoking-accessories-catalogue/
├── index.html          # Main HTML file
├── css/
│   └── style.css        # Complete styling with responsive design
├── js/
│   ├── products.js      # Product data and display functions
│   └── main.js          # Main JavaScript functionality
└── README.md            # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with animations and transitions
- **Vanilla JavaScript**: No frameworks, pure JavaScript functionality
- **Google Fonts**: Playfair Display and Inter typography
- **Font Awesome**: Icon library
- **Picsum Photos**: Placeholder images (replace with your product images)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🎨 Design Features

- **Color Palette**: Professional dark blue, orange accents, and clean whites
- **Typography**: Elegant serif headings with clean sans-serif body text
- **Animations**: Fade-ins, slide-ins, parallax scrolling, and hover effects
- **Layout**: Grid-based responsive layouts
- **Micro-interactions**: Button hovers, form focus states, and smooth transitions

## 📦 Product Management

### Adding New Products

Edit `js/products.js` and add new products to the `products` array:

```javascript
{
    id: 16,
    name: "Your Product Name",
    category: "pipes", // Options: pipes, bongs, vaporizers, accessories
    price: 99.99,
    image: "path/to/your/image.jpg",
    description: "Product description here",
    badge: "New" // Optional: New, Best Seller, Premium, Sale, Popular
}
```

### Product Categories

- `pipes`: Handcrafted glass and metal pipes
- `bongs`: Water pipes and bubblers
- `vaporizers`: Desktop and portable vaporizers
- `accessories`: Grinders, papers, storage, and tools

### Updating Product Images

Replace the placeholder images in the `image` field with your actual product images. For best results:

- Use images with 400x300px dimensions
- Optimize images for web (use tools like TinyPNG)
- Use consistent image naming conventions
- Consider using a CDN for faster loading

## 🔧 Customization

### Changing Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #2c3e50;    /* Main brand color */
    --secondary-color: #e74c3c;   /* Accent color */
    --accent-color: #f39c12;      /* Highlight color */
    /* ... other variables */
}
```

### Modifying Typography

Update the Google Fonts import in `index.html` and CSS font families in `style.css`.

### Adding New Sections

1. Add the HTML structure to `index.html`
2. Add styling to `css/style.css`
3. Add JavaScript functionality to `js/main.js` if needed

## 🚀 GitHub Pages Deployment

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `smoking-accessories-catalogue` (or your preferred name)
3. Make it **Public** (required for GitHub Pages)
4. **Do not** initialize with README (we already have one)

### Step 2: Upload Files

Choose one of these methods:

#### Method A: GitHub Web Interface (Easiest)

1. Open your new repository on GitHub
2. Click "Add file" → "Upload files"
3. Drag and drop all project files:
   - `index.html`
   - `css/` folder
   - `js/` folder
   - `README.md`
4. Commit changes

#### Method B: Git Command Line

```bash
# Clone the repository
git clone https://github.com/yourusername/smoking-accessories-catalogue.git
cd smoking-accessories-catalogue

# Copy your files
# (Copy all project files into this directory)

# Add, commit, and push
git add .
git commit -m "Initial commit"
git push origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under "Build and deployment", select **Deploy from a branch**
5. Source: **Deploy from a branch**
6. Branch: **main** → **/ (root)**
7. Click **Save**

### Step 4: Access Your Site

Your site will be available at:
`https://yourusername.github.io/smoking-accessories-catalogue/`

*Note: It may take a few minutes for the site to go live initially.*

## 📧 Contact Form Setup

The contact form currently uses a client-side simulation. To make it functional:

### Option 1: EmailJS Integration (Recommended)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the form submission in `js/main.js`:

```javascript
// Replace the form submission handler with EmailJS
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'orderForm')
    .then(function(response) {
        showNotification('Message sent successfully!', 'success');
    }, function(error) {
        showNotification('Failed to send message', 'error');
    });
```

4. Add EmailJS script to `index.html`:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```

### Option 2: Formspree Integration

1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form
3. Update the form action in `index.html`:
```html
<form id="orderForm" action="https://formspree.io/f/your-form-id" method="POST">
```

## 🔍 SEO Optimization

The site includes basic SEO optimization:

- Meta tags for description
- Semantic HTML5 structure
- Proper heading hierarchy
- Alt text for images
- Clean URLs

To enhance SEO further:

1. Add more detailed meta descriptions
2. Create a `sitemap.xml`
3. Add structured data (Schema.org)
4. Submit to Google Search Console

## 📈 Performance Optimization

The site is optimized for performance:

- Minimal external dependencies
- Optimized CSS and JavaScript
- Responsive images
- Lazy loading ready structure
- Efficient animations using CSS transforms

For even better performance:

1. Compress images further
2. Enable GZIP compression on server
3. Consider using a CDN for assets
4. Implement service worker for offline support

## 🛡️ Security Considerations

- Input validation on contact form
- XSS prevention through proper escaping
- HTTPS enforced on GitHub Pages
- No sensitive data in client-side code

## 🔄 Updates and Maintenance

### Regular Tasks

1. **Update Products**: Keep product information current
2. **Image Optimization**: Ensure images remain optimized
3. **Performance Monitoring**: Check site speed regularly
4. **Content Updates**: Update descriptions and pricing

### Version Control

Use Git to track changes:

```bash
git add .
git commit -m "Update product prices and add new items"
git push origin main
```

## 🤝 Support

For issues or questions:

1. Check this README first
2. Review the code comments
3. Test in different browsers
4. Validate HTML/CSS if needed

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ for the modern smoke accessories business**
