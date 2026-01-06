import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./hooks/use-theme";
import Home from "./pages/home/page";
import AppLayout from "./pages/layout";


export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ThemeProvider>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </AppLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}