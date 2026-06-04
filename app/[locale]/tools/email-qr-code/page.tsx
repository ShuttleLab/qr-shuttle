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
  const canonical = "https://qr.shuttlelab.org/tools/email-qr-code/";

  if (locale === "zh") {
    const t = await getTranslations({ locale, namespace: "toolPages.emailQrCode" });
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
    title: "Email QR Code Generator | Free Online Tool",
    description:
      "Create QR codes that open a pre-filled email. Set recipient, subject, and body for support, feedback, and contact. Free, private, no registration.",
    alternates: { canonical },
    openGraph: {
      title: "Email QR Code Generator | Free Online Tool",
      description:
        "Create QR codes that open a pre-filled email. Set recipient, subject, and body for support, feedback, and contact.",
      siteName: "QR Shuttle",
      type: "website",
      locale: "en_US",
    },
  };
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create an Email QR Code",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      text: "Select the Email QR code type from the generator",
    },
    {
      "@type": "HowToStep",
      position: 2,
      text: "Enter the recipient email address people should write to",
    },
    {
      "@type": "HowToStep",
      position: 3,
      text: "Optionally pre-fill the subject line and message body",
    },
    {
      "@type": "HowToStep",
      position: 4,
      text: "Generate and download the QR code for your contact materials",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What happens when someone scans an email QR code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The code holds a standard mailto: link. When scanned, the phone opens the default email app with the recipient address already filled in, plus any subject and body you pre-set. The person only has to review and tap send, which removes the friction of typing an address.",
      },
    },
    {
      "@type": "Question",
      name: "Can I pre-fill the subject and message body?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. QR Shuttle lets you set a recipient, a subject line, and a body. A pre-filled subject is especially useful for support and feedback, because it routes the message to the right queue and tells you which campaign or page the scan came from.",
      },
    },
    {
      "@type": "Question",
      name: "Which email app opens when the code is scanned?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The device opens whatever app is set as the default mail handler, such as Apple Mail, Gmail, or Outlook. Because mailto: is a universal standard, you do not need to target a specific provider, and the same code works across iOS and Android.",
      },
    },
    {
      "@type": "Question",
      name: "Will my email address be visible in the QR code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The address is encoded in the pattern but is not human readable until the code is scanned. It is the same address you are already publishing for contact, so an email QR code does not expose anything you were not already sharing.",
      },
    },
    {
      "@type": "Question",
      name: "Is the email QR code generator free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. QR Shuttle is free with no registration and no watermarks. The code is generated entirely in your browser, so the recipient, subject, and body you enter are never uploaded to a server.",
      },
    },
  ],
};

const techArticleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Email QR Code Generator - Free Online Tool",
  description:
    "Learn how to create email QR codes that open a pre-filled mailto: message for support, feedback, and contact. Free, private, and built in your browser.",
  author: {
    "@type": "Organization",
    name: "ShuttleLab",
  },
  publisher: {
    "@type": "Organization",
    name: "ShuttleLab",
    url: "https://shuttlelab.org",
  },
  url: "https://qr.shuttlelab.org/tools/email-qr-code/",
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
      name: "Email QR Code",
      item: "https://qr.shuttlelab.org/tools/email-qr-code/",
    },
  ],
};

