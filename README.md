# News_Feed

## Intro
This is my first web application, built with React.js and Node.js. It's a simple news aggregator which allows the user to read hundreds of articles, divided in 7 different categories, published by the major newspapers of 52 Countries in the world.

## External resources
- The web application uses the NewsAPI HTTP REST API (base version with 100 calls per day) for searching and retrieving the articles. Link here "https://newsapi.org/"
- All the icons are taken from: "https://fontawesome.com/icons?d=gallery"
- The background image is taken from: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F254946028887399529%2F&psig=AOvVaw2SvmjYWhfCm47_yAzN3QuJ&ust=1608402406362000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPCz2JuU2O0CFQAAAAAdAAAAABAY"


## Technologies
I decided to use the following technologies for developing the web application:

#### Node.js Framework
I created a base server that receives the requests from the front-end, makes the calls to the News API and then sends back the data to the fron-end in json format. All the libraries imported:

- express 
- axios 
- cors 
- dotenv
- nodemon

#### React.js Library
I used functional components and React Hooks to create the building blocks of my website. All the libraries imported:

- axios
- bootstrap
- react-bootstrap
- emoji-flags
- react-alert
- react-alert-template-oldschool-dark
- react-emojione
- react-router-dom
- react-uuid
- use-route-as-state

#### localStorage
In order to avoid a large number of requests to the News API and to store the Country selected, I decided to save temporarily (at least 2 hours) the pages that the user has visited in the localStorage.

## Screenshots
![main](https://user-images.githubusercontent.com/62058037/102647487-16cdfc80-4166-11eb-9a18-9a2735e45a68.PNG)

![countries](https://user-images.githubusercontent.com/62058037/102647493-1a618380-4166-11eb-87df-dc6913bb9d54.PNG)

![demo](https://user-images.githubusercontent.com/62058037/102648667-2e0de980-4168-11eb-930b-9a32d573b4e1.gif)
