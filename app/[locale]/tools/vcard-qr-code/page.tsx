import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { QRGenerator } from "@/components/qr-generator";
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
  const canonical = "https://qr.shuttlelab.org/tools/vcard-qr-code/";

  if (locale === "zh") {
    const t = await getTranslations({ locale, namespace: "toolPages.vcardQrCode" });
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
    title: "Business Card QR Code Generator | vCard QR Code",
    description:
      "Create QR codes for business cards and contact sharing. Share vCard information instantly. Free, private, no registration required.",
    alternates: { canonical },
    openGraph: {
      title: "Business Card QR Code Generator | vCard QR Code",
      description:
        "Create QR codes for business cards and contact sharing. Share vCard information instantly.",
      siteName: "QR Shuttle",
      type: "website",
      locale: "en_US",
    },
  };
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a vCard QR Code",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      text: "Select the vCard QR code type from the generator",
    },
    {
      "@type": "HowToStep",
      position: 2,
      text: "Enter contact details such as name, phone, email, company, and title",
    },
    {
      "@type": "HowToStep",
      position: 3,
      text: "Customize the QR code colors, size, style, and optional logo",
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
      name: "What is a vCard QR code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A vCard QR code stores contact information in the standard vCard format. When scanned, a smartphone offers to save the name, phone number, email, company, and other details directly to its address book.",
      },
    },
    {
      "@type": "Question",
      name: "What contact fields can I include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "QR Shuttle supports first and last name, phone number, email, company, job title, and a website URL. Only the fields you fill in are encoded into the vCard.",
      },
    },
    {
      "@type": "Question",
      name: "Can I customize the look of my vCard QR code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can set foreground and background colors, choose square, dots, or rounded styles, adjust the size from 128px to 1024px, and add a logo to the center.",
      },
    },
    {
      "@type": "Question",
      name: "Is my contact information uploaded anywhere?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The vCard QR code is generated entirely in your browser, so your contact details are never sent to any server.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need an account to create vCard QR codes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, QR Shuttle is completely free with no registration. You can generate unlimited vCard QR codes without creating an account.",
      },
    },
  ],
};

const techArticleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Business Card QR Code Generator - Free vCard Tool",
  description:
    "Learn how to create vCard QR codes that save contact details to a phone with one scan. Free, private, and customizable with multiple export formats.",
  author: {
    "@type": "Organization",
    name: "ShuttleLab",
  },
  publisher: {
    "@type": "Organization",
    name: "ShuttleLab",
    url: "https://shuttlelab.org",
  },
  url: "https://qr.shuttlelab.org/tools/vcard-qr-code/",
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
      item: "https://qr.shuttlelab.org/tools/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "vCard QR Code",
      item: "https://qr.shuttlelab.org/tools/vcard-qr-code/",
    },
  ],
};

