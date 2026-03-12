import type { Metadata } from "next";

import { ContactPage } from "./contact-client";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch for AI engineering projects, consulting, or collaboration opportunities. Based in Rawalpindi, Pakistan.",
};

export default function Page() {
  return <ContactPage />;
}
