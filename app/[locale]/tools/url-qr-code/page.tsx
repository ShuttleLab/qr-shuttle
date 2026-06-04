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
  title: "Generate QR Code for URL | Free Online Tool",
  description:
    "Create QR codes for any website URL instantly. Free, private, no registration required. Customize colors, add logo, and download as PNG, SVG, or JPG.",
  alternates: {
    canonical: "https://qr.shuttlelab.org/tools/url-qr-code/",
  },
  openGraph: {
    title: "Generate QR Code for URL | Free Online Tool",
    description:
      "Create QR codes for any website URL instantly. Free, private, no registration required.",
    siteName: "QR Shuttle",
    type: "website",
    locale: "en_US",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Generate a QR Code for a URL",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      text: "Enter the website URL you want to encode in the URL field",
    },
    {
      "@type": "HowToStep",
      position: 2,
      text: "Customize the QR code appearance (colors, size, style)",
    },
    {
      "@type": "HowToStep",
      position: 3,
      text: "Optionally add a logo to the center of the QR code",
    },
    {
      "@type": "HowToStep",
      position: 4,
      text: "Download the QR code in PNG, SVG, or JPG format",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a URL QR code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A URL QR code is a scannable code that, when scanned with a smartphone camera, automatically opens the encoded website URL in the user's browser. It's a quick way to share website links without typing.",
      },
    },
    {
      "@type": "Question",
      name: "Can I customize the design of my URL QR code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! You can customize foreground and background colors, choose between square, dots, or rounded styles, adjust the size from 128px to 1024px, and even add your company logo to the center.",
      },
    },
    {
      "@type": "Question",
      name: "What format should I download my QR code in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PNG is best for web use and social media, SVG is ideal for printing as it scales without losing quality, and JPG offers smaller file sizes. Choose based on your specific use case.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a limit to how many URL QR codes I can create?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, QR Shuttle is completely free with no limits. You can generate as many URL QR codes as you need without any restrictions or registration.",
      },
    },
    {
      "@type": "Question",
      name: "Are URL QR codes permanent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, once generated, URL QR codes are permanent and will always link to the original URL. However, if the destination URL changes or is removed, the QR code will lead to a broken link.",
      },
    },
  ],
};

const techArticleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Generate QR Code for URL - Free Online Tool",
  description:
    "Learn how to create QR codes for any website URL. Free, private, and customizable with multiple export formats.",
  author: {
    "@type": "Organization",
    name: "ShuttleLab",
  },
  publisher: {
    "@type": "Organization",
    name: "ShuttleLab",
    url: "https://shuttlelab.org",
  },
  url: "https://qr.shuttlelab.org/tools/url-qr-code/",
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
      name: "URL QR Code",
      item: "https://qr.shuttlelab.org/tools/url-qr-code/",
    },
  ],
};

