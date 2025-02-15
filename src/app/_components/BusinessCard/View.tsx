import type { ReactNode } from 'react';
import { BusinessCard, type BusinessCardData } from '@/app/_components/BusinessCard';

export function BusinessCardView(businessCardData: BusinessCardData & { qrcode: ReactNode }) {
	return <BusinessCard {...businessCardData} />;
}
