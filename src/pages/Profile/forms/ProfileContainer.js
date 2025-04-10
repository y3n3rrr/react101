import React, { useState } from 'react'
import axios from 'axios'
import moment from 'moment'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '../../../hooks/AuthContext';
import SecurityPage from '../../Profile/securityPage';


export default function ProfileContainer() {
  const auth = useAuth();
  const [selectedIndex, setSelectedIndex] = useState(0)

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
                        <ProfileMenu index={selectedIndex} setIndex={setSelectedIndex} />
                      </div>
                    </div>
                    {/* Content Area */}
                    <div className="col-lg-9">
                      <ProfileMenuContent selectedIndex={selectedIndex} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}


const ProfileMenuContent = ({ selectedIndex }) => {
  const auth = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: auth.user?.name,
      surname: auth.user?.surname,
      phone: auth.user?.phone,
      email: auth.user?.email,
      fullname: auth.user?.fullname,
      address: auth.user?.address,
      IsTwoStepEnabled: auth.user?.isTwoStepEnabled,
      IsEmailNotification: auth.user?.isEmailNotification,
      avatarUrl: auth.user?.avatarUrl,
      roleId: auth.user?.roleId,
    }
  })

  const onSubmit = async (data) => {
    try {
      const response = await axios.put(`https://localhost:7284/Account/UpdateUser/${auth.user?.id}`, data)
      if (response.status == 200) {
        toast("User profile updated successfully!", {
          type: "success"
        })
        auth.setUser({
          ...auth.user,
          modifiedDate: moment()
        })
      } else {

      }
    }
    catch (error) {
      toast("ERROR OCURRED IN UPDATE SERVICE", {
        type: "error"
      })
    }

  }



  console.log('errors', errors);

  switch (selectedIndex) {
    case 0:
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-4">
            {/* Personal Information */}
            <div className="mb-4">
              <h5 className="mb-4">Personal Information</h5>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">First Name</label>
                  <input
                    className={`form-control ${errors.name ? "is-invalid" : "is-valid"}`}
                    {...register('name', { required: true, maxLength: 10 })}
                  />
                  {errors.name && <div className="invalid-feedback">
                    {errors.name.type == "maxLength" && <>You cant enter more than 10 characters</>}
                    {errors.name.type == "required" && <>Name cant be empty</>}
                  </div>}
                </div>
                <div className="col-md-6">
                  <label className="form-label">Last Name</label>
                  <input
                    className={`form-control ${errors.surname ? "is-invalid" : "is-valid"}`}
                    {...register('surname', { required: true, maxLength: 10 })}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : "is-valid"}`}
                    {...register('email', { required: true, maxLength: 50, pattern: /^\S+@\S+\.\S+$/ })}
                  />
                  {errors.email && <div className="invalid-feedback">
                    {errors.email.type == "pattern" && <>Invalid email format</>}
                    {errors.email.type == "required" && <>Email cant be empty</>}
                  </div>}
                </div>
                <div className="col-md-6">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    className={`form-control ${errors.phone ? "is-invalid" : "is-valid"}`}
                    {...register('phone', { required: true, maxLength: 14, pattern: /^\d+$/ })}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Address</label>
                  <textarea
                    className={`form-control ${errors.address ? "is-invalid" : "is-valid"}`}
                    rows={4}
                    {...register('address', { required: true, maxLength: 500 })}
                  />
                </div>

                <div className="col-12" hidden="auth.user.roleId !== 2">
                  <label className="form-label"  >Role</label>
                  <select {...register('roleId', { required: true, maxLength: 10 })} className={`form-select ${errors.roleId ? "is-invalid" : "is-valid"}`} aria-label="Default select example">
                    <option>Select User Role</option>
                    <option value="1">Administrator</option>
                    <option value="2">User</option>
                  </select>
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
                          className={`form-check-input ${errors.IsTwoStepEnabled ? "is-invalid" : "is-valid"}`}
                          type="checkbox"
                          {...register('IsTwoStepEnabled', { required: true, maxLength: 10 })}
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
                          className={`form-check-input ${errors.IsEmailNotification ? "is-invalid" : "is-valid"}`}
                          type="checkbox"
                          {...register('IsEmailNotification', { required: true, maxLength: 10 })}
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
                <p className="text-muted small mb-0">
                  {moment(auth.user?.modifiedDate).fromNow()}
                </p>
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
            <div>
              <div className="d-grid gap-2">
                <button type='submit' className="btn btn-primary mt-4">
                  <i className="fas fa-edit me-2" />
                  Update
                </button>
              </div>

            </div>
          </div>
        </form>
      )
      break;
    case 1:
      return (
        <div>
           <SecurityPage />
        </div>
      )
      break;
    default:
      break;
  }



}

const ProfileMenu = ({ index, setIndex }) => {

  return (
    <div className="nav flex-column nav-pills">
      <a className={`nav-link ${index == 0 ? "active" : ""}`} href="#" onClick={() => setIndex(0)}>
        <i className="fas fa-user me-2" />
        Personal Info
      </a>
      <a className={`nav-link ${index == 1 ? "active" : ""}`} href="#" onClick={() => setIndex(1)}>
        <i className="fas fa-lock me-2" />
        Security
      </a>
      <a className={`nav-link ${index == 2 ? "active" : ""}`} href="#" onClick={() => setIndex(2)}>
        <i className="fas fa-bell me-2" />
        Notifications
      </a>
      <a className={`nav-link ${index == 3 ? "active" : ""}`} href="#" onClick={() => setIndex(3)}>
        <i className="fas fa-credit-card me-2" />
        Billing
      </a>
      <a className={`nav-link ${index == 4 ? "active" : ""}`} href="#" onClick={() => setIndex(4)}>
        <i className="fas fa-chart-line me-2" />
        Activity
      </a>
    </div>
  )
}