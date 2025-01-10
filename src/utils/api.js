const API_URL = "https://hp-api.onrender.com/api/";

/* const fetchData = (url, requestOption) => {
    const apiUrl = `${API_URL}${url}`;

    return fetchData(apiUrl, requestOption)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
            }

            if (requestOption.method !== 'DELETE')
                return response.json();
        })
        .catch((error) => {
            throw error;
        });
}; */

 export async function apiGet(url) {
    const apiUrl = `${API_URL}${url}`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
}