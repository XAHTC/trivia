import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';

import s from './style.module.css';

const NotFound: React.FC = () => {
    const history = useHistory();

    return (
        <>
            <h1 className={s.notFound}>Page not found</h1>
            <Button desc={'Back to start'} handleClick={() => {
                history.push('/');
            }}/>
        </>
    );
};

export default NotFound;