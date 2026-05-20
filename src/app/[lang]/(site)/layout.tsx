import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { hasLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { notFound } from "next/navigation";

export default async function SiteLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang as Locale);
  return (
    <>
      <Navbar lang={lang as Locale} dict={dict} />
      <main className="flex-1" style={{ overflow: "hidden" }}>
        {children}
      </main>
      <Footer lang={lang as Locale} dict={dict} />
    </>
  );
}
