import { useHistory } from 'react-router-dom';

import { IQuestion } from '../../App';

import s from './style.module.css';
import Answers from '../../components/Answers';


export interface IQuizProps {
    questions: Array<IQuestion>
    currentQuestion: number,
    checkAnswer: (result: boolean) => void
    clicked: boolean,
}

const Quiz: React.FC<IQuizProps> = ({ questions, currentQuestion, checkAnswer, clicked }) => {
    const history = useHistory();

    console.log(questions);

    if (questions.length === 0) {
        history.push('/');
    }

    if (questions.length === 0) {
        return <h1>Loading...</h1>
    }

    return (
        <div className={s.container}>
            <h3 className={s.count}>{currentQuestion + 1} / {questions.length}</h3>
            <h2 className={`${s.question} ${s.animated}`}
                key={questions[currentQuestion].question}
                dangerouslySetInnerHTML={{ __html: questions[currentQuestion].question }}
            />
            <div className={s.buttons}>
                <Answers question={questions[currentQuestion]} checkAnswer={checkAnswer} clicked={clicked}/>
            </div>
        </div>

    );
};

export default Quiz;