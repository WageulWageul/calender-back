import React, {useState,useEffect} from 'react';
import axios from "axios";
import styled from 'styled-components';
import {ReactComponent as CloseIcon} from '../../assets/icon/Close.svg';

function TodoCreate(props) {
    const [hello, setHello] = useState('');
    
    useEffect(() => {
        axios.get('/api/test')
            .then((res) => {
                setHello(res.data);
            })
    }, []);

    return (
        <TodoBack>
            <TodoFrame>
            <Header>
            <CloseIcon onClick={() => window.location.replace("/")} />
            </Header>
            <DateFrame>
                    <TodoDate>2024 3월 4일</TodoDate>
                    <TodoTime>시간 :  09 : 30, 백엔드 데이터 : {hello}</TodoTime>
                </DateFrame>
                <TodoTitle/>
                <TodoMemo/>
                <TodoSubmit onClick={() => window.location.replace("/")}>확인</TodoSubmit>
            </TodoFrame>
        </TodoBack>

    );
}

export default TodoCreate;

const Header = styled.div`  
    display : flex;
    justify-content: flex-end;
    width : 100%;
    `;

const TodoBack = styled.div`
    display:flex;
    justify-content:center;
    align-items: center; 
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 5;
    background: rgba(0, 0, 0, 0.5);  
    `;

const TodoFrame = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center; 
    width:25%;
    height: 70%;
    border-radius : 3em;
    background-color:#ffffff;
    padding: 3em 2.5em;
    `;

const DateFrame = styled.div`
    width : 100%;
    display:flex;
    flex-direction: column;
    `;
const TodoDate = styled.div`
    font-size: 2em;
    font-weight: 700;
    `;

const TodoTime = styled.div`
    font-size: 1.025em;
    margin-top : 0.5em;
    `;

const TodoTitle = styled.input`
    width: 100%;
    height : 10%;
    border-radius : 3em;
    background-color:#E6E7F0;
    border : none;
    `;

const TodoMemo = styled.input`
    width: 100%;    
    height : 50%;
    border-radius : 3em;
    background-color:#E6E7F0;
    border : none;
    `;

const TodoSubmit = styled.div`
    display : flex;
    justify-content:center;
    align-items: center; 
    text-align : center;
    width: 25%;    
    height : 8%;
    border-radius : 3em;
    background-color:#208DFB;
    color:#ffffff;
    `;

