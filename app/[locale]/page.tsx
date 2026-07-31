import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { QRGenerator } from "@/components/qr-generator";
import { routing } from "@/i18n/routing";
import {
  Shield,
  Layers,
  Palette,
  Zap,
  UserPlus,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "home" });
  const base = locale === routing.defaultLocale ? "" : `/${locale}`;
  const toolHref = (slug: string) => `${base}/tools/${slug}/`;

  const templateLinks: { key: string; slug: string }[] = [
    { key: "url", slug: "url-qr-code" },
    { key: "wifi", slug: "wifi-qr-code" },
    { key: "vcard", slug: "vcard-qr-code" },
    { key: "email", slug: "email-qr-code" },
    { key: "text", slug: "text-qr-code" },
    { key: "sms", slug: "text-qr-code" },
  ];

  const features = [
    {
      icon: <Shield className="size-6" />,
      title: t("features.items.private.title"),
      description: t("features.items.private.description"),
    },
    {
      icon: <Layers className="size-6" />,
      title: t("features.items.types.title"),
      description: t("features.items.types.description"),
    },
    {
      icon: <Palette className="size-6" />,
      title: t("features.items.custom.title"),
      description: t("features.items.custom.description"),
    },
    {
      icon: <Zap className="size-6" />,
      title: t("features.items.quality.title"),
      description: t("features.items.quality.description"),
    },
    {
      icon: <UserPlus className="size-6" />,
      title: t("features.items.free.title"),
      description: t("features.items.free.description"),
    },
    {
      icon: <Sparkles className="size-6" />,
      title: t("features.items.nowatermark.title"),
      description: t("features.items.nowatermark.description"),
    },
  ];

  const steps = [
    {
      step: "1",
      title: t("howItWorks.steps.step1.title"),
      description: t("howItWorks.steps.step1.description"),
    },
    {
      step: "2",
      title: t("howItWorks.steps.step2.title"),
      description: t("howItWorks.steps.step2.description"),
    },
    {
      step: "3",
      title: t("howItWorks.steps.step3.title"),
      description: t("howItWorks.steps.step3.description"),
    },
  ];

  return (
    <div className="space-y-12 pb-16">
      <section className="text-center pt-8 pb-4 px-4">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {t("hero.title")}
        </h1>
        <p className="mt-2 text-base text-muted-foreground max-w-2xl mx-auto">
          {t("hero.subtitle")}
        </p>
      </section>

      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <QRGenerator />
        </div>
      </section>

      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">
            {t("features.title")}
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            {t("features.subtitle")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 rounded-lg border bg-card"
              >
                <div className="text-primary">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">
            {t("howItWorks.title")}
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            {t("howItWorks.subtitle")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">{t("whyMatters.title")}</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {t("whyMatters.p1")}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {t("whyMatters.p2")}
          </p>
        </div>
      </section>

      <section className="px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">{t("comparison.title")}</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {t("comparison.p1")}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {t("comparison.p2")}
          </p>
        </div>
      </section>

      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">
            {t("templates.title")}
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            {t("templates.subtitle")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {templateLinks.map(({ key, slug }) => (
              <Link
                key={key}
                href={toolHref(slug)}
                className="group flex items-center justify-between gap-4 p-4 rounded-lg border bg-card hover:border-primary/50 transition-colors"
              >
                <div>
                  <h3 className="font-semibold">
                    {t(`templates.items.${key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(`templates.items.${key}.description`)}
                  </p>
                </div>
                <ArrowRight className="size-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
