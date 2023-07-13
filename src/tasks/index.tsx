import { ITasks } from '../App';
import { Task } from '../components/task/Task';
import { Container, HeaderContainer, Content, TasksContainer } from './styles';

interface TasksProps {
  tasks: ITasks[];
  onDelete: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete }: TasksProps) {
  const taskQuantity = tasks.length;
  const taskComplated = tasks.filter((task) => task.isCompleted).length;

  return (
    <Container>
      <HeaderContainer>
        <Content>
          <p>Tarefas criadas</p>
          <span>{taskQuantity}</span>
        </Content>
        <Content>
          <p className='textPurple'>Concluídas</p>

          <span>
             {taskComplated} de {taskQuantity}
          </span>
        </Content>
      </HeaderContainer>

      <TasksContainer>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
          />
        ))}
      </TasksContainer>
    </Container>
  )
}
