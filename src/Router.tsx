import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { DefaultLayout } from "./layout/DefaultLayout"

export function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />} >
        <Route  path="/login"  element={<Login />} />
      
        <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}
