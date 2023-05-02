import { useState, useEffect, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { AuthContext } from './AuthContext';


function RequireDoctorAuth({ children }) {
    const { currentUser } = useContext(AuthContext);
    const [isDoctor, setIsDoctor] = useState(false);
  
    useEffect(() => {
      if (currentUser) {
        const doctorsRef = collection(db, 'doctors');
        const email = currentUser.email;
        const q = query(doctorsRef, where('email', '==', email));
  
        getDocs(q)
          .then((querySnapshot) => {
            setIsDoctor(!querySnapshot.empty); // Set isDoctor to true if the query returns a non-empty result
          })
          .catch((error) => {
            console.log('Error checking doctor authentication:', error);
          });
      }
    }, [currentUser]);
  
    return isDoctor ? <Navigate to="/" />: children;
  }
  
  export default RequireDoctorAuth;
  