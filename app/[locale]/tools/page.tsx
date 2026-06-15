import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const BASE_URL = "https://qr.shuttlelab.org";
const PATH = "/tools";

// slug ↔ toolPages message key for the six QR generators.
const TOOLS = [
  { slug: "url-qr-code", key: "urlQrCode" },
  { slug: "wifi-qr-code", key: "wifiQrCode" },
  { slug: "text-qr-code", key: "textQrCode" },
  { slug: "email-qr-code", key: "emailQrCode" },
  { slug: "vcard-qr-code", key: "vcardQrCode" },
  { slug: "custom-qr-code", key: "customQrCode" },
] as const;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isDefault = locale === routing.defaultLocale;
  const zh = locale === "zh";
  const canonical = isDefault ? `${BASE_URL}${PATH}/` : `${BASE_URL}/${locale}${PATH}/`;
  return {
    title: zh
      ? "二维码生成器 | QR Shuttle"
      : "QR Code Generators — Free Online QR Code Tools | QR Shuttle",
    description: zh
      ? "QR Shuttle 的全部免费二维码生成器：网址、WiFi、文本、邮件、名片（vCard）以及带 Logo 的自定义二维码——全部在你的浏览器本地生成。"
      : "All of QR Shuttle's free QR code generators — for URLs, WiFi, text, email, business cards (vCard), and custom QR codes with a logo — all generated locally in your browser.",
    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}${PATH}/`,
        zh: `${BASE_URL}/zh${PATH}/`,
        "x-default": `${BASE_URL}${PATH}/`,
      },
    },
  };
}

export default async function ToolsIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("toolPages");
  const zh = locale === "zh";
  const base = locale === routing.defaultLocale ? "" : `/${locale}`;
  const toolHref = (slug: string) => `${base}/tools/${slug}/`;

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: zh ? "二维码生成器" : "QR Code Generators",
    itemListElement: TOOLS.map((tool, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t(`${tool.key}.title`),
      url: `${BASE_URL}${toolHref(tool.slug)}`,
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: zh ? "首页" : "Home", item: `${BASE_URL}${base}/` },
      { "@type": "ListItem", position: 2, name: zh ? "工具" : "Tools", item: `${BASE_URL}${base}${PATH}/` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {zh ? "二维码生成器" : "QR Code Generators"}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {zh
            ? "QR Shuttle 的全部免费二维码生成器，全部在你的浏览器本地生成，无需上传、无需注册。"
            : "Every free QR code generator from QR Shuttle — all generated locally in your browser, with no upload and no sign-up."}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {TOOLS.map((tool) => (
            <Link
              key={tool.slug}
              href={toolHref(tool.slug)}
              className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition hover:border-primary/40 hover:bg-accent/40"
            >
              <h2 className="flex items-center gap-1 font-semibold text-foreground">
                {t(`${tool.key}.title`)}
                <ArrowRight className="size-4 shrink-0 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">{t(`${tool.key}.subtitle`)}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
