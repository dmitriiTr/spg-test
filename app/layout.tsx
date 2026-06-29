import type { Metadata } from "next";
import "./globals.scss";

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
      <body>{children}</body>
    </html>
  );
}
