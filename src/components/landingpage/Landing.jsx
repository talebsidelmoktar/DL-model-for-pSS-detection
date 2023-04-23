import { Link } from 'react-router-dom';
import './landing.scss'

const Landing = () => {
    return (
      <div className="landing-page">
        <h1>Welcome to Doctorapp !</h1>
        <div className='button-container'>
          <button className='button-1'>
            <Link to="/login">Log in as Admin  </Link>
          </button>
          <button className='button-2'>
            <Link to="/doctor-login">Log in as Doctor  </Link>
          </button>
          <button className='button-3'>
            <Link to="/radiologist-login">Log in as Radiologist</Link>
          </button>
          <button className='button-4'>
            <Link to="/nurse-login">Log in as Nurse   </Link>
          </button>
        </div >
      </div>
    );
  
};

  
  export default Landing;
  