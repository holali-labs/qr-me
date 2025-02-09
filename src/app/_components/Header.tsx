import { Box, Container, Text, Heading, Separator, Flex } from '@radix-ui/themes';
import { Logo } from '@/app/_logo/Logo';

export function Header() {
	return (
		<Box asChild>
			<header>
				<Container size="2" p="3">
					<Flex align="center" gap="2">
						<Logo />
						<Text size="5">
							<Heading as="h1" color="cyan">
								Share Me
							</Heading>
						</Text>
					</Flex>
				</Container>
				<Separator orientation="horizontal" size="4" />
			</header>
		</Box>
	);
}
