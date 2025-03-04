import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login";
import AllForms from "./pages/AllForms";
import DetailedResponse from "./pages/DetailedResponse";
import EditForm from "./pages/EditForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/all-forms" element={<AllForms />} />
      <Route path="/all-forms/:id" element={<DetailedResponse />} />
      <Route path="/all-forms/edit/:id" element={<EditForm />} />
      <Route path="/add-forms/" element={<DetailedResponse />} />
    </Routes>
  );
}

export default App;
