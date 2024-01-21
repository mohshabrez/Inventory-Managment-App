import { Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import { Items } from './pages/Items';
import { Sales } from './pages/Sales';
import { Reports } from './pages/Reports';

function App() {
  return (
    <div className="App bg-gray-800 text-white min-h-screen">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Items/>}/>
        <Route path='/sales' element={<Sales/>}/>
        <Route path="/reports" element={<Reports/>}/>
      </Routes>
    </div>
  );
}

export default App;
