import axios from 'axios';
import React, { useState } from 'react';
import '../App.css'

const AxiosPost = () => {
  const [postId, setPostId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newComment = { postId, name, email, body };

    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/comments',
        newComment
      );
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error al enviar el comentario:', error);
    }
  };

  return (
    <div>
      <h1>Agregar Comentario</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="postId">Post ID:</label>
          <input
            type="number"
            id="postId"
            value={postId}
            onChange={(e) => setPostId(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="body">Cuerpo:</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default AxiosPost;
