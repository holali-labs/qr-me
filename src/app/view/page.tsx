import { BusinessCardView } from '@/app/_components/BusinessCard/View';
import { Suspense } from 'react';

export default function ViewPage() {
	return (
		<Suspense>
			<BusinessCardView />
		</Suspense>
	);
}
