import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import PostApi from './PostApi';
import ConditionalArr from './ConditionalArr';
import GetApi from './GetApi';
import NewHome from './NewHome';
import NewArray from './NewArray';

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
