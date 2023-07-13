import { Container, Content } from './styles';
import toDoLogo from '../../assets/Logo.svg';
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { ChangeEvent, FormEvent, useState } from 'react';

interface HeaderProps {
  onAddTask: (taksTitle: string) => void;
}

export function Header({ onAddTask }: HeaderProps) {
  const [title, setTitle] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onAddTask(title);
    setTitle("");
  };

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  return (
    <Container>
      <img src={toDoLogo} alt="To Do List logo" />

      <Content onSubmit={handleSubmit}>
        <input
          placeholder='Acidione uma nova tarefa'
          onChange={onChangeTitle}
          value={title}
        />
        <button>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </Content>

    </Container>
  )
}
