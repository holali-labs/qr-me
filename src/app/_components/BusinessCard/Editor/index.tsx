'use client';

import { createContext, useState } from 'react';
import { EditorWrapper } from '@/app/_components/BusinessCard/Editor/Wrapper';
import { EditorForm } from '@/app/_components/BusinessCard/Editor/Form';
import { EditorPreview } from '@/app/_components/BusinessCard/Editor/Preview';
import { produce } from 'immer';
import { defaultData as businessCardData } from '@/app/_components/BusinessCard/Editor/constant';
import { EditorButton } from '@/app/_components/BusinessCard/Editor/Button';
import type { BusinessCardData } from '@/app/_components/BusinessCard';
import { EditorOutput } from '@/app/_components/BusinessCard/Editor/Output';

export const EditorContext = createContext<{ businessCard: BusinessCardData }>({
	businessCard: {
		name: '',
		position: '',
		company: '',
		location: '',
		email: '',
		phone: '',
		linkedin: '',
		website: '',
	},
});

export function Editor() {
	const [businessCard, setBusinessCard] = useState<BusinessCardData>({
		name: '',
		position: '',
		company: '',
		location: '',
		email: '',
		phone: '',
		linkedin: '',
		website: '',
	});

	const onEdit = (key: keyof BusinessCardData) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setBusinessCard((prev) =>
			produce(prev, (draft) => {
				draft[key] = event.target.value;
			}),
		);
	};
	return (
		<EditorContext.Provider value={{ businessCard }}>
			<EditorWrapper>
				<EditorPreview qrcode={<EditorOutput />} />
				<EditorForm onEdit={onEdit} />
				<EditorButton />
			</EditorWrapper>
		</EditorContext.Provider>
	);
}
