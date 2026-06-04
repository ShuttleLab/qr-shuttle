import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://qr.shuttlelab.org";
  const lastModified = new Date();

  const paths = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/tools/url-qr-code", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/tools/wifi-qr-code", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/tools/vcard-qr-code", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/tools/text-qr-code", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/tools/email-qr-code", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/tools/custom-qr-code", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return paths.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}/`,
    lastModified,
    changeFrequency,
    priority,
    alternates: {
      languages: {
        en: `${baseUrl}${path}/`,
        zh: `${baseUrl}/zh${path}/`,
        "x-default": `${baseUrl}${path}/`,
      },
    },
  }));
}
