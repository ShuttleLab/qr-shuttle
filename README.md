# QR Shuttle

A small web app to generate custom QR codes. Everything runs in the browser; no data is sent to any server, no watermarks.

## Features

- **Nine content types** – URL, text, WiFi, vCard, email, SMS, phone, location, and calendar event
- **Quick templates** – one-click starting points for the most common uses
- **Full customization** – foreground/background colors, size, error-correction level (L/M/Q/H), frame style, transparent background
- **Logo embedding** – place your logo in the center with automatic excavation
- **Live preview** – the code re-renders as you type and tweak
- **Export** – download as PNG, SVG, or JPG
- **Bilingual** – English and Chinese UI

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static export to `out/`.

## License

Licensed under the GNU Affero General Public License v3.0 — see [LICENSE](./LICENSE).

Free to use, modify, and self-host. If you run a modified version as a network service, you must open-source your modifications (AGPL §13). For commercial licensing without copyleft obligations, contact support@shuttlelab.org.
