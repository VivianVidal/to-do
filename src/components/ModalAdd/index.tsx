'use client'
import React, { useState } from 'react';
import style from './page.module.css'
import ButtonModal from '../ButtonModal';

interface ModalAddTaskProps {
    onClose: () => void;
    onAddTask: (taskTitle: string) => void;
}

export default function ModalAddTask({ onClose, onAddTask }: ModalAddTaskProps) {
    const [taskTitle, setTaskTitle] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (taskTitle) {
            onAddTask(taskTitle);
            onClose();
        }
    };

    return (
        <div className={style.modal_overlay}>
            <div className={style.modal}>
                <h2>Nova tarefa</h2>
                <form className={style.container_form} onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="task">Título</label>
                        <input
                            type="text"
                            id="task"
                            placeholder="Digite"
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                        />
                    </div>

                    <div className={style.modal_actions}>
                        <ButtonModal click={onClose} label='Cancelar' />
                        <ButtonModal click={() => handleSubmit} label='Adicionar' />
                    </div>
                </form>
            </div>
        </div>
    );
};


