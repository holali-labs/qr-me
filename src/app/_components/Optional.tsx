import type { PropsWithChildren } from 'react';

export function Optional<T>({ value, children }: PropsWithChildren<{ value: T }>) {
	return <>{value ? children : null}</>;
}
