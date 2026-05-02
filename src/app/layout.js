import "./globals.css";
import BackgroundEffects from "@/components/BackgroundEffects";

export const metadata = {
  title: "Sabilul Bari | Full-Stack Web Developer",
  description: "Portfolio of Sabilul Bari, a specialized Full-Stack Web Developer creating premium digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BackgroundEffects />
        {children}
      </body>
    </html>
  );
}

