import { getTranslations, setRequestLocale } from "next-intl/server";
import { QRGenerator } from "@/components/qr-generator";
import {
  Shield,
  Layers,
  Palette,
  Zap,
  UserPlus,
  Sparkles,
} from "lucide-react";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "home" });

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
      <section className="text-center py-12 px-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {t("hero.title")}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {t("hero.subtitle")}
        </p>
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
        <div className="max-w-7xl mx-auto">
          <QRGenerator />
        </div>
      </section>
    </div>
  );
}
