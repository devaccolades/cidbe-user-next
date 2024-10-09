import { Inter } from "next/font/google";
import "../app/globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Top Builders in Thrissur | Apartments in Thrissur | Flats in Thrissur | CIDBI ",
//   description: "CIDBI one of the leading builders in Thrissur offers apartments and flats in thrissur. Discover high-quality flats in Thrissur with trusted builders. Find your dream apartments in thrissur today and enjoy a comfortable living experience.",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="hidescroll">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
