import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kosham | Perimeter Intelligence for the Physical World",
  description: "Kosham turns distributed sensors into a persistent intelligence network for critical infrastructure.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
