import React from 'react'
import { useAuth } from './hooks/AuthContext';
import axios from 'axios';

export default function Profile() {
  const auth = useAuth();

  return (
    <div>
      <section
        className="w-100 px-4 py-5"
      >
        <div className="row d-flex justify-content-center">
          <div className="col col-md-6 col-lg-5 col-xl-4">
            <div className="card" style={{ borderRadius: 15 }}>
              <div className="card-body p-4">
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <img
                      src={auth.user?.picture}
                      alt="Generic placeholder image"
                      className="img-fluid"
                      style={{ width: 200, borderRadius: 10 }}
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="mb-1">{auth.user?.username ?? '-'}</h5>
                    <p className="mb-2 pb-1">{auth.user?.role ?? '-'}</p>
                      <div>
                   <div style={{   display:'flex',  gap: "12px"}}>
                    <label className='fw-bold'>E-Mail:</label>
                    <div>
                      {auth.user?.email ?? '-'}
                    </div>
                   </div>
                   <div style={{   display:'flex',  gap: "12px"}}>
                    <label className='fw-bold'>Age:</label>
                    <div>
                    {auth.user?.age ?? '-'}
                    </div>
                   </div>
                   <div style={{   display:'flex',  gap: "12px"}}>
                    <label className='fw-bold'>Gender:</label>
                    <div>
                    {auth.user?.gender ?? '-'}
                    </div>
                   </div>
                   <div style={{   display:'flex',  gap: "12px"}}>
                    <label className='fw-bold'>Address:</label>
                    <div>
                    {auth.user?.address ?? '-'}
                    </div>
                   </div>
                    </div>
                    <div class="btn-group" role="group" style={{display:'flex', justifyContent:'space-around', gap:"20px"}} aria-label="Basic mixed styles example">
                      <button type="button" class="btn btn-success">Send Message</button>
                      <button type="button" class="btn btn-warning">Update</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
