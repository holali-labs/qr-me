'use client';

import { BusinessCard } from '@/app/_components/BusinessCard';
import { Container } from '@radix-ui/themes';
import { useSearchParams } from 'next/navigation';
import qs from 'query-string';
import { EditorOutput } from '@/app/_components/BusinessCard/Editor/Output';

export function BusinessCardView() {
	const searchParams = useSearchParams();
	const businessCardData = qs.parse(searchParams.toString());

	return (
		<Container m="8" maxWidth="450px">
			<BusinessCard {...businessCardData} qrcode={<EditorOutput />} />
		</Container>
	);
}
