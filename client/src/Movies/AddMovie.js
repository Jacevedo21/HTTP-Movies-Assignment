import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import e from 'express'


const newForm = {
    id: new Date(),
    title: '',
    director: '',
    metascore: null,
    stars: []
}

export default function AddMovie() {
    const [newMovie, setNewMovie] = useState(newForm)
    const history = useHistory()

    const handleAdd = e => {
        e.preventDefault()
        axios
        .post("http://localhost:5000/api/movies", newMovie)
        .then((res) => {
            setNewMovie(res)
            history.push('/')
        })
    }

    const handleChange = () => {
        setNewMovie({...newMovie, [e.target.name]: e.target.value})
    }


    return (
        <div>
            <h2>Add A Movie</h2>
            <form onSubmit={handleAdd}>
            <input 
                type='text'
                name='title'
                onChange={handleChange}
                placeholder='Title'
                value={newMovie.title}
                />

                <input 
                type='text'
                name='director'
                onChange={handleChange}
                placeholder='Director'
                value={newMovie.director}
                />

                <input 
                type='number'
                name='metascore'
                onChange={handleChange}
                placeholder='Metascore'
                value={newMovie.metascore}
                />

                <input 
                type='text'
                name='stars'
                onChange={handleChange}
                placeholder='Actors'
                value={newMovie.stars}
                />
                <button>Add Movie</button>
            </form>
        </div>
    )
}
