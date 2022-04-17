import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Pages/AboutMe/AboutMe';
import Blog from './Pages/Blogs/Blog';
import CheckOut from './Pages/CheckOut/CheckOut';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NoFound from './Pages/Shared/NotFound/NoFound';
import Register from './Pages/SignUp/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='about' element={<AboutMe></AboutMe>}></Route>
          <Route path='blog' element={<Blog></Blog>} ></Route>
          <Route path='login' element={<Login></Login>}></Route>
          <Route path='register'element={<Register></Register>}></Route>
          <Route path='checkout'element={<RequireAuth>

            <CheckOut></CheckOut>
          </RequireAuth>}></Route>

          <Route path='*' element={<NoFound></NoFound>}></Route>
      </Routes>
      <Footer></Footer>
   </div>
  );
}

export default App;
