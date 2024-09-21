'use client'
import style from "./page.module.css"

interface ButtonProps{
    onOpen: () => void;
}

export default function Button({onOpen}: ButtonProps){

    return(
        <button onClick={onOpen} className={style.button_container}><span className={style.text}>Adicionar nova tarefa</span></button>
    )
}