import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Theme } from '@radix-ui/themes';
import { Header } from '@/app/_components/Header';
import { Footer } from '@/app/_components/Footer';

import '@/app/globals.css';
import '@radix-ui/themes/styles.css';
import Head from 'next/head';
import Script from 'next/script';

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
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<Theme accentColor="cyan" grayColor="sand" radius="large" scaling="95%">
					<Header />
					{children}
					<Footer />
				</Theme>
				<Script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1555749331536079"
					crossOrigin="anonymous"
				/>
			</body>
		</html>
	);
}
