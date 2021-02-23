import s from "./style.module.css";
import {useHistory} from "react-router-dom";
import Button from "../Button";

const NotFound = () => {
    const history = useHistory();

    return (
        <>
            <h1 className={s.notFound}>Page not found</h1>
            <Button descr={"Back to start"} handleClick={() => {history.push("/")}} />
        </>
    )
}

export default NotFound;