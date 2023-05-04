import styled from "styled-components";
import { COLORS } from "./colors";

const PlayerInfo = styled.div`
    display: flex;
    align-items: center;
    border-radius: 5px;
    border-color: black;
    padding: 0 10px;
    
    &.isTurn {
        border-style: solid;
    }
`;

const PlayerDot = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${p => p.color};
    border-radius: 50%;
    display: inline-block;
`;

const PlayerName = styled.h3`
    display: inline-block;
    margin 10px 10px;
`;


function Players({players, turnIdx}) {
    return <>
        {players.map((name, idx) => <Player color={COLORS[idx]} name={name} isTurn={turnIdx==idx}></Player>)}
    </>;
}

function Player({name, color, isTurn}) {
    return <PlayerInfo className={isTurn ? "isTurn": ""}><PlayerDot color={color}></PlayerDot><PlayerName>{name}</PlayerName></PlayerInfo>
}

export default Players;