import { type ReactNode, useContext } from 'react';
import { BusinessCard } from '@/app/_components/BusinessCard';
import { EditorContext } from '@/app/_components/BusinessCard/Editor';

export function EditorPreview({ qrcode }: { qrcode: ReactNode }) {
	const { businessCard } = useContext(EditorContext);
	return <BusinessCard {...businessCard} qrcode={qrcode} />;
}
