import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { Link as LocaleLink } from "@/i18n/navigation";
import { QRGenerator } from "@/components/qr-generator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const canonical = "https://qr.shuttlelab.org/tools/text-qr-code/";

  if (locale === "zh") {
    const t = await getTranslations({ locale, namespace: "toolPages.textQrCode" });
    return {
      title: t("title"),
      description: t("subtitle"),
      alternates: { canonical },
      openGraph: {
        title: t("title"),
        description: t("subtitle"),
        siteName: "QR Shuttle",
        type: "website",
        locale: "zh_CN",
      },
    };
  }

  return {
    title: "Text QR Code Generator | Free Online Tool",
    description:
      "Create QR codes for any plain text: serial numbers, coupon codes, instructions, or notes. Free, private, no registration required.",
    alternates: { canonical },
    openGraph: {
      title: "Text QR Code Generator | Free Online Tool",
      description:
        "Create QR codes for any plain text: serial numbers, coupon codes, instructions, or notes.",
      siteName: "QR Shuttle",
      type: "website",
      locale: "en_US",
    },
  };
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a Text QR Code",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      text: "Select the Text QR code type from the generator",
    },
    {
      "@type": "HowToStep",
      position: 2,
      text: "Type or paste the plain text you want to encode",
    },
    {
      "@type": "HowToStep",
      position: 3,
      text: "Adjust colors, size, and error correction to suit where it will be used",
    },
    {
      "@type": "HowToStep",
      position: 4,
      text: "Generate and download the QR code as PNG, SVG, or JPG",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a text QR code show when scanned?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It displays the exact text you encoded directly on screen, with no link to open and no app to install. The scanner simply reads the words, which makes it ideal for serial numbers, coupon codes, short instructions, and notes that should be read rather than clicked.",
      },
    },
    {
      "@type": "Question",
      name: "How much text can I put in a single QR code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "QR codes hold a substantial amount of text, but the more you add, the denser and harder to scan the pattern becomes. For reliable scanning, keep the content short, such as a code, an ID, or a sentence or two, rather than long paragraphs. If you have a lot to share, link to a page instead.",
      },
    },
    {
      "@type": "Question",
      name: "Does a text QR code need an internet connection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The text is stored inside the code itself, so a scanner reads it fully offline. This is a real advantage for warehouses, factories, and remote settings where connectivity is unreliable.",
      },
    },
    {
      "@type": "Question",
      name: "Can I edit the text after I create the code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A text QR code is static, so its content is fixed once generated. To change the text you simply create a new code, which takes seconds. The upside of static codes is that they never expire and do not depend on any server staying online.",
      },
    },
    {
      "@type": "Question",
      name: "Is the text QR code generator free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. QR Shuttle is free with no registration and no watermarks. The text you enter is encoded entirely in your browser and is never uploaded to a server.",
      },
    },
  ],
};

const techArticleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Text QR Code Generator - Free Online Tool",
  description:
    "Learn how to create text QR codes for serial numbers, coupon codes, instructions, and notes that scan offline. Free, private, and built in your browser.",
  author: {
    "@type": "Organization",
    name: "ShuttleLab",
  },
  publisher: {
    "@type": "Organization",
    name: "ShuttleLab",
    url: "https://shuttlelab.org",
  },
  url: "https://qr.shuttlelab.org/tools/text-qr-code/",
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
      name: "Text QR Code",
      item: "https://qr.shuttlelab.org/tools/text-qr-code/",
    },
  ],
};

