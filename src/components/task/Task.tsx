import { Container, CheckButton, DeleteButton } from './styles';
import { TbTrash } from 'react-icons/tb';

export function Task(){
    return(
        <Container>
          <CheckButton>
            <div/>
          </CheckButton>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </p>

          <DeleteButton>
            <TbTrash size={20}/>
          </DeleteButton>

        </Container>
    )
}
