import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import "react-quill-new/dist/quill.snow.css";

export const dynamic = "force-dynamic";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "InkSpire",
    template: "%s | InkSpire",
  },
  description: "Journal app for your mood and thoughts.",
  applicationName: "InkSpire",
  keywords: [
    "journal",
    "diary",
    "notes",
    "mood",
    "thoughts",
    "productivity",
    "mental health",
  ],
  authors: [{ name: "Muhammad Faqih Ul Hasnain" }],
  creator: "Muhammad Faqih Ul Hasnain",
  publisher: "InkSpire",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "InkSpire",
    description: "Journal app for your mood and thoughts.",
    url: "/",
    siteName: "InkSpire",
    images: [
      {
        url: "/bg.jpg",
        width: 1200,
        height: 630,
        alt: "InkSpire – Journal your mood and thoughts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InkSpire",
    description: "Journal app for your mood and thoughts.",
    images: ["/bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  category: "Productivity",
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f97316",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <div className="bg-[url('/bg.jpg')] opacity-50 fixed -z-10 inset-0" />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
