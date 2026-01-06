import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";


export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}