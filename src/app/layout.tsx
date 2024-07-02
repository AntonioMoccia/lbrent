import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import PrivacyControl from "@/components/PrivacyControl";

export const metadata: Metadata = {
  title: "LB Rent",
  description: "L'autonoleggio LB RENT con sede a Grottaminarda -AV- nasce nel 2018 dall'idea di un giovanissimo imprenditore con le idee ben chiare: portare una ventata di novità in provincia di Avellino.  Passo dopo passo abbiamo acquistato diverse auto fino a creare una flotta con vetture di ultima generazione e in linea con le normative vigenti.  Il parco auto LB RENT è adatto a qualsiasi fascia di pubblico, infatti troverai:  utilitarie, crossover, suv, auto sportive e luxury car.  La nostra mission è fare in modo che tutti possano provare il piacere di guidare l'auto dei propri sogni.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
        <PrivacyControl />
      </head>
      <body>
        <Navbar />
        <main>
          {children}
          <WhatsAppWidget />
        </main>
        <Footer />
      </body>
    </html>
  );
}
