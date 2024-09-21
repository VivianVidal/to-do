'use client'
import style from "./page.module.css";

interface ButtonProps {
  label: 'Adicionar' | 'Cancelar' | 'Deletar'; 
  click: () => void;
}

export default function ButtonModal({ label, click }: ButtonProps) {

  const buttonClass =
    label === 'Adicionar' ? style.button_add_container : 
    label === 'Cancelar' ? style.button_cancel_container : 
    label === 'Deletar' ? style.button_del_container : '';

  return (
    <button onClick={click} className={`${style.group} ${buttonClass}`}>
      <span className={style.text}>{label}</span>
    </button>
  );
}
