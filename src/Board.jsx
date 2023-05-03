import BoardCell from "./BoardCell";
import styled from 'styled-components'

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(${p => p.width * 2 + 1}, min(${p => p.cellWidth}vw, ${p => p.cellHeight}vh));
    grid-template-rows: repeat(${p => p.height}, min(${p => p.cellWidth * 2 / 1.1547}vw, ${p => p.cellHeight * 2 / 1.1547}vh));
    transform: perspective(1200px) rotateX(18deg);
    transform-origin: bottom;
    perspective: 1200px;
`;

function Board({width, height, data, onClick}) {
    const cells = [];
    data.forEach((row, y) => {
        row.forEach((cell, x) => {
            cells.push(<BoardCell x={x} y={y}
                uncovered={cell.uncovered}
                onClick={() => onClick(x, y)}
                key={`${x}-${y}`}></BoardCell>)
        })
    });

    // The ideal size of each cell in vw
    const cellWidth = 100 / (width * 2 + 4);

    // The idea cell width given in vh
    const cellHeight = 100 / (height + 2) / 2 * 1.1547;

    return (
        <Wrapper width={width} height={height} cellWidth={cellWidth} cellHeight={cellHeight}>
        {cells}
        </Wrapper>
      )
}

export default Board;