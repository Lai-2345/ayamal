import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Ayam Al-Sabah | Travel & Tourism",
  description: "Ayam Al-Sabah Travel & Tourism — we take care of the details so you can enjoy the moment.",
  openGraph: {
    title: "Ayam Al-Sabah | Travel & Tourism",
    description: "Thoughtfully planned journeys, easier bookings, and experiences that stay with you.",
    type: "website",
  },
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
