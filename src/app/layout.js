import { Inter } from "next/font/google";
import "../app/globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Top Builders in Thrissur | Apartments in Thrissur | Flats in Thrissur | CIDBI ",
//   description: "CIDBI one of the leading builders in Thrissur offers apartments and flats in thrissur. Discover high-quality flats in Thrissur with trusted builders. Find your dream apartments in thrissur today and enjoy a comfortable living experience.",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="hidescroll">
      <head>
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
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PWFG6894"
            height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>

        {children}
      </body>
    </html>
  );
}
