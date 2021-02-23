import {useHistory} from "react-router-dom";

import Answers from "../Answers";

import s from "./style.module.css";

const Quiz = ({questions, currentQuestion, checkAnswer, clicked}) => {
    const history = useHistory();

    if (questions.length === 0) {
        history.push("/");
    }

    return (
        questions.length > 0 && (
            <div className={s.container}>
                <h3 className={s.count}>{currentQuestion + 1} / {questions.length}</h3>
                <h2 className={`${s.question} ${s.animated}`}
                    key={questions[currentQuestion].question}
                    dangerouslySetInnerHTML={{__html: questions[currentQuestion].question}}
                />
                <div className={s.buttons}>
                    <Answers question={questions[currentQuestion]} checkAnswer={checkAnswer} clicked={clicked}/>
                </div>
            </div>
        )
    )
}

export default Quiz;