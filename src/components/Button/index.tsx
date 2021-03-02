import s from "./style.module.css";

interface IButton {
    handleClick: () => void
    desc: string;
}

const Button:React.FC<IButton> = ({handleClick, desc}) => {
    return <button onClick={handleClick} className={s.button}>{desc}</button>
}

export default Button;