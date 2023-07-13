import { ITasks } from '../../App';
import { Container, CheckButton, DeleteButton } from './styles';
import { TbTrash } from 'react-icons/tb';

interface Props {
  task: ITasks
  onDelete: (taskId: string) => void;
}

export function Task({ task, onDelete }: Props){
    return(
        <Container>
          <CheckButton>
            <div/>
          </CheckButton>

          <p>
            {task.title}
          </p>

          <DeleteButton
            onClick={() => onDelete(task.id)}
          >
            <TbTrash size={20}/>
          </DeleteButton>

        </Container>
    )
}
