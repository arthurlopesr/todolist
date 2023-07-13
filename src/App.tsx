import { useState } from 'react';
import { Header } from './components/header/Header';
import { Tasks } from './tasks';
import { GlobalStyles } from './theme/global';

export interface ITasks {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 'teste',
      title: 'teste',
      isCompleted: true
    },

    {
      id: 'teste2',
      title: 'teste2',
      isCompleted: false
    }
  ]);

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      }
    ]);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
      />
      <GlobalStyles />
    </>
  )
}

export default App
