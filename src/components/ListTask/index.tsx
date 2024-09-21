'use client';
import { Task } from '@/utils/util';
import Image from 'next/image';
import style from './page.module.css';

interface ListTaskProps {
  tasks: Task[];
  onTaskCompleted: (taskId: string) => void;
  onOpenDeleteModal: (taskId: string) => void;
}

export default function ListTask({ tasks, onOpenDeleteModal ,onTaskCompleted}: ListTaskProps) {
  const taskCompleted = tasks.filter((task) => task.completed === true);
  const taskNotCompleted = tasks.filter((task) => task.completed === false);

  return (
    <div className={style.section_container}>
      <div className={style.div_container}>
        <section className={style.list_container}>
          <h3 className={style.title}>Suas tarefas de hoje</h3>
          <ul>
            {taskNotCompleted.map((task) => (
              <li className={style.item} key={task.id}>
                <input
                  className={style.task_input}
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => onTaskCompleted(task.id)} 
                  readOnly
                />
                <h3 className={style.task_title}>{task.title}</h3>
                <button
                  className={style.task_button}
                  onClick={() => onOpenDeleteModal(task.id)}
                >
                  <Image
                    src={'./Icon.svg'}
                    width={18}
                    height={20}
                    alt="Ícone de uma lixeira"
                  />
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section className={style.list_container}>
          <h3 className={style.title}>Tarefas finalizadas</h3>
          <ul>
            {taskCompleted.map((task) => (
              <li className={style.item} key={task.id}>
                <input
                  className={style.task_input}
                  type="checkbox"
                  checked={task.completed}
                  readOnly
                />
                <span className={style.task_title_completed}>{task.title}</span>
                <button
                  className={style.task_button}
                  onClick={() => onOpenDeleteModal(task.id)}
                >
                  <Image
                    src={'./Icon.svg'}
                    width={18}
                    height={20}
                    alt="Ícone de uma lixeira"
                  />
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
