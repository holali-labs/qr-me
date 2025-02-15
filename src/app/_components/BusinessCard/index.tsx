import { AspectRatio, Box, Flex, Text, Heading, Separator } from '@radix-ui/themes';
import type { ReactNode } from 'react';
import {
	IoIosPin as LocationIcon,
	IoIosMail as MailIcon,
	IoIosCall as PhoneIcon,
	IoLogoLinkedin as LinkedInIcon,
	IoIosLink as WebsiteIcon,
} from 'react-icons/io';

export type BusinessCardData = Partial<{
	name: string;
	position: string;
	jobTitle: string;
	company: string;
	location: string;
	email: string;
	phone: string;
	linkedin: string;
	website: string;
}>;

export function BusinessCard(businessCardData: BusinessCardData & { qrcode: ReactNode }) {
	return (
		<AspectRatio ratio={9 / 5}>
			<Box
				id="business-card"
				p="3"
				width="100%"
				minHeight="250px"
				style={{ border: '1px solid var(--gray-a4)', background: 'var(--background)', position: 'relative' }}
				asChild
			>
				<Flex direction="column">
					<Flex align="end" gap="2" mb="3">
						<Text color="cyan" asChild>
							<Heading as="h4" size="7">
								{businessCardData.name}
							</Heading>
						</Text>
						<Separator orientation="vertical" />
						<Text asChild>
							<Heading as="h5" size="2" weight="regular">
								<sub>
									{businessCardData.position}, @{businessCardData.company}
								</sub>
							</Heading>
						</Text>
					</Flex>
					<Flex align="center" gap="1" mb="3">
						<LocationIcon />
						<Heading as="h5" size="3" weight="light">
							{businessCardData.location}
						</Heading>
					</Flex>
					<Flex align="center" gap="1" mb="1">
						<MailIcon />
						<a href={`mailto:${businessCardData.email}`}>
							<Heading as="h5" size="3" weight="regular">
								{businessCardData.email}
							</Heading>
						</a>
					</Flex>
					<Flex align="center" gap="1" mb="1">
						<PhoneIcon />
						<a href={`tel:${businessCardData.phone}`}>
							<Heading as="h5" size="3" weight="regular">
								{businessCardData.phone}
							</Heading>
						</a>
					</Flex>
					<Flex align="center" gap="1" mb="1">
						<LinkedInIcon />
						<a href={businessCardData.linkedin} target="_blank" rel="noreferrer">
							<Heading as="h5" size="3" weight="regular">
								Linkedin: @{businessCardData.linkedin?.split('/')[4]}
							</Heading>
						</a>
					</Flex>
					<Flex align="center" gap="1" mb="1">
						<WebsiteIcon />
						<a href={businessCardData.website} target="_blank" rel="noreferrer">
							<Heading as="h5" size="3" weight="regular">
								{businessCardData.website}
							</Heading>
						</a>
					</Flex>
					<Box style={{ position: 'absolute', bottom: 'var(--space-3)', right: 'var(--space-3)' }}>
						{businessCardData.qrcode}
					</Box>
				</Flex>
			</Box>
		</AspectRatio>
	);
}
