import { styled } from "styled-components";

export const Container = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  background: var(--gray-400);
  border: 1px solid var(--gray-400);
  padding: 1rem;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;

  & + & {
    margin-top: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.18rem;
    color: var(--gray-100);
    margin-right: auto;
  }
`;

export const CheckButton = styled.button`
  min-width: 1.125rem;
  height: 1.125rem;
  border: none;
  background: none;

  div {
    width: 100%;
    height: 100%;
    border: 1px solid var(--blue);
    border-radius: 50%;
  }

  svg {
    width: 100%;
    height: 100%;
    color: var(--purple);
  }
`;

export const TaskText = styled.p`
  font-size: 0.8rem;
  line-height: 1.18rem;
  color: var(--gray-100);
  margin-right: auto;
`;


export const TaskTaxtCompleted = styled.p`
  text-decoration: line-through;
  color: red;
`;


export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: var(--gray-300);

  &:hover {

  }
`;
