export function fetchData<T>(url: string, config = {}, errorHandler?: (response?: Response) => any): Promise<T> {
    return fetch(url, config)
        .then(response => {
            if (!response.ok) {
                if(errorHandler) {
                    return errorHandler(response);
                }
                throw new Error(`url: ${url} statusText: ${response.statusText}`);
            }
            return response.json();
        })
        .catch(error => {
            if (errorHandler) {
                return errorHandler(error)
            }
            throw new Error(error)
        })
}
