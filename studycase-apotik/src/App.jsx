import { BrowserRouter as Router, Routes, Route, Navigate, Outlet} from "react-router-dom";
import { Dashboard, Auth, Form } from "@/layouts";
import { SignIn, SignUp } from "@/pages/auth";
// import DaftarObat from "./pages/dashboard/daftarObat";

function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/form/*" element={<Form />}/>
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
      <Route path="/auth/sign-in" element={<SignIn />} />
      {/* <Route path="/form/produk" element={<Produk />} />
      <Route path="/form/category" element={<Category />} />
      <Route path="/form/formTransaksi" element={<FormTransaksi />} />
      <Route path="/form/user" element={<User />} /> */}
    </Routes>
  );
}

export default App;
