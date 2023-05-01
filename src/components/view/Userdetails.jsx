import { useEffect, useState } from "react";
import {  Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import './userdetail.scss';
const Userdetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const docRef = doc(db, "users", id);
      const docSnap = await getDoc(docRef);

     
      
      if (docSnap.exists()) {
        setUser(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchUser();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }
 
  return (
    <div className="userDetail">
    <div className="userImage">
      <img src={user.img} alt={user.name} />
    </div>
    <div className="userInfo">
      <h2>{user.name}</h2>
      <p>
        <strong>Name: </strong> {user.username}
      </p>
      <p>
        <strong>Email: </strong> {user.email}
      </p>
      <p>
        <strong>Phone: </strong> {user.phone}
      </p>
      <p>
        <strong>Address: </strong> {user.address}
      </p>
      <div className="backButton" >
        <Link to={'/users'} >
          <i className="fa fa-arrow-left"></i> Back to Users List
          </Link> 
        </div>
    </div>
  </div>
  );
};

export default Userdetail;
