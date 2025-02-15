'use client';

import { Box, TextField } from '@radix-ui/themes';
import { Flex } from '@radix-ui/themes';
import { Label } from '@radix-ui/react-label';
import type { BusinessCardData } from '@/app/_components/BusinessCard';
import { defaultData } from '@/app/_components/BusinessCard/Editor/constant';
import { useContext } from 'react';
import { EditorContext } from '@/app/_components/BusinessCard/Editor';

interface Props {
	onEdit: (key: keyof BusinessCardData) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export function EditorForm({ onEdit }: Props) {
	const { businessCard } = useContext(EditorContext);

	return (
		<Flex direction="column" justify="center" gap="3" px="2">
			<Box>
				<Label htmlFor="name">Name</Label>
				<TextField.Root id="name" placeholder={defaultData.name} value={businessCard.name} onChange={onEdit('name')} />
			</Box>
			<Box>
				<Label htmlFor="position">Position</Label>
				<TextField.Root
					id="position"
					placeholder={defaultData.position}
					value={businessCard.position}
					onChange={onEdit('position')}
				/>
			</Box>
			<Box>
				<Label htmlFor="company">Company</Label>
				<TextField.Root
					id="company"
					placeholder={defaultData.company}
					value={businessCard.company}
					onChange={onEdit('company')}
				/>
			</Box>
			<Box>
				<Label htmlFor="location">Location</Label>
				<TextField.Root
					id="location"
					placeholder={defaultData.location}
					value={businessCard.location}
					onChange={onEdit('location')}
				/>
			</Box>
			<Box>
				<Label htmlFor="email">Email</Label>
				<TextField.Root
					id="email"
					placeholder={defaultData.email}
					value={businessCard.email}
					onChange={onEdit('email')}
				/>
			</Box>
			<Box>
				<Label htmlFor="phone">Phone</Label>
				<TextField.Root
					id="phone"
					placeholder={defaultData.phone}
					value={businessCard.phone}
					onChange={onEdit('phone')}
				/>
			</Box>
			<Box>
				<Label htmlFor="linkedin">Linkedin</Label>
				<TextField.Root
					id="linkedin"
					placeholder={defaultData.linkedin}
					value={businessCard.linkedin}
					onChange={onEdit('linkedin')}
				/>
			</Box>
			<Box>
				<Label htmlFor="website">Website</Label>
				<TextField.Root
					id="website"
					placeholder={defaultData.website}
					value={businessCard.website}
					onChange={onEdit('website')}
				/>
			</Box>
		</Flex>
	);
}
