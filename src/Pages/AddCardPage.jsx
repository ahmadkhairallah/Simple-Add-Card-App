// AddCardPage.jsx
import React, { useState } from 'react';
import './AddCardPage.scss';

function AddCardPage({ onAddCard }) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');
  const [button, setButton] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = {
      title,
      text,
      Description: description,
      button
    };
    onAddCard(newCard);
    setTitle('');
    setText('');
    setDescription('');
    setButton('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Text</label>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} required />
      </div>
      <div>
        <label>Description</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div>
        <label>Button</label>
        <input type="text" value={button} onChange={(e) => setButton(e.target.value)} required />
      </div>
      <button type="submit">Add Card</button>
    </form>
  );
}

export default AddCardPage;
