import type {Metadata} from "next";
import Header from '@/app/components/Header';
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar"
import {AppSidebar} from "@/app/components/app-sidebar"
import {siteConfig} from "@/utils/siteConfig";
import "./globals.css";
import {Poppins} from "next/font/google";
import Script from "next/script";
import {ThemeProvider} from "@/app/components/theme-provider"
import Footer from "@/app/components/Footer";

const poppins = Poppins({
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    subsets: ['latin'],
})

// meta tags gerais, para criar novas leia a documentação: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
export const metadata: Metadata = {
    title: `${siteConfig.name} | Apostas Online & Cassino - Jogue Seguro`, // title padrão caso a página não tenha
    description: `${siteConfig.name} Sua plataforma completa de apostas esportivas e cassino online. Odds competitivas, promoções exclusivas e 100% seguro. Cadastre-se!`, // descrição padrão caso a página não tenha
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
        <html lang="pt-br" suppressHydrationWarning>
        <head>
            <link rel="icon" href={siteConfig.ico}/>
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
            className={`antialiased bg-white dark:bg-gray-950 ${poppins.className}`}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange={true}
        >
            <SidebarProvider>
                <div className={`flex w-full`}>
                    <AppSidebar/>
                    <main className={`grow-1 overflow-x-auto`}>
                        <Header> <SidebarTrigger/> </Header>
                        {children}
                        <Footer/>
                    </main>
                </div>
            </SidebarProvider>
        </ThemeProvider>

        </body>
        </html>
    );
}