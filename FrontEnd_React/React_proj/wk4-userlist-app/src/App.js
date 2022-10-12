import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import PostApi from './PostApi';
import ConditionalArr from './ConditionalArr';
import GetApi from './GetApi';
import NewHome from './NewHome';
import NewArray from './NewArray';
import Login from './Login';
import GetUser from './GetUser';
import Register from './Register';
import ListUser from './ListUser';

function App() {
  return (
    <div className="App">
      <h2>This is the AppJs</h2>
      <Router>
        <Routes>
          <Route path='/postapi' element={<PostApi />}></Route>
          <Route path='/array' element={<ConditionalArr />}></Route>
          <Route path='/getapi' element={<GetApi />}></Route>
          <Route path='/newhome' element={<NewHome />}></Route>
          <Route path='/newarray' element={<NewArray />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/getuser' element={<GetUser />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/listuser' element={<ListUser />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
