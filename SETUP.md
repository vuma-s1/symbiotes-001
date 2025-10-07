# Repository Setup Guide

## 🚀 Quick Start for New Repository

### 1. Clone and Install
```bash
git clone <your-repo-url>
cd symbiotes-ai-website
npm install
```

### 2. Development
```bash
npm run dev
```

### 3. Build
```bash
npm run build
npm start
```

## 📋 Pre-Deployment Checklist

- [ ] Update environment variables
- [ ] Configure domain settings
- [ ] Test all pages and functionality
- [ ] Verify responsive design
- [ ] Check performance metrics
- [ ] Update contact information
- [ ] Configure analytics (if needed)

## 🔧 Environment Variables

Create `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📱 Pages Overview

- **Home** (`/`) - Main landing page
- **Services** (`/services`) - Detailed services
- **Login** (`/login`) - User authentication
- **Signup** (`/signup`) - User registration
- **Blueprint** (`/blueprint`) - Launch blueprint
- **Book Call** (`/book-call`) - Contact booking

## 🎨 Brand Guidelines

### Colors
- Primary: `#d0ed01` (Lime Green)
- Secondary: `#eaff6b` (Bright Lime)
- Accent: `#baff39` (Neon Green)
- Purple: `#6248ff` (Purple Accent)

### Typography
- Consistent sizing across all components
- Responsive scaling
- Proper hierarchy

## 🚀 Deployment Options

### Vercel (Recommended)
1. Connect GitHub repository
2. Configure build settings
3. Deploy automatically

### Netlify
1. Connect repository
2. Set build command: `npm run build`
3. Set publish directory: `.next`

### Manual Deployment
1. Build: `npm run build`
2. Start: `npm start`
3. Configure reverse proxy (nginx/Apache)

## 📊 Performance

- Optimized images
- Code splitting
- Lazy loading
- Fast loading times
- Mobile-first design

## 🔒 Security

- Environment variables for sensitive data
- HTTPS enforcement
- Secure headers
- Input validation

## 📈 Analytics Setup

Add your analytics code to:
- `app/layout.tsx` (for global tracking)
- Individual pages as needed

## 🎯 SEO

- Meta tags configured
- Open Graph tags
- Structured data ready
- Sitemap generation

---

**Ready for production deployment! 🚀**

