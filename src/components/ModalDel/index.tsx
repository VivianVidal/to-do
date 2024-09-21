'use client'
import ButtonModal from "../ButtonModal";
import style from "./page.module.css";

interface ModalDelTaskProps {
    onClose: () => void;
    onDelete: () => void;
}

export default function ModalDelTask({ onClose, onDelete }: ModalDelTaskProps) {
    return (
        <div className={style.modal_overlay}>
            <div className={style.modal}>
                <h2>Deletar Tarefa</h2>
                <p>Tem certeza que você deseja deletar essa tarefa?</p>
                <div className={style.modal_actions}>
                    <ButtonModal click={onClose} label='Cancelar' />
                    <ButtonModal click={onDelete} label='Deletar' />
                </div>
            </div>
        </div>
    );
};