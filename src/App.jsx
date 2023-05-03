import { useState } from 'react';
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

function initialData(height, width) {
  const data = [];
  for (var y=0; y < height; y++) {
    const row = [];
    for (var x=0; x < width; x++) {
      const hits = [];
      for (var i =0; i< 6; i++) {
        if (Math.random() < 0.07) {
          hits.push(i);
        }
      }
      row.push({uncovered: false, hits: hits, playerIdx: 1, ownShip: hits.includes(1)})
    }
    data.push(row);
  }
  return data;
}

const PLAYERS = [
  "Tim",
  "Avi",
  "Sofia",
  "Brad",
  "Maël",
  "Karl"
];

function App() {
  const height = 11;
  const width = 18;
  const [data, setData] = useState(() => initialData(height, width));

  function onClick(x, y) {
    setData(data.map((row, dy) =>
      dy == y ?
      row.map((cell, dx) => dx == x ? {...cell, uncovered: true} : cell) :
      row
    ))
  }

  return (
    <Container>
      <FlexWrapper>
        <Board height={height} width={width} data={data} onClick={onClick}></Board>
      </FlexWrapper>

      <SidePanel>
        <Players players={PLAYERS} turnIdx={1}></Players>
      </SidePanel>
    </Container>
  )
}

export default App
