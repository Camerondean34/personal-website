import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from './pages/Home.jsx'
import Projects from "./pages/Projects.jsx";
import CatPhotos from "./pages/CatPhotos.jsx";

function App() {
  return (
    <Router basename="/">
      <NavBar/>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/cat-pics' element={<CatPhotos />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
