import React,{useState} from 'react'
import styled from 'styled-components'
import LoginForm from './components/LoginForm';
import './App.css';
function App() {
  const adminUser = {
    username : "test@example.com",
    password : "123456"
  }
  const [user, setUser] = useState({username:"",password:""})
  const [error, setError] = useState("") ;
  const Login = details =>{
    if(details.username === adminUser.username &&
       details.password === adminUser.password){
          setUser({
            username : details.username,
            password : details.password
          })
      }else{
        setError(
          "Something went wrong please try again"
        )
      }
  }
  return (
    <div className="App">
            <HeaderContainer className="Header">
                <div className="Container">
                      <div className="HeaderContent">
                            <div className="Logo">
                          <h3> Abivin</h3>
                        </div>
                        <div className="Login-List">
                            <div>Sign Up</div>
                            <div>Sign in</div>
                        </div>  
                      </div>                
                </div>
            </HeaderContainer>  
            <HomeContainer className="Home">
            {(user.username !=="") ? (
        <div className="Welcome">
          <h2>Welcome,<span>{user.username}</span></h2>

        </div> 
      ) :(
        <LoginForm login={Login} error={error}></LoginForm>
      ) }
            </HomeContainer>

        
    </div>
  );
}

export default App;
const HeaderContainer = styled.div`
  background:#222222;
  color:white;
  .Container{
    padding:0 15px;
    max-width:1024px;
    margin:0 auto;
    width:100%;

    .HeaderContent{
      display:flex;
      width:100%;
      justify-content:space-between;
      align-items:center;

    }
    .Login-List{
      display:flex;
      align-items:center;
      div{
        margin: 0 5px;
      }
    }
  }
`
const HomeContainer = styled.div`
    display:flex;
    justify-content:center;
    align:items:center;
`
