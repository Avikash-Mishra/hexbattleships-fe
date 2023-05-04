import { useState, useEffect } from 'react';
import styled from 'styled-components'
import Board from './Board'
import Players from './Players';

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  height: 100vh;
  width: 100vw;
`;

const FlexWrapper = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  margin: 20px;
  overflow: hidden;
`;

const SidePanel = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 250px;
  border-style: solid;
  border-radius: 20px;
  margin: 20px;
  box-shadow: #38383875 3px 5px 14px 0px;
  padding: 40px 20px;
`;

function App() {
  const [board, setBoard] = useState({height:0, width:0, data:[]});
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        '/game/f1ea207c-e151-4a1d-a8ef-8f96a44fdff5',
      );
      const data = await result.json()
      setBoard(data.board);
      setPlayers(data.players);
    }
    fetchData()
}, [])

  function onClick(x, y) {
    setBoard({...board, data: board.data.map((row, dy) =>
      dy == y ?
      row.map((cell, dx) => dx == x ? {...cell, uncovered: true} : cell) :
      row
    )})
  }

  return (
    <Container>
      <FlexWrapper>
        <Board height={board.height} width={board.width} data={board.data} playerIdx={1} onClick={onClick}></Board>
      </FlexWrapper>

      <SidePanel>
        <Players players={players} turnIdx={1}></Players>
      </SidePanel>
    </Container>
  )
}

export default App
