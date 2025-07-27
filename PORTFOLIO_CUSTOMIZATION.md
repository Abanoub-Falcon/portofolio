# Portfolio Customization Guide

This guide will help you customize your cybersecurity portfolio website with your own information, images, and branding.

## 🎯 Quick Start Customization

### 1. Personal Information

**Update the following files with your information:**

#### `src/components/Hero.tsx`
- Line 22: Change "John Doe" to your name
- Line 26: Update the title/subtitle
- Line 30-32: Update the description text
- Line 45: Replace resume URL with your own
- Line 52-68: Update social media links

#### `src/components/About.tsx`
- Line 44-45: Update name and title
- Line 47-53: Replace with your bio and description

#### `src/components/Navbar.tsx`
- Line 32-33: Change "JD" to your initials
- Line 36: Update brand name

#### `index.html`
- Line 6: Update page title with your name
- Line 7-9: Update meta description and keywords
- Line 11-12: Update OpenGraph title and description
- Line 17-18: Update Twitter meta tags

### 2. Images

**Replace the placeholder images in `src/assets/`:**

1. **Hero Background** (`hero-bg.jpg`): A cybersecurity-themed background image
2. **Profile Image** (`profile-placeholder.jpg`): Your professional headshot
3. **Project Images** (`project-1.jpg`, `project-2.jpg`, `project-3.jpg`): Screenshots of your actual projects

**To replace images:**
1. Add your images to the `src/assets/` folder
2. Update the import statements in the components
3. Ensure images are optimized for web (recommended: JPEG for photos, PNG for screenshots)

### 3. Projects

**Update `src/components/Projects.tsx`:**

For each project, update:
- `title`: Your project name
- `description`: Project description
- `technologies`: Array of technologies used
- `features`: Key features of your project
- `githubUrl`: Link to your GitHub repository
- `liveUrl`: Link to live demo (use '#' if no demo available)
- `image`: Path to your project screenshot

### 4. Contact Information

**Update `src/components/Contact.tsx`:**
- Line 39-53: Update contact information (email, phone, location)
- Line 56-71: Update social media links

**Update `src/components/Footer.tsx`:**
- Line 11-22: Update social media links
- Line 69: Update copyright with your name

### 5. Experience & Education

**Update `src/components/Experience.tsx`:**
- Replace the `experiences` array with your actual work experience
- Update company names, job titles, dates, and descriptions

**Update `src/components/Education.tsx`:**
- Update the `educationData` array with your educational background
- Modify `relevantCourses` array with courses you've taken

### 6. Skills

**Update `src/components/Skills.tsx`:**
- Modify the `skillCategories` array to reflect your skills
- Adjust skill levels (percentages) based on your proficiency
- Update certifications list

## 🎨 Design Customization

### Colors

The color scheme is defined in `src/index.css`. Key color variables:

```css
--primary: 213 100% 60%;     /* Electric blue */
--accent: 130 100% 60%;      /* Electric green */
--cyber-purple: 270 100% 60%; /* Cyber purple */
```

To change colors, update the HSL values in the `:root` section.

### Fonts

The website uses Inter font by default. To change fonts:

1. Update the Google Fonts import in `src/index.css`
2. Modify the font family in `tailwind.config.ts`

### Animations

Animation classes are defined in `src/index.css`. You can:
- Modify existing animations
- Add new keyframes
- Adjust animation durations

## 📝 Content Guidelines

### Writing Tips

1. **Be specific**: Use concrete examples and metrics
2. **Show impact**: Highlight results and achievements
3. **Use action verbs**: Start bullet points with strong verbs
4. **Keep it concise**: Aim for clarity and brevity

### SEO Optimization

1. Update meta tags in `index.html`
2. Use relevant keywords in your content
3. Add alt text to images
4. Ensure proper heading hierarchy

## 🚀 Deployment

### GitHub Pages Deployment

1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Custom Domain

1. Add a `CNAME` file to the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings

## 🔧 Technical Notes

### File Structure
```
src/
├── assets/          # Images and media files
├── components/      # React components
│   ├── ui/         # Reusable UI components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── pages/
│   └── Index.tsx    # Main page
├── hooks/           # Custom React hooks
├── lib/            # Utility functions
└── index.css       # Global styles and design system
```

### Key Technologies
- **React**: Component-based UI framework
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and dev server
- **Lucide React**: Icon library

### Performance Tips
1. Optimize images (use WebP format when possible)
2. Minimize JavaScript bundle size
3. Use lazy loading for images
4. Implement proper caching headers

## 📞 Need Help?

If you need assistance customizing your portfolio:

1. Check the component comments for guidance
2. Refer to the original design system in `src/index.css`
3. Test changes locally before deploying
4. Use browser developer tools for debugging

## ✅ Customization Checklist

- [ ] Updated personal information in all components
- [ ] Replaced placeholder images with your own
- [ ] Updated project information and links
- [ ] Modified contact information
- [ ] Updated experience and education sections
- [ ] Customized skills and certifications
- [ ] Updated meta tags in index.html
- [ ] Tested all links and functionality
- [ ] Optimized images for web
- [ ] Deployed to GitHub Pages or hosting platform

Good luck with your cybersecurity portfolio! 🔐✨