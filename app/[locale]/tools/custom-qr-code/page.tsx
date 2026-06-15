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
  const canonical = "https://qr.shuttlelab.org/tools/custom-qr-code/";

  if (locale === "zh") {
    const t = await getTranslations({ locale, namespace: "toolPages.customQrCode" });
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
    title: "Custom QR Code with Logo | Free Online Tool",
    description:
      "Create custom QR codes with your logo and brand colors. Match QR codes to your brand identity for marketing and packaging. Free, private, no registration.",
    alternates: { canonical },
    openGraph: {
      title: "Custom QR Code with Logo | Free Online Tool",
      description:
        "Create custom QR codes with your logo and brand colors. Match QR codes to your brand identity for marketing and packaging.",
      siteName: "QR Shuttle",
      type: "website",
      locale: "en_US",
    },
  };
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a Custom QR Code with a Logo",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      text: "Enter the URL, text, or other content you want the QR code to carry",
    },
    {
      "@type": "HowToStep",
      position: 2,
      text: "Set your brand foreground and background colors with the color pickers or presets",
    },
    {
      "@type": "HowToStep",
      position: 3,
      text: "Upload your logo and adjust its size, then raise the error correction level for reliable scanning",
    },
    {
      "@type": "HowToStep",
      position: 4,
      text: "Export the finished code as PNG, SVG, or JPG for your marketing materials",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does adding a logo break the QR code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not if you plan for it. QR codes include error correction that lets a scanner read the code even when part of it is covered. Use the highest level (H, around 30% recovery) and keep the logo within roughly 10-30% of the code area so the scanner has enough data to reconstruct what the logo obscures.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use my exact brand colors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. QR Shuttle lets you pick any foreground and background color with a color picker or quick presets. The only rule is contrast: keep a dark module color on a light background so cameras can tell the pattern apart. Light-on-light or low-contrast pairs scan slowly or not at all.",
      },
    },
    {
      "@type": "Question",
      name: "What styles and sizes are available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can render the modules as square, dots, or rounded, and size the code anywhere from 128px to 1024px. Squares are the safest for difficult scans, while dots and rounded styles look more refined on premium packaging and marketing pieces.",
      },
    },
    {
      "@type": "Question",
      name: "Which format should I export for print?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Export SVG for anything printed. SVG is vector based, so it stays razor sharp at any size, from a business card to a billboard. Use PNG for screens and digital use, and JPG only when a tool specifically requires it.",
      },
    },
    {
      "@type": "Question",
      name: "Is the custom QR code generator free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. QR Shuttle is completely free with no account, no watermarks, and no limits on how many branded codes you create. Everything runs in your browser, so your logo and content are never uploaded to a server.",
      },
    },
  ],
};

const techArticleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Custom QR Code with Logo - Free Online Tool",
  description:
    "Learn how to design branded QR codes with custom colors, a center logo, module styles, and print-ready export. Free, private, and built entirely in your browser.",
  author: {
    "@type": "Organization",
    name: "ShuttleLab",
  },
  publisher: {
    "@type": "Organization",
    name: "ShuttleLab",
    url: "https://shuttlelab.org",
  },
  url: "https://qr.shuttlelab.org/tools/custom-qr-code/",
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
      name: "Custom QR Code",
      item: "https://qr.shuttlelab.org/tools/custom-qr-code/",
    },
  ],
};

