# Weather App

## Summary
This is a simple Weather App built using React. The app displays the current temperature, humidity, and weather description for a selected city using data retrieved from the OpenWeatherMap API.

## Components
The app has two components: 'App' and 'BoxCity'.

### 'App'
The 'App' component is the main component of the app. It holds the state of the currently selected city and the weather data retrieved from the API. It also contains the logic to fetch the weather data when a new city is selected.

#### Props
None

#### State
cities: An array of objects representing the available cities. Each object has a name and id property.
selectedCity: A string representing the currently selected city.
weatherData: An object representing the weather data for the selected city. The object has properties for temperature, humidity, and weather description.

#### Methods
handleSelectCity: A method that sets the selectedCity state to the selected city.

#### LifeCycle Methods
useEffect: This method is used to fetch the weather data for the selected city when the selectedCity state changes.

### BoxCity
The BoxCity component is a child component of App that displays a box for a specific city. When the box is clicked, it sets the selectedCity state to the name of the city

#### Props
cityName: A string representing the name of the city.
isSelected: A boolean value indicating whether or not the box is selected.
onSelectCity: A function that is called when the box is clicked.

#### State
None

#### Methods
None

## Dependencies
React: A JavaScript library for building user interfaces.

## API
The app uses the OpenWeatherMap API to retrieve weather data for the selected city. The API requires an API key, which is stored as a constant in the 'App' component.
