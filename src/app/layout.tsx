import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Outfit, JetBrains_Mono } from 'next/font/google';
import Cursor from '@/components/Cursor';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://anmolmalviya7.vercel.app'),
  title: 'Anmol Malviya | Full Stack Developer | React & Node.js Expert',
  description: 'Anmol Malviya is a passionate Full Stack Developer specializing in React, Next.js, Node.js, and GSAP animations. I build high-performance, award-worthy digital experiences.',
  keywords: 'Anmol Malviya, Full Stack Developer, React Developer, Node.js Developer, Portfolio, Web Developer, Next.js, UI/UX Designer, India',
  authors: [{ name: 'Anmol Malviya', url: 'https://anmolmalviya7.vercel.app' }],
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://anmolmalviya7.vercel.app',
    siteName: 'Anmol Malviya - Full Stack Developer Portfolio',
    title: 'Anmol Malviya | Full Stack Developer | React & Node.js Expert',
    description: 'Anmol Malviya is a passionate Full Stack Developer specializing in React, Next.js, Node.js, and GSAP animations. I build high-performance, award-worthy digital experiences.',
    images: [{
      url: 'https://anmolmalviya7.vercel.app/images/global/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Anmol Malviya - Full Stack Developer Portfolio'
    }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@anmolmalviya',
    creator: '@anmolmalviya',
    title: 'Anmol Malviya | Full Stack Developer | React & Node.js Expert',
    description: 'Anmol Malviya is a passionate Full Stack Developer specializing in React, Next.js, Node.js, and GSAP animations. I build high-performance, award-worthy digital experiences.',
    images: ['https://anmolmalviya7.vercel.app/images/global/og-image.png'],
  }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable} ${outfit.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/images/global/site-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Anmol Malviya",
                "jobTitle": "Full Stack Developer",
                "description": "Anmol Malviya is a Full Stack Developer specializing in React, Next.js, Node.js, and GSAP animations. Building award-worthy digital experiences.",
                "url": "https://anmolmalviya7.vercel.app",
                "email": "anmolcloud7@gmail.com",
                "sameAs": [
                  "https://www.linkedin.com/in/anmol-malviya27/",
                  "https://github.com/Anmol-Malviya",
                  "https://www.instagram.com/anmol_20_7_/?hl=en"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Anmol Malviya Portfolio",
                "url": "https://anmolmalviya7.vercel.app"
              }
            ])
          }}
        />
        {/* Vanilla CSS files from public folder */}
        <link rel="stylesheet" href="/css/transition.css" />
        <link rel="stylesheet" href="/css/fonts.css" />

        <link rel="stylesheet" href="/css/globals.css" />
        <link rel="stylesheet" href="/css/menu.css" />
        <link rel="stylesheet" href="/css/home.css" />
        <link rel="stylesheet" href="/css/about.css" />
        <link rel="stylesheet" href="/css/work.css" />
        <link rel="stylesheet" href="/css/contact.css" />
        <link rel="stylesheet" href="/css/footer.css" />
        {/* contact-cta styles are included in globals.css */}
        <link rel="stylesheet" href="/css/preloader.css" />
      </head>
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  );
}

