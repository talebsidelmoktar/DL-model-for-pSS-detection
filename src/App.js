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
                     <Home />
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
                 element={<Newdoc inputs={userInputs} title="Add New User" />}
              />
            </Route>       
            <Route path="users">
              <Route index element={
                   <RequireAuth>
                       <List />
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
            
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
