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


// import axios from 'axios'
// import { useState, useEffect } from 'react'

// const AxiosGet = () => {
//     const [gatito, setGatito] = useState()
//     const url = 'https://api.thecatapi.com/v1/images/search'

//     useEffect(() => {
//         axios(url).then((res) => setGatito(res.data))
//     }, [])
    
//     // console.log(gatito[0]?.url)
//   return (
//     <div>
//        {gatito &&  <img src={gatito[0]?.url} alt="" />}
//     </div>
//   )
// }

// export default AxiosGet