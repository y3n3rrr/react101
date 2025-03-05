import React, { useState, useEffect } from 'react'
import { data, useNavigate } from 'react-router-dom'
import { useAuth } from './hooks/AuthContext'
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import axios from 'axios';
import './Login.css'




export default function Login() {

    const [ user, setUser ] = useState([]);


  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const auth = useAuth()

  const navigate = useNavigate();

  
  const handlesignup = () => {
    navigate('/Signup');  
     
  
   };

  const onChangeUsername = (e) => {
    setUsername(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }



  const handleLogin = async () => {
    const response = await axios.post('https://localhost:7284/Account/Login', {
        email: username,
        password: password,
    });

    
    const {address, email, fullName, gender, id, isactive, username: _username} = response.data
    
   
    auth.setUser({email,
      given_name:fullName,
      role: "Admin"
    });

    navigate('/home')

  }

 
      

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse)
    },
    onError: (error) => console.log('Login Failed:', error)
});


useEffect(
    () => {
        if (user) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((response) => {

                  const { email, family_name, given_name, id, name, picture, verified_email } = response.data

                  auth.setUser({
                    username: `${given_name} ${family_name}`,
                    email,
                    given_name,
                    id,
                    name,
                    picture,
                    verified_email,
                    role: "Admin"
                  });

                  navigate('/home')
                })
                .catch((err) => console.log(err));
        }
    },
    [ user ]
);


  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="card shadow">
          <div className="card-title text-center border-bottom">
            <h2 className="p-3">SIGN IN</h2>
            
          </div>
          <div className="card-body">
            <form>
              <div className="mb-4">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input type="text" value={username} className="form-control" id="username" onChange={(e) => onChangeUsername(e)} autoComplete='off' />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input type="password" value={password} className="form-control" id="password" onChange={(e) => onChangePassword(e)} />
              </div>
              <div className="mb-4">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="remember"
                />
                <label htmlFor="remember" className="form-label">
                  Beni Hatırla
                </label>
              </div>
              <div className="d-grid buttonContainer">
                <button type="button" className="btn btn-secondary" onClick={()=> handleLogin()}>Sign In</button>

                <button type="button" className="btn btn-secondary" onClick={()=> handlesignup()}>Sign Up</button>
                
                <button type="button" class="login-with-google-btn" onClick={()=> login()}> Sign in with Google </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
