import { Banner } from '@/app/_components/Banner';
import { Editor } from '@/app/_components/BusinessCard/Editor';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'QR Me',
	description: 'Share your business card with ease.',
	openGraph: {
		title: 'QR Me',
		description: 'Share your business card with ease.',
		url: '/',
		siteName: 'QR Me',
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_BASE_URL}/og.png`,
				width: 800,
				height: 600,
			},
		],
	},
	twitter: {
		title: 'QR Me',
		description: 'Share your business card with ease.',
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_BASE_URL}/og.png`,
				width: 800,
				height: 600,
			},
		],
	},
};

export default function Home() {
	return (
		<>
			<Banner />
			<Editor />
		</>
	);
}
