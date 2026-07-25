import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shelfie — UGC ads, cut from a product photo",
  description: "Turn a product photo into scroll-stopping UGC video ads.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="grain font-body">{children}</body>
    </html>
  );
}
