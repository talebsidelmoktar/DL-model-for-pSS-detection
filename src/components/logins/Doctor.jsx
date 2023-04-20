
import './doctor.scss';

const Doctor = () => {
return (
    <div className="login-page">
      <form className="login-form">
        <h1>Doctor Login</h1>
        <div className="form-group">
          <label htmlFor="username">Email</label>
          <input type="text" id="email" name="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Doctor;