# CoderHa1 Portfolio Website

A modern, responsive portfolio website for showcasing web design and development skills. This portfolio is designed for the Instagram account [@coderha1](https://instagram.com/coderha1) to display HTML/CSS website design services.

## Features

- Modern and sleek UI design
- Fully responsive layout (mobile, tablet, desktop)
- Custom cursor animations
- Interactive elements and hover effects
- Portfolio filtering system
- Contact form
- Animated sections and elements
- Smooth scrolling
- Mobile-friendly navigation

## Technologies Used

- HTML5
- CSS3 (with modern features like Grid, Flexbox, CSS Variables)
- JavaScript (vanilla, no frameworks)
- Font Awesome icons
- Google Fonts

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VSCode, Sublime Text, etc.) if you want to make changes

### Installation

1. Clone or download this repository
2. Open the `index.html` file in your browser

```bash
# Example using a local server
cd CoderHa1-Portfolio
# If you have Python installed
python -m http.server
# OR if you have Node.js installed
npx serve
```

## Project Structure

```
CoderHa1-Portfolio/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── script.js       # JavaScript functionality
├── images/             # Image assets
└── README.md           # This file
```

## Customization

### Changing Colors

The color scheme can be easily modified by changing the CSS variables in the `:root` selector in `css/styles.css`:

```css
:root {
    --primary-color: #6c5ce7;
    --primary-light: #a29bfe;
    --secondary-color: #00cec9;
    /* other variables */
}
```

### Adding Portfolio Items

To add new portfolio items, add new elements to the portfolio grid in `index.html`:

```html
<div class="portfolio-item" data-category="web">
    <div class="image">
        <img src="images/your-new-image.jpg" alt="Project Description">
        <div class="overlay">
            <div class="overlay-content">
                <h3>Project Title</h3>
                <p>Category / Skills</p>
                <a href="#" class="view-project">View Project</a>
            </div>
        </div>
    </div>
</div>
```

### Updating Content

Update the text content in `index.html` to match your personal information, services, and portfolio items.

## Browser Support

This website works in all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is available for personal and commercial use.

## Contact

For questions or customization requests, please reach out via Instagram: [@kron.store](https://instagram.com/kron.store) 