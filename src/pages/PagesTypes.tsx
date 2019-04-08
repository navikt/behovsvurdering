export interface PagesState {
    pageId: string;
}

export interface PagesProps {
    setState: (props: PagesState) => void;
}