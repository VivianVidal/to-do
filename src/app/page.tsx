'use client'
import ListTask from "@/components/ListTask";
import styles from "./page.module.css";
import Button from "@/components/Button";
import { useState, useEffect } from "react";
import ModalAddTask from "@/components/ModalAdd";
import ModalDelTask from "@/components/ModalDel";
import { v4 as uuidv4 } from "uuid";
import { Task } from "@/utils/util";


const getTasksFromLocalStorage = (): Task[] => {
  if (typeof window !== "undefined") {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  }
  return [];
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]); 
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<string | null>(null);


  useEffect(() => {
    const storedTasks = getTasksFromLocalStorage();
    setTasks(storedTasks); 
  }, []);


  const handleAddTask = (taskTitle: string) => {
    const newTask: Task = {
      id: uuidv4(),
      title: taskTitle,
      completed: false,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); 
    setShowAddModal(false);
  };


  const toggleTaskCompletion = (taskId: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); 
  };


  const handleDeleteTask = () => {
    if (taskToDelete) {
      const updatedTasks = tasks.filter((task) => task.id !== taskToDelete);
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setTaskToDelete(null); 
    }
    setShowDeleteModal(false);
  };

  return (
    <div className={styles.page}>
      <ListTask
        tasks={tasks}
        onTaskCompleted={toggleTaskCompletion}
        onOpenDeleteModal={(taskId: string) => {
          setTaskToDelete(taskId);
          setShowDeleteModal(true);
        }}
      />
      <Button onOpen={() => setShowAddModal(true)} />
      
      {showAddModal && (
        <ModalAddTask
          onClose={() => setShowAddModal(false)}
          onAddTask={handleAddTask}
        />
      )}

      {showDeleteModal && taskToDelete && (
        <ModalDelTask
          onClose={() => setShowDeleteModal(false)}
          onDelete={handleDeleteTask}
        />
      )}
    </div>
  );
}
