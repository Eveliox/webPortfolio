import type { Metadata, Viewport } from "next";
import { inter, shippori, jetbrains } from "@/lib/fonts";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://eveliogonzalez.com"),
  title: {
    default: "Evelio Gonzalez — Computer Science Student & Software Engineer",
    template: "%s · Evelio Gonzalez",
  },
  description:
    "Computer Science student at Florida International University building thoughtful software. Currently seeking Summer 2027 software engineering internships.",
  applicationName: "Evelio Gonzalez",
  authors: [{ name: "Evelio Gonzalez" }],
  creator: "Evelio Gonzalez",
  keywords: [
    "Evelio Gonzalez",
    "Software Engineer",
    "Computer Science",
    "FIU",
    "Florida International University",
    "Software Engineering Internship",
    "Full Stack Developer",
    "Backend Engineer",
    "Miami",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eveliogonzalez.com",
    title: "Evelio Gonzalez — Computer Science Student & Software Engineer",
    description:
      "Computer Science student at FIU building thoughtful software. Seeking Summer 2027 software engineering internships.",
    siteName: "Evelio Gonzalez",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evelio Gonzalez",
    description:
      "Computer Science student at FIU building thoughtful software.",
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF7" },
    { media: "(prefers-color-scheme: dark)", color: "#0F0F0E" },
  ],
  width: "device-width",
  initialScale: 1,
};

const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored === 'dark' || stored === 'light' ? stored : 'light';
    if (theme === 'dark') document.documentElement.classList.add('dark');
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
      className={`${inter.variable} ${shippori.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans bg-paper text-ink dark:bg-paper-dark dark:text-ink-dark antialiased leading-[1.75]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-paper dark:focus:bg-paper-dark focus:text-ink dark:focus:text-ink-dark focus:px-3 focus:py-2 focus:border focus:border-hairline dark:focus:border-hairline-dark"
        >
          Skip to content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
