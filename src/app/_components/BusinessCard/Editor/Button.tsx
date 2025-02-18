import { Button, Container } from '@radix-ui/themes';
import { scrollToTop } from '@/app/_utils/scroll';
import { delay } from 'es-toolkit';
import domToImage from 'dom-to-image';
import GACta from '@/app/_components/GACta';

export function EditorButton() {
	const generateQRCode = async () => {
		scrollToTop();
		await delay(100);

		const dataUrl = await convertDomToImageDataUrl();
		downloadQRCode(dataUrl);
	};

	const convertDomToImageDataUrl = async () => {
		const businessCardDom = document.getElementById('business-card');
		if (businessCardDom) {
			return await domToImage.toPng(businessCardDom, { quality: 1 });
		}
		throw new Error('Business card not found');
	};
	const downloadQRCode = (dataUrl: string) => {
		const link = document.createElement('a');
		link.download = 'my-business-card-from-qr-me.png';
		link.href = dataUrl;
		link.click();
	};

	return (
		<Container px="2">
			<Button onClick={generateQRCode} style={{ width: '100%', maxWidth: '450px', margin: '0 auto' }} asChild>
				<GACta eventLabel="click_save_business_card">Save my business card</GACta>
			</Button>
		</Container>
	);
}
