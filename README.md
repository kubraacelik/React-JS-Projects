# weatherapp
This project is a weather application with React. In the project, the user is prompted to enter a location and weather data is retrieved and displayed based on that location. First, two states, location and weatherData, are defined using the useState hook. location holds the location entered by the user and weatherData holds the weather data. When the user enters a location, this change is captured with the handleLocationChange function and reflected in the location state using the useState hook. Using the useEffect hook, an API call is made to pull the weather data when any change is detected in the location state. This call is made using the axios library and is used to retrieve weather data from weatherapi.com. The data received as a result of the API call is saved in the weatherData state. 
The main component contains a header and an input box. When the user enters a location here, weather data is retrieved and displayed. If the data exists in the weatherData state, the weather information is mapped and the date, icon, average temperature and weather description for each day are shown.
As a result of all these operations, the user can view the current weather information for a specified location.

![Ekran görüntüsü 2024-03-17 211809](https://github.com/kubraacelik/WeatherApp/assets/101054783/ea71bd80-68dc-45a8-ba22-462a26bc14e1)
![Ekran görüntüsü 2024-03-17 211717](https://github.com/kubraacelik/WeatherApp/assets/101054783/6ad21ef1-3a7f-44a0-94f1-63477b9f4ee2)
![Ekran görüntüsü 2024-03-17 211744](https://github.com/kubraacelik/WeatherApp/assets/101054783/127ec64e-32f7-4ec0-b6b8-5ebfeebba221)

## quizapp
The project entails a quiz application with two main components: "Introduce" and "Quiz".
In the "Introduce" component, users select the difficulty level before commencing the quiz. Once chosen, clicking the "START" button redirects them to the Quiz component via React Router, utilizing the useNavigate hook. The total number of questions is predefined.
The "Quiz" component fetches relevant questions from an API based on the selected difficulty level and the total number of questions. This is achieved using the useParams hook to extract parameters from the URL. The fetched questions are displayed using the QuestionCard component. As users answer questions, their scores are updated, and correct/incorrect answers are processed. A modal window displays the user's score upon completing the quiz.
The difficulty level selection is facilitated by a dropdown menu, which updates the state (setDifficultyChange) upon selection. The dropdown options are populated with the available difficulty levels retrieved from the data prop.
The Modal component showcases the user's score in a modal window upon completing the quiz. Clicking the restart button reloads the page.
The QuestionCard component displays quiz questions and options, each with a designated time limit. Upon time expiration or user selection, the user proceeds to the next question. The score updates accordingly, and correct answers are verified. If all questions are answered or the time runs out, a modal window appears.

![Ekran görüntüsü 2024-03-19 204215](https://github.com/kubraacelik/React-JS-Projects/assets/101054783/c87b30da-3017-42aa-91e6-afe6d3dee8d1)
![Ekran görüntüsü 2024-03-19 204243](https://github.com/kubraacelik/React-JS-Projects/assets/101054783/7781ac57-3dbf-41be-809d-48698fe36011)
![Ekran görüntüsü 2024-03-19 204312](https://github.com/kubraacelik/React-JS-Projects/assets/101054783/f1017489-83db-45a6-a546-7e47572836a5)

## pokemons
Pokecard: Represents each Pokemon card. The card contains the Pokemon's picture, name, type and experience points.
Pokedex: A component that lists Pokemon cards and creates each card using the Pokecard component. It also shows the total experience points of each player's hand and a title indicating the winner of the game.
Pokegame: The core component of the game. It generates the hands of two players, calculates the total experience points of each player's hand and finally passes the results to the Pokedex component.
The flow of the game is as follows:
-Two players' hands are created.
-The total experience points of each player's hand are calculated.
-The results are passed to the Pokedex component and displayed along with the players' cards.
-Which player wins is decided and shown as a title.
![Ekran görüntüsü 2024-04-27 173956](https://github.com/kubraacelik/React-JS-Projects/assets/101054783/766f9b77-4982-4e22-93c5-8430b4e66d02)
![Ekran görüntüsü 2024-04-27 174020](https://github.com/kubraacelik/React-JS-Projects/assets/101054783/18ab46e8-6db2-4c48-9e3c-8ee929de5990)

