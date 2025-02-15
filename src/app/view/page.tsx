'use client';

import { useSearchParams } from 'next/navigation';
import { Container } from '@radix-ui/themes';
import qs from 'query-string';
import { BusinessCardView } from '@/app/_components/BusinessCard/View';
import { EditorOutput } from '@/app/_components/BusinessCard/Editor/Output';

export default function ViewPage() {
	const searchParams = useSearchParams();
	const businessCardData = qs.parse(searchParams.toString());

	return (
		<Container m="8" maxWidth="450px">
			<BusinessCardView {...businessCardData} qrcode={<EditorOutput />} />
		</Container>
	);
}
