export type QRCodeType =
  | "url"
  | "text"
  | "wifi"
  | "vcard"
  | "email"
  | "sms"
  | "phone"
  | "location"
  | "event";

export type ErrorCorrectionLevel = "L" | "M" | "Q" | "H";

export type QRStyle = "square" | "dots" | "rounded";

export interface QRCodeOptions {
  type: QRCodeType;
  foregroundColor: string;
  backgroundColor: string;
  size: number;
  errorCorrectionLevel: ErrorCorrectionLevel;
  style: QRStyle;
  logoUrl?: string;
  logoSize: number;
  transparentBackground: boolean;
}

export const DEFAULT_QR_OPTIONS: QRCodeOptions = {
  type: "url",
  foregroundColor: "#000000",
  backgroundColor: "#ffffff",
  size: 256,
  errorCorrectionLevel: "M",
  style: "square",
  logoSize: 20,
  transparentBackground: false,
};

export function generateQRCodeValue(
  type: QRCodeType,
  data: Record<string, string>
): string {
  switch (type) {
    case "url":
      return data.url || "";
    case "text":
      return data.text || "";
    case "wifi":
      return `WIFI:T:${data.encryption || "WPA"};S:${data.ssid || ""};P:${data.password || ""};${data.hidden === "true" ? "H:true;" : ""}`;
    case "vcard":
      return generateVCard(data);
    case "email":
      return generateEmailLink(data);
    case "sms":
      return generateSMSLink(data);
    case "phone":
      return `tel:${data.phone || ""}`;
    case "location":
      return `geo:${data.latitude || "0"},${data.longitude || "0"}`;
    case "event":
      return generateVEvent(data);
    default:
      return "";
  }
}

function generateVCard(data: Record<string, string>): string {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${data.lastName || ""};${data.firstName || ""};;;`,
    `FN:${data.firstName || ""} ${data.lastName || ""}`.trim(),
  ];

  if (data.phone) lines.push(`TEL:${data.phone}`);
  if (data.email) lines.push(`EMAIL:${data.email}`);
  if (data.company) lines.push(`ORG:${data.company}`);
  if (data.title) lines.push(`TITLE:${data.title}`);
  if (data.url) lines.push(`URL:${data.url}`);

  lines.push("END:VCARD");
  return lines.join("\n");
}

function generateEmailLink(data: Record<string, string>): string {
  const params = new URLSearchParams();
  if (data.subject) params.set("subject", data.subject);
  if (data.body) params.set("body", data.body);
  const queryString = params.toString();
  return `mailto:${data.to || ""}${queryString ? `?${queryString}` : ""}`;
}

function generateSMSLink(data: Record<string, string>): string {
  if (data.message) {
    return `smsto:${data.phone || ""}:${data.message}`;
  }
  return `smsto:${data.phone || ""}`;
}

function generateVEvent(data: Record<string, string>): string {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "BEGIN:VEVENT",
  ];

  if (data.title) lines.push(`SUMMARY:${data.title}`);
  if (data.start) lines.push(`DTSTART:${formatDateForICal(data.start)}`);
  if (data.end) lines.push(`DTEND:${formatDateForICal(data.end)}`);
  if (data.location) lines.push(`LOCATION:${data.location}`);
  if (data.description) lines.push(`DESCRIPTION:${data.description}`);

  lines.push("END:VEVENT", "END:VCALENDAR");
  return lines.join("\n");
}

function formatDateForICal(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}/, "");
  } catch {
    return dateString;
  }
}

export function getQRCodeFilename(type: QRCodeType, extension: string): string {
  const timestamp = Date.now();
  return `qr-code-${type}-${timestamp}.${extension}`;
}
