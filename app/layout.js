import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Waiting List Andy Warhol Roma",
  description: "Iscriviti alla mailing list di NavigareSrl",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
