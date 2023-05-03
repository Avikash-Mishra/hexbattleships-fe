import BoardCell from "./BoardCell";
import styled from 'styled-components'
import useSize from '@react-hook/size'
import React from "react";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;

const Grid = styled.div.attrs(props => ({
    style: {
        gridTemplateColumns: `repeat(${props.width * 2 + 1}, ${props.cellWidth}px)`,
        gridTemplateRows: `repeat(${props.height}, ${props.cellWidth * 2 / 1.1547}px)`
    },
  }))`
    display: grid;
    transform: perspective(1200px) rotateX(18deg);
    perspective: 1200px;
    align-content: center;
`;

function Board({width, height, data, onClick}) {
    const target = React.useRef(null);
    const [elementWidth, elementHeight] = useSize(target);

    const cells = [];
    data.forEach((row, y) => {
        row.forEach((cell, x) => {
            cells.push(<BoardCell x={x} y={y}
                data={cell}
                onClick={() => onClick(x, y)}
                key={`${x}-${y}`}></BoardCell>)
        })
    });

    // The ideal size of each cell in px
    const cellWidth = Math.min(
        // 1.18 is a fudge factor to try allow for the
        // grid getting wider due to perspective
        elementWidth / (width * 2 * 1.18),
        elementHeight / (height + 2) / 2 * 1.1547);

    return (
        <Wrapper ref={target}>
        <Grid width={width} height={height} cellWidth={cellWidth}>
        {cells}
        </Grid>
        </Wrapper>
      )
}

export default Board;