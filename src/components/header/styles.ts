import { styled } from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 12.5rem;
    margin: 0 auto;

    background-color: var(--gray-700);
    position: relative;

`;

export const Content = styled.form`

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: calc(-3.375rem/2);

  height: 3.375rem;
  width: 100%;
  max-width: 46rem;

  input {
    width: 39.5rem;
    padding: 16px;
    display: flex;
    border-radius: 8px;
    border: 1px solid var(--gray-400);
    background: var(--gray-400);
    color: #fff;
  }

  button {
    padding: 16px;
    width: 5.5rem;

    border-radius: 8px;
    background: var(--blue-dark);
    transition: filter 0.2s;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;

    font-size: 14px;
    font-weight: 700;
    color: var(--gray-100);
    border: none;

    &:hover {
      filter: brightness(0.9);
    }
  }


`;
