import {BrowserRouter, Route, Routes} from "react-router-dom";
import StudentList from "./pages/StudentList.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentForm from "./pages/StudentForm.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path='/' element={< StudentList/>} />
              <Route path='/addStudent' element={< StudentForm/>} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
