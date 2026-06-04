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

  // NOTE: never apply border-radius to the QR element itself — clipping the
  // corners removes the finder patterns and breaks scanning. The style option
  // only rounds the white frame around the code.
  const qrProps = {
    value,
    size: options.size,
    fgColor: options.foregroundColor,
    bgColor: options.transparentBackground
      ? "transparent"
      : options.backgroundColor,
    level: options.errorCorrectionLevel,
    // Scale down inside narrow panels instead of getting clipped; the
    // intrinsic size (and canvas export resolution) stays options.size.
    style: {
      width: "100%",
      maxWidth: `${options.size}px`,
      height: "auto",
    },
  };

  const frameRadius =
    options.style === "rounded" ? "rounded-2xl" : options.style === "dots" ? "rounded-3xl" : "rounded-lg";

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className={`relative bg-white ${frameRadius} p-4 shadow-sm max-w-full`}>
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
