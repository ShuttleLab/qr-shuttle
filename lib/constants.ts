export const SITE_URL = "https://qr.shuttlelab.org";
export const SITE_NAME = "QR Shuttle";
export const SUPPORT_EMAIL = "support@shuttlelab.org";
export const GITHUB_URL = "https://github.com/ShuttleLab";

export const QR_CODE_TYPES = [
  "url",
  "text",
  "wifi",
  "vcard",
  "email",
  "sms",
  "phone",
  "location",
  "event",
] as const;

export const ERROR_CORRECTION_LEVELS = [
  { value: "L", label: "L - 7%" },
  { value: "M", label: "M - 15%" },
  { value: "Q", label: "Q - 25%" },
  { value: "H", label: "H - 30%" },
] as const;

export const QR_STYLES = [
  { value: "square", label: "Square" },
  { value: "dots", label: "Dots" },
  { value: "rounded", label: "Rounded" },
] as const;

export const WIFI_ENCRYPTION_TYPES = [
  { value: "WPA", label: "WPA/WPA2" },
  { value: "WEP", label: "WEP" },
  { value: "nopass", label: "None" },
] as const;

export const PRESET_COLORS = [
  "#000000",
  "#ffffff",
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
  "#14b8a6",
];
