import {useEffect, useState} from "react";
import {Switch, Route, useHistory, Redirect} from "react-router-dom";

import Finish from "./components/Finish";
import Start from "./components/Start";
import Quiz from "./components/Quiz";
import NotFound from "./components/NotFound";

const difficultyOptions = [
    {id: 1, value: "easy", label: "Easy"},
    {id: 2, value: "medium", label: "Medium"},
    {id: 3, value: "hard", label: "Hard"}
];
const categoryOptions = [
    {id: 9, value: 9, label: "General Knowledge"},
    {id: 10, value: 10, label: "Books"},
    {id: 11, value: 11, label: "Film"},
    {id: 12, value: 12, label: "Music"},
    {id: 13, value: 13, label: "Musicals & Theatres"},
    {id: 14, value: 14, label: "Television"},
    {id: 15, value: 15, label: "Video Games"},
    {id: 16, value: 16, label: "Board Games"},
    {id: 17, value: 17, label: "Science & Nature"},
    {id: 18, value: 18, label: "Computers"},
    {id: 19, value: 19, label: "Mathematics"},
    {id: 20, value: 20, label: "Mythology"},
    {id: 21, value: 21, label: "Sports"},
    {id: 22, value: 22, label: "Geography"},
    {id: 23, value: 23, label: "History"},
    {id: 24, value: 24, label: "Politics"},
    {id: 25, value: 25, label: "Art"},
    {id: 26, value: 26, label: "Celebrities"},
    {id: 27, value: 27, label: "Animals"},
    {id: 28, value: 28, label: "Vehicles"},
    {id: 29, value: 29, label: "Comics"},
    {id: 30, value: 30, label: "Gadgets"},
    {id: 31, value: 31, label: "Japanese Anime & Manga"},
    {id: 32, value: 32, label: "Cartoon & Animations"},
]

const App = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [gameEnded, setGameEnded] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [difficulty, setDifficulty] = useState("easy");
    const [category, setCategory] = useState("10");
    const [count, setCount] = useState(10);

    const API_URL = `https://opentdb.com/api.php?amount=${count}&category=${category}&difficulty=${difficulty}&type=multiple`;

    const history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetch(API_URL).then(res => res.json()).then(({results}) => {
                    const questions = results.map(item => ({
                        ...item,
                        answers: [
                            item.correct_answer,
                            ...item.incorrect_answers,
                        ].sort(() => Math.random() - 0.5),
                    }))
                    setQuestions(questions);
                });
            } catch (e) {
                console.log(e);
            }
        }

        fetchData();
    }, [API_URL])

    const checkAnswer = (result) => {
        if (!clicked) {
            setClicked(prevState => !prevState);

            if (result) {
                setScore(prevState => ++prevState);
            }
            setTimeout(() => {
                setGameEnded(currentQuestion === questions.length - 2);
                if (gameEnded) {
                    setCurrentQuestion(prevState => {
                        prevState = 0;
                        return prevState;
                    });
                    history.push("/result");
                }

                setCurrentQuestion(prevState => ++prevState);
                setClicked(prevState => !prevState);
            }, 1000);
        }
    }

    const resetScore = () => {
        setScore(0);
        setCurrentQuestion(0);
    }

    return (
        <Switch>
            <Route path="/404" component={NotFound}/>
            <Route path="/" exact
                   render={() => <Start difficultyOptions={difficultyOptions} setDifficulty={setDifficulty}
                                        categoryOptions={categoryOptions} setCategory={setCategory}
                                        count={count} setCount={setCount}
                   />}/>
            <Route path="/quiz" render={() => <Quiz questions={questions} currentQuestion={currentQuestion}
                                                    checkAnswer={checkAnswer} clicked={clicked}/>}/>
            <Route path="/result" render={() => <Finish resetScore={resetScore} score={score}/>}/>
            <Route render={() => <Redirect to="/404"/>}/>
        </Switch>
    )
}

export default App;
