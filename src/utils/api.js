const API_URL = "https://hp-api.onrender.com/api/";

// Toto je základní funkce pro volání API
const fetchData = (url, requestOption) => {
    const apiUrl = `${API_URL}${url}`;

    // Zde by mělo být fetch místo fetchData - to byl hlavní problém
    return fetch(apiUrl, requestOption)
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
};

// Tato funkce je správně, ale můžeme ji zjednodušit
export async function apiGet(url) {
    const apiUrl = `${API_URL}${url}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Chyba při načítání dat:', error);
        throw error;
    }
}