import { useState } from 'react'
import styled from 'styled-components'

const HexCell = styled.div`
    width: 180%;
    aspect-ratio: 1/1.1547;
    display: inline-block;
    font-size: initial; /* we reset the font-size if we want to add some content */
    clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
    background-color: #61a8e0;
    grid-column-start: ${props => props.x + 1};
    grid-row-start: ${props => props.y + 1};

    &.covered {
        cursor: pointer;
        &:hover {
            background-color: #8ecdff;
        }
    }
`

function BoardCell({x, y}) {
    const [isUncovered, uncover] = useState(false)
  
    return (
      <HexCell x={x} y={y} className={isUncovered ? 'uncovered' : 'covered'}>

      </HexCell>
    )
}

export default BoardCell