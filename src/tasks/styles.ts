import { styled } from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 46rem;
  margin: 0 auto;
  margin-top: 5.625rem;
  padding: 0 1rem;
`
export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  p {
    color: var(--blue);
    font-size: 0.876rem;
    font-weight: 700;
  }

  .textPurple {
    color: var(--purple);
  }

  span {
    background: var(--gray-400);
    padding: 3px 9px;
    border-radius: 999px;

    color: var(--gray-200);
    font-size: 0.75rem;
    font-weight: 700;
  }
`;

export const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const WithoutTasksContainer = styled.section`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: var(--gray-300);
  text-align: center;

  svg {
    opacity: 0.3;
  }

  p {
    margin-top: 1rem;
    font-weight: 700;
  }
`;

