# Nayarka Mala Digital - Company Profile Website

A modern, responsive company profile website for Nayarka Mala Digital, a software development company. Built with clean HTML, CSS, and vanilla JavaScript.

## Features

✨ **Modern Design**

- Clean, professional layout with gradient accents
- Responsive design for desktop, tablet, and mobile
- Smooth animations and hover effects
- Professional color scheme (Blue & Sky Blue)

📱 **Fully Responsive**

- Mobile-first approach
- Hamburger menu for mobile navigation
- Optimized for all screen sizes

🎯 **Complete Sections**

1. **Hero Section** - Eye-catching banner with CTA buttons
2. **About** - Company description with key metrics
3. **Services** - 5 main service offerings with icons
4. **Technology Stack** - 12 technologies used
5. **Development Process** - 5-step workflow visualization
6. **Portfolio** - 4 featured project examples
7. **Contact** - Email, WhatsApp integration, and contact form
8. **Footer** - Company info and navigation links

⚡ **Performance**

- No external dependencies required
- Lightweight CSS (~15KB)
- Smooth scrolling and optimized animations
- IntersectionObserver for scroll animations

## File Structure

```
nayarka-mala-digital/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css       # All styles and responsive design
│   └── js/
│       └── main.js         # Navigation, form, animations
└── README.md               # This file
```

## Setup & Customization

### Before Deployment

1. **Update WhatsApp Number**

   - Open `assets/js/main.js`
   - Find the line: `const whatsappPhone = '6281234567890';`
   - Replace `6281234567890` with your actual WhatsApp number (country code + number without +)
   - Example: For Indonesia +62 812 3456 7890 → `628123456789`

2. **Update Contact Email**

   - Open `index.html`
   - Find the email links (search for "info@nayarkamaladigital.com")
   - Replace with your actual email address

3. **Optional: Update Company Info**
   - Modify the "About" section text
   - Update project examples in "Portfolio" section
   - Adjust the "50+ Projects" metrics as needed

## Deployment to GitHub Pages

### Option 1: Using GitHub Web Interface

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under "Source", select **main** (or **master**) branch
4. Select **/ (root)** as the folder
5. Click **Save**
6. Your site will be published at: `https://yourusername.github.io/nayarka-mala-digital`

### Option 2: Using Command Line

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Nayarka Mala Digital website"

# Add remote repository
git remote add origin https://github.com/yourusername/nayarka-mala-digital.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

Then enable GitHub Pages in repository settings (as described in Option 1).

### Option 3: Using GitHub CLI

```bash
gh repo create nayarka-mala-digital --public --source=. --remote=origin --push
```

Then enable GitHub Pages in repository settings.

## Local Testing

Simply open `index.html` in your web browser, or use a local server:

**Using Python 3:**

```bash
python -m http.server 8000
```

**Using Node.js (http-server):**

```bash
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization Guide

### Colors

Edit the CSS custom properties in `assets/css/style.css`:

```css
:root {
  --primary-color: #2563eb; /* Blue - Change this */
  --secondary-color: #1e40af; /* Dark Blue - Change this */
  --accent-color: #0ea5e9; /* Sky Blue - Change this */
  /* ... */
}
```

### Adding New Sections

1. Add HTML structure in `index.html`
2. Add navigation link in the navbar
3. Style in `assets/css/style.css`
4. Add JavaScript interactions if needed in `assets/js/main.js`

### Modifying Services

Edit the service cards in `index.html` under the "Services Section":

- Change the emoji icon (service-icon div)
- Update the title and description
- Add/remove cards as needed

### Adding More Portfolio Projects

Add new portfolio items in `index.html`:

```html
<div class="portfolio-item">
  <div class="portfolio-icon">🎯</div>
  <h3>Project Name</h3>
  <p>Project description here.</p>
</div>
```

## Features Explained

### Mobile Navigation

- Hamburger menu appears on screens < 768px
- Smooth toggle animation
- Menu closes when a link is clicked

### Contact Form

- Form validation
- Integrates with email (mailto) protocol
- Can be enhanced with backend email service

### Scroll Animations

- Elements fade in as you scroll
- Uses IntersectionObserver for performance
- Smooth fade-in with slight slide-up effect

### WhatsApp Integration

- Direct WhatsApp message button
- Opens WhatsApp Web or app with pre-filled message
- Update phone number in `assets/js/main.js`

## Performance Tips

1. **Images** - If adding images, use optimized formats (WebP, JPEG)
2. **Caching** - GitHub Pages automatically caches static files
3. **Minification** - For production, consider minifying CSS/JS
4. **SEO** - Update meta tags in `<head>` section with proper descriptions

## SEO Optimization

The website includes:

- Descriptive page title
- Semantic HTML structure
- Meta viewport for mobile
- Alt text support for icons

For better SEO:

1. Add Open Graph meta tags
2. Create a `sitemap.xml`
3. Add `robots.txt` file
4. Use structured data (Schema.org)

## Common Issues & Solutions

### Site not showing after deployment

- Wait 1-2 minutes for GitHub to build and deploy
- Check GitHub Actions tab for any build errors
- Ensure repository is public

### Styles not loading

- Check file paths are correct
- Ensure CSS/JS files are in the `assets` folder
- Clear browser cache (Ctrl+Shift+Delete)

### WhatsApp button not working

- Verify phone number format (country code + number without +)
- Test on mobile device for best experience

## License

Free to use and modify for your business needs.

## Support

For questions or issues, contact: info@nayarkamaladigital.com

---

**Last Updated:** March 2026
**Version:** 1.0
