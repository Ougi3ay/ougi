import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./hooks/use-theme";
import { DataProvider } from "./hooks/use-data";
import RootLayout from "./pages/layout";
import Home from "./pages/home/page";



export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ThemeProvider defaultTheme="dark">
        <DataProvider>
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </DataProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}