/*import React from "react";
import Routes from "./RouteMap";
import styled from "styled-components";
import './common.scss'

const Title = styled.h1`
    color: red;
`
const App = () => {
    return (
        <>
            <div className="contents">
            <Title>하이하이-test</Title>
            <h2>나는 앱</h2>
            </div>
            <Routes />

        </>

    )
};

export default App;*/


import React from "react";
import {useState} from "react";
import {ColoredMessage} from "./components/ColoredMessage";




const App = () => {
    console.log("렌더링")
    const [num, setNum] = useState(0);

    const onClickButton = () => {
        setNum(num+1);
    }

    return(
        <>
            <h1 style={{color:"red"}}>안녕하세요!</h1>
            <ColoredMessage color="pink">잘 지내시죠?</ColoredMessage>
            <ColoredMessage color="blue">잘 지냅니다!</ColoredMessage>
            <button onClick={onClickButton}>버튼</button>
            <p>{num}</p>
        </>
    );
};

export default App;

