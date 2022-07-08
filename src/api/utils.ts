export enum FetchStatus {
	NOT_STARTED = 'NOT_STARTED',
	PENDING = 'PENDING',
	FINISHED = 'FINISHED'
}

export interface FetchState<D = {}> {
	status: FetchStatus;
	error: any;
	data: D | null;
	httpCode: number;
}

export interface FetchStateWithData<D = {}> extends FetchState<D> {
	data: D;
}
export const isNotStartedOrPending = (fetch: FetchState): boolean => {
	return fetch.status === FetchStatus.NOT_STARTED || fetch.status === FetchStatus.PENDING;
};

export const hasFailed = (fetch: FetchState): boolean => {
	return fetch.error != null || fetch.httpCode >= 400;
};

export const hasData = <D = {}>(fetch: FetchState<D>): fetch is FetchStateWithData<D> => {
	return fetch.data != null;
};
