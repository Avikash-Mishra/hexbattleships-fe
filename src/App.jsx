import { useState } from 'react';
import './App.css'
import Board from './Board'

function initialData(height, width) {
  const data = [];
  for (var y=0; y < height; y++) {
    const row = [];
    for (var x=0; x < width; x++) {
      row.push({uncovered: false})
    }
    data.push(row);
  }
  return data;
}

function App() {
  const height = 13;
  const width = 20;
  const [data, setData] = useState(() => initialData(height, width));

  function onClick(x, y) {
    setData(data.map((row, dy) =>
      dy == y ?
      row.map((cell, dx) => dx == x ? {...cell, uncovered: true} : cell) :
      row
    ))
  }

  return (
    <Board height={height} width={width} data={data} onClick={onClick}></Board>
  )
}

export default App
