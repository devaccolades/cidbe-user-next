import { Inter } from "next/font/google";
import "../app/globals.css";
import Script from "next/script";
// import Canonical from "../components/Canonical"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="hidescroll">
      <head />
        <body className={inter.className}>
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PWFG6894');
            `,
          }}
        />
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PWFG6894"
            height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>
        {/* <Canonical /> */}
        {children}
      </body>
    </html>
  );
}
