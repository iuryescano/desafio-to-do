import styles from "./atividade.module.css";
import { TbTrash } from "react-icons/tb";
import { ITask } from "../../Interfaces";
import { useState } from "react";

interface Props {
  tasks: ITask;
  deleteTask(taskNameToDelete: number): void; 
  updateTask(taskNameToUpdate: number): void; 
  checked : boolean;
}


const Atividade = ({ tasks, deleteTask, updateTask, checked }: Props) => {
  return (
    <section className={styles.atividades}>
      <header className={styles.header}></header>

        <div className={styles.task}>
          
          <div className={styles.roundTop}>
            <div className={styles.round}>
                <input type="checkbox" checked={checked} id="checkbox"/>
                <label htmlFor="checkbox" onClick={() => { updateTask(tasks.identify) }}></label>
                
            </div>
          </div>

          <span className={`round ${checked === true ? styles.lineThrougt : ''}`}> 
            {tasks.taskName}
          </span>
          
      
          <button
            className={styles.deleteButton}
            onClick={() => {
              deleteTask(tasks.identify);
            }}>
            <TbTrash size={20} className={styles.icone} />
          </button>

      </div>
    </section>
  );
};

export default Atividade;
