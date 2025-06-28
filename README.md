# Modern Next.js Website

A modern, responsive website built with Next.js 14, TypeScript, Tailwind CSS v4, and shadcn/ui components.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **shadcn/ui** components
- **Responsive design** with mobile-first approach
- **SEO optimized** with proper meta tags
- **Accessibility** compliant (WCAG)
- **Error boundaries** and error handling
- **Loading states** and animations
- **Form validation** with Zod
- **Contact form** with API route
- **Modern UI/UX** with smooth animations

## 📦 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Form Handling**: React Hook Form + Zod
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd modern-nextjs-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── loading.tsx        # Loading UI
│   ├── error.tsx          # Error UI
│   └── not-found.tsx      # 404 page
├── components/            # Reusable components
│   ├── ui/                # shadcn/ui components
│   ├── layout/            # Layout components
│   ├── sections/          # Page sections
│   ├── forms/             # Form components
│   └── common/            # Common components
├── lib/                   # Utility functions
├── types/                 # TypeScript type definitions
└── utils/                 # Helper utilities
```

## 🎨 Customization

### Colors and Theming

The project uses CSS variables for theming. You can customize colors in `src/app/globals.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96%;
  /* ... other variables */
}
```

### Components

All UI components are built with shadcn/ui and can be customized in the `src/components/ui/` directory.

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Export a default React component
4. Add metadata for SEO

Example:
```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Page',
  description: 'Description of the new page',
};

export default function NewPage() {
  return (
    <div>
      <h1>New Page</h1>
    </div>
  );
}
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment variables:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
CONTACT_EMAIL=hello@yoursite.com
```

### Tailwind Configuration

Customize Tailwind in `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Add custom colors
      },
      fontFamily: {
        // Add custom fonts
      },
    },
  },
};
```

## 📱 Responsive Design

The website is built with a mobile-first approach:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

All components are responsive and adapt to different screen sizes.

## ♿ Accessibility

The website follows WCAG guidelines:

- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- Color contrast compliance
- Screen reader compatibility

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📊 Performance

The website is optimized for performance:

- **Core Web Vitals** optimized
- **Image optimization** with Next.js Image component
- **Code splitting** with dynamic imports
- **Bundle analysis** available with `npm run analyze`

## 🧪 Testing

Run type checking:
```bash
npm run type-check
```

Run linting:
```bash
npm run lint
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support, email hello@modernsite.com or create an issue on GitHub.