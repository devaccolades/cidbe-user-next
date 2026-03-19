import { Inter } from "next/font/google";
import "../../app/globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Featured Projects | Apartments in Thrissur | Flats in Thrissur | CIDBI ",
  description: "CIDBI one of the leading builders in Thrissur offers apartments and flats in thrissur. Discover high-quality flats in Thrissur with trusted builders. Find your dream apartments in thrissur today and enjoy a comfortable living experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="hidescroll">
       <head>
        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11550885039"
          strategy="afterInteractive"
        />

        <Script id="google-ads-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11550885039');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