export default async function EmailQrCodePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  if (locale === "zh") {
    const t = await getTranslations({ locale, namespace: "toolPages.emailQrCode" });
    const tc = await getTranslations({ locale, namespace: "toolPages" });
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
        <p className="text-lg text-muted-foreground mb-8">{t("subtitle")}</p>
        <div className="mb-12">
          <QRGenerator />
        </div>
        <p className="text-sm text-muted-foreground">
          <LocaleLink href="/tools/email-qr-code" locale="en" className="underline">
            {tc("viewFullGuide")}
          </LocaleLink>
        </p>
      </div>
    );
  }

  const faqs = [
    {
      question: "What happens when someone scans an email QR code?",
      answer:
        "The code holds a standard mailto: link. When scanned, the phone opens the default email app with the recipient address already filled in, plus any subject and body you pre-set. The person only has to review and tap send, which removes the friction of typing an address.",
    },
    {
      question: "Can I pre-fill the subject and message body?",
      answer:
        "Yes. QR Shuttle lets you set a recipient, a subject line, and a body. A pre-filled subject is especially useful for support and feedback, because it routes the message to the right queue and tells you which campaign or page the scan came from.",
    },
    {
      question: "Which email app opens when the code is scanned?",
      answer:
        "The device opens whatever app is set as the default mail handler, such as Apple Mail, Gmail, or Outlook. Because mailto: is a universal standard, you do not need to target a specific provider, and the same code works across iOS and Android.",
    },
    {
      question: "Will my email address be visible in the QR code?",
      answer:
        "The address is encoded in the pattern but is not human readable until the code is scanned. It is the same address you are already publishing for contact, so an email QR code does not expose anything you were not already sharing.",
    },
    {
      question: "Is the email QR code generator free?",
      answer:
        "Yes. QR Shuttle is free with no registration and no watermarks. The code is generated entirely in your browser, so the recipient, subject, and body you enter are never uploaded to a server.",
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
        <h1 className="text-3xl font-bold mb-4">Email QR Code Generator</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Create QR codes that open a pre-filled email. Set recipient, subject,
          and body for support, feedback, and contact. Free, private, no
          registration.
        </p>

        <div className="mb-12">
          <QRGenerator />
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">
              How to Create an Email QR Code
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  step: "1",
                  title: "Select Email Type",
                  description:
                    "Choose Email QR code from the generator options",
                },
                {
                  step: "2",
                  title: "Enter Recipient",
                  description:
                    "Add the email address people should write to",
                },
                {
                  step: "3",
                  title: "Pre-fill the Message",
                  description:
                    "Optionally set a subject line and message body",
                },
                {
                  step: "4",
                  title: "Download & Share",
                  description:
                    "Generate and place the code on your contact materials",
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
            <h2 className="text-2xl font-bold mb-4">How Email QR Codes Work</h2>
            <div className="prose prose-gray max-w-none">
              <p>
                An email QR code encodes a standard mailto: link, the same kind
                of link a web page uses to launch a new message. When a phone
                camera reads it, the default mail app opens with the recipient
                address already in place. If you supplied a subject and body,
                those appear too, so the person only needs to review and send.
                That single step removes the friction of copying an address by
                hand, which is where most contact attempts quietly fail.
              </p>
              <p>
                Because the format is a universal standard rather than a
                provider-specific trick, the same code works whether the scanner
                uses Apple Mail, Gmail, Outlook, or anything else set as the
                default handler. There is no app to install and no account to
                connect, which makes the code dependable on printed material
                that may be scanned years after it was created.
              </p>
              <h3>Benefits of Email QR Codes</h3>
              <ul>
                <li>
                  <strong>One-scan contact:</strong> People reach you without
                  typing or mistyping your address.
                </li>
                <li>
                  <strong>Pre-filled context:</strong> A set subject and body
                  route the message correctly and prompt the right details.
                </li>
                <li>
                  <strong>Marketing and print:</strong> Ideal for flyers,
                  business cards, and packaging that invite a reply.
                </li>
                <li>
                  <strong>Support and feedback:</strong> A dedicated address with
                  a preset subject sends inquiries straight to the right inbox.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Common Scenarios</h2>
            <div className="prose prose-gray max-w-none space-y-4">
              <div>
                <h3 className="font-semibold">Customer support contact</h3>
                <p>
                  Print an email QR code on a product manual, warranty card, or
                  receipt so a customer with a problem reaches support in one
                  scan. Pre-fill the subject with something like a support tag so
                  the message lands in the right queue and your team can see at a
                  glance where the inquiry originated.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Feedback and reviews</h3>
                <p>
                  Place a code on a table tent, packaging insert, or event badge
                  inviting feedback. A pre-filled subject and a short prompt in
                  the body lower the barrier to writing, so you collect more
                  honest responses than a bare address would ever attract.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Business cards and signatures</h3>
                <p>
                  Add an email code to a business card or printed flyer so a new
                  contact can message you immediately while the conversation is
                  fresh. Because QR Shuttle builds the code in your browser, the
                  address you enter is never sent to a third-party server.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Job applications and intake</h3>
                <p>
                  On a hiring poster or intake form, an email code with a preset
                  subject keeps incoming messages organized by role or program.
                  Use a higher error correction level if the card will be
                  laminated or handled often so wear does not stop the scan.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Tips and Best Practices</h2>
            <div className="prose prose-gray max-w-none">
              <ul>
                <li>
                  <strong>Use a monitored address.</strong> Point the code at an
                  inbox someone actually watches. A dedicated support or feedback
                  alias is better than a personal address that may go stale.
                </li>
                <li>
                  <strong>Pre-fill a useful subject.</strong> A clear, consistent
                  subject line routes messages automatically and tells you which
                  printed piece drove the contact.
                </li>
                <li>
                  <strong>Keep the body short.</strong> A brief prompt invites a
                  reply; a long template discourages it. Leave room for the
                  person to write in their own words.
                </li>
                <li>
                  <strong>Mind the error correction.</strong> QR Shuttle offers
                  L, M, Q, and H. Raise the level for laminated or frequently
                  handled cards so minor wear does not break the scan.
                </li>
                <li>
                  <strong>Test before printing.</strong> Scan the exported PNG,
                  SVG, or JPG with a real phone to confirm the right address,
                  subject, and body appear before producing a batch.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Compared to Alternatives</h2>
            <div className="prose prose-gray max-w-none">
              <p>
                Many online generators such as qr-code-generator.com and
                goqr.me build the code on their servers, which means the
                recipient address, subject, and body you enter are transmitted
                off your device. QR Shuttle generates the email code entirely in
                your browser with qrcode.react, so that contact information stays
                local and is never sent anywhere.
              </p>
              <p>
                Free tiers elsewhere often add watermarks, require an account, or
                push you toward paid dynamic codes that route through their
                servers and can stop working if the subscription lapses. QR
                Shuttle is free with no registration and no watermarks, and the
                email code it produces is static, so it keeps opening the right
                message without depending on anyone&apos;s server staying online.
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
