import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import Script from "next/script"; // Import the Script component
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import Script from "next/script";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"], // add more weights if needed
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tong Bora",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID);

  return (
    <html lang="en">
      <head>
        {/* Register the OneSignal service worker */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.register('/OneSignalSDKWorker.js').then(
                () => console.log('Service Worker registered'),
                (error) => console.error('Service Worker registration failed:', error)
              );
            }
          `,
          }}
        ></script>

        {/* Load the OneSignal SDK */}
        <Script
          src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js"
          strategy="afterInteractive"
        />
        {/* Initialize OneSignal */}
        <Script id="onesignal-init" strategy="afterInteractive">
          {`
            window.OneSignalDeferred = window.OneSignalDeferred || [];
            OneSignalDeferred.push(function(OneSignal) {
              OneSignal.init({
                appId: "${process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID}",
              });
            });
          `}
        </Script>
      </head>
      <body className={`${robotoMono.className}  min-h-screen`}>
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
