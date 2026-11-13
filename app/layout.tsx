import type { Metadata, Viewport } from "next";
import { chakra, dela, jetbrains } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://eveliogonzalez.com"),
  title: {
    default: "Evelio Gonzalez — Software Engineer",
    template: "%s · Evelio Gonzalez",
  },
  description:
    "FIU Computer Science graduate and M.S. Information Technology student at Florida State, building thoughtful software. Currently seeking Summer 2027 software engineering internships.",
  applicationName: "Evelio Gonzalez",
  authors: [{ name: "Evelio Gonzalez" }],
  creator: "Evelio Gonzalez",
  keywords: [
    "Evelio Gonzalez",
    "Software Engineer",
    "Computer Science",
    "FIU",
    "Florida International University",
    "FSU",
    "Florida State University",
    "Software Engineering Internship",
    "Full Stack Developer",
    "Backend Engineer",
    "Miami",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eveliogonzalez.com",
    title: "Evelio Gonzalez — Software Engineer",
    description:
      "FIU CS graduate and FSU M.S. IT student building thoughtful software. Seeking Summer 2027 software engineering internships.",
    siteName: "Evelio Gonzalez",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evelio Gonzalez",
    description:
      "FIU CS graduate and FSU M.S. IT student building thoughtful software.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#050508",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

// Runs before paint: drops the no-JS fallback class, and skips the boot
// sequence on repeat visits within the same tab session.
const bootScript = `
(function() {
  var el = document.documentElement;
  el.classList.remove('no-js');
  try {
    if (sessionStorage.getItem('booted')) el.classList.add('booted');
    else sessionStorage.setItem('booted', '1');
  } catch (_) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`no-js ${chakra.variable} ${dela.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <div className="fx-scan" aria-hidden="true" />
        <div className="fx-grain" aria-hidden="true" />
      </body>
    </html>
  );
}
