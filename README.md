# Vue.js Portfolio with GitHub Integration

A modern, responsive portfolio website built with Vue.js 3, featuring GitHub project integration and dark mode support.

## Features

- ✨ **Modern UI** - Built with Tailwind CSS for a sleek, professional look
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 📱 **Responsive Design** - Works perfectly on all devices
- 🚀 **GitHub Integration** - Automatically fetches and displays your GitHub projects
- 🎯 **Smooth Animations** - Engaging scroll animations and transitions
- 📧 **Contact Form** - Fully functional contact form
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development

## Tech Stack

- **Vue.js 3** - Progressive JavaScript framework
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Next generation frontend tooling
- **Axios** - HTTP client for API requests
- **PostCSS** - CSS processing

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file (optional, for GitHub API token):

```env
VITE_GITHUB_TOKEN=your_github_token_here
```

### Development

Run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Vue components
│   ├── Navigation.vue   # Header navigation
│   ├── Hero.vue        # Hero section
│   ├── About.vue       # About section
│   ├── Services.vue    # Services section
│   ├── Skills.vue      # Skills section
│   ├── Portfolio.vue   # Portfolio/Projects section
│   ├── Contact.vue     # Contact form
│   ├── Footer.vue      # Footer
│   ├── ProjectCard.vue # Project card component
│   ├── SkillCard.vue   # Skill card component
│   └── ScrollToTop.vue # Scroll to top button
├── services/
│   └── githubService.js # GitHub API service
├── config.js           # App configuration
├── App.vue            # Root component
├── main.js            # Entry point
└── style.css          # Global styles
```

## GitHub Integration

The portfolio automatically fetches your GitHub projects using the GitHub API. To use this feature:

1. Update the `GITHUB_USERNAME` in src/config.js
2. (Optional) Add a GitHub personal access token to your `.env` file for higher API rate limits

## Customization

### Update Personal Information

Edit the following components to add your own information:

- **Navigation Logo** - src/components/Navigation.vue
- **Hero Section** - src/components/Hero.vue
- **About Section** - src/components/About.vue
- **Services** - src/components/Services.vue
- **Skills** - src/components/Skills.vue
- **Contact Info** - src/components/Contact.vue

### Add Your Profile Image

Replace placeholder images in the `assets/images/` directory:

- `profile-placeholder.webp` - Your profile photo
- `about-placeholder.webp` - About section image
- `project-*.webp` - Featured project images

## Colors & Themes

Primary colors are defined in tailwind.config.js. Modify the `colors` section in the `theme` to change the color scheme.

## License

This project is open source and available under the MIT License.

## Contact

- Email: mohaalamen1234@gmail.com
- GitHub: [@MohmedAlamen](https://github.com/MohmedAlamen)
- LinkedIn: [Mohamed Alamen](https://www.linkedin.com/in/mohaalamen/)

---

Made with ❤️ by Mohamed Alamen
