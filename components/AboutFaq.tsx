"use client";

import { useLocale } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  WHO_FOR,
  WHEN_USE,
  HOWTOS,
  FAQS,
  COMPARISON,
  HEADINGS,
} from "./AboutFaqData";

export function AboutFaq() {
  const locale = useLocale() as "en" | "zh";

  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-6">{HEADINGS.whoFor[locale]}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {WHO_FOR.map((item, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <p>{item[locale]}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">{HEADINGS.whenUse[locale]}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WHEN_USE.map((item, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <p>{item[locale]}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">
          {locale === "zh" ? "使用指南" : "How-To Guides"}
        </h2>
        <div className="space-y-6">
          {HOWTOS.map((howto) => (
            <Card key={howto.id}>
              <CardHeader>
                <CardTitle>{howto.name[locale]}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-2">
                  {howto.steps.map((step, index) => (
                    <li key={index} className="text-muted-foreground">
                      {step[locale]}
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">
          {COMPARISON[locale].heading}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                {COMPARISON[locale].columns.map((col, index) => (
                  <th
                    key={index}
                    className="text-left p-3 font-semibold text-sm"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON[locale].rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b">
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className={`p-3 text-sm ${
                        cellIndex === 0 ? "font-medium" : ""
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">{HEADINGS.faq[locale]}</h2>
        <Accordion className="w-full">
          {FAQS.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.q[locale]}
              </AccordionTrigger>
              <AccordionContent>{faq.a[locale]}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