export default async function TextQrCodePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  if (locale === "zh") {
    const t = await getTranslations({ locale, namespace: "toolPages.textQrCode" });
    const tc = await getTranslations({ locale, namespace: "toolPages" });
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
        <p className="text-lg text-muted-foreground mb-8">{t("subtitle")}</p>
        <div className="mb-12">
          <QRGenerator />
        </div>
        <p className="text-sm text-muted-foreground">
          <LocaleLink href="/tools/text-qr-code" locale="en" className="underline">
            {tc("viewFullGuide")}
          </LocaleLink>
        </p>
      </div>
    );
  }

  const faqs = [
    {
      question: "What does a text QR code show when scanned?",
      answer:
        "It displays the exact text you encoded directly on screen, with no link to open and no app to install. The scanner simply reads the words, which makes it ideal for serial numbers, coupon codes, short instructions, and notes that should be read rather than clicked.",
    },
    {
      question: "How much text can I put in a single QR code?",
      answer:
        "QR codes hold a substantial amount of text, but the more you add, the denser and harder to scan the pattern becomes. For reliable scanning, keep the content short, such as a code, an ID, or a sentence or two, rather than long paragraphs. If you have a lot to share, link to a page instead.",
    },
    {
      question: "Does a text QR code need an internet connection?",
      answer:
        "No. The text is stored inside the code itself, so a scanner reads it fully offline. This is a real advantage for warehouses, factories, and remote settings where connectivity is unreliable.",
    },
    {
      question: "Can I edit the text after I create the code?",
      answer:
        "A text QR code is static, so its content is fixed once generated. To change the text you simply create a new code, which takes seconds. The upside of static codes is that they never expire and do not depend on any server staying online.",
    },
    {
      question: "Is the text QR code generator free?",
      answer:
        "Yes. QR Shuttle is free with no registration and no watermarks. The text you enter is encoded entirely in your browser and is never uploaded to a server.",
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
        <h1 className="text-3xl font-bold mb-4">Text QR Code Generator</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Create QR codes for any plain text: serial numbers, coupon codes,
          instructions, or notes. Free, private, no registration required.
        </p>

        <div className="mb-12">
          <QRGenerator />
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">
              How to Create a Text QR Code
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  step: "1",
                  title: "Select Text Type",
                  description:
                    "Choose Text QR code from the generator options",
                },
                {
                  step: "2",
                  title: "Enter Your Text",
                  description:
                    "Type or paste the plain text you want to encode",
                },
                {
                  step: "3",
                  title: "Adjust the Look",
                  description:
                    "Set colors, size, and error correction for the surface",
                },
                {
                  step: "4",
                  title: "Download & Use",
                  description:
                    "Export as PNG, SVG, or JPG and place it where needed",
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
            <h2 className="text-2xl font-bold mb-4">What Are Text QR Codes?</h2>
            <div className="prose prose-gray max-w-none">
              <p>
                A text QR code stores plain words directly inside the pattern.
                Unlike a URL code that sends a phone to a website, a text code
                simply shows the encoded characters on screen when scanned. There
                is no link to open, no app to install, and no server to contact,
                which makes it the right choice whenever the information itself,
                rather than a destination, is what people need.
              </p>
              <p>
                Because the content lives in the code, scanning works completely
                offline. That reliability matters on factory floors, in
                warehouses, and anywhere connectivity is patchy. The trade-off is
                that text codes are static and best kept short: the more
                characters you encode, the denser the pattern becomes and the
                harder it is to scan, so concise content scans most dependably.
              </p>
              <h3>Common Uses for Text QR Codes</h3>
              <ul>
                <li>
                  <strong>Serial numbers and asset IDs:</strong> Tag equipment,
                  inventory, and parts so staff can read an ID without a backend
                  system.
                </li>
                <li>
                  <strong>Coupon and promo codes:</strong> Print a discount code
                  on packaging or a flyer so shoppers can copy it instantly.
                </li>
                <li>
                  <strong>Instructions and notes:</strong> Place short setup
                  steps, dosage notes, or safety reminders directly on a product.
                </li>
                <li>
                  <strong>Reference text:</strong> Encode model numbers, lot
                  codes, or fixed reference data that needs to travel with an
                  item.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Common Scenarios</h2>
            <div className="prose prose-gray max-w-none space-y-4">
              <div>
                <h3 className="font-semibold">Serial numbers and asset tags</h3>
                <p>
                  Encoding a serial number or asset ID as text lets staff read it
                  off a label even where there is no scanner app tied to a
                  database. The value is stored in the code itself, so it works
                  offline in a stockroom or out in the field, and the printed tag
                  keeps functioning long after any tracking system changes.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Coupon and discount codes</h3>
                <p>
                  Printing a promo code as text on packaging, a receipt, or a
                  flyer lets a shopper scan and copy the exact characters instead
                  of squinting at small print and retyping. Keep the code short
                  and the contrast high so it reads cleanly at checkout under
                  store lighting.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Product instructions and notes</h3>
                <p>
                  A small text code on a product can hold concise setup steps,
                  care instructions, or a safety reminder that should be read on
                  the spot rather than chased to a website. Because QR Shuttle
                  builds the code in your browser, the text never leaves your
                  device during creation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Offline reference data</h3>
                <p>
                  In warehouses, labs, and remote sites, a text code carries
                  model numbers, lot codes, or fixed reference values without any
                  network dependency. Raise the error correction level for labels
                  that will be handled, scuffed, or laminated so wear does not
                  stop the scan.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Tips and Best Practices</h2>
            <div className="prose prose-gray max-w-none">
              <ul>
                <li>
                  <strong>Keep the text short.</strong> Less content means a
                  sparser, easier-to-scan pattern. Encode the code, ID, or a
                  sentence or two rather than long paragraphs.
                </li>
                <li>
                  <strong>Link instead of cramming.</strong> If you have a lot to
                  share, a URL code pointing to a page scans far more reliably
                  than a dense block of text squeezed into one code.
                </li>
                <li>
                  <strong>Choose error correction for the surface.</strong> QR
                  Shuttle offers L, M, Q, and H. Raise the level for labels that
                  will be handled, scuffed, or laminated.
                </li>
                <li>
                  <strong>Keep high contrast.</strong> A dark foreground on a
                  light background reads best. Decorative low-contrast pairs slow
                  or block scanning, especially in poor lighting.
                </li>
                <li>
                  <strong>Test before printing.</strong> Scan the exported PNG,
                  SVG, or JPG with a real phone to confirm the exact text appears
                  before producing a batch.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Compared to Alternatives</h2>
            <div className="prose prose-gray max-w-none">
              <p>
                Many online generators such as qr-code-generator.com and
                goqr.me build the code on their servers, which means the text you
                enter is transmitted off your device. QR Shuttle generates the
                text code entirely in your browser with qrcode.react, so your
                content stays local and is never sent anywhere, which matters
                when the text is an internal serial number or an unreleased
                promo code.
              </p>
              <p>
                Free tiers elsewhere often add watermarks, require an account, or
                steer you toward paid dynamic codes that route through their
                servers. QR Shuttle is free with no registration and no
                watermarks, and the text code it produces is static, so it scans
                offline and keeps working without a subscription or a server
                that could later be switched off.
              </p>
              <p>
                You still get full customization: colors, square, dots, or
                rounded styles, adjustable size, an optional logo, and PNG, SVG,
                or JPG export. For a feature-by-feature comparison, see the{" "}
                <Link href="/about" className="underline">
                  About page
                </Link>
                .
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
