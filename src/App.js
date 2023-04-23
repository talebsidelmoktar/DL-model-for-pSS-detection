import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Doctorlist from "./pages/Doctorlist/Doctorlist";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
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
import Message from "./components/sendmessage/Message";
import List2 from "./pages/list/List2";
import Landing from "./components/landingpage/Landing";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  
  const {currentUser} = useContext(AuthContext)
 

  const RequireAuth = ({children}) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
             <Route index element={
                 <RequireAuth>
                     <Landing />
                 </RequireAuth>} />
            <Route path="doctors">
              <Route index element={
                   <RequireAuth>
                       <Doctorlist />
                   </RequireAuth>
                   } /> 
                <Route path=":doctorId" element={
                     <RequireAuth>
                         <Singledr/>
                     </RequireAuth>} />
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
              <Route path=":userId" element={
                     <RequireAuth>
                         <Single/>
                     </RequireAuth>} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={
                 <RequireAuth>
                      <List />
                </RequireAuth>} />
              <Route path=":productId" element={
                    <RequireAuth>
                         <Single />
                    </RequireAuth>} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="radiologists">
              <Route index element={
                   <RequireAuth>
                       <Radiotable />
                   </RequireAuth>
                   } />
                  <Route path=":doctorId" element={
                     <RequireAuth>
                         <Singledr/>
                     </RequireAuth>} />
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
                  <Route path=":doctorId" element={
                     <RequireAuth>
                         <Singledr/>
                     </RequireAuth>} />
               <Route
                 path="new"
                 element={<Newnurse inputs={userInputs} title="Add New Nurse" />}
                 />
            </Route>
            <Route path="send-message">
              <Route index element={
                   <RequireAuth>
                       <Message />
                   </RequireAuth>
                   } />
            </Route>
            <Route path="doctor-home">
              <Route index element={
                   <RequireAuth>
                       <Drhome />
                   </RequireAuth>
                   } />
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
            <Route path="Landing">
              <Route index element={
                   <RequireAuth>
                       <LandingPage />
                   </RequireAuth>
                   } />
            </Route>
            <Route path="doctor-login">
              <Route index element={
                   <RequireAuth>
                       <Doctor />
                   </RequireAuth>
                   } />
            </Route>
            <Route path="nurse-login">
              <Route index element={
                   <RequireAuth>
                       <Nurse />
                   </RequireAuth>
                   } />
            </Route>
            <Route path="radiologist-login">
              <Route index element={
                   <RequireAuth>
                       <Radiologist />
                   </RequireAuth>
                   } />
            </Route>
            
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
