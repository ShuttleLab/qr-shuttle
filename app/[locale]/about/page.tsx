import { getTranslations, setRequestLocale } from "next-intl/server";
import AboutContent from "@/components/about-content";
import { AboutFaq } from "@/components/AboutFaq";
import { aboutFaqData } from "@/components/AboutFaqData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  const baseUrl = "https://qr.shuttlelab.org";
  const languages = Object.fromEntries(
    ["en", "zh"].map((l) => [
      l,
      l === "en" ? `${baseUrl}/about` : `${baseUrl}/${l}/about`,
    ])
  );

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "en" ? `${baseUrl}/about` : `${baseUrl}/${locale}/about`,
      languages: {
        ...languages,
        "x-default": `${baseUrl}/about`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      siteName: "QR Shuttle",
      type: "website",
      locale: locale === "zh" ? "zh_CN" : "en_US",
      alternateLocale: locale === "zh" ? ["en_US"] : ["zh_CN"],
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const { FAQS, HOWTOS } = aboutFaqData;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q.en,
      acceptedAnswer: { "@type": "Answer", text: item.a.en },
    })),
  };

  const howToSchemas = HOWTOS.map((ht) => ({
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: ht.name.en,
    step: ht.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text: s.en,
    })),
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {howToSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <AboutContent />
      <div className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <AboutFaq />
      </div>
    </>
  );
}
