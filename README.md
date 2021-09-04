# QA-Module React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Functionality

In the application, we retrieve the questions/answers locally and show a list of posts questions (Number of answers, Body, date of post) As shown below. 

### Home Page
![alt text](https://github.com/hossamalaa69/QA-Task-React/blob/master/snapshots/1-Home.png?raw=true)

### Pagination
![alt text](https://github.com/hossamalaa69/QA-Task-React/blob/master/snapshots/2-Pagination1.png?raw=true)
![alt text](https://github.com/hossamalaa69/QA-Task-React/blob/master/snapshots/2-Pagination2.png?raw=true)

### Add Question
![alt text](https://github.com/hossamalaa69/QA-Task-React/blob/master/snapshots/3-AddQuesion1.png?raw=true)

### Added Question
![alt text](https://github.com/hossamalaa69/QA-Task-React/blob/master/snapshots/3-AddQuestion2.png?raw=true)

### Delete Question
![alt text](https://github.com/hossamalaa69/QA-Task-React/blob/master/snapshots/3-Questiondelete.png?raw=true)

### Open Answers
![alt text](https://github.com/hossamalaa69/QA-Task-React/blob/master/snapshots/4-Ans0.png?raw=true)

### View Answers
![alt text](https://github.com/hossamalaa69/QA-Task-React/blob/master/snapshots/4-Ans1.png?raw=true)

### Add Answer
![alt text](https://github.com/hossamalaa69/QA-Task-React/blob/master/snapshots/4-Ans2.png?raw=true)

### Prevent Answering after exceeding maximum allowed number (10 answers/question)
![alt text](https://github.com/hossamalaa69/QA-Task-React/blob/master/snapshots/4-Ans3Spam.png?raw=true)

### Empty Answers
![alt text](https://github.com/hossamalaa69/QA-Task-React/blob/master/snapshots/4-Ans4Empty.png?raw=true)

### Delete Answers
![alt text](https://github.com/hossamalaa69/QA-Task-React/blob/master/snapshots/4-Ans5Delete.png?raw=true)

### Span Unlock after deleting Answers
![alt text](https://github.com/hossamalaa69/QA-Task-React/blob/master/snapshots/4-Ans6SpanUnlock.png?raw=true)



## Used Packges

### 1- Redux, React-Redux: Centeralize App Data in One Store
### 2- Material UI: Third party for UI components
### 3- Router: To handle the routing between pages

## App Components

### 1- Navbar.js 
### 2- Question.js: Holds the card view that contains the question details
### 3- AddQuestion.js: Holds the form that receives new question details
### 4- Answer.js: Holds the card view that contains the answer details
### 5- AddAnswer.js: Holds the form that receives new answer details


## App Pages
### 1-Questions.js: View questions list, input form, and pagination 
### 2-Answers.js: View answers list and input form


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