export default async function CustomQrCodePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  if (locale === "zh") {
    const t = await getTranslations({ locale, namespace: "toolPages.customQrCode" });
    const tc = await getTranslations({ locale, namespace: "toolPages" });
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
        <p className="text-lg text-muted-foreground mb-8">{t("subtitle")}</p>
        <div className="mb-12">
          <QRGenerator />
        </div>
        <p className="text-sm text-muted-foreground">
          <LocaleLink href="/tools/custom-qr-code" locale="en" className="underline">
            {tc("viewFullGuide")}
          </LocaleLink>
        </p>
      </div>
    );
  }

  const faqs = [
    {
      question: "Does adding a logo break the QR code?",
      answer:
        "Not if you plan for it. QR codes include error correction that lets a scanner read the code even when part of it is covered. Use the highest level (H, around 30% recovery) and keep the logo within roughly 10-30% of the code area so the scanner has enough data to reconstruct what the logo obscures.",
    },
    {
      question: "Can I use my exact brand colors?",
      answer:
        "Yes. QR Shuttle lets you pick any foreground and background color with a color picker or quick presets. The only rule is contrast: keep a dark module color on a light background so cameras can tell the pattern apart. Light-on-light or low-contrast pairs scan slowly or not at all.",
    },
    {
      question: "What styles and sizes are available?",
      answer:
        "You can render the modules as square, dots, or rounded, and size the code anywhere from 128px to 1024px. Squares are the safest for difficult scans, while dots and rounded styles look more refined on premium packaging and marketing pieces.",
    },
    {
      question: "Which format should I export for print?",
      answer:
        "Export SVG for anything printed. SVG is vector based, so it stays razor sharp at any size, from a business card to a billboard. Use PNG for screens and digital use, and JPG only when a tool specifically requires it.",
    },
    {
      question: "Is the custom QR code generator free?",
      answer:
        "Yes. QR Shuttle is completely free with no account, no watermarks, and no limits on how many branded codes you create. Everything runs in your browser, so your logo and content are never uploaded to a server.",
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
        <h1 className="text-3xl font-bold mb-4">Custom QR Code with Logo</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Create custom QR codes with your logo and brand colors. Match QR
          codes to your brand identity for marketing and packaging. Free,
          private, no registration.
        </p>

        <div className="mb-12">
          <QRGenerator />
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">
              How to Create a Custom QR Code
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  step: "1",
                  title: "Add Your Content",
                  description:
                    "Enter the URL, text, or other data the code should carry",
                },
                {
                  step: "2",
                  title: "Set Brand Colors",
                  description:
                    "Pick foreground and background colors or use the presets",
                },
                {
                  step: "3",
                  title: "Upload Your Logo",
                  description:
                    "Drop in a logo, size it, and raise error correction to H",
                },
                {
                  step: "4",
                  title: "Export for Print",
                  description:
                    "Download as SVG for print or PNG for screens",
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
              Why Customize Your QR Codes?
            </h2>
            <div className="prose prose-gray max-w-none">
              <p>
                A plain black-and-white QR code works, but it says nothing about
                who you are. A custom QR code turns that functional square into
                a piece of brand collateral. By dropping in your logo and
                applying your brand palette, the code becomes recognizable at a
                glance and signals that the scan is legitimate, which measurably
                improves the confidence people have before pointing a camera at
                it.
              </p>
              <p>
                Branded codes earn their place on marketing material and product
                packaging because they reinforce identity at the exact moment a
                customer chooses to engage. The same care you put into a label
                or an ad should extend to the QR code printed on it. QR Shuttle
                gives you every lever you need to do that without a designer or
                a subscription.
              </p>
              <h3>Customization Options</h3>
              <ul>
                <li>
                  <strong>Logo upload:</strong> Place your logo in the center of
                  the code, with an adjustable logo size so it sits cleanly
                  within the pattern.
                </li>
                <li>
                  <strong>Color customization:</strong> Choose any foreground
                  and background color with a picker or curated presets, and
                  toggle a transparent background when you need to drop the code
                  onto a colored layout.
                </li>
                <li>
                  <strong>Module styles:</strong> Switch between square, dots,
                  and rounded module shapes to match the tone of your design.
                </li>
                <li>
                  <strong>Size control:</strong> Render anywhere from 128px to
                  1024px so the code fits a business card or a poster equally
                  well.
                </li>
                <li>
                  <strong>Error correction:</strong> Pick from L, M, Q, and H so
                  the code stays scannable even with a logo covering the center.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Common Scenarios</h2>
            <div className="prose prose-gray max-w-none space-y-4">
              <div>
                <h3 className="font-semibold">Product packaging and labels</h3>
                <p>
                  A branded code on a box or label links shoppers to setup
                  guides, authenticity checks, or registration pages without
                  crowding the design. Use a rounded or dots style with your
                  brand color, keep the logo modest, and export SVG so the print
                  shop can scale it to the exact dimensions of the die line
                  without any loss of sharpness.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">
                  Marketing flyers, posters, and ads
                </h3>
                <p>
                  On printed campaigns the QR code is often the bridge from a
                  physical surface to a landing page. A code that carries your
                  logo and palette feels like part of the creative rather than a
                  bolt-on. Generate it larger for posters viewed from a distance
                  and keep strong contrast so it reads under uneven lighting.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Business cards and stationery</h3>
                <p>
                  A small branded code on a business card can open your vCard,
                  portfolio, or booking page. Because the printed area is tiny,
                  export SVG, keep error correction high in case of smudging,
                  and avoid an oversized logo that would crowd the limited
                  module space.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Retail signage and storefronts</h3>
                <p>
                  Window decals and shelf talkers benefit from a code that
                  matches store branding. Since QR Shuttle builds everything in
                  your browser, you can iterate on colors and styles quickly,
                  preview the result live, and only export once the code looks
                  right and scans cleanly on a real phone.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Tips and Best Practices</h2>
            <div className="prose prose-gray max-w-none">
              <ul>
                <li>
                  <strong>Raise error correction when adding a logo.</strong>{" "}
                  Set the level to H (around 30% recovery) so the scanner can
                  rebuild the data the logo covers. This is the single most
                  important setting for branded codes.
                </li>
                <li>
                  <strong>Keep the logo proportionate.</strong> Hold the logo
                  size between 10% and 30% of the code area. Larger than that and
                  you risk obscuring more modules than error correction can
                  recover.
                </li>
                <li>
                  <strong>Protect contrast over aesthetics.</strong> Brand
                  colors are great, but a dark foreground on a light background
                  always scans best. If your palette is light, darken the module
                  color rather than the background.
                </li>
                <li>
                  <strong>Match style to surface.</strong> Use square modules for
                  the hardest scans and small print, and reserve dots or rounded
                  styles for larger, premium pieces where legibility is not at
                  risk.
                </li>
                <li>
                  <strong>Export SVG for print, PNG for screens.</strong> Vector
                  SVG scales without pixelation, which matters when a printer
                  resizes your artwork. Always scan the final export with a real
                  phone before committing to a print run.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Compared to Alternatives</h2>
            <div className="prose prose-gray max-w-none">
              <p>
                Many branded QR generators, including qr-code-generator.com and
                qrcode-monkey.com, process your design on their servers and gate
                the better customization or watermark-free downloads behind a
                paid plan or an account. That also means the content and logo you
                upload travel off your device. QR Shuttle builds the entire code
                in your browser with qrcode.react, so your logo and data stay
                local and nothing is transmitted anywhere.
              </p>
              <p>
                The static codes QR Shuttle produces have no expiry and no
                server redirect that a vendor could later disable, so a code
                printed on packaging keeps working indefinitely. There are no
                watermarks and no registration, which removes the usual friction
                of free tiers elsewhere.
              </p>
              <p>
                You still get the full customization set that branding work
                demands: foreground and background colors, square, dots, or
                rounded module styles, adjustable size, an optional center logo,
                a transparent-background toggle, and PNG, SVG, or JPG export. For
                a deeper feature-by-feature breakdown, see the{" "}
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
