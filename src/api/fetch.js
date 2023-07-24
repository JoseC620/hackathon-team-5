const KEY = process.env.REACT_APP_API_KEY

export function getParkData() {
    return fetch(`https://data.cityofnewyork.us/resource/enfh-gkve.json?$$app_token=${KEY}`).then((response) => response.json())
}

export function getOnePark(id) {
    return fetch(`https://data.cityofnewyork.us/resource/enfh-gkve.json?globalid=${id}`).then((response) => response.json())
}