import type {Metadata} from "next";
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer'
import {siteConfig} from "@/utils/siteConfig";
import "./globals.css";
import {Poppins} from "next/font/google";
import Script from "next/script";

const poppins = Poppins({
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    subsets: ['latin'],
})

// meta tags gerais, para criar novas leia a documentação: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
export const metadata: Metadata = {
    title: `${siteConfig.name} | Apostas Esportivas Online & Cassino - Jogue com Segurança`, // title padrão caso a página não tenha
    description: `${siteConfig.name} é a sua plataforma completa de apostas esportivas e jogos de cassino online. Odas competitivas, promoções exclusivas e ambiente 100% seguro. Cadastre-se agora!`, // descrição padrão caso a página não tenha
    robots: 'index, follow',
    alternates: {
        canonical: siteConfig.url // canonical padrão caso a página não tenha
    },
    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: siteConfig.url,
        siteName: siteConfig.name,
        images: [
            {
                url: `${siteConfig.url}${siteConfig.logo}`, // imagem padrão para compartilhamento
                width: siteConfig.logoWidth,
                height: siteConfig.logoHeight,
                alt: 'Logo',
            }
        ]
    },
    // Twitter Cards
    twitter: {
        card: 'summary_large_image',
        creator: siteConfig.url,
        images: siteConfig.url + siteConfig.logo
    },
    metadataBase: new URL(siteConfig.url) // base para URLs relativos
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
        <head>
            <link rel="icon" href="/favicon.png" />
            <Script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${siteConfig.analytics}');
            `}
            </Script>
        </head>
        <body
            className={`antialiased bg-[#214F3C] ${poppins.className}`}
            style={{backgroundImage: `url(bg-pattern.avif)`}}
        >
        <Header/>
        <main>
            <div className={`mt-2`}>
                {children}
            </div>
        </main>
        <footer className={`container mx-auto mb-24 lg:mb-0`}>
            <Footer/>
        </footer>

        </body>
        </html>
    );
}
