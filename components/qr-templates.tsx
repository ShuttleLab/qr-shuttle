"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QR_TEMPLATES } from "@/lib/qr-templates";
import type { QRCodeType } from "@/lib/qr-utils";
import {
  Link,
  Wifi,
  User,
  Mail,
  MessageSquare,
  FileText,
} from "lucide-react";

interface QRTemplatesProps {
  onSelect: (type: QRCodeType, data: Record<string, string>) => void;
}

const ICONS: Record<QRCodeType, React.ReactNode> = {
  url: <Link className="size-5" />,
  wifi: <Wifi className="size-5" />,
  vcard: <User className="size-5" />,
  email: <Mail className="size-5" />,
  sms: <MessageSquare className="size-5" />,
  text: <FileText className="size-5" />,
  phone: <Link className="size-5" />,
  location: <Link className="size-5" />,
  event: <Link className="size-5" />,
};

export function QRTemplates({ onSelect }: QRTemplatesProps) {
  const t = useTranslations();

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold">
          {t("home.templates.title")}
        </h2>
        <p className="text-sm text-muted-foreground">
          {t("home.templates.subtitle")}
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {QR_TEMPLATES.map((template) => (
          <Card
            key={template.id}
            className="cursor-pointer hover:border-primary transition-colors"
            onClick={() => onSelect(template.id, template.defaultData)}
          >
            <CardHeader className="p-3">
              <div className="flex items-center gap-2">
                <div className="text-primary">
                  {ICONS[template.id]}
                </div>
                <CardTitle className="text-sm">
                  {t(template.titleKey)}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-3 pt-0">
              <p className="text-xs text-muted-foreground">
                {t(template.descriptionKey)}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
