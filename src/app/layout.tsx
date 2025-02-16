import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Theme } from '@radix-ui/themes';
import { Header } from '@/app/_components/Header';
import { Footer } from '@/app/_components/Footer';

import '@/app/globals.css';
import '@radix-ui/themes/styles.css';

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
			</body>
		</html>
	);
}
