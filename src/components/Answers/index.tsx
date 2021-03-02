import s from './style.module.css';

interface IQuestion {
    correct_answer: string
    answers: Array<string>
}

interface IAnswersProps {
    question: IQuestion
    checkAnswer: (result: boolean) => void
    clicked: boolean
}

const Answers: React.FC<IAnswersProps> = ({
                                              question,
                                              checkAnswer,
                                              clicked
                                          }) => {

    const { correct_answer: correctAnswer, answers } = question;

    const handleClick = (item: string) => {
        return checkAnswer(item === correctAnswer);
    };

    return (
        <>
            {
                answers.map((item, idx) => <button onClick={() => handleClick(item)}
                                                   key={idx}
                                                   className={clicked ? (item === correctAnswer
                                                       ? `${s.button} ${s.correct}`
                                                       : `${s.button} ${s.wrong}`) : `${s.button} ${s.animated}`}
                                                   dangerouslySetInnerHTML={{ __html: item }}
                />)
            }
        </>
    );
};

export default Answers;
