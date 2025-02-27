import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './hooks/AuthContext'

export default function Login() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const auth = useAuth()

  const navigate = useNavigate();

  const onChangeUsername = (e) => {
    setUsername(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }


  const handleLogin = () => {
    if (username == "admin" && password == "123") {
      auth.setUser({
        username:"Superman",
      });
      auth.setRole("Admin");
      navigate('/home')
    }
    else {
      alert('Kullanici bulunamadi')
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="card shadow">
          <div className="card-title text-center border-bottom">
            <h2 className="p-3">KAYIT1</h2>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-4">
                <label htmlFor="username" className="form-label">
                  Kullanıcı Adı
                </label>
                <input type="text" className="form-control" id="username" onChange={(e) => onChangeUsername(e)} autoComplete='off' />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  Şifre
                </label>
                <input type="password" className="form-control" id="password" onChange={(e) => onChangePassword(e)} />
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
              <div className="d-grid">
                <button type="button" className="btn btn-secondary" onClick={()=> handleLogin()}>GİRİŞ</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
