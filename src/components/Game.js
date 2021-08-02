import { useState } from "react";
import styled from "styled-components/macro";

import { calculateWinner } from "../lib/function";
import Board from "./Board";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]); // [[] ?? null]
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);

  const winner = calculateWinner(history[stepNumber]);

  function handleClick(i) {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];
    // wenn user auf ein bereits geklicktes square klickt oder das Spiel beendet ist => return
    if (winner || squares[i]) return;
    // ein X oder ein O auf das geklickte square platzieren
    squares[i] = xIsNext ? "X" : "O";

    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setXisNext(!xIsNext);
  }

  function jumpTo(step) {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  }

  function renderMoves() {
    return history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : "Go to start";
      return (
        <ListButtonWrapper key={move}>
          <ListButton onClick={() => jumpTo(move)}>{destination}</ListButton>
        </ListButtonWrapper>
      );
    });
  }

  return (
    <>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <HistoryBoard>
        {winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}
        {renderMoves()}
      </HistoryBoard>
    </>
  );
}

const HistoryBoard = styled.div`
  align-items: center;
  width: 600px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(6, 100px);
  margin: 1rem auto;
`;

const ListButton = styled.button`
  background: hsla(192, 100%, 90%, 0.43);
  border-radius: 2rem;
  margin: 0.2rem auto;
  padding: 0.5rem;
`;

const ListButtonWrapper = styled.li`
  color: transparent;
`;
