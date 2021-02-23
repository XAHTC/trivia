import {useHistory} from "react-router-dom";

import Button from "../Button";

import s from "./style.module.css";

const Start = ({difficultyOptions, setDifficulty, categoryOptions, setCategory, count, setCount}) => {

    const history = useHistory();

    const handleStartClick = () => {
        history.push("/quiz");
    }

    return (
        <>
            <h1 className={s.title}>Welcome to QUIZ APP</h1>
            <p className={s.text}>Choose difficulty, count of questions and category of questions</p>
            <label className={s.select}>
                <p className={s.selectText}>Choose difficulty:</p>
                <select onChange={e => {
                    setDifficulty(e.target.value);
                }}>
                    {difficultyOptions.map(o => (
                        <option key={o.id} value={o.value}>{o.label}</option>
                    ))}
                </select>
            </label>
            <label className={s.select}>
                <p className={s.selectText}>Choose number of questions:</p>
                <input type="number" min="10" max="50" value={count} onChange={e => {setCount(e.target.value)}}/>
            </label>
            <label className={s.select}>
                <p className={s.selectText}>Choose category:</p>
                <select onChange={e => {
                    setCategory(e.target.value);
                }}>
                    {categoryOptions.map(o => (
                        <option key={o.id} value={o.value}>{o.label}</option>
                    ))}
                </select>
            </label>
            <Button descr={"Start Quiz"} handleClick={handleStartClick}/>
        </>
    )
}

export default Start;