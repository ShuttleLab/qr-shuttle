"use client";

import { useState, useRef, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { QRPreview } from "@/components/qr-preview";
import { QRControls } from "@/components/qr-controls";
import { QRExport } from "@/components/qr-export";
import { QRTemplates } from "@/components/qr-templates";
import {
  generateQRCodeValue,
  DEFAULT_QR_OPTIONS,
} from "@/lib/qr-utils";
import type { QRCodeType, QRCodeOptions } from "@/lib/qr-utils";
import { WIFI_ENCRYPTION_TYPES } from "@/lib/constants";

export function QRGenerator() {
  const t = useTranslations();
  const [activeType, setActiveType] = useState<QRCodeType>("url");
  const [options, setOptions] = useState<QRCodeOptions>(DEFAULT_QR_OPTIONS);
  const [formData, setFormData] = useState<Record<string, string>>({
    url: "",
    text: "",
    ssid: "",
    password: "",
    encryption: "WPA",
    hidden: "false",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    company: "",
    title: "",
    to: "",
    subject: "",
    body: "",
    message: "",
    latitude: "",
    longitude: "",
    start: "",
    end: "",
    location: "",
    description: "",
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const svgContainerRef = useRef<HTMLDivElement>(null);

  const handleTypeChange = useCallback((type: QRCodeType) => {
    setActiveType(type);
    setOptions((prev) => ({ ...prev, type }));
  }, []);

  const handleTemplateSelect = useCallback(
    (type: QRCodeType, data: Record<string, string>) => {
      setActiveType(type);
      setFormData((prev) => ({ ...prev, ...data }));
      setOptions((prev) => ({ ...prev, type }));
    },
    []
  );

  const updateFormData = useCallback(
    (key: string, value: string) => {
      setFormData((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const handleLogoUpload = useCallback((file: File) => {
    const url = URL.createObjectURL(file);
    setOptions((prev) => ({ ...prev, logoUrl: url }));
  }, []);

  const handleRemoveLogo = useCallback(() => {
    if (options.logoUrl) {
      URL.revokeObjectURL(options.logoUrl);
    }
    setOptions((prev) => ({ ...prev, logoUrl: undefined }));
  }, [options.logoUrl]);

  const qrValue = generateQRCodeValue(activeType, formData);

  const renderTypeInputs = () => {
    switch (activeType) {
      case "url":
        return (
          <div className="space-y-2">
            <Label>{t("home.generator.inputs.url.label")}</Label>
            <Input
              value={formData.url}
              onChange={(e) => updateFormData("url", e.target.value)}
              placeholder={t("home.generator.inputs.url.placeholder")}
            />
          </div>
        );

      case "text":
        return (
          <div className="space-y-2">
            <Label>{t("home.generator.inputs.text.label")}</Label>
            <Input
              value={formData.text}
              onChange={(e) => updateFormData("text", e.target.value)}
              placeholder={t("home.generator.inputs.text.placeholder")}
            />
          </div>
        );

      case "wifi":
        return (
          <div className="space-y-3">
            <div className="space-y-2">
              <Label>{t("home.generator.inputs.wifi.ssid.label")}</Label>
              <Input
                value={formData.ssid}
                onChange={(e) => updateFormData("ssid", e.target.value)}
                placeholder={t(
                  "home.generator.inputs.wifi.ssid.placeholder"
                )}
              />
            </div>
            <div className="space-y-2">
              <Label>{t("home.generator.inputs.wifi.password.label")}</Label>
              <Input
                type="password"
                value={formData.password}
                onChange={(e) => updateFormData("password", e.target.value)}
                placeholder={t(
                  "home.generator.inputs.wifi.password.placeholder"
                )}
              />
            </div>
            <div className="space-y-2">
              <Label>
                {t("home.generator.inputs.wifi.encryption.label")}
              </Label>
              <Select
                value={formData.encryption}
                onValueChange={(value) => updateFormData("encryption", value || "WPA")}
              >
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder={t(
                      "home.generator.inputs.wifi.encryption.placeholder"
                    )}
                  />
                </SelectTrigger>
                <SelectContent>
                  {WIFI_ENCRYPTION_TYPES.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {t(
                        `home.generator.inputs.wifi.encryption.options.${type.value}`
                      )}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="hidden"
                checked={formData.hidden === "true"}
                onCheckedChange={(checked) =>
                  updateFormData("hidden", checked.toString())
                }
              />
              <Label htmlFor="hidden">
                {t("home.generator.inputs.wifi.hidden.label")}
              </Label>
            </div>
          </div>
        );

      case "vcard":
        return (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label>
                  {t("home.generator.inputs.vcard.firstName.label")}
                </Label>
                <Input
                  value={formData.firstName}
                  onChange={(e) =>
                    updateFormData("firstName", e.target.value)
                  }
                  placeholder={t(
                    "home.generator.inputs.vcard.firstName.placeholder"
                  )}
                />
              </div>
              <div className="space-y-2">
                <Label>
                  {t("home.generator.inputs.vcard.lastName.label")}
                </Label>
                <Input
                  value={formData.lastName}
                  onChange={(e) =>
                    updateFormData("lastName", e.target.value)
                  }
                  placeholder={t(
                    "home.generator.inputs.vcard.lastName.placeholder"
                  )}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>{t("home.generator.inputs.vcard.phone.label")}</Label>
              <Input
                value={formData.phone}
                onChange={(e) => updateFormData("phone", e.target.value)}
                placeholder={t(
                  "home.generator.inputs.vcard.phone.placeholder"
                )}
              />
            </div>
            <div className="space-y-2">
              <Label>{t("home.generator.inputs.vcard.email.label")}</Label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                placeholder={t(
                  "home.generator.inputs.vcard.email.placeholder"
                )}
              />
            </div>
            <div className="space-y-2">
              <Label>{t("home.generator.inputs.vcard.company.label")}</Label>
              <Input
                value={formData.company}
                onChange={(e) => updateFormData("company", e.target.value)}
                placeholder={t(
                  "home.generator.inputs.vcard.company.placeholder"
                )}
              />
            </div>
            <div className="space-y-2">
              <Label>{t("home.generator.inputs.vcard.title.label")}</Label>
              <Input
                value={formData.title}
                onChange={(e) => updateFormData("title", e.target.value)}
                placeholder={t(
                  "home.generator.inputs.vcard.title.placeholder"
                )}
              />
            </div>
            <div className="space-y-2">
              <Label>{t("home.generator.inputs.vcard.url.label")}</Label>
              <Input
                value={formData.url}
                onChange={(e) => updateFormData("url", e.target.value)}
                placeholder={t(
                  "home.generator.inputs.vcard.url.placeholder"
                )}
              />
            </div>
          </div>
        );

      case "email":
        return (
          <div className="space-y-3">
            <div className="space-y-2">
              <Label>{t("home.generator.inputs.email.to.label")}</Label>
              <Input
                type="email"
                value={formData.to}
                onChange={(e) => updateFormData("to", e.target.value)}
                placeholder={t(
                  "home.generator.inputs.email.to.placeholder"
                )}
              />
            </div>
            <div className="space-y-2">
              <Label>{t("home.generator.inputs.email.subject.label")}</Label>
              <Input
                value={formData.subject}
                onChange={(e) => updateFormData("subject", e.target.value)}
                placeholder={t(
                  "home.generator.inputs.email.subject.placeholder"
                )}
              />
            </div>
            <div className="space-y-2">
              <Label>{t("home.generator.inputs.email.body.label")}</Label>
              <Input
                value={formData.body}
                onChange={(e) => updateFormData("body", e.target.value)}
                placeholder={t(
                  "home.generator.inputs.email.body.placeholder"
                )}
              />
            </div>
          </div>
        );

      case "sms":
        return (
          <div className="space-y-3">
            <div className="space-y-2">
              <Label>{t("home.generator.inputs.sms.phone.label")}</Label>
              <Input
                value={formData.phone}
                onChange={(e) => updateFormData("phone", e.target.value)}
                placeholder={t(
                  "home.generator.inputs.sms.phone.placeholder"
                )}
              />
            </div>
            <div className="space-y-2">
              <Label>{t("home.generator.inputs.sms.message.label")}</Label>
              <Input
                value={formData.message}
                onChange={(e) => updateFormData("message", e.target.value)}
                placeholder={t(
                  "home.generator.inputs.sms.message.placeholder"
                )}
              />
            </div>
          </div>
        );

      case "phone":
        return (
          <div className="space-y-2">
            <Label>{t("home.generator.inputs.phone.number.label")}</Label>
            <Input
              value={formData.phone}
              onChange={(e) => updateFormData("phone", e.target.value)}
              placeholder={t(
                "home.generator.inputs.phone.number.placeholder"
              )}
            />
          </div>
        );

      case "location":
        return (
          <div className="space-y-3">
            <div className="space-y-2">
              <Label>
                {t("home.generator.inputs.location.latitude.label")}
              </Label>
              <Input
                type="number"
                value={formData.latitude}
                onChange={(e) => updateFormData("latitude", e.target.value)}
                placeholder={t(
                  "home.generator.inputs.location.latitude.placeholder"
                )}
              />
            </div>
            <div className="space-y-2">
              <Label>
                {t("home.generator.inputs.location.longitude.label")}
              </Label>
              <Input
                type="number"
                value={formData.longitude}
                onChange={(e) =>
                  updateFormData("longitude", e.target.value)
                }
                placeholder={t(
                  "home.generator.inputs.location.longitude.placeholder"
                )}
              />
            </div>
          </div>
        );

      case "event":
        return (
          <div className="space-y-3">
            <div className="space-y-2">
              <Label>{t("home.generator.inputs.event.title.label")}</Label>
              <Input
                value={formData.title}
                onChange={(e) => updateFormData("title", e.target.value)}
                placeholder={t(
                  "home.generator.inputs.event.title.placeholder"
                )}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label>{t("home.generator.inputs.event.start.label")}</Label>
                <Input
                  type="datetime-local"
                  value={formData.start}
                  onChange={(e) => updateFormData("start", e.target.value)}
                  placeholder={t(
                    "home.generator.inputs.event.start.placeholder"
                  )}
                />
              </div>
              <div className="space-y-2">
                <Label>{t("home.generator.inputs.event.end.label")}</Label>
                <Input
                  type="datetime-local"
                  value={formData.end}
                  onChange={(e) => updateFormData("end", e.target.value)}
                  placeholder={t(
                    "home.generator.inputs.event.end.placeholder"
                  )}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>
                {t("home.generator.inputs.event.location.label")}
              </Label>
              <Input
                value={formData.location}
                onChange={(e) => updateFormData("location", e.target.value)}
                placeholder={t(
                  "home.generator.inputs.event.location.placeholder"
                )}
              />
            </div>
            <div className="space-y-2">
              <Label>
                {t("home.generator.inputs.event.description.label")}
              </Label>
              <Input
                value={formData.description}
                onChange={(e) =>
                  updateFormData("description", e.target.value)
                }
                placeholder={t(
                  "home.generator.inputs.event.description.placeholder"
                )}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      <QRTemplates onSelect={handleTemplateSelect} />

      <Card>
        <CardHeader>
          <CardTitle>{t("home.generator.title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs
            value={activeType}
            onValueChange={(value) => handleTypeChange(value as QRCodeType)}
          >
            <TabsList className="grid h-auto w-full grid-cols-3 gap-1 sm:grid-cols-5 lg:grid-cols-9">
              <TabsTrigger value="url" className="h-10 whitespace-normal">
                {t("home.generator.tabs.url")}
              </TabsTrigger>
              <TabsTrigger value="text" className="h-10 whitespace-normal">
                {t("home.generator.tabs.text")}
              </TabsTrigger>
              <TabsTrigger value="wifi" className="h-10 whitespace-normal">
                {t("home.generator.tabs.wifi")}
              </TabsTrigger>
              <TabsTrigger value="vcard" className="h-10 whitespace-normal">
                {t("home.generator.tabs.vcard")}
              </TabsTrigger>
              <TabsTrigger value="email" className="h-10 whitespace-normal">
                {t("home.generator.tabs.email")}
              </TabsTrigger>
              <TabsTrigger value="sms" className="h-10 whitespace-normal">
                {t("home.generator.tabs.sms")}
              </TabsTrigger>
              <TabsTrigger value="phone" className="h-10 whitespace-normal">
                {t("home.generator.tabs.phone")}
              </TabsTrigger>
              <TabsTrigger value="location" className="h-10 whitespace-normal">
                {t("home.generator.tabs.location")}
              </TabsTrigger>
              <TabsTrigger value="event" className="h-10 whitespace-normal">
                {t("home.generator.tabs.event")}
              </TabsTrigger>
            </TabsList>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <TabsContent value={activeType} className="mt-0">
                  {renderTypeInputs()}
                </TabsContent>
              </div>

              <div className="space-y-6">
                <div ref={svgContainerRef}>
                  <QRPreview
                    value={qrValue}
                    options={options}
                    canvasRef={canvasRef}
                  />
                </div>

                <QRControls
                  options={options}
                  onChange={setOptions}
                  onLogoUpload={handleLogoUpload}
                  onRemoveLogo={handleRemoveLogo}
                />

                <QRExport
                  type={activeType}
                  canvasRef={canvasRef}
                  svgContainerRef={svgContainerRef}
                />
              </div>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
