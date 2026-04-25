import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio & Projects | Anmol Malviya - Full Stack Developer',
  description: 'Explore the selected works of Anmol Malviya. Featuring full-stack web applications, React frontends, Node.js backends, and interactive GSAP animated experiences.',
  alternates: {
    canonical: '/work',
  },
  openGraph: {
    title: 'Portfolio & Projects | Anmol Malviya - Full Stack Developer',
    description: 'Explore the selected works of Anmol Malviya. Featuring full-stack web applications, React frontends, Node.js backends, and interactive GSAP animated experiences.',
    url: 'https://anmolmalviya7.vercel.app/work',
    type: 'website',
  }
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Portfolio of Anmol Malviya",
            "url": "https://anmolmalviya7.vercel.app/work",
            "description": "A collection of web development and design projects by Anmol Malviya.",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Interactive Portfolio"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "AI Interviewer"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "TaskFlow Dashboard"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "E-Commerce Platform"
                }
              ]
            }
          })
        }}
      />
      {children}
    </>
  );
}
