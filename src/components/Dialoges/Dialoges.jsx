import style from './Dialoges.module.css';

function Dialoges() {
    return(
        <div className={style.ollDialogs}>
            <div className={style.dialoges}>
                <div className={style.dialog}>Dima</div>
                <div className={style.dialog}>Olya</div>
                <div className={style.dialog}>Nika</div>
                <div className={style.dialog}>Nikita</div>
                <div className={style.dialog}>Ksenia</div>
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