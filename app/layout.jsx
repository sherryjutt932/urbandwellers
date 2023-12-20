import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Urband Wellers",
  description: "Urband Wellers website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main style={{ height: "calc(100vh - 91px)", overflowY: "hidden" }}>
          {children}
        </main>
      </body>
    </html>
  );
}