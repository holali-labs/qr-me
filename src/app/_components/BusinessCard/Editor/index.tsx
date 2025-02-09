'use client';

import { EditorWrapper } from '@/app/_components/BusinessCard/Editor/Wrapper';
import { EditorForm } from '@/app/_components/BusinessCard/Editor/Form';
import { type BusinessCardData, BusinessCard as EditorPreview } from '@/app/_components/BusinessCard';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { produce } from 'immer';

const defaultData = {
	name: 'Harry Potter',
	position: 'Seeker',
	jobTitle: 'Auror',
	company: 'Ministry of Magic',
	location: 'London, UK',
	email: 'harry.potter@hogwarts.co.uk',
	phone: '+44 7123 456 789',
	linkedin: 'https://linkedin.com/in/theboywholived',
	website: 'https://www.harrypottermagic.com',
};

export function Editor() {
	const searchParams = useSearchParams();
	const initialData = useMemo(
		() => ({
			name: searchParams.get('name') || defaultData.name,
			position: searchParams.get('position') || defaultData.position,
			jobTitle: searchParams.get('jobTitle') || defaultData.jobTitle,
			company: searchParams.get('company') || defaultData.company,
			location: searchParams.get('location') || defaultData.location,
			email: searchParams.get('email') || defaultData.email,
			phone: searchParams.get('phone') || defaultData.phone,
			linkedin: searchParams.get('linkedin') || defaultData.linkedin,
			website: searchParams.get('website') || defaultData.website,
		}),
		[searchParams],
	);
	const [formData, _setFormData] = useState(initialData);
	const handleChange = (key: keyof BusinessCardData) => (event: React.ChangeEvent<HTMLInputElement>) => {
		_setFormData((prev) =>
			produce(prev, (draft) => {
				draft[key] = event.target.value;
			}),
		);
	};
	return (
		<EditorWrapper>
			<EditorPreview {...formData} />
			<EditorForm formData={formData} handleChange={handleChange} />
		</EditorWrapper>
	);
}
