import './global.css'
import { Header } from './components/Header'
import styles from './components/Auxiles.module.css'
import { useState, ChangeEvent} from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai'; 
import  Atividade  from './components/atividade';
import { ITask } from './Interfaces';

function App() {

  const [ tasks, setTasks ] = useState<string>("")
  const [ todo, setTodoList ] = useState<ITask[]>([]);
  const [ contarTasks, setContarTaskList ] = useState<number>(0);


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTasks(event.target.value)
  };

  const addTask = (): void => {
    const newTask = {taskName: tasks};
    setTodoList([...todo, newTask]);
    setTasks("");
    setContarTaskList(contarTasks + 1);
    console.log(newTask);
  }; 

  const deleteTask = (taskNameToDelete : string): void => {
    setTodoList(todo.filter((tasks) => {
      return tasks.taskName != taskNameToDelete
    }))
    setContarTaskList(contarTasks - 1);

  }

  return (
    <div >
      <Header/>
      <main>
        <div className={styles.separator}>
          <input className={styles.input} onChange={handleChange} value={tasks} autoFocus placeholder='Adicione uma nova tarefa'/>
          <button className={styles.button} type="submit" onClick={addTask}>
            Criar
            <AiOutlinePlusCircle size={20}className={styles.buttonIcon}/>
          </button>
        </div>
        
        <div className={styles.backBar}>
          <div className={styles.backBarFlex}>
            <p>Tarefas criadas</p>
            <span>{contarTasks}</span> 
          </div>
          
                    

          <div className={styles.backBarFlex}>
            <p>Atividades Completadas</p>
            <span>1 de 10</span>
          </div>
          

        </div>


        <div>
          {todo.map((tasks: ITask, key:number) => {
            return (
              <div className={styles.list}>
                <Atividade key={key} tasks={tasks} deleteTask={deleteTask}></Atividade>
              </div>
            )
          })}
        </div>
        


{/*         <div>
          <div className={styles.content}>
            <img src={Clipboard} alt='teste'/>
            
          </div>
          <div className={styles.content2}>
            Você ainda não tem tarefas cadastradas <br/>
            Crie tarefas e organize seus itens a fazer
          </div>
        </div>
 */}
      </main>
    </div>
  )


}

export default App

