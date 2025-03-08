import React, {useState} from 'react'
import { useAuth } from './hooks/AuthContext'
import axios from 'axios'

export default function ProfileContainer() {
   const auth = useAuth();
   const [formData, setFormData] = useState({
       name: auth.user?.name,
       surname: auth.user?.surname,
       phone: auth.user?.phone,
       email: auth.user?.email,
       fullname: auth.user?.fullname,
       address: auth.user?.address,
       IsTwoStepEnabled: false,
       IsEmailNotification: false,
       avatarUrl: auth.user?.avatarUrl
     });

     const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      debugger
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      });
      
    };

     const handleUpdateProfile = async () => {
      debugger
      const response = await axios.put("https://localhost:7284/Account/UpdateUser/12", {
        ...formData
      })
      debugger
     }

  return (
    <div>

  <div className="bg-light">
    <div className="container py-5">
      <div className="row">
        {/* Profile Header */}
        <div className="col-12 mb-4">
          <div className="text-center">
            <div className="position-relative d-inline-block">
              <img
                src={auth.user?.avatarUrl}
                className="rounded-circle profile-pic"
                alt="Profile Picture"
              />
              <button className="btn btn-primary btn-sm position-absolute bottom-0 end-0 rounded-circle">
                <i className="fas fa-camera" />
              </button>
            </div>
            <h3 className="mt-3 mb-1">{auth.user?.username}</h3>
            <p className="text-muted mb-3">Senior Product Designer</p>
            <div className="d-flex justify-content-center gap-2 mb-4">
              <button className="btn btn-outline-primary">
                <i className="fas fa-envelope me-2" />
                Message
              </button>
              <button className="btn btn-primary">
                <i className="fas fa-user-plus me-2" />
                Connect
              </button>
              <button className="btn btn-primary" onClick={handleUpdateProfile}>
              <i className="fas fa-edit me-2" />
                Update
              </button>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-0">
              <div className="row g-0">
                {/* Sidebar */}
                <div className="col-lg-3 border-end">
                  <div className="p-4">
                    <div className="nav flex-column nav-pills">
                      <a className="nav-link active" href="#">
                        <i className="fas fa-user me-2" />
                        Personal Info
                      </a>
                      <a className="nav-link" href="#">
                        <i className="fas fa-lock me-2" />
                        Security
                      </a>
                      <a className="nav-link" href="#">
                        <i className="fas fa-bell me-2" />
                        Notifications
                      </a>
                      <a className="nav-link" href="#">
                        <i className="fas fa-credit-card me-2" />
                        Billing
                      </a>
                      <a className="nav-link" href="#">
                        <i className="fas fa-chart-line me-2" />
                        Activity
                      </a>
                    </div>
                  </div>
                </div>
                {/* Content Area */}
                <div className="col-lg-9">
                  <div className="p-4">
                    {/* Personal Information */}
                    <div className="mb-4">
                      <h5 className="mb-4">Personal Information</h5>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label className="form-label">First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={auth.user?.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={auth.user?.surname}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            onChange={handleChange}
                            defaultValue={auth.user?.email}
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Phone</label>
                          <input
                            type="tel"
                            className="form-control"
                            onChange={handleChange}
                            defaultValue={auth.user?.phone}
                          />
                        </div>
                        <div className="col-12">
                          <label className="form-label">Address</label>
                          <textarea
                            className="form-control"
                            rows={4}
                            onChange={handleChange}
                            defaultValue={auth.user?.address}
                          />
                        </div>
                      </div>
                    </div>
                    {/* Settings Cards */}
                    <div className="row g-4 mb-4">
                      <div className="col-md-6">
                        <div className="settings-card card">
                          <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h6 className="mb-1">
                                  Two-Factor Authentication
                                </h6>
                                <p className="text-muted mb-0 small">
                                  Add an extra layer of security
                                </p>
                              </div>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  onChange={handleChange}
                                  defaultChecked={auth.user?.isTwoStepEnabled}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="settings-card card">
                          <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h6 className="mb-1">Email Notifications</h6>
                                <p className="text-muted mb-0 small">
                                  Receive activity updates
                                </p>
                              </div>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  onChange={handleChange}
                                  defaultChecked={auth.user?.isEmailNotification}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Recent Activity */}
                    <div>
                      <h5 className="mb-4">Recent Activity</h5>
                      <div className="activity-item mb-3">
                        <h6 className="mb-1">Updated profile picture</h6>
                        <p className="text-muted small mb-0">2 hours ago</p>
                      </div>
                      <div className="activity-item mb-3">
                        <h6 className="mb-1">Changed password</h6>
                        <p className="text-muted small mb-0">Yesterday</p>
                      </div>
                      <div className="activity-item">
                        <h6 className="mb-1">Updated billing information</h6>
                        <p className="text-muted small mb-0">3 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}
