
import React, { useEffect, useState } from 'react';
import { data, useNavigate } from 'react-router-dom'
import './Signup.css'
import axios from 'axios'

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    fullname: '',
    address: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });
  
const navigate = useNavigate();

  const handleChange = (e) => {
    console.log("BASILAN TUS:", e.target.value)
    const { name, value, type, checked } = e.target;
    debugger
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Şifreler eşleşmiyor!');
      return;
    }

    if (!formData.terms) {
      alert('Hizmet şartlarını kabul etmeniz gerekiyor!');
      return;
    }

    try
    {
      const response = await axios.post("https://localhost:7284/Account/RegisterUser", {
        ...formData
      })
      if(response.status == 200){
        alert(response.data);
        navigate('/login');  
      }
      else{
        alert('Hata olustu');
      }
    }catch(error) {
      if(error.code == "ERR_BAD_REQUEST"){
        alert(error.response.data);
      }
    }


  };



useEffect(()=> {
  console.log("new form data:", formData)
},
[formData])

  return (
    <section className='signupContainer'>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black cardText">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className={`form-control ${Boolean(formData.username) ? "is-valid" : "is-invalid"}`}
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="form3Example1c">Username</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                      <div class="invalid-feedback">Please fill out this field.</div>
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            className={`form-control ${Boolean(formData.email) ? "is-valid" : "is-invalid"}`}
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                          {!Boolean(formData.email) ? <div>Email is required</div> : <></>}
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example3c"
                            className={`form-control ${Boolean(formData.fullname) ? "is-valid" : "is-invalid"}`}
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="form3Example3c">Fullname</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <textarea
                            type="text"
                            id="form3Example3c"
                            className="form-control"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="form3Example3c">Address</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            className={`form-control ${Boolean(formData.password) ? "is-valid" : "is-invalid"}`}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="form3Example4c">Password</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4cd"
                            className={`form-control ${Boolean(formData.confirmPassword) ? "is-valid" : "is-invalid"}`}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                          name="terms"
                          checked={formData.terms}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="form2Example3">
                          I agree all statements in <a href="#!">Terms of service</a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-primary btn-lg">Register</button>
                      </div>
                    </form>
                  </div>

                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
