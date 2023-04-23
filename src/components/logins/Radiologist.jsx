

import './doctor.scss';
import { db } from "../../firebase";
import { auth } from "../../firebase";
import { useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Radiologist = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()


  const handleLogin = (e) => {
    e.preventDefault();

    // Get the user with the provided email from the 'users' collection
    const usersRef = collection(db, "radiologists");
    const q = query(usersRef, where("email", "==", email));
    getDocs(q)
      .then((querySnapshot) => {
        if (querySnapshot.size > 0) {
          // User with provided email found
          const user = querySnapshot.docs[0].data();
          signInUser(user.email, user.password);
        } else {
          // User with provided email not found
          setError("Invalid email or password");
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const signInUser = (email, password) => {
    // Sign in the user with the provided email and password
    signInWithEmailAndPassword(auth ,email, password)
      .then((userCredential) => {
        // User successfully signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/radiologist-home")
      })
      .catch((error) => {
        // Handle errors
        setError(error.message);
      });
  };
return (
    <div className="login-page">
      <form onSubmit={handleLogin} className="login-form">
        <h1>Radiologist Login</h1>
        <div className="form-group">
          <label htmlFor="username">Email</label>
          <input type="text" id="email" name="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Radiologist;