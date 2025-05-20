import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NavBar from "./components/NavBar.jsx";
import Home from './pages/Home.jsx'
import Projects from "./pages/Projects.jsx";
import CatPhotos from "./pages/CatPhotos.jsx";
import Error404 from "./pages/Error404.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: '#A6D6D6',
      dark: '#83C6C6',
      contrastText: '#000',

    },
    secondary: {
      main: '#F4F8D3',
      dark: '#E9F1A7',
      contrastText: '#fff',
    },
    background: {
      default: '#F7CFD8',
      dark: '#F0A3B4',
    },
  },
});

const pages = [
  { title: 'Home', path: "/home", element: <Home /> },
  { title: 'Projects', path: "/projects", element: <Projects /> },
  { title: 'Cat Photos', path: "/cat-pics", element: <CatPhotos /> },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar pages={pages} />
        <Routes>
          <Route index element={<Navigate to={pages.at(0).path} replace />} />

          {pages.map((page) => (
            <Route key={page.title} path={page.path} element={page.element} />
          ))}
          {/* Catch-all route for 404 page */}
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
