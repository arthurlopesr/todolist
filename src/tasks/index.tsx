import { ITasks } from '../App';
import { Task } from '../components/task/Task';
import { TbClipboardText } from 'react-icons/tb';
import {
  Container,
  HeaderContainer,
  Content,
  TasksContainer,
  WithoutTasksContainer
} from './styles';

interface TasksProps {
  tasks: ITasks[];
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete, onComplete }: TasksProps) {
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
            onComplete={onComplete}
          />
        ))}

        {tasks.length <= 0 && (
          <WithoutTasksContainer>
            <TbClipboardText size={50} />
            <p>
              Você ainda não tem tarefas cadastradas.
            </p>
            <span>
              Crie tarefas e organize seus itens a fazer!
            </span>
          </WithoutTasksContainer>
        )}
      </TasksContainer>
    </Container>
  )
}
