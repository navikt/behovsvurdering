export function fetchData<T>(url: string, errorHandler?: (error: Error) => any): Promise<T> {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json();
        })
        .catch(errorHandler)
}