import {useHistory} from "react-router-dom";

import s from "./style.module.css";
import Button from "../Button";

const Finish = ({score, resetScore}) => {
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
            <Button descr={"Try again"} handleClick={handleBackClick} />
        </>
    )
}

export default Finish;