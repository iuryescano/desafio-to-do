import "./global.css";
import { Header } from "./components/Header";
import styles from "./components/Auxiles.module.css";
import { useState, ChangeEvent } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Atividade from "./components/atividade";
import { ITask } from "./Interfaces";


function App() {
  const [tasks, setTasks] = useState<string>("");
  const [todo, setTodoList] = useState<ITask[]>([]);
  const [contarTasks, setContarTaskList] = useState<number>(0);
  const [ progresso, setProgresso ] = useState<number>(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTasks(event.target.value);
  };

  const handleQuantidade = (todo.filter((item: any) => item.checked === true).length);


  const addTask = (taskName: string): void => {
    const newTask = [...todo];
    newTask.push({
      identify: todo.length + 1,
      taskName: taskName,
      checked: false,
    });
    console.log(todo);
    setTodoList(newTask);

    setTasks("");
    setContarTaskList(contarTasks + 1);
  };

  const deleteTask = (taskNameToDelete: number): void => {
    const newArray = todo.filter((todo) => todo.identify != taskNameToDelete);
    setTodoList(newArray);
    setContarTaskList(contarTasks - 1);
  };

  const [inputText, setInputText] = useState("");

  const handleClick = () => {
    addTask(inputText);
  };

   const updateTask = (identify: number) => {
    setTodoList(
      todo.map((item: any) => {
        if (item.identify === identify) {
          item.checked = !item.checked;
        }
        return item;
      })
    )
  } 

  return (
    <div>
      <Header />
      <main>
        <div className={styles.separator}>
          <input
            className={styles.input}
            onChange={(e) => setInputText(e.target.value)}
            /*  value={tasks} */ autoFocus
            placeholder='Adicione uma nova tarefa'
          />
          <button className={styles.button} type='submit' onClick={handleClick}>
            Criar
            <AiOutlinePlusCircle size={20} className={styles.buttonIcon} />
          </button>
        </div>

        <div className={styles.backBar}>
          <div className={styles.backBarFlex}>
            <p>Tarefas criadas</p>
            <span>{contarTasks}</span>
          </div>

          <div className={styles.backBarFlex}>
            <p>Atividades Completadas</p>
            <span>{handleQuantidade} de 10</span> 
          </div>
        </div>

        <div>
          {todo.map((tasks: ITask, key: number) => {
            return (
              <div className={styles.list}>
                <Atividade
                  key={key}
                  tasks={tasks}
                  deleteTask={deleteTask}
                  updateTask={updateTask}
                  checked={tasks.checked}></Atividade>
              </div>
            );
          })}
        </div>

      </main>
    </div>
  );
}

export default App;
