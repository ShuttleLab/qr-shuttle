"use client";

import { QRCodeSVG, QRCodeCanvas } from "qrcode.react";
import type { QRCodeOptions } from "@/lib/qr-utils";

interface QRPreviewProps {
  value: string;
  options: QRCodeOptions;
  canvasRef?: React.RefObject<HTMLCanvasElement | null>;
}

export function QRPreview({ value, options, canvasRef }: QRPreviewProps) {
  if (!value) {
    return (
      <div className="flex items-center justify-center w-full h-64 bg-muted rounded-lg border-2 border-dashed">
        <p className="text-muted-foreground text-sm">
          Enter content to generate QR code
        </p>
      </div>
    );
  }

  const qrProps = {
    value,
    size: options.size,
    fgColor: options.foregroundColor,
    bgColor: options.transparentBackground
      ? "transparent"
      : options.backgroundColor,
    level: options.errorCorrectionLevel,
    style: {
      borderRadius:
        options.style === "rounded" ? "8px" : options.style === "dots" ? "50%" : "0",
    },
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative bg-white rounded-lg p-4 shadow-sm">
        {options.style === "dots" ? (
          <QRCodeCanvas
            ref={canvasRef}
            {...qrProps}
            imageSettings={
              options.logoUrl
                ? {
                    src: options.logoUrl,
                    height: (options.size * options.logoSize) / 100,
                    width: (options.size * options.logoSize) / 100,
                    excavate: true,
                  }
                : undefined
            }
          />
        ) : (
          <QRCodeSVG
            {...qrProps}
            imageSettings={
              options.logoUrl
                ? {
                    src: options.logoUrl,
                    height: (options.size * options.logoSize) / 100,
                    width: (options.size * options.logoSize) / 100,
                    excavate: true,
                  }
                : undefined
            }
          />
        )}
      </div>
    </div>
  );
}
