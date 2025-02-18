export const GA_CTA_EVENTS = {
	onClickSaveBusinessCard: 'click_save_business_card',
} as const;

export type GA_CTA_EVENT = (typeof GA_CTA_EVENTS)[keyof typeof GA_CTA_EVENTS];
