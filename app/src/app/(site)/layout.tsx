import type { Metadata } from "next";
import SiteHeader from "@/modules/design-system/components/ui/SiteHeader";
import SiteFooter from "@/modules/design-system/components/ui/SiteFooter";

export const metadata: Metadata = {
  alternates: { canonical: "https://sbg-sist.in" },
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </>
  );
}
