//We will search for the city to  get the location key. We then use the key to get the forecast.

const key = "gde3Zo0pGgT5IumeoU4MAc5xeTMJRwnR";

//get current weather

const getWeather = async (id) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?&apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

//Find key for city

const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};
