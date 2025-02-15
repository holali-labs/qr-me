import { type ReactNode, useContext } from 'react';
import { BusinessCard } from '@/app/_components/BusinessCard';
import { EditorContext } from '@/app/_components/BusinessCard/Editor';
import { Container } from '@radix-ui/themes';

export function EditorPreview({ qrcode }: { qrcode: ReactNode }) {
	const { businessCard } = useContext(EditorContext);
	return (
		<Container px="2" mb="4">
			<BusinessCard {...businessCard} qrcode={qrcode} />
		</Container>
	);
}
