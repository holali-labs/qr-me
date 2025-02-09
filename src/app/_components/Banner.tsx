import { Box, Flex, Heading, Text } from '@radix-ui/themes';

export function Banner() {
	return (
		<Box width="576px" mx="auto" my="8">
			<Flex direction="column" align="center" gap="4">
				<Text wrap="balance" color="cyan" asChild>
					<Heading as="h1" size="9">
						Seamlessly Share Your Business Identity.
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
