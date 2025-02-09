import { Box, Container, Text } from '@radix-ui/themes';

export function Footer() {
	return (
		<Box asChild style={{ backgroundColor: 'var(--gray-a4)' }}>
			<footer>
				<Container size="3" p="3">
					<Text size="3">ShareMe &copy; {new Date().getFullYear()} Daesang Stefan You.</Text>
				</Container>
			</footer>
		</Box>
	);
}
