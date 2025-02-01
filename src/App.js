import './App.css'

function App() {
  return (

<div className="container">
  <div className="row justify-content-center mt-5">
    <div className="col-lg-4 col-md-6 col-sm-6">
      <div className="card shadow">
        <div className="card-title text-center border-bottom">
          <h2 className="p-3">KAYIT</h2>
        </div>
        <div className="card-body">
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="form-label">
                Kullanıcı Adı
              </label>
              <input type="text" className="form-control" id="username" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Şifre
              </label>
              <input type="password" className="form-control" id="password" />
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
            
              <button type="button" class="btn btn-secondary">GİRİŞ</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>


  );
}

export default App;
