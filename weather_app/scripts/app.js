//Query Selectors
const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");

//functions
//update the UI with the new city
const updateCity = async (city) => {
  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.Key);

  return { cityDets, weather };
};

//add event listener to form input
cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //update UI with new City
  updateCity(city)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
