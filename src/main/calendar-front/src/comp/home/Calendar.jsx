import React from 'react'
import {useState} from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';
import styled from 'styled-components'
import { ReactComponent as LeftMonth } from "../../assets/icon/Left.svg";
import { ReactComponent as RightMonth } from "../../assets/icon/Right.svg";
import { ReactComponent as ProfileImg } from '../../assets/img/Profile.svg';
import TodoCreate from '../todo/TodoCreate';


function Calendar(props){
const [getMoment, setMoment] = useState(moment())
const [isYearScrollBarVisible, setYearScrollBarVisible] = useState(false);
const [currentYear] = useState(getMoment.year()); 


const today = getMoment
const firstWeek = today.clone().startOf('month').week();
const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
const monthslist = Array.from({ length: 12 }, (_, index) => index + 1);


const handleYearClick = () => {
  setYearScrollBarVisible(prevState => !prevState);
};

const yearRange = Array.from({ length: 41 }, (_, index) => currentYear - 20 + index);

const calendarArr=()=>{

  let result = [];
  let week = firstWeek;
  for ( week; week <= lastWeek; week++) {
    result = result.concat(
      <tr key={week}>
        {Array(7).fill(0).map((data, index) => {
                let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');
                if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')){
                  return(
                      <td key={index} style={{color:'#ffffff', 
                      borderRadius : '3em', backgroundColor : '#007DFA'}} >
                        <span>{days.format('D')}</span>
                      </td>
                  );
                }else if(days.format('MM') !== today.format('MM')){
                  return(
                      <td key={index}>
                        <span style={{color:'silver'}}>{days.format('D')}</span>
                      </td>
                  );
                }else{
                  return(
                      <td key={index}>
                        <span>{days.format('D')}</span>
                      </td>
                  );
                }
              })
        }
      </tr>);
  }
  return result;
}

  return (
    <>
    <HeaderFrame>
         <Year onClick={handleYearClick}>{today.format('YYYY년')}</Year>
         <YearScrollBar visible={isYearScrollBarVisible}>
                {yearRange.map((year) => (
                    <YearOption onClick={() => { 
                      setMoment(getMoment.clone().year(year));
                    }}
                    key={year}>
                        {year}
                    </YearOption>
                ))}
            </YearScrollBar>
          <LeftMonth onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month')) }}/>
          <Month>{today.format('MM월')}</Month>
          <RightMonth onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }}/>
          <MonthList>
            {monthslist.map((month) => (
              <MonthButton 
                onClick={() => { 
                  setMoment(getMoment.clone().month(month - 1));
                }}
                key={month}
              >
                {month}
              </MonthButton>
            ))}
          </MonthList>
          <Link to='/login'>
          <ProfileFrame>
                <ProfileImg></ProfileImg>
            </ProfileFrame>
          </Link>
        </HeaderFrame>

      <Cal_Container>
            <tr>
              <th className='sun'><Day>일</Day></th>
              <th><Day>월</Day></th>
              <th><Day>화</Day></th>
              <th><Day>수</Day></th>
              <th><Day>목</Day></th>
              <th><Day>금</Day></th>
              <th className='sat'><Day>토</Day></th>
            </tr>
            {calendarArr()}
      </Cal_Container>
    </>
  )
}


const Cal_Container = styled.table`
  width: 100%;
  text-align: center;  
  font-size : 2em;
  height : 80%;

  & > tbody > tr > td {
    border-radius : 3em;
  }

  }
  
  @media (max-width:1200px){
    width: 100vw;
  }
  th.sun {
    color: #F85959;
  }
  th.sat {
    color : #007DFA;
  }
`
const Year = styled.div`
    font-size : 6em;
    font-weight : 700; 
    color : #2F3367;
    margin-right : 0.25em;
    `;

const Month = styled.div`
    display : flex;
    align-items: center;
    font-size : 2.5em;
    font-weight : 500;
    color : #2F3367;
   
    `;
const Day = styled.span`
  @media (max-width:550px){
    display: none
  }
`

const HeaderFrame = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    
    `;


const MonthList = styled.div`
    display : flex;
    flex-wrap : wrap;
    justify-content: center;
    text-align: center;  
    width : 40%;
    margin-left: 3em;
    background-color:#F5F5F7;
    border-radius : 3em;
    `;
const MonthButton = styled.div`
    justify-content: center;
    font-weight: 600;
    font-size : 2.2em;
    color : #2F3367;
    border-radius : 3em;
    margin : 0.25em 0.65em ;
    width : 6%;

    &:hover {
      background-color : #007DFA;
      color : #FFFFFF;
    }
    `;

const ProfileFrame = styled.div`
    display : flex;
    background-color:#F5F5F7;
    border-radius: 50%;
    padding: 0.5em;
    margin-left: 3em;
    `;

  const YearScrollBar = styled.div`
    display: ${props => (props.visible ? 'block' : 'none')};
    position: absolute;
    background-color: #F5F5F7;
    border-radius: 0em 1.5em ;
    margin-top: 12em;
    margin-right: 72em;
    padding: 0.5em;

    max-height: 80px; 
    overflow-y: auto;

    `;

const YearOption = styled.div`
    font-weight: 600;
    font-size: 2em;
    color: #2F3367;
    margin: 0.25em 0.65em;
    cursor: pointer;
    `;



export default Calendar;