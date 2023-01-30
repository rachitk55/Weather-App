const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a04546bb57mshd69135c0b53c08ap197bdbjsn763af1fdcb10',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
	const getWeather = (city)=>{
		console.log('city :>> ', city);
 	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		let temp = document.getElementById("temp");
		let humidity = document.getElementById("humidity");
		let wind_speed = document.getElementById("wind_speed");
		temp.innerHTML = response.temp
		humidity.innerHTML = response.humidity
		wind_speed.innerHTML = response.wind_speed
	})
	.catch(err => console.error(err));
}
document.getElementById('submit').addEventListener("click", (e)=>{
	const name = document.getElementById('city').value;
	getWeather(name)
}) 
getWeather("Delhi");
fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Canada", options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		let temp = document.getElementById("tempc");
		let humidity = document.getElementById("humidityc");
		let wind_speed = document.getElementById("wind_speedc");
		temp.innerHTML = response.temp
		humidity.innerHTML = response.humidity
		wind_speed.innerHTML = response.wind_speed
	})
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New Zealand", options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		let temp = document.getElementById("tempnz");
		let humidity = document.getElementById("humiditynz");
		let wind_speed = document.getElementById("wind_speednz");
		temp.innerHTML = response.temp
		humidity.innerHTML = response.humidity
		wind_speed.innerHTML = response.wind_speed
	})	
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Australia", options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		let temp = document.getElementById("tempa");
		let humidity = document.getElementById("humiditya");
		let wind_speed = document.getElementById("wind_speeda");
		temp.innerHTML = response.temp
		humidity.innerHTML = response.humidity
		wind_speed.innerHTML = response.wind_speed
	})
