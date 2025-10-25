import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/header";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Swag Tracker",
  description: "An Amazon-like UI for monitoring shipment progress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <div className="flex min-h-screen w-full flex-col">
          <Header />
          <div className="bg-yellow-100 p-2 text-center text-sm text-yellow-800 flex items-center justify-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            <span>
              Due to some issues, swag delivery has been postponed. Check your portal frequently for updates.
            </span>
          </div>
          <main className="flex-1 p-4 md:p-6">
            <div className="mx-auto w-full max-w-6xl">
              {children}
            </div>
          </main>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
