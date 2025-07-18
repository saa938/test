# FLL Team Formation Website

A beautiful, modern React website designed to promote FIRST LEGO League (FLL) team formation and STEM education for young learners aged 4-16.

## 🎯 Purpose

This website serves as a landing page to:
- Educate visitors about FIRST LEGO League
- Encourage student participation in STEM activities
- Facilitate team formation through an integrated Google Form
- Promote the core values of creativity, collaboration, and gracious professionalism

## ✨ Features

### 🚀 Modern Design
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Animated Hero Section**: Eye-catching robot animation with floating code blocks
- **Smooth Animations**: CSS keyframe animations for enhanced user experience
- **Beautiful Gradients**: Modern color schemes that appeal to young audiences

### 📱 Sections
1. **Hero Section**: Compelling introduction with key statistics and animated visuals
2. **Mission Section**: Clear explanation of the program's goals and benefits
3. **FLL Information**: Comprehensive overview of the three FLL divisions (Discover, Explore, Challenge)
4. **Registration Form**: Embedded Google Form for easy team signup
5. **Footer**: Additional resources and links

### 🎨 Technical Highlights
- Built with React 18
- Modern CSS Grid and Flexbox layouts
- CSS-only animations (no external animation libraries)
- Optimized for performance and accessibility
- SEO-friendly meta tags and semantic HTML

## 🛠️ Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation
1. Clone this repository
2. Navigate to the project directory:
   ```bash
   cd fll-team-website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production
```bash
npm run build
```
This creates an optimized production build in the `build` folder.

## 📝 Customization

### Form Integration
The website includes an embedded Google Form for team registration. To use your own form:
1. Create a Google Form
2. Get the shareable link
3. Extract the form ID from the URL
4. Update the iframe `src` in `src/App.js`

### Content Updates
- Hero text and statistics: Edit the hero section in `src/App.js`
- Mission points: Modify the mission-points array in `src/App.js`
- FLL divisions: Update division information in the fll-divisions section
- Colors and styling: Customize CSS variables in `src/App.css`

### Adding New Sections
The website is built with a modular structure. To add new sections:
1. Create a new section in `src/App.js`
2. Add corresponding CSS styles in `src/App.css`
3. Follow the existing pattern for responsive design

## 🎯 Target Audience

- **Primary**: Students aged 4-16 and their parents
- **Secondary**: Educators, mentors, and STEM advocates
- **Tertiary**: Community organizations interested in STEM programs

## 📊 Impact Goals

- Increase FLL team registrations
- Raise awareness about STEM education opportunities
- Create an engaging digital experience that reflects FLL's innovative spirit
- Provide easy access to team formation resources

## 🤝 Contributing

This website was created to support STEM education and FLL team formation. If you'd like to contribute:
1. Fork the repository
2. Create a feature branch
3. Make your improvements
4. Submit a pull request

## 📞 Support

For questions about FIRST LEGO League:
- Visit the [official FLL website](https://www.firstlegoleague.org/)
- Contact your local FLL coordinator
- Check out the resources in the website footer

## 📄 License

This project is created for educational and promotional purposes to support STEM education initiatives.

---

**Built with ❤️ for the future innovators of tomorrow!**
