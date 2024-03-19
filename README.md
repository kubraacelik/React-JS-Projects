# weatherapp
This project is a weather application with React. In the project, the user is prompted to enter a location and weather data is retrieved and displayed based on that location. First, two states, location and weatherData, are defined using the useState hook. location holds the location entered by the user and weatherData holds the weather data. When the user enters a location, this change is captured with the handleLocationChange function and reflected in the location state using the useState hook. Using the useEffect hook, an API call is made to pull the weather data when any change is detected in the location state. This call is made using the axios library and is used to retrieve weather data from weatherapi.com. The data received as a result of the API call is saved in the weatherData state. 
The main component contains a header and an input box. When the user enters a location here, weather data is retrieved and displayed. If the data exists in the weatherData state, the weather information is mapped and the date, icon, average temperature and weather description for each day are shown.
As a result of all these operations, the user can view the current weather information for a specified location.

![Ekran görüntüsü 2024-03-17 211809](https://github.com/kubraacelik/WeatherApp/assets/101054783/ea71bd80-68dc-45a8-ba22-462a26bc14e1)
![Ekran görüntüsü 2024-03-17 211717](https://github.com/kubraacelik/WeatherApp/assets/101054783/6ad21ef1-3a7f-44a0-94f1-63477b9f4ee2)
![Ekran görüntüsü 2024-03-17 211744](https://github.com/kubraacelik/WeatherApp/assets/101054783/127ec64e-32f7-4ec0-b6b8-5ebfeebba221)

## quizapp
This project includes a quiz application. It has two main components: Introduce and Quiz. 
Introduce: This component allows the user to select the difficulty level before starting the quiz. Once the user has selected a difficulty level, when he/she clicks on the "START" button, he/she is redirected to the Quiz component via React Router using useNavigate. The total number of questions is defined as a certain constant.
Quiz: This component displays quiz questions according to the difficulty level and number of questions parameters selected by the user. The relevant questions are fetched from the API using the difficulty level and number of questions values retrieved from the URL with the useParams hook. The QuestionCard component displays the questions to the user. As the user answers the questions, a score is kept and correct/incorrect answers are processed. When a question set is complete, a modal window is shown and the user sees their score.
The API is used to pull and process question data used in a quiz application. 
The dropdown allows the user to select the difficulty level. When the user makes a selection, it updates the state specified by setDifficultyChange. A list of difficulty levels is retrieved through the data prop and these levels are displayed in a <select> element.
Modal displays the user's score in a modal window. When the user completes the quiz, this modal window becomes visible. When the restart button is clicked, the page reloads.
QuestionCard shows the quiz questions and options. The user is given a time for each question. When the time is up or the user selects an option, the user moves to the next question. When the user answers, the score is updated and the correct answer is checked. If the user answers all questions or the time runs out, a modal window is displayed.
![Ekran görüntüsü 2024-03-19 204215](https://github.com/kubraacelik/React-JS-Projects/assets/101054783/4e6b63ba-7fb9-4b38-9af4-9a636135cecd)
![Ekran görüntüsü 2024-03-19 204243](https://github.com/kubraacelik/React-JS-Projects/assets/101054783/5efbf8ad-855c-4935-8ef0-91e8344be9b8)
![Ekran görüntüsü 2024-03-19 204312](https://github.com/kubraacelik/React-JS-Projects/assets/101054783/8c7c893c-2dd4-40db-a27b-0b6aa22509eb)
