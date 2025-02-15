import { Container, Flex } from '@radix-ui/themes';
import type { PropsWithChildren } from 'react';

export function EditorWrapper({ children }: PropsWithChildren) {
	return (
		<Container maxWidth="450px" my="4" minHeight="calc(100vh - 100px)">
			<Flex direction="column" gap="6">
				{children}
			</Flex>
		</Container>
	);
}
