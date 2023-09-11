import './App.css';
import { Routes, Route } from 'react-router-dom';
import Animals from './pages/Animals';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/animals" element={<Animals />}></Route>
      </Routes>
    </div>
  );
}

export default App;

