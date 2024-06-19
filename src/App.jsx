// App.jsx
import './App.css';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddCardPage from './Pages/AddCardPage'; 

function App() {
  const [nameList, setNameList] = useState([
    {
      title: "Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      Description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Go somewhere",
    },
    {
      title: "Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      Description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Go somewhere",
    },
    {
      title: "Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      Description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Go somewhere",
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
        <Navbar handleAdd={addCard} />
        <Routes>
          <Route path="/" element={<Card nameList={nameList} onDelete={handleDelete} />} />
          <Route path="/add-card" element={<AddCardPage onAddCard={addCard} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;