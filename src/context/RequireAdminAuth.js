import { useState, useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { collection, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../firebase';

function RequireAdminAuth({ children }) {
  const { currentUser } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);

  const checkAdminAuthentication = async () => {
    if (currentUser) {
      const q = query(collection(db, 'admins'), where('email', '==', currentUser.email));

      try {
        const querySnapshot = await getDocs(q);
        setIsAdmin(!querySnapshot.empty);
        // Set isAdmin to true if the query returns a non-empty result
      } catch (error) {
        console.log('Error checking admin authentication:', error);
      }
    }
  };

  useEffect(() => {
    checkAdminAuthentication();
  }, [currentUser]);

  console.log(isAdmin);
  return isAdmin ? <Navigate to="/" /> : children;
}

export default RequireAdminAuth;

