import type { QRCodeType } from "./qr-utils";

export interface QRTemplate {
  id: QRCodeType;
  titleKey: string;
  descriptionKey: string;
  defaultData: Record<string, string>;
}

export const QR_TEMPLATES: QRTemplate[] = [
  {
    id: "url",
    titleKey: "home.templates.items.url.title",
    descriptionKey: "home.templates.items.url.description",
    defaultData: {
      url: "https://example.com",
    },
  },
  {
    id: "wifi",
    titleKey: "home.templates.items.wifi.title",
    descriptionKey: "home.templates.items.wifi.description",
    defaultData: {
      ssid: "MyWiFiNetwork",
      password: "password123",
      encryption: "WPA",
      hidden: "false",
    },
  },
  {
    id: "vcard",
    titleKey: "home.templates.items.vcard.title",
    descriptionKey: "home.templates.items.vcard.description",
    defaultData: {
      firstName: "John",
      lastName: "Doe",
      phone: "+1234567890",
      email: "john@example.com",
      company: "Example Corp",
      title: "Software Engineer",
      url: "https://example.com",
    },
  },
  {
    id: "email",
    titleKey: "home.templates.items.email.title",
    descriptionKey: "home.templates.items.email.description",
    defaultData: {
      to: "recipient@example.com",
      subject: "Hello",
      body: "Hi there!",
    },
  },
  {
    id: "sms",
    titleKey: "home.templates.items.sms.title",
    descriptionKey: "home.templates.items.sms.description",
    defaultData: {
      phone: "+1234567890",
      message: "Hello!",
    },
  },
  {
    id: "text",
    titleKey: "home.templates.items.text.title",
    descriptionKey: "home.templates.items.text.description",
    defaultData: {
      text: "Hello, World!",
    },
  },
];
