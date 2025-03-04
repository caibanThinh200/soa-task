import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import { routing } from "@/i8n/routing";
import { notFound } from "next/navigation";
import Layout from "@/components/layout";
import { getPageLang } from "@/lib/api/lang";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const popins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CookMaster",
  description: "Learn Cooking Like a Pro",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "en" | "fr")) {
    notFound();
  }
  const pageData = await getPageLang(locale as "en" | "fr");

  return (
    <html lang="en">
      <body className={`${popins.className} antialiased`}>
        <Layout data={pageData}>{children}</Layout>
      </body>
    </html>
  );
}
