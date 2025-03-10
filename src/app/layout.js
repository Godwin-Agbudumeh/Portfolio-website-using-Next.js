import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Godwin Agbudumeh Portfolio",
  description: "Godwin Agbudumeh portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <ThemeProvider>
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
       </ThemeProvider>
      </body>
    </html>
  );
}
