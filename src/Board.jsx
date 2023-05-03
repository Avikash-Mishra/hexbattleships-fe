import BoardCell from "./BoardCell";
import styled from 'styled-components'

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(${p => p.width * 2 + 1}, min(${p => p.cellWidth}vw, ${p => p.cellHeight}vh));
    grid-template-rows: repeat(${p => p.height}, min(${p => p.cellWidth * 2 / 1.1547}vw, ${p => p.cellHeight * 2 / 1.1547}vh));
    transform: perspective(1200px) rotateX(18deg);
    transform-origin: bottom;
`;

function Board() {
    const width = 20;
    const height = 13;
    const cells = [];
    for (var i=0; i < height; i++) {
        for (var j=0; j < width * 2; j+=2) {
            const x = i % 2 == 0 ? j : j + 1;
            cells.push(<BoardCell x={x} y={i} key={`${x}-${i}`}></BoardCell>)
        }
    }

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