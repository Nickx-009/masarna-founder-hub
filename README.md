# Masarna - Operations-as-a-Service for Startups

This is the Next.js version of the Masarna website, providing improved SEO and performance compared to the previous React+Vite implementation.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- **SEO Optimized**: Built with Next.js for improved search engine visibility
- **Performance**: Optimized for Core Web Vitals
- **Responsive Design**: Works on all device sizes
- **Accessibility**: Follows WCAG guidelines for accessibility

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Hook Form
- Zod
- Framer Motion
- Lucide React Icons

## Deployment

The site can be deployed to Vercel with a single click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fmasarna-nextjs)

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
SITE_URL=https://masarna.co
NEXT_PUBLIC_CONVERTKIT_API_KEY=your_api_key_here
NEXT_PUBLIC_CONVERTKIT_FORM_ID=your_form_id_here
```

## License

All rights reserved. This code is proprietary and confidential.