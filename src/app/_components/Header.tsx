import { Box, Container, Text, Heading, Separator } from '@radix-ui/themes';

export function Header() {
	return (
		<Box asChild>
			<header>
				<Container size="3" p="3">
					<Text size="5">
						<Heading as="h1" color="crimson">
							Share Me
						</Heading>
					</Text>
				</Container>
				<Separator orientation="horizontal" size="4" />
			</header>
		</Box>
	);
}
