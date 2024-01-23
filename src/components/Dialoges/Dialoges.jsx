import style from './Dialoges.module.css';
import { NavLink } from 'react-router-dom';

function Dialoges() {
    return(
        <div className={style.ollDialogs}>
            <div className={style.dialogs}>
                <div className={style.dialog}><NavLink to="/dialogs/1">Dima</NavLink></div>
                <div className={style.dialog}><NavLink to="/dialogs/2">Olya</NavLink></div>
                <div className={style.dialog}><NavLink to="/dialogs/3">Nika</NavLink></div>
                <div className={style.dialog}><NavLink to="/dialogs/4">Nikita</NavLink></div>
                <div className={style.dialog}><NavLink to="/dialogs/5">Ksenia</NavLink></div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hi</div>
                <div className={style.message}>Hello</div>
                <div className={style.message}>How are you?</div>
                <div className={style.message}>Thanks</div>
                <div className={style.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialoges;