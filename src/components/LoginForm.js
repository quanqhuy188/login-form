import React,{useState} from 'react'
import styled from 'styled-components'
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';

const ErrorAlert = styled.div`
color:red;
`
function LoginForm({login,error}) {
    const [details, setDetails] = useState({username:"",password:""})
    const submitHandler = e =>{
        e.preventDefault();
        login(details)
    }
    return (
        <div className="Login">
            <LoginContainer>
            <h2>Login Form</h2>
                <div className="login-form">
                <div className="login-box">
                    <div>Login to your account</div>
                    <form onSubmit={submitHandler}>
                        <div className="form-inner">
                            <div className="form-group">
                                        <label htmlFor="username"><PersonIcon></PersonIcon></label>
                                        <input 
                                            value={details.username} 
                                            onChange={e=>setDetails({...details,username:e.target.value})} 
                                            type="text" 
                                            name="username" 
                                            id="username"
                                            placeholder="username" 
                                            ></input>
                                    </div>                
                            <div className="form-group">
                                        <label htmlFor=""><LockIcon></LockIcon></label>
                                        <input 
                                            required 
                                            value={details.password} onChange={e=>setDetails({...details,password:e.target.value})} 
                                            type="password" 
                                            name="password" 
                                            id="password"
                                            placeholder="password" 
                                            ></input>
                                    </div>                   
                            {(error !=="") ?
                                ( <ErrorAlert>{error}</ErrorAlert> )
                            :("")}  
                                
                            <div className="SubmitButton">
                                    <div className="LeftGroup">
                                        <input type="checkbox" id="remember" name="remember" value="remember"></input>
                                        <label for="remember">Remember Me</label>
                                    </div>
                                    <div className="RightGroup">
                                    <input type="submit" value="Login"></input>
                                    </div>
                                   
                                </div>         
                        </div>
                    </form>
                </div>
                <div className="more">
                    <div><h3>Or Login With</h3></div>
                    <div className="social-link">

                    </div>
                    <div><h3> Forgot you password ?</h3></div>
                    <div><span>no worries, click</span><a href="#">here</a> <span>to reset your password</span> </div>
                    <div><span>Don't have an account yet ? </span><a href="#"> Create an account</a> </div>
                </div>       
                </div>             
            </LoginContainer>
        </div>        

    )
}

export default LoginForm
const LoginContainer = styled.div`

    >h2{
        text-align: center;
        text-transform: uppercase;
        font-weight: 100;
        color: white;
        font-size: 36px;
    }
    .login-form{
        background: white;
        padding:20px;
        margin:15px;
        max-width:700px;    
        border-radius:20px;    
        .login-box{
            >div{
                font-size:24px;
            }
        }
        form{
            .form-group{
                margin:5px 0;
                border: 1px solid #5ef778;
                display: flex;
                align-items: center;
                input{
                    height: 30px;
                    border: 0;
                    outline: none;
                    width: 100%;
                }
            }
            .SubmitButton{
                margin-top:10px;
                .RightGroup{
                    input{
                        background: #00c4d2;
                        color:white;
                        border:0;
                        padding:5px 10px;
                        box-shadow: 0px 1px 6px 1px #888888;
                     }
                }
                display: flex;
                align-items: center;
                justify-content:space-between;

            }
        }
    }
`

