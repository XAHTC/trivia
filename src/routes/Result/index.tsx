import {useHistory} from "react-router-dom";

import Button from "../../components/Button";

import s from "./style.module.css";

interface Finish {
    score: number
    resetScore: () => void
}

const Result:React.FC<Finish> = ({score, resetScore}) => {
    const history = useHistory()

    if (score === 0) {
        history.push("/");
    }

    const handleBackClick = () => {
        history.push("/");
        resetScore();
    }

    return (
        <>
            <h1 className={`${s.finish} ${s.animated}`}>{`Your score: ${score}`}</h1>
            <Button desc={"Try again"} handleClick={handleBackClick} />
        </>
    )
}

export default Result;