// "use client";
import "./globals.css";
// import { Michroma, Jura, Poppins } from "next/font/google";
import { Jura} from "next/font/google";

// const JuraFont = Jura({
//   subsets: ["latin"],
//   weight: ["400", "600", "700"],
//   display: 'swap', adjustFontFallback: false
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const metadata = {
    title: "ECOBASED",
    description: "An Asset Tokenization Platform For Regenerative Finance",
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description}/>
      </head>

      {/* <body className={JuraFont.className}>{children}</body>       */}
      <body >{children}</body>      
    </html>
  );
}
