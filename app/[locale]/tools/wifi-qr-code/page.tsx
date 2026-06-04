import { setRequestLocale } from "next-intl/server";
import { QRGenerator } from "@/components/qr-generator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
  title: "WiFi QR Code Generator | Free Online Tool",
  description:
    "Create QR codes for WiFi network access. Share WiFi credentials instantly without typing passwords. Free, private, no registration.",
  alternates: {
    canonical: "https://qr.shuttlelab.org/tools/wifi-qr-code/",
  },
  openGraph: {
    title: "WiFi QR Code Generator | Free Online Tool",
    description:
      "Create QR codes for WiFi network access. Share WiFi credentials instantly without typing passwords.",
    siteName: "QR Shuttle",
    type: "website",
    locale: "en_US",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a WiFi QR Code",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      text: "Select the WiFi QR code type from the generator",
    },
    {
      "@type": "HowToStep",
      position: 2,
      text: "Enter your WiFi network name (SSID) and password",
    },
    {
      "@type": "HowToStep",
      position: 3,
      text: "Choose the encryption type (WPA, WEP, or None)",
    },
    {
      "@type": "HowToStep",
      position: 4,
      text: "Generate and download the QR code for sharing",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does a WiFi QR code work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A WiFi QR code contains your network credentials encoded in a standard format. When someone scans it with their smartphone camera, their device automatically connects to the WiFi network without manually entering the password.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe to share WiFi passwords via QR code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it's actually safer than sharing passwords verbally or in writing. The QR code can be scanned in person without the password being visible to others. You can also easily revoke access by changing your WiFi password.",
      },
    },
    {
      "@type": "Question",
      name: "What encryption types are supported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "QR Shuttle supports WPA/WPA2 (most common), WEP (older networks), and None (open networks). WPA/WPA2 is recommended for most home and business networks.",
      },
    },
    {
      "@type": "Question",
      name: "Can I hide the password in the QR code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The password is encoded in the QR code but not visible when displayed. When scanned, the device connects automatically without showing the password to the user.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to create an account to generate WiFi QR codes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, QR Shuttle is completely free and requires no registration. You can generate unlimited WiFi QR codes instantly without creating an account.",
      },
    },
  ],
};

const techArticleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "WiFi QR Code Generator - Free Online Tool",
  description:
    "Learn how to create WiFi QR codes so guests can connect to your network by scanning. Free, private, and customizable with multiple export formats.",
  author: {
    "@type": "Organization",
    name: "ShuttleLab",
  },
  publisher: {
    "@type": "Organization",
    name: "ShuttleLab",
    url: "https://shuttlelab.org",
  },
  url: "https://qr.shuttlelab.org/tools/wifi-qr-code/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://qr.shuttlelab.org",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Tools",
      item: "https://qr.shuttlelab.org/tools",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "WiFi QR Code",
      item: "https://qr.shuttlelab.org/tools/wifi-qr-code/",
    },
  ],
};

