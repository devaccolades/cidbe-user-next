import { Inter } from "next/font/google";
import "../../app/globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "CSR | CIDBI ",
  description: "About  CIDBI Builders to know more about our latest apartments and flats projects in Kerala. Book your dream home from the leading home builders in Thrissur.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="hidescroll">
      <body className={inter.className}>{children}</body>
    </html>
  );
}