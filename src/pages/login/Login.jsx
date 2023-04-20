import { useContext, useState } from "react"
import "./login.scss"
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const {dispatch} = useContext(AuthContext)
  

  const handleLogin = (e) =>{
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    dispatch({type:"LOGIN", payload:user})
    navigate("/")
    // ...
  })
  .catch((error) => {
    setError(true);
    // ..
  });

  }
  return (
    <div className="login-page">
        <form className="login-form" onSubmit={handleLogin}>
         <h1>Doctor Login</h1>
         <div className="form-group">
            <label htmlFor="username">Email</label>
            <input type="email" placeholder="email" onChange={e=>setEmail
            (e.target.value)} />
          </div>  
          <div className="form-group">
          <label htmlFor="password">Password</label>
            <input type="password" placeholder="password"  onChange={e=>setPassword
            (e.target.value)}/>
          </div>  
            <button className="login-button" type="submit">Login</button>
            {error &&<span>wrong email or password</span>}
        </form>
    </div>
  )
}

export default Login


