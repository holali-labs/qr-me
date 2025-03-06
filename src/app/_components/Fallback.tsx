import type { PropsWithChildren } from 'react';

export function Fallback<T>({ value, children, fallback }: PropsWithChildren<{ value: T; fallback: T }>) {
	return <>{value ? children : fallback}</>;
}
