
import './App.css';
import { FormContact } from './components/FormContact';
import {Home} from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<FormContact />} />
      <Route path="/welcome" element={<Home/>} />
    </Routes>
  </Router>
  );
}

export default App;
