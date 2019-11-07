export async function postData(url = '', data = {}) {
    const response = fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/JSON' },
        body: data,
    })
    return await response.json()
}

export async function getData(url = '', data = '') {
    const response = await fetch(`${url}`)
    const retorno = await response.json()
    return retorno
}
