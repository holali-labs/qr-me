'use client';

import { Box, Container, TextField } from '@radix-ui/themes';
import { Flex } from '@radix-ui/themes';
import { Label } from '@radix-ui/react-label';
import type { BusinessCardData } from '..';

interface Props {
	formData: BusinessCardData;
	handleChange: (key: keyof BusinessCardData) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export function EditorForm({ formData, handleChange }: Props) {
	return (
		<Container maxWidth="450px">
			<Flex direction="column" justify="center" gap="3">
				<Box>
					<Label htmlFor="name">Name</Label>
					<TextField.Root id="name" value={formData.name} onChange={handleChange('name')} />
				</Box>
				<Box>
					<Label htmlFor="position">Position</Label>
					<TextField.Root id="position" value={formData.position} onChange={handleChange('position')} />
				</Box>
				<Box>
					<Label htmlFor="jobTitle">Job Title</Label>
					<TextField.Root id="jobTitle" value={formData.jobTitle} onChange={handleChange('jobTitle')} />
				</Box>
				<Box>
					<Label htmlFor="company">Company</Label>
					<TextField.Root id="company" value={formData.company} onChange={handleChange('company')} />
				</Box>
				<Box>
					<Label htmlFor="location">Location</Label>
					<TextField.Root id="location" value={formData.location} onChange={handleChange('location')} />
				</Box>
				<Box>
					<Label htmlFor="email">Email</Label>
					<TextField.Root id="email" value={formData.email} onChange={handleChange('email')} />
				</Box>
				<Box>
					<Label htmlFor="phone">Phone</Label>
					<TextField.Root id="phone" value={formData.phone} onChange={handleChange('phone')} />
				</Box>
				<Box>
					<Label htmlFor="linkedin">LinkedIn</Label>
					<TextField.Root id="linkedin" value={formData.linkedin} onChange={handleChange('linkedin')} />
				</Box>
				<Box>
					<Label htmlFor="website">Website</Label>
					<TextField.Root id="website" value={formData.website} onChange={handleChange('website')} />
				</Box>
			</Flex>
		</Container>
	);
}
