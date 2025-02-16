import { Container, Flex } from '@radix-ui/themes';
import type { PropsWithChildren } from 'react';

export function EditorWrapper({ children }: PropsWithChildren) {
	return (
		<Container maxWidth={{ xs: '100%', sm: '450px' }} mt="4" mb="6" minHeight="calc(100dvh - 100px)">
			<Flex direction="column" gap="6">
				{children}
			</Flex>
		</Container>
	);
}