export default async function WifiQrCodePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const faqs = [
    {
      question: "How does a WiFi QR code work?",
      answer:
        "A WiFi QR code contains your network credentials encoded in a standard format. When someone scans it with their smartphone camera, their device automatically connects to the WiFi network without manually entering the password.",
    },
    {
      question: "Is it safe to share WiFi passwords via QR code?",
      answer:
        "Yes, it's actually safer than sharing passwords verbally or in writing. The QR code can be scanned in person without the password being visible to others. You can also easily revoke access by changing your WiFi password.",
    },
    {
      question: "What encryption types are supported?",
      answer:
        "QR Shuttle supports WPA/WPA2 (most common), WEP (older networks), and None (open networks). WPA/WPA2 is recommended for most home and business networks.",
    },
    {
      question: "Can I hide the password in the QR code?",
      answer:
        "The password is encoded in the QR code but not visible when displayed. When scanned, the device connects automatically without showing the password to the user.",
    },
    {
      question: "Do I need to create an account to generate WiFi QR codes?",
      answer:
        "No, QR Shuttle is completely free and requires no registration. You can generate unlimited WiFi QR codes instantly without creating an account.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">WiFi QR Code Generator</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Create QR codes for WiFi network access. Share WiFi credentials
          instantly without typing passwords. Free, private, no registration.
        </p>

        <div className="mb-12">
          <QRGenerator />
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">
              How to Create a WiFi QR Code
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  step: "1",
                  title: "Select WiFi Type",
                  description: "Choose WiFi QR code from the generator options",
                },
                {
                  step: "2",
                  title: "Enter Network Details",
                  description: "Enter your WiFi network name (SSID) and password",
                },
                {
                  step: "3",
                  title: "Choose Encryption",
                  description: "Select WPA/WPA2, WEP, or None encryption",
                },
                {
                  step: "4",
                  title: "Download & Share",
                  description: "Generate and print the QR code for guests to scan",
                },
              ].map((item) => (
                <Card key={item.step}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Why Use WiFi QR Codes?
            </h2>
            <div className="prose prose-gray max-w-none">
              <p>
                WiFi QR codes eliminate the hassle of sharing WiFi passwords.
                Guests can connect to your network instantly by scanning the
                code with their smartphone camera, without needing to type
                complex passwords.
              </p>
              <h3>Perfect For:</h3>
              <ul>
                <li>
                  <strong>Hotels & Airbnbs:</strong> Provide easy WiFi access for
                  guests
                </li>
                <li>
                  <strong>Cafes & Restaurants:</strong> Offer seamless
                  connectivity to customers
                </li>
                <li>
                  <strong>Offices:</strong> Simplify network access for visitors
                </li>
                <li>
                  <strong>Homes:</strong> Make it easy for friends and family to
                  connect
                </li>
                <li>
                  <strong>Events:</strong> Provide WiFi access at conferences and
                  gatherings
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Common Scenarios</h2>
            <div className="prose prose-gray max-w-none space-y-4">
              <div>
                <h3 className="font-semibold">
                  Cafe and restaurant guest WiFi
                </h3>
                <p>
                  Reading out a long WiFi password to every customer is slow and
                  error-prone. Print a WiFi QR code on a table tent or counter
                  card so guests scan once and connect. Keep the printed code a
                  few centimeters wide with strong dark-on-light contrast so it
                  scans reliably even under warm, dim cafe lighting from across
                  the table.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">
                  Hotels, Airbnbs, and short-term rentals
                </h3>
                <p>
                  Place a WiFi QR code in the welcome binder or frame it on the
                  wall so arriving guests get online without hunting for a
                  router sticker. Because QR Shuttle builds the code in your
                  browser, the network name and password are never uploaded to a
                  third-party server, which matters when you reuse the same
                  credentials across many bookings.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Office visitor and guest networks</h3>
                <p>
                  Receptionists can hand visitors a printed WiFi QR code instead
                  of typing a complex guest password into each device. When you
                  rotate the guest password, simply regenerate the code. Use a
                  higher error correction level if the card will be laminated or
                  handled frequently so scuffs do not stop it from scanning.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Events and conference WiFi</h3>
                <p>
                  Put a large WiFi QR code on event signage or slides so a whole
                  room can connect quickly. Generate the code at a bigger size so
                  it scans from a distance, and leave a clear quiet zone around
                  it free of logos or text so attendee cameras can lock onto the
                  pattern without interference.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Tips and Best Practices</h2>
            <div className="prose prose-gray max-w-none">
              <ul>
                <li>
                  <strong>Match the encryption to your router.</strong> Choose
                  WPA/WPA2 for almost all modern networks, WEP only for older
                  hardware, and None for genuinely open networks. A mismatch is
                  the most common reason a scanned WiFi code fails to connect.
                </li>
                <li>
                  <strong>Pick a fitting error correction level.</strong> QR
                  Shuttle supports L (7%), M (15%), Q (25%), and H (30%)
                  recovery. Raise it for laminated, framed, or frequently handled
                  cards so minor wear does not break the scan.
                </li>
                <li>
                  <strong>Size for the room.</strong> Sizes range from 128px to
                  1024px; export larger for wall signage and use SVG for print so
                  the code never pixelates as it scales.
                </li>
                <li>
                  <strong>Keep high contrast.</strong> Dark foreground on a light
                  background reads best. Decorative low-contrast color pairs can
                  slow or block scanning, especially in poor lighting.
                </li>
                <li>
                  <strong>Test before you print a batch.</strong> Scan the
                  exported PNG, SVG, or JPG with a real phone to confirm it
                  connects to the right network before producing many copies.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Compared to Alternatives</h2>
            <div className="prose prose-gray max-w-none">
              <p>
                WiFi credentials are sensitive, yet many online generators such
                as qr-code-generator.com and goqr.me build the code on their
                servers, which means your network name and password are
                transmitted off your device. QR Shuttle generates the WiFi code
                entirely in your browser with qrcode.react, so those credentials
                stay local and are never sent anywhere.
              </p>
              <p>
                Free tiers elsewhere often add watermarks, require an account, or
                steer you toward paid dynamic codes. QR Shuttle is free with no
                registration and no watermarks, and the WiFi code it produces is
                static, so it keeps working without a subscription or a server
                redirect that could later be turned off.
              </p>
              <p>
                You still get full customization: colors, square, dots, or
                rounded styles, adjustable size, an optional logo, and PNG, SVG,
                or JPG export. The privacy-first, local-only workflow is what
                sets it apart for something as sensitive as your WiFi password.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <Accordion className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </div>
    </>
  );
}
