import { Box, Container, Text } from '@radix-ui/themes';

export function Footer() {
	return (
		<Box asChild style={{ marginTop: 'auto', backgroundColor: 'var(--gray-a4)' }}>
			<footer>
				<Container size="2" p="3">
					<Text size="3">ShareMe &copy; {new Date().getFullYear()} Daesang Stefan You.</Text>
				</Container>
			</footer>
		</Box>
	);
}
