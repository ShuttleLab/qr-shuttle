"use client";

import { useCallback } from "react";
import { saveAs } from "file-saver";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import type { QRCodeType } from "@/lib/qr-utils";
import { getQRCodeFilename } from "@/lib/qr-utils";

interface QRExportProps {
  type: QRCodeType;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  svgContainerRef: React.RefObject<HTMLDivElement | null>;
}

export function QRExport({ type, canvasRef, svgContainerRef }: QRExportProps) {
  const t = useTranslations();

  const exportPNG = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      toast.error(t("home.generator.export.error"));
      return;
    }

    canvas.toBlob((blob) => {
      if (blob) {
        saveAs(blob, getQRCodeFilename(type, "png"));
        toast.success(t("home.generator.export.success", { format: "PNG" }));
      } else {
        toast.error(t("home.generator.export.error"));
      }
    }, "image/png");
  }, [canvasRef, type, t]);

  const exportSVG = useCallback(() => {
    const container = svgContainerRef.current;
    const svgElement = container?.querySelector("svg");
    if (!svgElement) {
      toast.error(t("home.generator.export.error"));
      return;
    }

    const svgData = new XMLSerializer().serializeToString(svgElement);
    const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    saveAs(blob, getQRCodeFilename(type, "svg"));
    toast.success(t("home.generator.export.success", { format: "SVG" }));
  }, [svgContainerRef, type, t]);

  const exportJPG = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      toast.error(t("home.generator.export.error"));
      return;
    }

    const jpgCanvas = document.createElement("canvas");
    jpgCanvas.width = canvas.width;
    jpgCanvas.height = canvas.height;
    const ctx = jpgCanvas.getContext("2d");
    if (!ctx) {
      toast.error(t("home.generator.export.error"));
      return;
    }

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, jpgCanvas.width, jpgCanvas.height);
    ctx.drawImage(canvas, 0, 0);

    jpgCanvas.toBlob(
      (blob) => {
        if (blob) {
          saveAs(blob, getQRCodeFilename(type, "jpg"));
          toast.success(t("home.generator.export.success", { format: "JPG" }));
        } else {
          toast.error(t("home.generator.export.error"));
        }
      },
      "image/jpeg",
      0.9
    );
  }, [canvasRef, type, t]);

  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-sm">
        {t("home.generator.export.title")}
      </h3>
      <div className="flex flex-wrap gap-2">
        <Button onClick={exportPNG} variant="outline" className="h-10 flex-1 min-w-24">
          <Download className="mr-2 size-4" />
          {t("home.generator.export.png")}
        </Button>
        <Button onClick={exportSVG} variant="outline" className="h-10 flex-1 min-w-24">
          <Download className="mr-2 size-4" />
          {t("home.generator.export.svg")}
        </Button>
        <Button onClick={exportJPG} variant="outline" className="h-10 flex-1 min-w-24">
          <Download className="mr-2 size-4" />
          {t("home.generator.export.jpg")}
        </Button>
      </div>
    </div>
  );
}
