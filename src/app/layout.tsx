import type {Metadata, Viewport} from "next";
import Header from '@/app/components/Header';
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar"
import {AppSidebar} from "@/app/components/app-sidebar"
import {siteConfig} from "@/utils/siteConfig";
import "./globals.css";
import {Poppins} from "next/font/google";
import Script from "next/script";
import {ThemeProvider} from "@/app/components/theme-provider"
import Footer from "@/app/components/Footer";
import Popup from "@/app/components/Popup";

const poppins = Poppins({
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    subsets: ['latin'],
})

export const viewport: Viewport = {
    width: 320,
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),

    title: {
        default: `${siteConfig.name} | Apostas Online & Cassino - Jogue Seguro`,
        template: `%s | ${siteConfig.name}`,
    },
    description: `Jogue com segurança em um cassino online autorizado! Temos milhares de jogos: roleta, blackjack, jogos de slot e muito mais na ${siteConfig.name}`,
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: siteConfig.ico,
        shortcut: siteConfig.ico,
        apple: siteConfig.ico,
    },
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: siteConfig.url,
        siteName: siteConfig.name,
        title: `${siteConfig.name} | Apostas Online & Cassino`,
        description: `Jogue com segurança em um cassino online autorizado! Temos milhares de jogos: roleta, blackjack, jogos de slot e muito mais na ${siteConfig.name}`,
        images: [
            {
                url: siteConfig.logo,
                width: 1200,
                height: 630,
                alt: `Logo oficial de ${siteConfig.name} - Plataforma de Apostas Segura`,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: `${siteConfig.name} | Apostas Online & Cassino`,
        description: `Jogue com segurança em um cassino online autorizado! Temos milhares de jogos: roleta, blackjack, jogos de slot e muito mais na ${siteConfig.name}`,
        images: [siteConfig.logo],
    },
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br" suppressHydrationWarning>
        <body
            className={`antialiased bg-gray-100 dark:bg-black ${poppins.className}`}
        >

        <div className="max-w-[430px] mx-auto min-h-screen bg-white dark:bg-background flex flex-col">
            <ThemeProvider
                attribute="class"
                forcedTheme="dark"
                enableSystem
                disableTransitionOnChange={true}
            >
                <SidebarProvider>
                        <div className="flex flex-1 w-full">
                        <AppSidebar/>
                        <main className="flex-1 w-full flex flex-col overflow-x-hidden">
                            <Header> <SidebarTrigger/> </Header>
                            <div className="flex-1">
                                {children}
                            </div>
                            <Footer/>
                        </main>
                    </div>
                </SidebarProvider>
            </ThemeProvider>
        </div>

        <Popup/>

        <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analyticsId}`}
            strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${siteConfig.analyticsId}');
            `}
        </Script>
        <Script id="microsoft-clarity-init" strategy="afterInteractive">
            {`
                    (function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", "${siteConfig.clarityId}");
                `}
        </Script>
        </body>
        </html>
    );
}