import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "أيام الصبا | للسفر والسياحة",
  description: "أيام الصبا للسفر والسياحة — نرتب التفاصيل، لتعيش اللحظة.",
  openGraph: {
    title: "أيام الصبا للسفر والسياحة",
    description: "رحلات مصممة بعناية، وحجوزات أسهل، وتجارب تبقى.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
