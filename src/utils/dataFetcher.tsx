import React, { Component } from 'react';
import NavFrontendSpinner from 'nav-frontend-spinner';

interface DataFetcherProps<T> {
    fetchFunc: (args?: string[], errorHandler?: (response?: Response) => any) => Promise<T>; // tslint:disable-line
    children: (data: T) => React.ReactNode;
}

interface DataFetcherState<T> {
    isLoading: boolean;
    data: T;
}

class DataFetcher<T> extends Component<DataFetcherProps<T>, DataFetcherState<T>> {
    state =  {
        isLoading: true,
        data: {} as T,
    };

    componentDidMount() {
        this.props.fetchFunc()
            .then((data: T) =>
                this.setState({data, isLoading: false}));
    }

    render() {
        if (this.state.isLoading) {
            return <div className="spinner-wrapper centered"><NavFrontendSpinner type="XXL"/></div>;
        }

        if (this.state.data === null) {
            return <div/>;
        }

        return this.props.children(this.state.data);

    }
}

export default DataFetcher;