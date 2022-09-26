import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import PostApi from './PostApi';
import ConditionalArr from './ConditionalArr';
import GetApi from './GetApi';

function App() {
  return (
    <div className="App">
      <h2>This is the AppJs</h2>
      <Router>
        <Routes>
          <Route path='/postapi' element={<PostApi/>}></Route>
          <Route path='/array' element={<ConditionalArr/>}></Route>
          <Route path='/getapi' element={<GetApi/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
