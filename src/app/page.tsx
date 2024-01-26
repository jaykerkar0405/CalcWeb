// App's Internal Imports
import { root } from "@/constants";
import { Calc, Header, Footer } from "@/components";

// App's External Imports
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = root;

export const viewport: Viewport = {
  minimumScale: 1,
  initialScale: 1,
  userScalable: true,
  viewportFit: "cover",
  width: "device-width",
  themeColor: "#090E34",
};

const Root = () => {
  return (
    <main className="h-screen flex flex-col justify-between">
      <Header />
      <Calc />
      <Footer />
    </main>
  );
};

export default Root;
