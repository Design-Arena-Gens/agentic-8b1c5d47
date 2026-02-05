import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clawbot Installer Guide",
  description: "Step-by-step helper for installing the Clawbot control suite on your PC."
};

const RootLayout = ({
  children
}: {
  children: ReactNode;
}) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
