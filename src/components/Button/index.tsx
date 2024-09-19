'use client'
import style from "./page.module.css"

export default function Button(){

    function handleClick(){
        console.log('Clicoou')
    }

    return(
        <button onClick={handleClick} className={style.button_container}><span className={style.text}>Adicionar nova tarefa</span></button>
    )
}