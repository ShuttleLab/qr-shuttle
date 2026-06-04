"use client";

import { useTranslations } from "next-intl";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import type {
  QRCodeOptions,
  ErrorCorrectionLevel,
  QRStyle,
} from "@/lib/qr-utils";
import {
  ERROR_CORRECTION_LEVELS,
  QR_STYLES,
  PRESET_COLORS,
} from "@/lib/constants";

type ErrorLevelKey = "L" | "M" | "Q" | "H";
type StyleKey = "square" | "dots" | "rounded";

interface QRControlsProps {
  options: QRCodeOptions;
  onChange: (options: QRCodeOptions) => void;
  onLogoUpload: (file: File) => void;
  onRemoveLogo: () => void;
}

export function QRControls({
  options,
  onChange,
  onLogoUpload,
  onRemoveLogo,
}: QRControlsProps) {
  const t = useTranslations();

  const updateOption = <K extends keyof QRCodeOptions>(
    key: K,
    value: QRCodeOptions[K]
  ) => {
    onChange({ ...options, [key]: value });
  };

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-sm">
        {t("home.generator.controls.title")}
      </h3>

      <div className="space-y-2">
        <Label htmlFor="fg-color" className="text-xs">
          {t("home.generator.controls.foreground")}
        </Label>
        <div className="flex items-center gap-2 flex-wrap">
          <Input
            id="fg-color"
            type="color"
            value={options.foregroundColor}
            onChange={(e) => updateOption("foregroundColor", e.target.value)}
            className="w-12 h-10 p-1 cursor-pointer shrink-0"
          />
          <span className="text-xs font-mono text-muted-foreground uppercase w-16">
            {options.foregroundColor}
          </span>
          <div className="flex gap-1 flex-wrap">
            {PRESET_COLORS.slice(0, 5).map((color) => (
              <button
                key={color}
                type="button"
                className="w-10 h-10 rounded border cursor-pointer hover:scale-110 transition-transform"
                style={{ backgroundColor: color }}
                onClick={() => updateOption("foregroundColor", color)}
                aria-label={t("home.generator.controls.foregroundAria", {
                  color,
                })}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="bg-color" className="text-xs">
          {t("home.generator.controls.background")}
        </Label>
        <div className="flex items-center gap-2 flex-wrap">
          <Input
            id="bg-color"
            type="color"
            value={options.backgroundColor}
            onChange={(e) => updateOption("backgroundColor", e.target.value)}
            className="w-12 h-10 p-1 cursor-pointer shrink-0"
            disabled={options.transparentBackground}
          />
          <span className="text-xs font-mono text-muted-foreground uppercase w-16">
            {options.transparentBackground
              ? "—"
              : options.backgroundColor}
          </span>
          <div className="flex gap-1 flex-wrap">
            {PRESET_COLORS.slice(5).map((color) => (
              <button
                key={color}
                type="button"
                className="w-10 h-10 rounded border cursor-pointer hover:scale-110 transition-transform"
                style={{ backgroundColor: color }}
                onClick={() => updateOption("backgroundColor", color)}
                aria-label={t("home.generator.controls.backgroundAria", {
                  color,
                })}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label className="text-xs">
          {t("home.generator.controls.size")}: {options.size}px
        </Label>
        <Slider
          value={[options.size]}
          onValueChange={(value) => {
            const val = Array.isArray(value) ? value[0] : value;
            updateOption("size", val);
          }}
          min={128}
          max={1024}
          step={32}
        />
      </div>

      <div className="space-y-2">
        <Label className="text-xs">
          {t("home.generator.controls.errorCorrection")}
        </Label>
        <Select
          value={options.errorCorrectionLevel}
          onValueChange={(value) =>
            updateOption("errorCorrectionLevel", value as ErrorCorrectionLevel)
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {ERROR_CORRECTION_LEVELS.map((level) => (
              <SelectItem key={level.value} value={level.value}>
                {t(
                  `home.generator.controls.errorLevels.${level.value as ErrorLevelKey}`
                )}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label className="text-xs">{t("home.generator.controls.style")}</Label>
        <Select
          value={options.style}
          onValueChange={(value) => updateOption("style", value as QRStyle)}
        >
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {QR_STYLES.map((style) => (
              <SelectItem key={style.value} value={style.value}>
                {t(
                  `home.generator.controls.styles.${style.value as StyleKey}`
                )}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="logo-upload" className="text-xs">
          {t("home.generator.controls.logo")}
        </Label>
        <div className="flex items-center gap-2 flex-wrap">
          <Input
            id="logo-upload"
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) onLogoUpload(file);
            }}
            className="text-xs flex-1 min-w-0"
          />
          {options.logoUrl && (
            <Button variant="outline" size="sm" onClick={onRemoveLogo}>
              {t("home.generator.controls.removeLogo")}
            </Button>
          )}
        </div>
      </div>

      {options.logoUrl && (
        <div className="space-y-2">
          <Label className="text-xs">
            {t("home.generator.controls.logoSize")}: {options.logoSize}%
          </Label>
          <Slider
            value={[options.logoSize]}
            onValueChange={(value) => {
              const val = Array.isArray(value) ? value[0] : value;
              updateOption("logoSize", val);
            }}
            min={10}
            max={30}
            step={1}
          />
        </div>
      )}

      <div className="flex items-center space-x-2">
        <Switch
          id="transparent"
          checked={options.transparentBackground}
          onCheckedChange={(checked) =>
            updateOption("transparentBackground", checked)
          }
        />
        <Label htmlFor="transparent" className="text-xs">
          {t("home.generator.controls.transparent")}
        </Label>
      </div>
    </div>
  );
}
