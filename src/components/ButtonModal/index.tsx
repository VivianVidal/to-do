'use client'

import style from "./page.module.css";

interface ButtonProps {
  label: 'Adicionar' | 'Cancelar' | 'Deletar'; 
}

export default function ButtonModal({ label }: ButtonProps) {

  function handleClick() {
    console.log('Clicou no botão:', label);
  }

  const buttonClass =
    label === 'Adicionar' ? style.button_add_container : 
    label === 'Cancelar' ? style.button_cancel_container : 
    label === 'Deletar' ? style.button_del_container : '';

  return (
    <button onClick={handleClick} className={`${style.group} ${buttonClass}`}>
      <span className={style.text}>{label}</span>
    </button>
  );
}
