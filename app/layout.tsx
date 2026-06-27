import type { Metadata } from "next";
import "./globals.scss";
import SmoothScrollbarProvider from "@/components/scrollbarProvider";

export const metadata: Metadata = {
  title: "INCHAPIN",
  description: "Bussiness-class real estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollbarProvider>{children}</SmoothScrollbarProvider>
      </body>
    </html>
  );
}
