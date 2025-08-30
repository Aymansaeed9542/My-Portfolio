# Modern Portfolio Website

A beautiful, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and modern design.

## 🚀 Features

- **Modern Design** - Glassmorphism effects, gradients, and smooth animations
- **Responsive** - Works perfectly on all devices
- **Interactive** - Hover effects, smooth scrolling, and dynamic navigation
- **Modular** - Well-organized component structure
- **Fast** - Built with Vite for optimal performance

## 🛠️ Tech Stack

- **React 19** - Latest React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Vite** - Fast build tool

## 📁 Project Structure

```
src/
├── components/
│   ├── home/
│   │   └── home.jsx          # Main page component
│   ├── navbar/
│   │   └── Navbar.jsx        # Navigation component
│   ├── Background/
│   │   └── Background.jsx    # Animated background
│   ├── Hero/
│   │   └── Hero.jsx          # Hero section
│   ├── Section/
│   │   └── Section.jsx       # Reusable section wrapper
│   ├── Content/
│   │   └── Content.jsx       # Main content container
│   ├── About/
│   │   └── About.jsx         # About section
│   ├── Projects/
│   │   └── Projects.jsx       # Projects showcase
│   ├── Contact/
│   │   └── Contact.jsx       # Contact form
│   ├── Styles/
│   │   └── Styles.jsx        # Custom animations
│   └── index.js              # Component exports
├── App.jsx                   # Main app component
└── main.jsx                  # Entry point
```

## 🎨 Components

### Core Components
- **Navbar** - Navigation with mobile menu and active link tracking
- **Background** - Animated background with particles
- **Hero** - Main hero section with gradient text
- **Section** - Reusable section wrapper
- **Content** - Main content orchestrator

### Page Sections
- **About** - Personal information and skills
- **Projects** - Project showcase with cards
- **Contact** - Contact form and social links

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 🎯 Customization

### Personal Information
Update the following components with your information:
- `About.jsx` - Personal bio and skills
- `Projects.jsx` - Your projects and links
- `Contact.jsx` - Contact details and social links
- `Navbar.jsx` - Logo and navigation links

### Styling
The project uses Tailwind CSS classes. You can:
- Modify colors in the gradient classes
- Adjust spacing using Tailwind's spacing utilities
- Change animations in `Styles.jsx`

### Adding New Sections
1. Create a new component in the appropriate folder
2. Import it in `Content.jsx`
3. Wrap it with the `Section` component
4. Add navigation link in `Navbar.jsx`

## 📱 Responsive Design

The portfolio is fully responsive with:
- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions
- Optimized for all screen sizes

## ⚡ Performance

- Built with Vite for fast development and builds
- Optimized images and assets
- Efficient component structure
- Minimal bundle size

## 🎨 Design Features

- **Glassmorphism** - Translucent backgrounds with blur effects
- **Gradients** - Beautiful color transitions
- **Animations** - Smooth hover effects and transitions
- **Typography** - Modern font hierarchy
- **Spacing** - Consistent and balanced layouts

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React and Tailwind CSS
