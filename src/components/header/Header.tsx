import { Container, Content } from './styles';
import toDoLogo from '../../assets/Logo.svg';
import { AiOutlinePlusCircle } from 'react-icons/ai'

export function Header(){
    return(
        <Container>
          <img src={toDoLogo} alt="To Do List logo" />

          <Content>
            <input type="text" placeholder='Acidione uma nova tarefa'/>
            <button>
              Criar
              <AiOutlinePlusCircle size={20}/>
            </button>

          </Content>

        </Container>
    )
}
