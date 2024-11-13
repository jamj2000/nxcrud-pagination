import localFont from "next/font/local";
import "@/app/globals.css";
import { Toaster } from 'sonner';

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Productos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans h-screen`}  >
        {children}
        <Toaster position="top-right"  richColors />
      </body>
    </html>
  );
}
