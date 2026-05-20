import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, hasLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import HtmlLangSetter from "@/components/HtmlLangSetter";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang as Locale);
  return {
    title: dict.home.meta.title,
    description: dict.home.meta.description,
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return (
    <>
      <HtmlLangSetter lang={lang} />
      {children}
    </>
  );
}
