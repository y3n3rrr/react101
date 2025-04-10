import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from  '../../hooks/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import moment from 'moment';

export default function SecurityPage() {
  const auth = useAuth();
  const [is2FAEnabled, setIs2FAEnabled] = useState(auth.user?.isTwoStepEnabled);
  const [isPasswordChange, setIsPasswordChange] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleEnable2FA = async () => {
    try {
      // API'den 2FA ayarlarını etkinleştirme işlemi yapılabilir
      const response = await axios.post('https://localhost:7284/Account/Enable2FA', { userId: auth.user?.id });

      if (response.status === 200) {
        toast('Two-factor authentication enabled!', {
          type: 'success',
        });
        setIs2FAEnabled(true);
      } else {
        toast('Failed to enable two-factor authentication.', {
          type: 'error',
        });
      }
    } catch (error) {
      toast('An error occurred while enabling 2FA.', {
        type: 'error',
      });
    }
  };

  const handleDisable2FA = async () => {
    try {
      // API'den 2FA devre dışı bırakma işlemi yapılabilir
      const response = await axios.post('https://localhost:7284/Account/Disable2FA', { userId: auth.user?.id });

      if (response.status === 200) {
        toast('Two-factor authentication disabled!', {
          type: 'success',
        });
        setIs2FAEnabled(false);
      } else {
        toast('Failed to disable two-factor authentication.', {
          type: 'error',
        });
      }
    } catch (error) {
      toast('An error occurred while disabling 2FA.', {
        type: 'error',
      });
    }
  };

  const onPasswordChangeSubmit = async (data) => {
    if (data.newPassword !== data.confirmPassword) {
      toast('Passwords do not match.', {
        type: 'error',
      });
      return;
    }

    try {
      const response = await axios.post('https://localhost:7284/Account/ChangePassword', {
        userId: auth.user?.id,
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      });

      if (response.status === 200) {
        toast('Password changed successfully!', {
          type: 'success',
        });
        setIsPasswordChange(false);
      } else {
        toast('Failed to change password.', {
          type: 'error',
        });
      }
    } catch (error) {
      toast('An error occurred while changing password.', {
        type: 'error',
      });
    }
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="mb-4">Security Settings</h5>

              {/* Two-Factor Authentication */}
              <div className="mb-4">
                <h6 className="mb-3">Two-Factor Authentication</h6>
                <p className="text-muted mb-3">
                  Add an extra layer of security to your account by enabling two-factor authentication.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    {is2FAEnabled ? (
                      <button className="btn btn-warning" onClick={handleDisable2FA}>
                        Disable 2FA
                      </button>
                    ) : (
                      <button className="btn btn-primary" onClick={handleEnable2FA}>
                        Enable 2FA
                      </button>
                    )}
                  </div>
                  <div>
                    <span className="text-muted">
                      {is2FAEnabled ? 'Enabled' : 'Disabled'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Password Change */}
              <div className="mb-4">
                <h6 className="mb-3">Change Password</h6>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => setIsPasswordChange(!isPasswordChange)}
                >
                  {isPasswordChange ? 'Cancel' : 'Change Password'}
                </button>
                {isPasswordChange && (
                  <form onSubmit={handleSubmit(onPasswordChangeSubmit)} className="mt-3">
                    <div className="mb-3">
                      <label htmlFor="currentPassword" className="form-label">
                        Current Password
                      </label>
                      <input
                        type="password"
                        className={`form-control ${errors.currentPassword ? 'is-invalid' : ''}`}
                        id="currentPassword"
                        {...register('currentPassword', { required: 'Current password is required.' })}
                      />
                      {errors.currentPassword && <div className="invalid-feedback">{errors.currentPassword.message}</div>}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="newPassword" className="form-label">
                        New Password
                      </label>
                      <input
                        type="password"
                        className={`form-control ${errors.newPassword ? 'is-invalid' : ''}`}
                        id="newPassword"
                        {...register('newPassword', { required: 'New password is required.' })}
                      />
                      {errors.newPassword && <div className="invalid-feedback">{errors.newPassword.message}</div>}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="confirmPassword" className="form-label">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                        id="confirmPassword"
                        {...register('confirmPassword', { required: 'Please confirm your new password.' })}
                      />
                      {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword.message}</div>}
                    </div>

                    <div className="d-grid gap-2">
                      <button type="submit" className="btn btn-primary">
                        Change Password
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Security History */}
              <div>
                <h6 className="mb-3">Security History</h6>
                <div className="activity-item mb-3">
                  <h6 className="mb-1">Enabled two-factor authentication</h6>
                  <p className="text-muted small mb-0">
                    {moment().fromNow()}
                  </p>
                </div>
                <div className="activity-item mb-3">
                  <h6 className="mb-1">Changed password</h6>
                  <p className="text-muted small mb-0">
                    {moment().subtract(1, 'days').fromNow()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
