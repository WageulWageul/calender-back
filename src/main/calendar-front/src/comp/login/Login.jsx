import React, { useState } from 'react';
import LoginStyle from "./LoginStyle.jsx";
import { Link } from "react-router-dom";
import { ReactComponent as Mascot} from "../../assets/img/Mascot.svg";
import { ReactComponent as Kakao} from "../../assets/img/kakao.svg";
import { ReactComponent as Naver} from "../../assets/img/naver.svg";

function Login(props) {
    const [userData, setUserData] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value);
    };
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setUserData((prevUserData) => {
            return [
                ...prevUserData,
                {
                    name: {name},
                    email: {email},
                },
            ];
        });
        console.log({userData});
    };

    const handlekakaoLogin = (e) => {
        //처리
    };
    const handlenaverLogin = (e) => {
        //처리
    };

    return (
        <div style={LoginStyle.container}>
            <div style={LoginStyle.imageContainer}>
                <Mascot style={LoginStyle.image} ></Mascot>
            </div>
            <div style={LoginStyle.textContainer}>
                <h1 style={LoginStyle.textStyle}>Welcome!</h1>
                <p style={LoginStyle.textStyle}>로그인하는데 필요한 정보를 입력해주세요!</p>

                <form onSubmit={onSubmit}>
                    <label>
                        <input
                            type="text" 
                            value={name} 
                            onChange={onChangeName}
                            style={LoginStyle.formDesign}
                        />
                    </label>
                    <br />
                    <label>
                        <input
                            type="text" 
                            value={email} 
                            onChange={onChangeEmail}
                            style={LoginStyle.formDesign}
                        />
                    </label>
                    <br />
                    <button 
                        onClick= {handlekakaoLogin}
                        style={{...LoginStyle.snsButton, color: 'black', backgroundColor: '#FEE500', marginRight:'10px'}}>
                            <Kakao style={{float: 'left'}}></Kakao>
                            카카오 로그인</button>
                    <button 
                        onClick={handlenaverLogin}
                        style={{...LoginStyle.snsButton, color: 'white', backgroundColor: '#03C75A'}}>
                            <Naver style={{float: 'left'}}></Naver>
                            네이버 로그인</button>

                    <br />
                    <Link to='/'>
                    <div style={{textAlign: 'right'}}>
                        <button 
                            type="submit"
                            style={{...LoginStyle.logInButton, color: 'white', fontSize: '20px'}}
                            >로그인
                        </button>
                    </div>
                    </Link>
                </form>
                <hr style={{color: '#ECECF0'}}/>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p style={{ textAlign: 'left', color: '#2F3367' }}>아이디가 없으신가요</p>
                    <p style={{ textAlign: 'right', color: '#007DFA' }}>회원가입하기!</p>
                </div>
            </div>
        </div>
    );
}

export default Login;