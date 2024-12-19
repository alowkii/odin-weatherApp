export { getWeatherData }
import { displayWeatherData, displayWeatherDataErr } from './displayData.js';

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
    
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location.city},${location.country}/${date.startDate}/${date.endDate}?key=E4777ST55DW2TP66BPWK4Z7KU&unitGroup=us&include=obs%2Cfcst%2Cstats%2Calerts%2Ccurrent%2Chistfcst`;
    
    const response = await fetch(url);
    try {
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        displayWeatherDataErr(error);
    }
}