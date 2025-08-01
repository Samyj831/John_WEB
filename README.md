# The Office Graphic Portfolio

A professional graphic design portfolio website inspired by The Office TV series, built with modern web technologies.

## 🏢 Tech Stack

- **Node.js** v20.18.0 (LTS)
- **React** 18.2.0
- **Next.js** 15
- **Tailwind CSS** v4
- **shadcn/ui** components
- **Framer Motion** for animations
- **TypeScript** for type safety

## 🎨 Features

- **Video Introduction**: Embedded hero video with custom controls
- **Portfolio Gallery**: Filterable grid with lightbox modals
- **Office-Themed Design**: Subtle references to The Office throughout
- **Responsive Design**: Mobile-first approach with accessibility
- **Contact Form**: Office memo-styled contact form
- **Smooth Animations**: Framer Motion powered interactions

## 🚀 Getting Started

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/office-graphic-portfolio.git
   cd office-graphic-portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

\`\`\`
├── app/
│   ├── globals.css          # Tailwind CSS v4 styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main homepage component
├── components/
│   ├── navigation.tsx       # Responsive navigation
│   ├── video-player.tsx     # Custom video player
│   ├── portfolio-grid.tsx   # Portfolio gallery
│   └── contact-form.tsx     # Contact form with validation
├── public/
│   ├── intro-video.mp4      # Introduction video file
│   ├── captions.vtt         # Video captions for accessibility
│   └── favicon.ico          # Site favicon
├── package.json             # Dependencies and scripts
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS v4 configuration
└── tsconfig.json            # TypeScript configuration
\`\`\`

## 🎬 Video Setup

1. **Add your introduction video**
   - Place your video file as `public/intro-video.mp4`
   - Add captions file as `public/captions.vtt` for accessibility

2. **Video requirements**
   - Format: MP4 (recommended)
   - Aspect ratio: 16:9
   - Duration: 30-60 seconds recommended
   - Include captions for accessibility

## 🎨 Customization

### Colors
The design uses a forest green primary color (`#228B22`) as specified. You can customize colors in `app/globals.css`:

\`\`\`css
:root {
  --primary: 120 100% 25%;        /* Forest Green */
  --office-green: 120 100% 25%;   /* Custom Office Green */
  --office-blue: 210 100% 50%;    /* Office Blue accent */
  --office-yellow: 45 100% 60%;   /* Office Yellow accent */
}
\`\`\`

### Content
Update the portfolio items in `app/page.tsx`:

\`\`\`tsx
const portfolioItems = [
  {
    id: 1,
    title: "Your Project Title",
    category: "Branding", // or "Posters", "Digital Art", etc.
    image: "/path-to-your-image.jpg",
    description: "Your project description",
    year: "2024",
    featured: true,
  },
  // Add more projects...
]
\`\`\`

## 🌐 Deployment

### Vercel Deployment

1. **Push to GitHub**
   \`\`\`bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   \`\`\`

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect Next.js and deploy
   - Set environment variables if needed

3. **Custom Domain (Optional)**
   - Add your custom domain in Vercel dashboard
   - Update DNS settings to point to Vercel
   - Example: `samytheoffice.design`

### Environment Variables

For contact form functionality, add these to your Vercel environment variables:

\`\`\`env
CONTACT_EMAIL=your-email@domain.com
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
\`\`\`

## 📱 Accessibility Features

- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Video Captions**: Closed captions for introduction video
- **Focus Management**: Clear focus indicators
- **Color Contrast**: WCAG AA compliant color ratios

## 🎭 Office Theme Elements

The design incorporates subtle Office references:

- **Typography**: Clean, corporate-style fonts
- **Color Scheme**: Professional with forest green accents
- **Copy**: Dry humor and Office references throughout
- **Layout**: "Employee bio sheet" styling for About section
- **Forms**: "Office memo" styling for contact form

## 🔧 Development Scripts

\`\`\`bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
\`\`\`

## 📄 License

MIT License - feel free to use this project as a template for your own portfolio.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

**"That's what she said"** - Michael Scott (probably about this README)

Built with ❤️ and a touch of Scranton charm.
