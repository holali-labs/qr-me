import { Button } from '@radix-ui/themes';
import { scrollToTop } from '@/app/_utils/scroll';
import { delay } from 'es-toolkit';
import domToImage from 'dom-to-image';

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

	return <Button onClick={generateQRCode}>Save my business card</Button>;
}
