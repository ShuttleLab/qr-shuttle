"use client";

import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, Code, EyeOff, Sparkles } from "lucide-react";

export default function AboutContent() {
  const t = useTranslations();

  const features = [
    {
      icon: <Shield className="size-6" />,
      title: t("about.features.privacy.title"),
      description: t("about.features.privacy.description"),
    },
    {
      icon: <Code className="size-6" />,
      title: t("about.features.openSource.title"),
      description: t("about.features.openSource.description"),
    },
    {
      icon: <EyeOff className="size-6" />,
      title: t("about.features.noTracking.title"),
      description: t("about.features.noTracking.description"),
    },
    {
      icon: <Sparkles className="size-6" />,
      title: t("about.features.free.title"),
      description: t("about.features.free.description"),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">{t("about.title")}</h1>
        <p className="text-xl text-muted-foreground">{t("about.subtitle")}</p>
      </div>

      <div className="mb-12">
        <p className="text-lg leading-relaxed">{t("about.description")}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="text-primary">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <p className="text-muted-foreground">
          {t("about.description")}
        </p>
        <p className="mt-4">
          <a
            href="mailto:support@shuttlelab.org"
            className="text-primary hover:underline"
          >
            support@shuttlelab.org
          </a>
        </p>
      </div>
    </div>
  );
}
