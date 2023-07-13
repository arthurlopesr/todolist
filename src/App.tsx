import { useEffect, useState } from 'react';
import { Header } from './components/header/Header';
import { Tasks } from './tasks';
import { GlobalStyles } from './theme/global';

const LOCAL_STORAGE_KEY = "todo:savedtaks";
export interface ITasks {
  id: string;
  title: string;
  isCompleted: boolean;
};

function App() {

  useEffect(() => {
    loadSavedTasks();
  }, [])

  const [tasks, setTasks] = useState<ITasks[]>([]);

  function setTaskAndSave(newTask: ITasks[]) {
    setTasks(newTask);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTask));
  };

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (saved) {
      setTasks(JSON.parse(saved))
    }
  }

  function addTask(taskTitle: string) {
    setTaskAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      }
    ]);
  };

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTaskAndSave(newTasks);
  };

  function toggleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    });
    setTaskAndSave(newTasks);
  }
  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
      />
      <GlobalStyles />
    </>
  )
}

export default App;
