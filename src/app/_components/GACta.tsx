'use client';

import type { GA_CTA_EVENT } from '@/app/_constants/ga';
import { sendGAEvent, sendGTMEvent } from '@next/third-parties/google';

type GAButtonProps = {
	children: React.ReactNode;
	eventLabel: GA_CTA_EVENT;
} & React.HTMLAttributes<HTMLButtonElement>;

export default function GACta({ children, className, eventLabel, onClick, ...rest }: GAButtonProps) {
	function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
		sendGAEvent('event', eventLabel);
		sendGTMEvent('event', eventLabel);
		if (onClick) {
			onClick(e);
		}
	}

	return (
		<button type="button" onClick={handleClick} className={className} {...rest}>
			{children}
		</button>
	);
}
