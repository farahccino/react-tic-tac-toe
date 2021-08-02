import styled from "styled-components";

export default function Square({ value, onClick }) {
  return <Button onClick={onClick}>{value}</Button>;
}

const Button = styled.button`
  background: hsla(192, 100%, 90%, 0.43);
  border: 5px solid hsla(192, 100%, 50%, 0.43);
  cursor: pointer;
  font-size: 2rem;
  font-weight: 800;
  outline: none;
`;
