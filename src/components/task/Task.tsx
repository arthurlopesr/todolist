import { ITasks } from '../../App';
import { Container, CheckButton, DeleteButton } from './styles';
import { TbTrash } from 'react-icons/tb';

interface Props {
  task: ITasks
}

export function Task({ task }: Props){
    return(
        <Container>
          <CheckButton>
            <div/>
          </CheckButton>

          <p>
            {task.title}
          </p>

          <DeleteButton>
            <TbTrash size={20}/>
          </DeleteButton>

        </Container>
    )
}
