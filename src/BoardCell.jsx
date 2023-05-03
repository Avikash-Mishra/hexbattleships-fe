import styled from 'styled-components'

const HexCell = styled.div.attrs(props => ({
    style: {
        gridColumnStart: props.y % 2 == 0 ? props.x * 2 +1 : props.x * 2 + 2,
        gridRowStart: props.y + 1
    },
  }))`
    width: 180%;
    aspect-ratio: 1/1.1547;
    transition: transform 0.8s;
    position: relative;
    transform-style: preserve-3d;
    background-color: transparent;

    div.front , div.back {
        clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    div.front {
        transform: rotateY(180deg);
        background-color: #c2cbd1;
    }

    div.back {
        background-color: #61a8e0;
        cursor: pointer;
        &:hover {
            background-color: #8ecdff;
        }
    }

    &.uncovered {
        transform: rotateY(180deg);
    }
`

function BoardCell({x, y, uncovered, onClick}) {
    return (
      <HexCell x={x} y={y}
      onClick={onClick}
      className={uncovered ? 'uncovered' : 'covered'}>
        <div className="front">

        </div>
        <div className="back">

        </div>
      </HexCell>
    )
}

export default BoardCell