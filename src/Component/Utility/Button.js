import styled from "styled-components";

export const Button = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.5rem solid var(--ligthWhite);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  curser: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 1s ease-in-out;
  &:hover {
    background: var(--lightWhite);
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
`;
