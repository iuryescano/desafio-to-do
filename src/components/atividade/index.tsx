import styles from './atividade.module.css';
import { TbTrash } from 'react-icons/tb';
import { ITask } from '../../Interfaces';

interface Props {
  tasks: ITask;
  deleteTask(taskNameToDelete: string): void;
}

 const Atividade = ({tasks, deleteTask}: Props) =>{
  return (
    <section className={styles.atividades}>
    <header className={styles.header}>

    </header>

    <div className={styles.list} >
      
      <div className={styles.task} >
          <button className={styles.checkContainer}>
            <div/>
          </button>
          <span> {tasks.taskName}</span>

        <button 
        className={ styles.deleteButton} 
        onClick={() => {deleteTask(tasks.taskName);
        }}>

          <TbTrash size={20} className={styles.icone}/>
        </button>
      </div>
    </div>

  </section>


    
  )
}

export default Atividade;