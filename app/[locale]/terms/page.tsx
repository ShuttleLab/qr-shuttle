import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "terms" });

  const baseUrl = "https://qr.shuttlelab.org";
  const languages = Object.fromEntries(
    ["en", "zh"].map((l) => [
      l,
      l === "en" ? `${baseUrl}/` : `${baseUrl}/${l}`,
    ])
  );

  return {
    title: t("title"),
    description: t("subtitle"),
    alternates: {
      canonical: locale === "en" ? `${baseUrl}/terms` : `${baseUrl}/${locale}/terms`,
      languages: {
        ...languages,
        "x-default": `${baseUrl}/terms`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("subtitle"),
      siteName: "QR Shuttle",
      type: "website",
      locale: locale === "zh" ? "zh_CN" : "en_US",
      alternateLocale: locale === "zh" ? ["en_US"] : ["zh_CN"],
    },
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "terms" });

  const sections = [
    "service",
    "license",
    "limitations",
    "intellectualProperty",
    "changes",
    "contact",
  ] as const;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
        <p className="text-xl text-muted-foreground">{t("subtitle")}</p>
        <p className="text-sm text-muted-foreground mt-2">
          {t("lastUpdated")}
        </p>
      </div>

      <div className="space-y-6">
        {sections.map((section) => (
          <Card key={section}>
            <CardHeader>
              <CardTitle>{t(`sections.${section}.title`)}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {t(`sections.${section}.content`)}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
