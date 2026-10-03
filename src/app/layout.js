import "./globals.css";
import BackgroundEffects from "@/components/BackgroundEffects";
import { ThemeProvider } from "@/context/ThemeContext";
import { Outfit, Plus_Jakarta_Sans, Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700", "800"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Sabilul Bari | Full-Stack Web Developer",
  description:
    "Portfolio of Sabilul Bari, a specialized Full-Stack Web Developer creating premium digital experiences, pixel-perfect web applications, and modern designs.",
  keywords: [
    "Sabilul Bari",
    "Full Stack Developer",
    "Web Developer",
    "Frontend Developer",
    "Next.js",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Sabilul Bari" }],
  openGraph: {
    title: "Sabilul Bari | Full-Stack Web Developer",
    description: "Portfolio of Sabilul Bari - Crafting exceptional digital experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${syne.variable} ${outfit.variable} ${plusJakartaSans.variable}`}
    >
      <body className={plusJakartaSans.className}>
        <ThemeProvider>
          <BackgroundEffects />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
