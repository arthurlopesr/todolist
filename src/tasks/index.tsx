import { Task } from '../components/task/Task';
import { Container, HeaderContainer, Content, TasksContainer } from './styles';

export function Tasks() {
  return (
    <Container>
      <HeaderContainer>
        <Content>
          <p>Tarefas criadas</p>
          <span>10</span>
        </Content>
        <Content>
          <p className='textPurple'>Concluídas</p>
          <span>2 de 10</span>
        </Content>
      </HeaderContainer>

        <TasksContainer>
          <Task />
          <Task />
        </TasksContainer>

    </Container>
  )
}
