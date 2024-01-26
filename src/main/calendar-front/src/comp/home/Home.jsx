import React, {useState} from 'react';
import styled from "styled-components";
import Calendar from './Calendar';
import { ReactComponent as Plus } from '../../assets/icon/Plus.svg';
import TodoCreate from '../todo/TodoCreate';



const Wrapper = styled.div`
    display: flex;
    width:100%;
    height:100vh;
    background-color:#E3E3E3`;

const InnerWrapper = styled.div`
    width:100%;
    border-radius : 3em;
    background-color:#ffffff;
    margin:1em;
    padding:2em;
    `;

const PlusButton = styled.div`
    position: absolute;
    right: 1em;
    bottom: 1em;
    padding : 1em;
    display: flex;
    background-color: #007DFA;
    opacity : 0.85;
    border-radius : 50%;
    `;

function Home(props) {

    const [setPlus, setPlusTodo] = useState(null);

    const handlePlus = (Component) => {
        setPlusTodo(Component);
      };

     const renderTodoPlus= () => {
        return setPlus;
      };
    

    return (
        <Wrapper>
            {renderTodoPlus()}
            <InnerWrapper>
                <Calendar></Calendar>
            </InnerWrapper>
            <PlusButton onClick={() => handlePlus(<TodoCreate/>)}>
                <Plus/>
            </PlusButton>
        </Wrapper>
    )
}

export default Home;