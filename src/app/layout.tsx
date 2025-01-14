import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";

import { fontSans } from "@/lib/fonts";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Toaster as NewYorkSonner } from "@/shadcn/ui/sonner";

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    metadataBase: new URL(siteConfig.url),
    description: siteConfig.description,
    keywords: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Server Components",
        "Radix UI",
    ],
    authors: [
        {
            name: "Thanh Dat Nguyen",
            url: "https://destin.com",
        },
    ],
    creator: "shadcn",
    openGraph: {
        type: "website",
        locale: "vi_VN",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: `${siteConfig.url}/site.webmanifest`,
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <>
            <html lang="en" suppressHydrationWarning>
                <head />
                <body
                    className={cn(
                        "min-h-screen bg-background font-sans antialiased",
                        fontSans.variable
                    )}
                >
                    <div vaul-drawer-wrapper="">
                        <div className="relative flex min-h-screen flex-col bg-background">
                            {children}
                        </div>
                    </div>
                    <NewYorkSonner />
                </body>
            </html>
        </>
    );
}
