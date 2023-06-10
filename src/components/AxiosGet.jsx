import axios from 'axios'
import React, { useState, useEffect } from 'react'
import '../App.css';

const AxiosGet = () => {

    const [comentarios, setComentarios] = useState([])
    const URL = 'https://jsonplaceholder.typicode.com/comments'

    useEffect(() => {
        axios.get(URL)
            .then(res => setComentarios(res.data))
            .catch(error => console.error('Error fetching comments:', error))
    }, [])

    return (
        <div>
            <h1>Comentarios</h1>
            <ul>
                {comentarios && comentarios.map(comentario => (
                    <ul key={comentario.id}>
                        <strong>{comentario.name}</strong> - {comentario.email}
                        <p>{comentario.body}</p>
                    </ul>
                ))}
            </ul>
        </div>
    )
}

export default AxiosGet

