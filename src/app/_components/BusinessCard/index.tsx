import { AspectRatio, Box, Container, Flex, Text, Heading, HoverCard, Link } from '@radix-ui/themes';
import {
	IoIosPin as LocationIcon,
	IoMdBusiness as CompanyIcon,
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

export function BusinessCard(businessCardData: BusinessCardData) {
	return (
		<Container size="1" maxWidth="450px">
			<AspectRatio ratio={9 / 5}>
				<Box p="3" width="100%" height="100%" style={{ border: '1px solid var(--gray-a4)' }} asChild>
					<Flex direction="column">
						<Flex align="end" gap="2">
							<Text color="cyan" asChild>
								<Heading as="h4" size="7">
									{businessCardData.name}
								</Heading>
							</Text>
						</Flex>
						<Flex gap="2" align="center" mb="3">
							<Text asChild>
								<Heading as="h5" size="3" weight="light">
									{businessCardData.position}
								</Heading>
							</Text>
							-
							<Text asChild>
								<Heading as="h5" size="3" weight="light">
									{businessCardData.jobTitle}
								</Heading>
							</Text>
						</Flex>
						<Flex align="center" gap="1">
							{businessCardData.company && (
								<Flex align="center" gap="1">
									<CompanyIcon />
									<Heading as="h5" size="3" weight="light">
										{businessCardData.company}
									</Heading>
								</Flex>
							)}
						</Flex>
						<Flex align="center" gap="1" mb="3">
							<LocationIcon />
							<Heading as="h5" size="3" weight="light">
								{businessCardData.location}
							</Heading>
						</Flex>
						<Flex align="center" gap="1" mb="1">
							<MailIcon />
							<HoverCard.Root>
								<HoverCard.Trigger>
									<a href={`mailto:${businessCardData.email}`}>
										<Heading as="h5" size="3" weight="regular">
											{businessCardData.email}
										</Heading>
									</a>
								</HoverCard.Trigger>
								<HoverCard.Content side="bottom">
									<Heading as="h5" size="3" weight="regular">
										Click to mail to "{businessCardData.email}"
									</Heading>
								</HoverCard.Content>
							</HoverCard.Root>
						</Flex>
						<Flex align="center" gap="1" mb="1">
							<PhoneIcon />
							<HoverCard.Root>
								<HoverCard.Trigger>
									<a href={`tel:${businessCardData.phone}`}>
										<Heading as="h5" size="3" weight="regular">
											{businessCardData.phone}
										</Heading>
									</a>
								</HoverCard.Trigger>
								<HoverCard.Content side="bottom">
									<Heading as="h5" size="3" weight="regular">
										Click to call to "{businessCardData.phone}"
									</Heading>
								</HoverCard.Content>
							</HoverCard.Root>
						</Flex>
						<Flex align="center" gap="1" mb="1">
							<LinkedInIcon />
							<HoverCard.Root>
								<HoverCard.Trigger>
									<a href={businessCardData.linkedin}>
										<Heading as="h5" size="3" weight="regular">
											{businessCardData.linkedin}
										</Heading>
									</a>
								</HoverCard.Trigger>
								<HoverCard.Content side="bottom">
									<Heading as="h5" size="3" weight="regular">
										Click to open linkedin profile
									</Heading>
								</HoverCard.Content>
							</HoverCard.Root>
						</Flex>
						<Flex align="center" gap="1" mb="1">
							<WebsiteIcon />
							<HoverCard.Root>
								<HoverCard.Trigger>
									<a href={businessCardData.website}>
										<Heading as="h5" size="3" weight="regular">
											{businessCardData.website}
										</Heading>
									</a>
								</HoverCard.Trigger>
								<HoverCard.Content side="bottom">
									<Heading as="h5" size="3" weight="regular">
										Click to open website
									</Heading>
								</HoverCard.Content>
							</HoverCard.Root>
						</Flex>
					</Flex>
				</Box>
			</AspectRatio>
		</Container>
	);
}
