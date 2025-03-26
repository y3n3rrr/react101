import React, { useState, useEffect } from 'react'
import { data, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/AuthContext'
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import axios from 'axios';
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import './Login.css'
import { baseURL } from '../../utils/config';




export default function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onChange',
    defaultValues: {
      username: '',
      password: '',
    }
  })

  const [user, setUser] = useState([]);


  const [isLoading, setIsLoading] = useState(false)
  const auth = useAuth()

  const navigate = useNavigate();


  const handlesignup = () => {
    navigate('/Signup');
  };


  const handleLogin = async (data) => {
    setIsLoading(true)

    try {
      const response = await axios.post(`${baseURL}/Account/Login`, {
        username: data.username,
        password: data.password,
      });


      const { address, email, fullName, gender, id, isactive, username: _username, avatarUrl, name, surname, isEmailNotification, isTwoStepEnabled, phone, createdDate, modifiedDate, roleId } = response.data
      auth.setUser({
        id,
        email,
        gender,
        avatarUrl,
        given_name: fullName,
        username: _username,
        name,
        surname,
        isEmailNotification,
        isTwoStepEnabled,
        phone,
        isactive,
        address,
        createdDate,
        modifiedDate,
        roleId
      });
      toast("Login Successfull, you will be redirected to home page in 2 seconds", {
        type: "success"
      })
      setIsLoading(false)
      setTimeout(() => {
        navigate('/home')
      }, 2000);
    } catch (error) {
      setIsLoading(false)
      toast(error.response.data, {
        type: "error",
      })
    }
  }


  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse)
    },
    onError: (error) => console.log('Login Failed:', error)
  });


  useEffect(
    () => {
      if (user.access_token) {
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
              name: given_name,
              surname: family_name,
              avatarUrl: picture,
              verified_email,
              role: "Admin"
            });

            navigate('/home')
          })
          .catch((err) => console.log(err));
      }
    },
    [user]
  );


  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="card shadow">
          <div className="card-title text-center border-bottom">
            <h2 className="p-3">{isLoading ?
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              : 'SIGN IN'}</h2>

          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="mb-4">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  className={`form-control ${errors.username ? "is-invalid" : "is-valid"}`}
                  id="username" autoComplete='off'
                  {...register('username', { required: true, maxLength: 25 })}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input type="password" className={`form-control ${errors.password ? "is-invalid" : "is-valid"}`}
                  id="password"
                  {...register('password', { required: true, maxLength: 25 })}
                />
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
                <button type="submit" className="btn btn-secondary" >Sign In</button>

                <button type="button" className="btn btn-secondary" onClick={() => handlesignup()}>Sign Up</button>

                <button type="button" className="login-with-google-btn" onClick={() => login()}> Sign in with Google </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
