import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-sync";
import { ServiceWorkerRegister } from "@/components/service-worker-register";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f3ff" },
    { media: "(prefers-color-scheme: dark)", color: "#2a2540" },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "QR Shuttle",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Web",
  description:
    "Free online QR code generator with custom styles, colors, and logo support. Generate QR codes for URLs, WiFi, vCard, email, and more. 100% private, no watermarks.",
  url: "https://qr.shuttlelab.org",
  offers: [
    { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://qr.shuttlelab.org"),
  title: "QR Shuttle — Free Online QR Code Generator",
  description:
    "Generate custom QR codes for URLs, WiFi, vCard, email, and more. 100% private, no watermarks, no registration. Export as PNG, SVG, or JPG.",
  manifest: "/manifest.webmanifest",
  alternates: { canonical: "/" },
  openGraph: {
    title: "QR Shuttle — Free Online QR Code Generator",
    description:
      "Generate custom QR codes for URLs, WiFi, vCard, email, and more. 100% private, no watermarks.",
    siteName: "QR Shuttle",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    card: "summary_large_image",
    title: "QR Shuttle — Free Online QR Code Generator",
    description:
      "Generate custom QR codes for URLs, WiFi, vCard, email, and more.",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "QR Shuttle",
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <TooltipProvider>
            {children}
            <ServiceWorkerRegister />
            <Toaster
              position="top-center"
              richColors
              closeButton
              duration={3000}
            />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
