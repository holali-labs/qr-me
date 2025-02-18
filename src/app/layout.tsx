import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Theme } from '@radix-ui/themes';
import { Header } from '@/app/_components/Header';
import { Footer } from '@/app/_components/Footer';

import '@/app/globals.css';
import '@radix-ui/themes/styles.css';
import Head from 'next/head';
import Script from 'next/script';

import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'QR Me',
	description: 'Share your business card with ease.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Head>
				<Script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1555749331536079"
					crossOrigin="anonymous"
				/>
			</Head>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<Theme accentColor="cyan" grayColor="sand" radius="large" scaling="95%">
					<Header />
					{children}
					<Footer />
				</Theme>
				<GoogleTagManager gtmId="GTM-PFR8VMCB" />
				<GoogleAnalytics gaId="G-WQTK3578MF" />
			</body>
		</html>
	);
}
