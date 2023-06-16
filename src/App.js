import React from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/LoginScreen/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./components/ProfileScreen/ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
   const unSubscribe = auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,
        }))
      }else{
        //Logged out
        dispatch(logout());
      }  
    });
    return unSubscribe;
  } , [dispatch])
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/profile" element = {<ProfileScreen />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
