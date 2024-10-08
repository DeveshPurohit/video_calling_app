import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster"

import 'react-datepicker/dist/react-datepicker.css'
import '@stream-io/video-react-sdk/dist/css/styles.css';

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "XOOM",
  description: "Video calling app by Devesh Purohit",
  icons: {
    icon: "/icons/logo.jpg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider appearance={{
        variables: {
          colorText: "#fff",
          colorPrimary: "#0E78F9",
          colorBackground: "#1C1F2E",
          colorInputBackground: "#252A41",
          colorInputText: "#fff",
        },
        layout: {
          logoImageUrl: "/icons/logo.jpg"
        }
      }}>
        <body className={`${inter.className} bg-dark-2`}>{children}<Toaster /></body>
      </ClerkProvider>
    </html>
  );
}
