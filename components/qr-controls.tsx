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
        <Label className="text-xs">
          {t("home.generator.controls.foreground")}
        </Label>
        <div className="flex items-center gap-2">
          <Input
            type="color"
            value={options.foregroundColor}
            onChange={(e) => updateOption("foregroundColor", e.target.value)}
            className="w-12 h-8 p-1 cursor-pointer"
          />
          <div className="flex gap-1 flex-wrap">
            {PRESET_COLORS.slice(0, 5).map((color) => (
              <button
                key={color}
                className="w-6 h-6 rounded border cursor-pointer hover:scale-110 transition-transform"
                style={{ backgroundColor: color }}
                onClick={() => updateOption("foregroundColor", color)}
                aria-label={`Set foreground color to ${color}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label className="text-xs">
          {t("home.generator.controls.background")}
        </Label>
        <div className="flex items-center gap-2">
          <Input
            type="color"
            value={options.backgroundColor}
            onChange={(e) => updateOption("backgroundColor", e.target.value)}
            className="w-12 h-8 p-1 cursor-pointer"
            disabled={options.transparentBackground}
          />
          <div className="flex gap-1 flex-wrap">
            {PRESET_COLORS.slice(5).map((color) => (
              <button
                key={color}
                className="w-6 h-6 rounded border cursor-pointer hover:scale-110 transition-transform"
                style={{ backgroundColor: color }}
                onClick={() => updateOption("backgroundColor", color)}
                aria-label={`Set background color to ${color}`}
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
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {ERROR_CORRECTION_LEVELS.map((level) => (
              <SelectItem key={level.value} value={level.value}>
                {level.label}
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
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {QR_STYLES.map((style) => (
              <SelectItem key={style.value} value={style.value}>
                {style.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label className="text-xs">{t("home.generator.controls.logo")}</Label>
        <div className="flex items-center gap-2">
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) onLogoUpload(file);
            }}
            className="text-xs"
          />
          {options.logoUrl && (
            <Button variant="outline" size="sm" onClick={onRemoveLogo}>
              Remove
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