export default async function VcardQrCodePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  if (locale === "zh") {
    const t = await getTranslations({ locale, namespace: "toolPages.vcardQrCode" });
    const tc = await getTranslations({ locale, namespace: "toolPages" });
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
        <p className="text-lg text-muted-foreground mb-8">{t("subtitle")}</p>
        <div className="mb-12">
          <QRGenerator />
        </div>
        <p className="text-sm text-muted-foreground">
          <Link href="/tools/vcard-qr-code" locale="en" className="underline">
            {tc("viewFullGuide")}
          </Link>
        </p>
      </div>
    );
  }

  const faqs = [
    {
      question: "What is a vCard QR code?",
      answer:
        "A vCard QR code stores contact information in the standard vCard format. When scanned, a smartphone offers to save the name, phone number, email, company, and other details directly to its address book.",
    },
    {
      question: "What contact fields can I include?",
      answer:
        "QR Shuttle supports first and last name, phone number, email, company, job title, and a website URL. Only the fields you fill in are encoded into the vCard.",
    },
    {
      question: "Can I customize the look of my vCard QR code?",
      answer:
        "Yes. You can set foreground and background colors, choose square, dots, or rounded styles, adjust the size from 128px to 1024px, and add a logo to the center.",
    },
    {
      question: "Is my contact information uploaded anywhere?",
      answer:
        "No. The vCard QR code is generated entirely in your browser, so your contact details are never sent to any server.",
    },
    {
      question: "Do I need an account to create vCard QR codes?",
      answer:
        "No, QR Shuttle is completely free with no registration. You can generate unlimited vCard QR codes without creating an account.",
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
          Business Card QR Code Generator
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Create QR codes for business cards and contact sharing. Share vCard
          information instantly. Free, private, no registration required.
        </p>

        <div className="mb-12">
          <QRGenerator />
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">How vCard QR Codes Work</h2>
            <div className="prose prose-gray max-w-none">
              <p>
                vCard QR codes contain contact information in a standardized
                format. When scanned, smartphones can automatically save the
                contact details to the user&apos;s address book, including name,
                phone number, email, company, job title, and a website URL. This
                turns a single scan into a complete, error-free contact entry.
              </p>
              <p>
                QR Shuttle builds the vCard entirely in your browser, so the
                details you type are never uploaded to a server. You can match
                the code to your personal or company branding with custom
                colors, styles, an optional logo, and a range of export formats.
              </p>
              <h3>Benefits of vCard QR Codes</h3>
              <ul>
                <li>
                  <strong>Instant Contact Sharing:</strong> No need to type
                  contact details manually
                </li>
                <li>
                  <strong>Professional Networking:</strong> Perfect for business
                  cards and conferences
                </li>
                <li>
                  <strong>Error-Free:</strong> Eliminates typos in contact
                  information
                </li>
                <li>
                  <strong>Eco-Friendly:</strong> Reduce paper waste with digital
                  business cards
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Common Scenarios</h2>
            <div className="prose prose-gray max-w-none space-y-4">
              <div>
                <h3 className="font-semibold">Printed business cards</h3>
                <p>
                  Add a vCard QR code to the back of your business card so new
                  contacts save your full details with one scan instead of
                  typing them in. Because a vCard packs several fields into the
                  code, choose a slightly higher error correction level and a
                  generous size so the denser pattern still scans cleanly from a
                  small printed card.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Trade shows and conferences</h3>
                <p>
                  Display a vCard QR code on your booth banner or lanyard so
                  visitors capture your contact information without exchanging
                  paper cards. Generate the code at a larger size for booth
                  signage and keep a clear quiet zone around it so attendee
                  cameras can lock on quickly in a busy hall.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Email signatures and slides</h3>
                <p>
                  Drop a vCard QR code into a presentation closing slide or an
                  email signature image so people can save your contact details
                  straight from the screen. Use the SVG export for crisp
                  rendering at any zoom level, and verify the colors keep strong
                  contrast against the slide background.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Storefront and reception desks</h3>
                <p>
                  Place a framed vCard QR code at a reception desk or shop
                  counter so customers can save your company contact in seconds.
                  If the card will be laminated or handled often, raise the error
                  correction level so light wear does not stop it from scanning.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Tips and Best Practices</h2>
            <div className="prose prose-gray max-w-none">
              <ul>
                <li>
                  <strong>Use higher error correction for dense vCards.</strong>{" "}
                  vCards hold multiple fields, so the QR code is busier. Levels Q
                  (25%) or H (30%) add resilience, while L (7%) and M (15%) keep
                  the pattern lighter when you only encode a name and phone.
                </li>
                <li>
                  <strong>Only fill the fields you need.</strong> Each extra
                  field adds data and makes the code denser. Including just name,
                  phone, and email keeps the code easier to scan than packing in
                  every option.
                </li>
                <li>
                  <strong>Size for the medium.</strong> Sizes range from 128px to
                  1024px. Export larger for booth signage and use SVG for print
                  so the code stays sharp at any scale.
                </li>
                <li>
                  <strong>Keep strong contrast.</strong> Dark foreground on a
                  light background scans best; avoid low-contrast brand color
                  pairs that can slow recognition.
                </li>
                <li>
                  <strong>Limit logo size and test the scan.</strong> Keep any
                  center logo between 10% and 30% of the code, raise error
                  correction to compensate, and scan the exported file on a real
                  phone to confirm the contact saves correctly.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Compared to Alternatives</h2>
            <div className="prose prose-gray max-w-none">
              <p>
                A vCard contains personal contact details, yet many online
                generators such as qr-code-generator.com and goqr.me build the
                code on their servers, meaning your name, phone, and email leave
                your device. QR Shuttle generates the vCard QR code entirely in
                your browser with qrcode.react, so that information stays local
                and is never transmitted.
              </p>
              <p>
                Free tiers on some commercial tools add watermarks, require an
                account, or push dynamic codes that route through a tracking
                redirect. QR Shuttle is free with no registration and no
                watermarks, and the vCard code it creates is static, so it keeps
                working without a subscription or a server that could later be
                shut down.
              </p>
              <p>
                You still get full customization: colors, square, dots, or
                rounded styles, adjustable size, an optional center logo, and
                PNG, SVG, or JPG export. The local-only workflow is the real
                advantage when the code carries someone&apos;s personal details.
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