export default async function UrlQrCodePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const faqs = [
    {
      question: "What is a URL QR code?",
      answer:
        "A URL QR code is a scannable code that, when scanned with a smartphone camera, automatically opens the encoded website URL in the user's browser. It's a quick way to share website links without typing.",
    },
    {
      question: "Can I customize the design of my URL QR code?",
      answer:
        "Yes! You can customize foreground and background colors, choose between square, dots, or rounded styles, adjust the size from 128px to 1024px, and even add your company logo to the center.",
    },
    {
      question: "What format should I download my QR code in?",
      answer:
        "PNG is best for web use and social media, SVG is ideal for printing as it scales without losing quality, and JPG offers smaller file sizes. Choose based on your specific use case.",
    },
    {
      question: "Is there a limit to how many URL QR codes I can create?",
      answer:
        "No, QR Shuttle is completely free with no limits. You can generate as many URL QR codes as you need without any restrictions or registration.",
    },
    {
      question: "Are URL QR codes permanent?",
      answer:
        "Yes, once generated, URL QR codes are permanent and will always link to the original URL. However, if the destination URL changes or is removed, the QR code will lead to a broken link.",
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
        <h1 className="text-3xl font-bold mb-4">
          Generate QR Code for URL
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Create QR codes for any website URL instantly. Free, private, no
          registration required. Customize colors, add logo, and download as
          PNG, SVG, or JPG.
        </p>

        <div className="mb-12">
          <QRGenerator />
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">
              How to Generate a URL QR Code
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  step: "1",
                  title: "Enter URL",
                  description:
                    "Enter the website URL you want to encode in the URL field",
                },
                {
                  step: "2",
                  title: "Customize Design",
                  description:
                    "Choose colors, size, and style to match your brand",
                },
                {
                  step: "3",
                  title: "Add Logo (Optional)",
                  description:
                    "Upload your company logo to place in the center",
                },
                {
                  step: "4",
                  title: "Download",
                  description:
                    "Export as PNG, SVG, or JPG for your needs",
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
              Why Use URL QR Codes?
            </h2>
            <div className="prose prose-gray max-w-none">
              <p>
                URL QR codes are an efficient way to share website links in
                physical materials like business cards, flyers, posters, and
                product packaging. Instead of typing long URLs, users can simply
                scan the code with their smartphone camera to visit the website
                instantly.
              </p>
              <p>
                QR Shuttle generates URL QR codes entirely in your browser,
                ensuring complete privacy. No data is uploaded to any server,
                and you can customize the appearance to match your brand
                identity.
              </p>
              <h3>Common Use Cases for URL QR Codes</h3>
              <ul>
                <li>
                  <strong>Business Cards:</strong> Add a QR code linking to your
                  portfolio or LinkedIn profile
                </li>
                <li>
                  <strong>Marketing Materials:</strong> Include QR codes in
                  flyers, brochures, and advertisements
                </li>
                <li>
                  <strong>Restaurant Menus:</strong> Link to digital menus for
                  contactless ordering
                </li>
                <li>
                  <strong>Event Promotion:</strong> Share event registration
                  pages easily
                </li>
                <li>
                  <strong>Product Packaging:</strong> Link to user manuals,
                  warranty information, or support pages
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Common Scenarios</h2>
            <div className="prose prose-gray max-w-none space-y-4">
              <div>
                <h3 className="font-semibold">
                  Print collateral that links to a landing page
                </h3>
                <p>
                  Flyers, posters, and brochures have limited space, and a long
                  campaign URL is hard to type from a printed page. Encoding the
                  link as a URL QR code lets readers scan and open the page in
                  one motion. Because QR Shuttle exports SVG, you can drop the
                  same code into a small business card or a large trade-show
                  banner without it turning blurry, since SVG scales cleanly to
                  any print size.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">
                  Product packaging linking to manuals or support
                </h3>
                <p>
                  Instead of cramming setup steps onto a box, brands often point
                  customers to an online manual, warranty form, or support page.
                  A URL QR code on the packaging routes buyers straight there.
                  Use a higher error correction level so the code still scans if
                  the printed surface gets scuffed, creased, or partially worn
                  during shipping and handling.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">
                  Restaurant menus and table tents
                </h3>
                <p>
                  Many venues replace paper menus with a digital version hosted
                  online. A URL QR code on a table tent or window decal sends
                  diners to the menu page on their own phone. Keep the printed
                  code at least a couple of centimeters wide and maintain strong
                  contrast between the foreground and background so it scans
                  quickly even in dim restaurant lighting.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">
                  Event signage and registration links
                </h3>
                <p>
                  Conference booths, popup stands, and lecture slides can show a
                  URL QR code that opens a registration or sign-up page.
                  Attendees scan from a distance, so generate the code at a
                  larger size and place it where the surrounding margin (the
                  quiet zone) stays clear of other graphics, which helps cameras
                  lock onto the pattern.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Tips and Best Practices</h2>
            <div className="prose prose-gray max-w-none">
              <ul>
                <li>
                  <strong>Pick the right error correction level.</strong> QR
                  Shuttle offers L (7%), M (15%), Q (25%), and H (30%) recovery.
                  Higher levels make the code more resilient to damage but add
                  more modules, so use H only when you add a logo or print on
                  surfaces that may scuff.
                </li>
                <li>
                  <strong>Size codes for the scan distance.</strong> The
                  generator supports sizes from 128px up to 1024px. For printed
                  materials, export larger so the code stays crisp; SVG is the
                  safest choice for posters and signage because it never
                  pixelates.
                </li>
                <li>
                  <strong>Keep strong contrast.</strong> Dark foreground on a
                  light background scans most reliably. Avoid light-on-light or
                  low-contrast color pairs, and test the result before printing
                  a large batch.
                </li>
                <li>
                  <strong>Limit logo coverage.</strong> If you add a center
                  logo, keep it between 10% and 30% of the code area and raise
                  the error correction level so the surrounding data can still
                  be read.
                </li>
                <li>
                  <strong>Always verify the scan.</strong> After customizing
                  colors, style, or logo, scan the downloaded PNG, SVG, or JPG
                  with a real phone camera to confirm it opens the correct URL.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Compared to Alternatives</h2>
            <div className="prose prose-gray max-w-none">
              <p>
                Many popular URL QR code services such as
                qr-code-generator.com and goqr.me generate the image on their
                own servers, which means the URL you encode is sent off your
                device. QR Shuttle takes the opposite approach: every code is
                built entirely in your browser using qrcode.react, so the link
                never leaves your computer. For internal or unreleased URLs,
                that local-only processing is a meaningful privacy advantage.
              </p>
              <p>
                Free tiers on some commercial generators add watermarks, gate
                downloads behind a sign-up, or push you toward paid dynamic
                codes. QR Shuttle is free with no registration and no
                watermarks, and the codes you make are static, so they keep
                working without a subscription or a tracking redirect that could
                be disabled later.
              </p>
              <p>
                You still get the customization people expect from paid tools:
                foreground and background colors, square, dots, or rounded
                styles, adjustable size, an optional center logo, and PNG, SVG,
                or JPG export. The difference is that none of it depends on an
                account or a server round-trip.
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

          <section className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Create Your URL QR Code?
            </h2>
            <p className="text-muted-foreground mb-6">
              Generate unlimited QR codes for free. No registration required.
            </p>
            <a
              href="#top"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90"
            >
              Start Generating
            </a>
          </section>
        </div>
      </div>
    </>
  );
}
