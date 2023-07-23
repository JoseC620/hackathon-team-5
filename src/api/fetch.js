const KEY = process.env.REACT_APP_API_KEY

export function getParkData() {
    return fetch(`https://data.cityofnewyork.us/resource/enfh-gkve.json?$$app_token=${KEY}`).then((response) => response.json())
}