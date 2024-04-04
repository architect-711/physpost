import { AxiosResponse } from 'axios';
import { Dispatch, SetStateAction, useEffect } from 'react';

export default function useService<T>(
	fn: () => Promise<AxiosResponse<T, unknown>>,
	setHook: Dispatch<SetStateAction<T | null>>
): void {
	useEffect(() => {
		const getResponse = (): Promise<T> =>
			fn().then(response => response.data);

		const unwrapPromise = async (): Promise<void> => {
			setHook(await getResponse());
		};

		unwrapPromise();
	});
}
