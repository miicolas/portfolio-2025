
import type { Metadata } from "next";
import "../../globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";


export const metadata: Metadata = {
  title: "Projects - Nicolas Bechart - Portfolio",
  description: "Nicolas Bechart - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <main className="max-w-7xl mx-auto">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
