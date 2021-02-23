import s from "./style.module.css";

const Answers = ({question, checkAnswer, clicked}) => {

    const {correct_answer: correctAnswer, answers} = question;

    const handleClick = (item) => {
        return checkAnswer(item === correctAnswer)
    };

    return (
        answers.map((item, idx) => <button onClick={() => handleClick(item)}
                                           key={idx}
                                           className={clicked ? (item === correctAnswer
                                               ? `${s.button} ${s.correct}`
                                               : `${s.button} ${s.wrong}`) : `${s.button} ${s.animated}`}
                                           dangerouslySetInnerHTML={{__html: item}}
        />)
    )
}

export default Answers;

