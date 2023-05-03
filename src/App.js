import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Doctorlist from "./pages/Doctorlist/Doctorlist";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { checkInputs, productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import Singledr from "./pages/singledr/Singledr";
import Newdoc from "./pages/newdoc/Newdoc";
import LandingPage from "./components/landingpage/Landing";
import Doctor from "./components/logins/Doctor";
import Nurse from "./components/logins/Nurse";
import Radiologist from "./components/logins/Radiologist";
import Drhome from "./pages/home/Drhome";
import Radiotable from "./components/Radiologiststable/Radiotable";
import Newrad from "./pages/newdoc/Newrad";
import Nursetable from "./components/Nusrestable/Nursetable";
import Newnurse from "./pages/newdoc/Newnurse";
import Radhome from "./pages/home/Radhome";
import Nurhome from "./pages/home/Nurhome";
import Check from "./pages/checks/Check";
import List2 from "./pages/list/List2";
import Landing from "./components/landingpage/Landing";
import Applist from "./pages/appoitmentlist/Applist";
import AppointmentForm from "./pages/appointmentform/Appform";
import Checklist from "./pages/checklist/Checklist";
import Checkform from "./pages/checks/Checkform";
import Userdetails from "./components/view/Userdetails";
import Userdetail from "./components/view/Userdetails";
import Radiodetail from "./components/view/Radiodetail";
import Doctordetail from "./components/view/Doctordetail";
import Nursedetail from "./components/view/Nursedetail";
import Adminhome from "./pages/home/Adminhome";
import { auth, db } from "./firebase";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import RequireDoctorAuth from "./context/RequireDoctorAuth";
import RequireAdminAuth from "./context/RequireAdminAuth";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  
  const {currentUser} = useContext(AuthContext);
 

  const RequireAuth = ({children}) => {
    return currentUser ?  <Navigate to="/" />: children;
  };
 
  

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
            <Route path="login" element={<Login />} />
            <Route path="doctor-login" element={<Doctor />} />
            <Route path="nurse-login" element={<Nurse />} />
            <Route path="radiologist-login" element={<Radiologist />} />
             
            <Route path="doctors">
              <Route index element={
                     <RequireDoctorAuth>
                       <Doctorlist />
                     </RequireDoctorAuth>
                      
                   
                   } /> 
                <Route path="/doctors/:id" element ={<Doctordetail />}/>
               <Route
                 path="new"
                 element={<Newdoc inputs={userInputs} title="Add New Doctor" />}
              />
            </Route>       
            <Route path="users">
              <Route index element={
                   <RequireAuth>
                       <List2 />
                   </RequireAuth>
                   } />
              <Route path="/users/:id" element ={<Userdetail />}/>
                 
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            
            <Route path="radiologists">
              <Route index element={
                   <RequireAuth>
                      <Radiotable />
                   </RequireAuth>
                     
                  
                   } />
                  <Route path="/radiologists/:id" element ={<Radiodetail />}/>
               <Route
                 path="new"
                 element={<Newrad inputs={userInputs} title="Add New Radiologist" />}
                 />
            </Route>
            <Route path="nurses">
              <Route index element={
                     <RequireAuth>
                       <Nursetable />
                     </RequireAuth>
                       
                   
                   } />
                  <Route path="/nurses/:id" element ={<Nursedetail />}/>
               <Route
                 path="new"
                 element={<Newnurse inputs={userInputs} title="Add New Nurse" />}
                 />
            </Route >   
            <Route path="appointments">
              <Route index element={
                   <RequireAuth>
                       <Applist />
                   </RequireAuth>
                   } />
                  
                <Route
                 path="new"
                 element={<AppointmentForm inputs={userInputs} title="Add New Nurse" />}
                 />
            </Route>
            <Route path="checks">
              <Route index element={
                   <RequireAuth>
                       <Checklist/>
                   </RequireAuth>
                   } />
                  
                <Route
                 path="new"
                 element={<Checkform inputs={checkInputs} title="Add New Check" />}
                 />
            </Route>
            
            <Route path="send-message">
              <Route index element={
                   <RequireAuth>
                       <Check />
                   </RequireAuth>
                   } />
            </Route>
            <Route path="admin-home">
              <Route index element={
                    <RequireAuth>
                      <Adminhome />
                    </RequireAuth>
                          
                   
                      
                   } />
            </Route>
            <Route path="/doctor-home" >
               <Route index element={<RequireDoctorAuth> <Drhome/></RequireDoctorAuth>} />
            </Route>

            <Route path="radiologist-home">
              <Route index element={
                   <RequireAuth>
                       <Radhome />
                   </RequireAuth>
                   } />
            </Route>
            <Route path="nurse-home">
              <Route index element={
                   <RequireAuth>
                       <Nurhome />
                   </RequireAuth>
                   } />
            </Route>
            
            
            
            <Route path="check">
              <Route index element={
                   <RequireAuth>
                       <Home />
                   </RequireAuth>
                   } />
            </Route>
            
           
            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
