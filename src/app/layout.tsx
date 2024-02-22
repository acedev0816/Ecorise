// "use client";
import "./globals.css";
import { Michroma, Jura, Poppins } from "next/font/google";

const MichromaFont = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  display: 'swap', adjustFontFallback: false
});

const JuraFont = Jura({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: 'swap', adjustFontFallback: false
});

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: 'swap', adjustFontFallback: false
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const metadata = {
    title: "ECORISE",
    description: "An Asset Tokenization Platform For Regenerative Finance",
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description}/>
      </head>

      <body className={JuraFont.className}>{children}</body>      
    </html>
  );
}
