import { Box, Flex, Text, Heading } from '@radix-ui/themes';
import type { ReactNode } from 'react';
import {
	IoIosPin as LocationIcon,
	IoIosMail as MailIcon,
	IoIosCall as PhoneIcon,
	IoLogoLinkedin as LinkedInIcon,
	IoIosLink as WebsiteIcon,
} from 'react-icons/io';
import { Fallback } from '../Fallback';
import { defaultData } from './Editor/constant';

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

export function BusinessCard({
	name,
	position,
	company,
	location,
	email,
	phone,
	linkedin,
	website,
	qrcode,
}: BusinessCardData & { qrcode: ReactNode }) {
	return (
		<Box
			id="business-card"
			width="100%"
			maxWidth="450px"
			minHeight="250px"
			p="3"
			mx="auto"
			style={{ border: '1px solid var(--gray-a4)', background: 'white', position: 'relative' }}
			asChild
		>
			<Flex direction="column">
				<Flex
					direction={{ initial: 'column', sm: 'row' }}
					align={{ initial: 'start', sm: 'end' }}
					gap="2"
					mb="3"
					wrap="wrap"
				>
					<Text color="cyan" asChild>
						<Heading as="h4" size="7" style={{ wordBreak: 'break-all' }}>
							<Fallback value={name} fallback={defaultData.name}>
								{name}
							</Fallback>
						</Heading>
					</Text>
					<Text asChild>
						<Heading as="h5" size="2" weight="regular">
							<sub>
								<Fallback value={position && company} fallback={`${defaultData.position}, @${defaultData.company}`}>
									{position}, @{company}
								</Fallback>
							</sub>
						</Heading>
					</Text>
				</Flex>
				<Flex align="center" gap="1" mb="3">
					<LocationIcon />
					<Heading as="h5" size="3" weight="light">
						<Fallback value={location} fallback={defaultData.location}>
							{location}
						</Fallback>
					</Heading>
				</Flex>
				<Flex align="center" gap="1" mb="1">
					<MailIcon />
					<a href={`mailto:${email}`}>
						<Heading as="h5" size="3" weight="regular">
							<Fallback value={email} fallback={defaultData.email}>
								{email}
							</Fallback>
						</Heading>
					</a>
				</Flex>
				<Flex align="center" gap="1" mb="1">
					<PhoneIcon />
					<a href={`tel:${phone}`}>
						<Heading as="h5" size="3" weight="regular">
							<Fallback value={phone} fallback={defaultData.phone}>
								{phone}
							</Fallback>
						</Heading>
					</a>
				</Flex>
				<Flex align="center" gap="1" mb="1">
					<LinkedInIcon />
					<a href={linkedin} target="_blank" rel="noreferrer">
						<Heading as="h5" size="3" weight="regular">
							<Fallback value={linkedin} fallback={defaultData.linkedin}>
								Linkedin: @{linkedin?.split('/')[4]}
							</Fallback>
						</Heading>
					</a>
				</Flex>
				<Flex align="center" gap="1" mb="2">
					<WebsiteIcon />
					<a href={website} target="_blank" rel="noreferrer">
						<Heading as="h5" size="3" weight="regular">
							<Fallback value={website} fallback={defaultData.website}>
								{website}
							</Fallback>
						</Heading>
					</a>
				</Flex>
				<Box style={{ alignSelf: 'flex-end' }}>{qrcode}</Box>
			</Flex>
		</Box>
	);
}
