export function get(url) {
    return fetch(url);
}

export function post(url, data) {
    return fetch(`${url}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}