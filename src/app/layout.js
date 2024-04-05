import { Sahitya } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

const sahtiya = Sahitya({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Digital LEVERAGE",
  description: "Best software development service provider",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sahtiya.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
