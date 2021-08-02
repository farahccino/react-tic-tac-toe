import styled from "styled-components/macro";
import Square from "./Square";

export default function Board({ squares, onClick }) {
  return (
    <Section>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </Section>
  );
}

const Section = styled.div`
  background-color: hsla(192, 100%, 50%, 0.05);
  border: 5px solid hsla(192, 100%, 50%, 0.43);
  border-radius: 1rem;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  height: 31.25rem;
  margin: 0 auto;
  width: 31.25rem;
`;
