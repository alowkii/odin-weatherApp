export { displayWeatherData, displayWeatherDataErr }

function displayWeatherData(data) {
    const datetime = data.currentConditions.datetime;

    for(let i=0; i<data.days.length; i++) {
        const date = data.days[i].datetime;
        const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        const day = new Date(date).getDay();
        const dayOfWeek = daysOfWeek[day];

        const temp = data.days[i].tempmax;
        const desc = data.days[i].conditions;

        const weatherData = document.createElement('div');
        weatherData.innerHTML = `
            <h3>${dayOfWeek}</h3>
            <p>Temperature: ${temp}°F</p>
            <p>Conditions: ${desc}</p>
        `;

        document.getElementById('weather-data').appendChild(weatherData);
    }
}

function displayWeatherDataErr(error) {
    console.error(error);
}