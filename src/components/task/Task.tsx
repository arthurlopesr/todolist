import { ITasks } from '../../App';
import { Container, CheckButton, DeleteButton, TaskText, TaskTaxtCompleted } from './styles';
import { TbTrash } from 'react-icons/tb';
import { BsFillCheckCircleFill } from 'react-icons/bs'

interface Props {
  task: ITasks
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Task({ task, onDelete, onComplete }: Props) {

  return (
    <Container>
      <CheckButton
        onClick={() => onComplete(task.id)}
      >
        {task.isCompleted ? <BsFillCheckCircleFill /> : <  div />}
      </CheckButton>

      {task.isCompleted
        ? <TaskTaxtCompleted>
            {task.title}
          </TaskTaxtCompleted>
        : <TaskText>
           {task.title}
          </TaskText>
      }
      <DeleteButton
        onClick={() => onDelete(task.id)}
      >
        <TbTrash size={20} />
      </DeleteButton>

    </Container>
  )
}
