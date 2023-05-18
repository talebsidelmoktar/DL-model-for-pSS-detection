import React, { useState } from 'react';
import { useHistory, useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db, storage } from "../../firebase";
import './checkform.scss';

const Checkform = () => {
  const navigate = useNavigate()

  // State variables for the form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [result, setResult] = useState('');
  const [checkedBy, setCheckedBy] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Upload the image to Firebase Storage
      const imageRef = ref(storage, `checks/${imageFile.name}`);
      const uploadTask = uploadBytesResumable(imageRef, image);
      uploadTask.on('state_changed', 
        (snapshot) => {
          // Get the upload progress and update the state
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          console.error('Error uploading image: ', error);
        },
        async () => {
          // Once the upload is complete, get the download URL and add the check to Firestore
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          const checkRef = await addDoc(collection(db, 'checks'), {
            name,
            email,
            result,
            checkedBy,
            date,
            time,
            img: url
          });
          
          console.log(`Check added with ID: ${checkRef.id}`);
          // Navigate back to the list of checks
          navigate('/checks')
        }
      );
    } catch (error) {
      console.error('Error adding check: ', error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="appointment-form">
      <h2>Add a new Check</h2>
        <div className="form-group">
         <label htmlFor="image">Image:</label>
         <input type="file" id="image" onChange={(e) => setImageFile(e.target.files[0])} />
       </div>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="result">Result:</label>
        <select
          type="result"
          id="result"
          value={result}
          onChange={(e) => setResult(e.target.value)}
          required
        >
        <option value="">Select an option</option>
          <option value="SJ">SJ</option>
          <option value="NO SJ">NO SJ</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="prescription">CheckedBy:</label>
        <select
          id="checkedBy"
          value={checkedBy}
          onChange={(e) => setCheckedBy(e.target.value)}
          required
        >
          <option value="">Select an option</option>
          <option value="doctor">Doctor</option>
          <option value="radiologist">Radiologist</option>
        </select>
        
      </div>
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Checkform;
