export { getWeatherData }

function getLocationInfo(form) {
    const city = form.city.value;
    const country = form.country.value;
    return { city, country };
}

function getDateRange() {
    const date = new Date();
    const startDate = date.toISOString().split('T')[0];
    const endDate = new Date(date.setDate(date.getDate() + 7)).toISOString().split('T')[0];
    return { startDate, endDate };
}

async function getWeatherData(event) {
    event.preventDefault();

    const location = getLocationInfo(event.target);
    const date = getDateRange();
    
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location.city},${location.country}/${date.startDate}/${date.endDate}?key=E4777ST55DW2TP66BPWK4Z7KU`
    
    const response = await fetch(url);
    try {
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error: ', error);
    }
}