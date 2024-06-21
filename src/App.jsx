// App.jsx
import './App.css';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import AddCardPage from './Pages/AddCardPage'; 
import Login from './Pages/Login';

function App() {
  const [nameList, setNameList] = useState([
    {
      title: "Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      Description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Delete",
    },
    {
      title: "Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      Description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Delete",
    },
    {
      title: "Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      Description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Delete",
    },
  ]);

  const handleDelete = (index) => {
    setNameList(nameList.filter((_, i) => i !== index));
  };

  const addCard = (newCard) => {
    setNameList([...nameList, newCard]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Card nameList={nameList} onDelete={handleDelete} />} />
          <Route path="/add-card" element={<AddCardPage onAddCard={addCard} />} />
          <Route path="/" element={<RedirectToLogin />} />
        </Routes>
      </div>
    </Router>
  );
}

function RedirectToLogin() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/login');
  }, [navigate]);

  return null;
}

export default App;
