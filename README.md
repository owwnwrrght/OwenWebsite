# Owen Wright - Personal Portfolio Website

This is a personal portfolio website to showcase my education, experience, skills, and projects to potential recruiters.

## Structure

The website consists of the following pages:
- Home (landing page)
- About Me
- Education
- Experience & Leadership
- Skills & Certifications
- Projects
- Interests
- Contact Information

## Files and Directories

- `index.html` - The main entry point for the website (accessed via owen-wright.com)
- `home.html` - Alternative home page (for direct access via owen-wright.com/home)
  - Note: Both files contain identical content and are kept in sync
- `about.html` - About Me page
- `education.html` - Education details
- `experience-leadership.html` - Experience and leadership content
- `skills.html` - Skills and certifications
- `projects.html` - Project showcase
- `interests.html` - Personal interests
- `contact.html` - Contact information
- `css/styles.css` - CSS styles for the website
- `js/main.js` - JavaScript functionality
- `images/` - Directory for storing images
- `Resume.pdf` - Downloadable resume

## Features

### Dark Mode
The website supports a dark mode theme that can be toggled using the button in the bottom right corner. The theme preference is saved to localStorage and will persist between visits.

### Responsive Design
The website is fully responsive and adapts to different screen sizes, from desktop to mobile devices.

### Interactive Elements
- Hover animations on cards and buttons
- Fade-in animations for content as you scroll
- Interactive navigation highlighting current page

## How to Update

### Adding a New Page

1. Create a new HTML file (e.g., `newpage.html`) using the existing pages as templates
2. Add the page to the navigation menu in each HTML file:
```html
<li><a href="newpage">New Page</a></li>
```

### Adding a Project

1. Open `projects.html`
2. Add a new project using this template:

```html
<div class="project-card" data-category="web">
    <div class="project-image">
        <img src="images/project-image.jpg" alt="Project Name">
        <div class="project-overlay">
            <a href="project-url" class="project-link" target="_blank"><i class="fas fa-external-link-alt"></i></a>
            <a href="github-repo" class="project-github" target="_blank"><i class="fab fa-github"></i></a>
        </div>
    </div>
    <div class="project-details">
        <h3>Project Name</h3>
        <div class="project-tags">
            <span class="tag">HTML</span>
            <span class="tag">CSS</span>
            <span class="tag">JavaScript</span>
        </div>
        <p class="project-description">Brief description of the project and your role.</p>
        <div class="project-features">
            <h4>Key Features:</h4>
            <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
            </ul>
        </div>
    </div>
</div>
```

### Updating Content

To update personal information, work experience, or education:
1. Open the relevant HTML file (e.g., `about.html`, `education.html`, etc.)
2. Find the section you want to update
3. Modify the content as needed

## Domain Setup

For setting up your domain (owen-wright.com):

1. Choose a hosting provider (examples: GitHub Pages, Netlify, Vercel)
2. Upload your website files to the hosting provider
3. Configure your domain registrar's DNS settings to point to your hosting provider
4. Follow the hosting provider's documentation for connecting a custom domain

More detailed instructions can be found in `DOMAIN_SETUP.md`.

## Local Testing

To test your website locally:
1. Open any of the HTML files in a web browser
2. Or use a local server: `python -m http.server` (requires Python) and visit http://localhost:8000

## Maintenance

### Home Page Files

There are two identical home page files that need to be kept in sync:
- `index.html` - Main entry point (accessed via domain root)
- `home.html` - Alternative entry (accessed via /home path)

When making changes to the home page, be sure to update both files to maintain consistency.

### Theme System

The dark/light theme system uses CSS variables defined in `css/styles.css` and is toggled using JavaScript in `js/main.js`. To modify the themes:

1. Edit the CSS variables in the `:root` and `[data-theme="dark"]` selectors in `styles.css`
2. The theme toggle functionality is handled by the event listener in `main.js`