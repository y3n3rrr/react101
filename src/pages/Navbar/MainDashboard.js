import React from 'react';
import { useAuth } from '../../hooks/AuthContext';

import './css/all.min.css'
import './css/bootstrap.min.css'
import './css/ruang-admin.min.css'
<><script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/js/solid.min.js"></script><><link href="img/logo/logo.png" rel="icon" /><title>RuangAdmin - Charts</title></></>


const MainDashboard = () => {  
const auth = useAuth();

    return (
        <>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <link href="img/logo/logo.png" rel="icon" />
        <title>RuangAdmin - Charts</title>
        <link
          href="vendor/fontawesome-free/css/all.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link href="css/ruang-admin.min.css" rel="stylesheet" />
        <div id="wrapper">
         
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              {/* TopBar */}
              <nav className="navbar navbar-expand navbar-light bg-navbar topbar mb-4 static-top">
               
                <ul className="navbar-nav ml-auto">
                  
                  
                  <div className="topbar-divider d-none d-sm-block" />
                  <li className="nav-item dropdown no-arrow">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="userDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        className="img-profile rounded-circle"
                        src="../../img/girl.jpeg"
                        style={{ maxWidth: 60 }}
                      />
                      <span className="ml-2 d-none d-lg-inline text-white small">
                      {auth.user?.name + " " + auth.user?.surname}
                      </span>
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="userDropdown"
                    >
                      
                      <div className="dropdown-divider" />
                      <a
                        className="dropdown-item"
                        href="javascript:void(0);"
                        data-toggle="modal"
                        data-target="#logoutModal"
                      >
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                        Logout
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
              {/* Topbar */}
              {/* Container Fluid*/}
              <div className="container-fluid" id="container-wrapper">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Charts</h1>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/Home">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Charts
                    </li>
                  </ol>
                </div>
                {/* Row */}
                <div className="row">
                  {/* Area Charts */}
                  <div className="col-lg-12">
                    <div className="card mb-4">
                      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">
                          Area Chart
                        </h6>
                      </div>
                      <div className="card-body">
                        <div className="chart-area">
                          <canvas id="myAreaChart" />
                        </div>
                        <hr />
                        Styling for the area chart can be found in the
                        <code>./js/demo/chart-area-demo.js</code> file.
                      </div>
                    </div>
                  </div>
                  {/* Bar Chart */}
                  <div className="col-lg-8">
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                          Bar Chart
                        </h6>
                      </div>
                      <div className="card-body">
                        <div className="chart-bar">
                          <canvas id="myBarChart" />
                        </div>
                        <hr />
                        Styling for the bar chart can be found in the{" "}
                        <code>./js/demo/chart-bar-demo.js</code> file.
                      </div>
                    </div>
                  </div>
                  {/* Donut Chart */}
                  <div className="col-lg-4">
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                          Donut Chart
                        </h6>
                      </div>
                      <div className="card-body">
                        <div className="chart-pie pt-4">
                          <canvas id="myPieChart" />
                        </div>
                        <hr />
                        Styling for the donut chart can be found in the{" "}
                        <code>./js/demo/chart-pie-demo.js</code> file.
                      </div>
                    </div>
                  </div>
                </div>
                {/*Row*/}
                {/* Documentation Link */}
                <div className="row">
                  <div className="col-lg-12">
                    <p className="mb-4">
                      Chart.js is a third party plugin that is used to generate the
                      charts in this theme. The charts below have been customized -
                      for further customization options, please visit the{" "}
                      <a target="_blank" href="https://www.chartjs.org/docs/latest/">
                        official Chart.js documentation
                      </a>
                      .
                    </p>
                  </div>
                </div>
                {/* Modal Logout */}
                <div
                  className="modal fade"
                  id="logoutModal"
                  tabIndex={-1}
                  role="dialog"
                  aria-labelledby="exampleModalLabelLogout"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabelLogout">
                          Ohh No!
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <p>Are you sure you want to logout?</p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          data-dismiss="modal"
                        >
                          Cancel
                        </button>
                        <a href="login.html" className="btn btn-primary">
                          Logout
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*-Container Fluid*/}
            </div>
            {/* Footer */}
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>
                    copyright © - developed by
                    <b>
                      <a href="https://indrijunanda.gitlab.io/" target="_blank">
                        indrijunanda
                      </a>
                    </b>
                  </span>
                </div>
              </div>
            </footer>
            {/* Footer */}
          </div>
        </div>
        {/* Scroll to top */}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up" />
        </a>
        {/* Page level plugins */}
        {/* Page level custom scripts */}
      </>
      
    );
  }
  
  export default MainDashboard;