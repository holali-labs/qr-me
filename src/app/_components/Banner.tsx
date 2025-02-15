import { Box, Flex, Heading, Text } from '@radix-ui/themes';

export function Banner() {
	return (
		<Box width={{ xs: '100%', sm: '576px' }} mx="auto" my="8" px="2">
			<Flex direction="column" align="center" gap="4">
				<Text wrap="balance" color="cyan" asChild>
					<Heading as="h1" size={{ xs: '8', sm: '9' }}>
						Seamlessly Share Youself with the QR Code.
					</Heading>
				</Text>
				<Text weight="light" asChild>
					<Heading as="h6" size="2">
						Create, share, and update your digital card in seconds—effortless and always ready.
					</Heading>
				</Text>
			</Flex>
		</Box>
	);
}
