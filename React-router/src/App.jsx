import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div id="container">
        <div id="navbar">{/* navigation here */}</div>
        <div id="main-section">
          <Routes>
          <Route path="/blue" element={<h1>Blue</h1>} />
          <Route path="/red" element={<h1>Red</h1>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;




