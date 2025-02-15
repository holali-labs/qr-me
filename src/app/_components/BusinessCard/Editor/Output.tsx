import { useContext } from 'react';
import { Flex } from '@radix-ui/themes';
import QRCode from 'react-qr-code';
import qs from 'query-string';
import { EditorContext } from '@/app/_components/BusinessCard/Editor';

export function EditorOutput() {
	const { businessCard } = useContext(EditorContext);
	const businessCardLink = `${process.env.NEXT_PUBLIC_BASE_URL}/view?${qs.stringify(businessCard)}`;

	return (
		<Flex align="center" justify="center">
			<QRCode size={96} value={businessCardLink} />
		</Flex>
	);
}
