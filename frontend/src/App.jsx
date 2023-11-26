import {BrowserRouter, Route, Routes} from "react-router-dom";
import StudentList from "./pages/StudentList.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentUpdateForm from "./pages/StudentUpdateForm.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path='/' element={< StudentList/>} />
              <Route path='/addStudent' element={< StudentUpdateForm/>} />
              <Route path='/updateStudent' element={< StudentUpdateForm/>} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
