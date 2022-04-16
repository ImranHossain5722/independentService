import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Pages/AboutMe/AboutMe';
import Blog from './Pages/Blogs/Blog';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NoFound from './Pages/Shared/NotFound/NoFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='about' element={<AboutMe></AboutMe>}></Route>
          <Route path='blog' element={<Blog></Blog>} ></Route>
          <Route path='login' element={<Login></Login>}></Route>

          <Route path='*' element={<NoFound></NoFound>}></Route>
      </Routes>
      <Footer></Footer>
   </div>
  );
}

export default App;
