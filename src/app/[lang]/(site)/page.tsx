import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { hasLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import HomeClient from "./HomeClient";

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

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang as Locale);
  return <HomeClient lang={lang as Locale} dict={dict} />;
}
