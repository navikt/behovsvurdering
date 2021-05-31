export interface PagesState {
	dialogId?: string;
	besvarelseId?: number;
}

export interface PagesProps {
	setState: SetStateFunc;
	state: PagesState;
}

export type SetStateFunc = (state: PagesState) => void;
