type Bilingual = { zh: string; en: string };
type HowTo = { id: string; name: Bilingual; steps: Bilingual[] };
type FaqItem = { q: Bilingual; a: Bilingual };

export const WHO_FOR: Bilingual[] = [
  {
    zh: "为营销活动和社交媒体创建二维码的营销人员",
    en: "Marketers creating QR codes for campaigns and social media",
  },
  {
    zh: "用于名片和店铺展示的小企业主",
    en: "Small business owners for business cards and store displays",
  },
  {
    zh: "用于签到码和WiFi分享的活动组织者",
    en: "Event organizers for check-in codes and WiFi sharing",
  },
  {
    zh: "测试二维码实现的开发人员",
    en: "Developers testing QR code implementations",
  },
];

export const WHEN_USE: Bilingual[] = [
  {
    zh: "营销活动和广告材料",
    en: "Marketing campaigns and advertising materials",
  },
  {
    zh: "名片和专业社交",
    en: "Business cards and professional networking",
  },
  {
    zh: "餐厅菜单和无接触点餐",
    en: "Restaurant menus and contactless ordering",
  },
  {
    zh: "活动签到和注册",
    en: "Event check-in and registration",
  },
  {
    zh: "与访客分享WiFi凭据",
    en: "Sharing WiFi credentials with guests",
  },
];

export const HOWTOS: HowTo[] = [
  {
    id: "generate-qr-code",
    name: { zh: "如何生成二维码", en: "How to generate a QR code" },
    steps: [
      {
        zh: "选择您要创建的二维码类型（URL、WiFi、vCard等）",
        en: "Select the type of QR code you want to create (URL, WiFi, vCard, etc.)",
      },
      {
        zh: "输入您的内容（网址、文本、WiFi详细信息等）",
        en: "Enter your content (URL, text, WiFi details, etc.)",
      },
      {
        zh: "自定义颜色、大小和样式",
        en: "Customize colors, size, and style",
      },
      {
        zh: "下载为PNG、SVG或JPG格式",
        en: "Download in PNG, SVG, or JPG format",
      },
    ],
  },
  {
    id: "wifi-qr-code",
    name: { zh: "如何创建WiFi二维码", en: "How to create a WiFi QR code" },
    steps: [
      {
        zh: "选择WiFi二维码类型",
        en: "Select WiFi QR code type",
      },
      {
        zh: "输入网络名称（SSID）和密码",
        en: "Enter network name (SSID) and password",
      },
      {
        zh: "选择加密类型（WPA、WEP或无）",
        en: "Select encryption type (WPA, WEP, or None)",
      },
      {
        zh: "生成并下载二维码",
        en: "Generate and download the QR code",
      },
    ],
  },
];

