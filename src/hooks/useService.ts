import { AxiosResponse } from 'axios';
import { useEffect } from 'react';

export default function useService<T>(
	fn: Promise<AxiosResponse<T, unknown>> | undefined,
	callBack: (datum: T) => void
): void {
	useEffect(
		() => {
			if (typeof fn === 'undefined') {
				return;
			}

			const getResponse = (): Promise<T> =>
				fn.then(response => response.data);

			const unwrapPromise = async (): Promise<void> => {
				callBack(await getResponse());
			};

			unwrapPromise();
		},
		[] /* DO NOT REMOVE EMPTY ARRAY OR GET INFINITY LOOP OF REQUESTS*/
	);
}
