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
		<Container mt="8" px="2">
			<BusinessCard {...businessCardData} qrcode={<EditorOutput />} />
		</Container>
	);
}
