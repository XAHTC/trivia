import s from "./style.module.css";

const Button = ({handleClick, descr}) => {
    return <button onClick={handleClick} className={s.button}>{descr}</button>
}

export default Button;