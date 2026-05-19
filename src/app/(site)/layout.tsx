import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-1" style={{ overflow: "hidden" }}>{children}</main>
      <Footer />
    </>
  );
}