export const FAQS: FaqItem[] = [
  {
    q: { zh: "QR Shuttle 真的免费吗？", en: "Is QR Shuttle really free?" },
    a: {
      zh: "是的，QR Shuttle 完全免费使用。没有隐藏费用、高级功能或水印。您可以无限制地生成无限二维码。",
      en: "Yes, QR Shuttle is completely free to use. There are no hidden fees, premium features, or watermarks. You can generate unlimited QR codes without any restrictions.",
    },
  },
  {
    q: { zh: "我的数据安全吗？", en: "Is my data safe?" },
    a: {
      zh: "绝对安全。所有二维码生成都直接在您的浏览器中进行。数据不会上传到任何服务器，确保完全的隐私和安全。",
      en: "Absolutely. All QR code generation happens directly in your browser. No data is uploaded to any server, ensuring complete privacy and security.",
    },
  },
  {
    q: {
      zh: "支持哪些二维码类型？",
      en: "What QR code types are supported?",
    },
    a: {
      zh: "QR Shuttle 支持 URL、文本、WiFi、vCard、电子邮件、短信、电话、位置和事件二维码。每种类型都有特定的输入字段，便于生成。",
      en: "QR Shuttle supports URL, Text, WiFi, vCard, Email, SMS, Phone, Location, and Event QR codes. Each type has specific input fields for easy generation.",
    },
  },
  {
    q: {
      zh: "我可以自定义二维码设计吗？",
      en: "Can I customize the QR code design?",
    },
    a: {
      zh: "是的，您可以自定义前景色和背景色，选择方形、圆点或圆角样式，调整大小，甚至可以在二维码中心添加Logo。",
      en: "Yes, you can customize foreground and background colors, choose between square, dots, or rounded styles, adjust size, and even add a logo to the center of your QR code.",
    },
  },
  {
    q: {
      zh: "可以导出哪些格式？",
      en: "What formats can I export?",
    },
    a: {
      zh: "您可以将二维码导出为 PNG、SVG 或 JPG 格式。PNG 最适合网络使用，SVG 可无损缩放，JPG 文件更小。",
      en: "You can export QR codes in PNG, SVG, or JPG formats. PNG is best for web use, SVG for scalability, and JPG for smaller file sizes.",
    },
  },
  {
    q: {
      zh: "需要创建账户吗？",
      en: "Do I need to create an account?",
    },
    a: {
      zh: "不需要，QR Shuttle 无需注册或创建账户。只需访问网站即可立即开始生成二维码。",
      en: "No, QR Shuttle requires no registration or account creation. Simply visit the website and start generating QR codes immediately.",
    },
  },
  {
    q: {
      zh: "我可以商业使用二维码吗？",
      en: "Can I use QR codes commercially?",
    },
    a: {
      zh: "可以，所有生成的二维码均可免费用于个人和商业用途。没有任何使用限制。",
      en: "Yes, all QR codes generated are free for personal and commercial use. There are no restrictions on how you use them.",
    },
  },
  {
    q: {
      zh: "WiFi 二维码如何工作？",
      en: "How do WiFi QR codes work?",
    },
    a: {
      zh: "WiFi 二维码包含网络凭据。扫描后，设备可以自动连接到 WiFi 网络，无需手动输入密码。",
      en: "WiFi QR codes contain network credentials. When scanned, devices can automatically connect to the WiFi network without manually entering the password.",
    },
  },
  {
    q: {
      zh: "什么是纠错级别？",
      en: "What is error correction level?",
    },
    a: {
      zh: "纠错级别决定了二维码在损坏多少的情况下仍能被读取。更高级别（H=30%）适合带Logo的二维码，而较低级别（L=7%）生成更小的二维码。",
      en: "Error correction determines how much of the QR code can be damaged while still being readable. Higher levels (H=30%) are better for codes with logos, while lower levels (L=7%) create smaller codes.",
    },
  },
];

export const COMPARISON = {
  zh: {
    heading: "QR Shuttle 与其他工具对比（截至 2026-06）",
    columns: ["功能", "QR Shuttle", "qr-code-generator.com", "qrcode-monkey.com"],
    rows: [
      ["隐私保护", "100%浏览器端", "服务器处理", "服务器处理"],
      ["价格", "永久免费", "有广告的免费增值", "免费增值"],
      ["水印", "无", "免费版有", "免费版有"],
      ["注册要求", "无需注册", "功能需要注册", "功能需要注册"],
    ],
  },
  en: {
    heading: "QR Shuttle vs Other Tools (as of 2026-06)",
    columns: ["Feature", "QR Shuttle", "qr-code-generator.com", "qrcode-monkey.com"],
    rows: [
      ["Privacy", "100% browser-side", "Server processing", "Server processing"],
      ["Price", "Free forever", "Freemium with ads", "Freemium"],
      ["Watermark", "None", "Free tier has", "Free tier has"],
      ["Registration", "Not required", "Required for features", "Required for features"],
    ],
  },
};

export const HEADINGS = {
  whoFor: { zh: "QR Shuttle 适合谁？", en: "Who is QR Shuttle for?" },
  whenUse: {
    zh: "什么时候应该使用 QR Shuttle？",
    en: "When should I use QR Shuttle?",
  },
  faq: { zh: "常见问题", en: "Frequently Asked Questions" },
};

export const aboutFaqData = { FAQS, HOWTOS, COMPARISON };
