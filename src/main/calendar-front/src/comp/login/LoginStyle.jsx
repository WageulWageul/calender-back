
const LoginStyle = {
    container: {
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
    },
    imageContainer: {
        marginLeft: '10px', //글과 그림 사이의 간격
    },
    image: {
        width: '800px', 
        height: '800px',
        objectFit: 'cover', //이미지 크기 조정
        height: '100vh',
    },
    textContainer: {
        maxWidth: '800px', 
    },
    formDesign: {
        height: "60px",
        width: "400px",
        backgroundColor: '#F5F5F7',
        marginBottom: '30px',
        borderRadius: '10px',
        border: 'none',
    },
    textStyle: {
        color: '#2F3367',
    },
    logInButton: {
        width: '150px',
        height: '67px',
        backgroundColor: '#007DFA',
        marginBottom: '30px',
        borderRadius: '10px',
        border: 'none',
    },
    snsButton: {
        width: '195px',
        height: '54px',
        marginBottom: '30px',
        borderRadius: '5px',
        border: 'none',
        fontSize: '15px'
    }
};

export default LoginStyle;