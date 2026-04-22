import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Anmol Malviya | Full Stack & React Developer',
  description: 'Learn more about Anmol Malviya, a passionate Full Stack Developer and UI/UX Designer from India. Specializing in React, Next.js, Node.js, and GSAP animations.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Anmol Malviya | Full Stack & React Developer',
    description: 'Learn more about Anmol Malviya, a passionate Full Stack Developer and UI/UX Designer from India. Specializing in React, Next.js, Node.js, and GSAP animations.',
    url: 'https://anmolmalviya7.vercel.app/about',
    type: 'profile',
  }
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
