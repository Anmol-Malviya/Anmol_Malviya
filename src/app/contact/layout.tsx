import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Anmol Malviya | Hire Freelance React & Node.js Developer',
  description: 'Get in touch with Anmol Malviya for freelance web development, React/Next.js projects, or UI/UX collaborations. Based in India, available worldwide.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Anmol Malviya | Hire Freelance React & Node.js Developer',
    description: 'Get in touch with Anmol Malviya for freelance web development, React/Next.js projects, or UI/UX collaborations. Based in India, available worldwide.',
    url: 'https://anmolmalviya7.vercel.app/contact',
    type: 'website',
  }
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
