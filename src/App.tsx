import { useEffect, useState } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';

import Start from './routes/Start';
import NotFound from './routes/NotFound';
import Quiz from './routes/Quiz';
import Result from './routes/Result';

import { difficultyOptions, categoryOptions } from './data';

import './App.css';

export interface IQuestion {
    question: string
    correct_answer: string
    incorrect_answers: Array<string>
    answers: Array<string>
}

const App: React.FC = () => {
    const [questions, setQuestions] = useState<Array<IQuestion>>([]);
    const [category, setCategory] = useState<string | number>('10');
    const [difficulty, setDifficulty] = useState<string>('easy');
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [count, setCount] = useState<number>(10);
    const [score, setScore] = useState<number>(0);
    const [gameEnded, setGameEnded] = useState<boolean>(false);
    const [clicked, setClicked] = useState<boolean>(false);

    const API_URL: string =
        `https://opentdb.com/api.php?amount=${count}&category=${category}&difficulty=${difficulty}&type=multiple`;

    const history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);
                const { results }: { results: Array<any> } = await response.json();
                const questions:Array<IQuestion> = results.map((item: IQuestion) => ({
                    ...item,
                    answers: [
                        item.correct_answer,
                        ...item.incorrect_answers,
                    ].sort(() => Math.random() - 0.5),
                }));
                console.log(questions);
                setQuestions(questions);
            } catch (e) {
                console.log(e);
            }
        };

        fetchData();
    }, [API_URL]);

    const checkAnswer = (result: boolean): void => {
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
                    history.push('/result');
                }

                setCurrentQuestion(prevState => ++prevState);
                setClicked(prevState => !prevState);
            }, 1000);
        }
    };

    const resetScore = (): void => {
        setScore(0);
        setCurrentQuestion(0);
    };

    return (
        <Switch>
            <Route path="/404" component={NotFound}/>
            <Route path="/" exact>
                <Start
                    difficultyOptions={difficultyOptions}
                    categoryOptions={categoryOptions}
                    count={count}
                    setCount={setCount}
                    setDifficulty={setDifficulty}
                    setCategory={setCategory}
                />
            </Route>
            <Route path="/quiz">
                <Quiz
                    questions={questions}
                    currentQuestion={currentQuestion}
                    checkAnswer={checkAnswer}
                    clicked={clicked}
                />
            </Route>
            <Route path="/result">
                <Result resetScore={resetScore} score={score}/>
            </Route>
            <Route render={() => <Redirect to="/404"/>}/>
        </Switch>
    );
};

export default App;
