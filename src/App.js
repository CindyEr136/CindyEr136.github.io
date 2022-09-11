import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home.js';
import Sidebar from './components/Sidebar.js';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
