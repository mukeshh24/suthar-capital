import LenisProvider from "@/providers/LenisProvider";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "Suthar Capital | Strategic Investment & Capital Advisory",
  description:
    "Suthar Capital provides strategic investment, business financing, and capital advisory solutions for growing businesses, private investors, and institutional partners across global markets.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`min-h-full flex flex-col relative`}>
        <LenisProvider>
          <Header />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
