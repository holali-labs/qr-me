import { BusinessCardView } from '@/app/_components/BusinessCard/View';
import { Box, Button, Container, Text } from '@radix-ui/themes';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { LuExternalLink as LinkIcon } from 'react-icons/lu';

export const metadata: Metadata = {
	title: 'Viewer | QR Me',
	description: 'Share your business card with ease.',
	openGraph: {
		title: 'Viewer | QR Me',
		description: 'Share your business card with ease.',
		url: '/view',
		siteName: 'Viewer | QR Me',
		images: [
			{
				url: '../og.png',
				width: 800,
				height: 600,
			},
		],
	},
	twitter: {
		title: 'Viewer | QR Me',
		description: 'Share your business card with ease.',
		images: [
			{
				url: '../og.png',
				width: 800,
				height: 600,
			},
		],
	},
};

export default function ViewPage() {
	return (
		<Container minHeight="calc(100dvh - 100px)">
			<Suspense>
				<BusinessCardView />
			</Suspense>
			<Box maxWidth="450px" px="2" mt="4" mx="auto">
				<Link href="/" target="_blank">
					<Button variant="surface" size="3" style={{ width: '100%', maxWidth: '450px' }}>
						<Text weight="bold">Go to get my business card</Text>
						<LinkIcon />
					</Button>
				</Link>
			</Box>
		</Container>
	);
}
