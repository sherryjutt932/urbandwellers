import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Loading from "./components/Loading/index.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Urband Wellers",
  description: "Urband Wellers website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Loading />
        <Header />
        <main className="h-[calc(100vh-71px)] sm:h-[calc(100vh-91px)] overflow-y-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
