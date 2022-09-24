import { Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { DefaultLayout } from "./layout/DefaultLayout"
import { User } from "./pages/user";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./service/firebase";
import { useEffect } from "react";

export function Router() {

  const navigate = useNavigate()

  const isUserConected = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/user')
      } else {
        navigate('/login')
      }
    });
  }
  useEffect(() => {
    isUserConected()
}, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />} >
        <Route  path="/login"  element={<Login />} />
      
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />
        </Route>
      </Routes>
    </>
  );
}
