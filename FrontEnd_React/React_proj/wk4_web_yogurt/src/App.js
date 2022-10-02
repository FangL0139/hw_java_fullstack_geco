import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import Product from './Product';
import SinglePost from './SinglePost';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/singlepost' element={<SinglePost />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          {/* <Route path='/newhome' element={<NewHome />}></Route>
          <Route path='/newarray' element={<NewArray />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
