import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'


const intialForm = {
    id: new Date(),
    title: '',
    director: '',
    metascore: 0,
    stars: [],
}

const UpdateMovie = () => {
    const { id } = useParams();
    const history = useHistory()
    const [form, setForm] = useState(intialForm)

    const handleSubmit = (e) => {
        console.log('is it changing', form.stars)
        e.preventDefault();
        axios
        .put(`http://localhost:5000/api/movies/${id}`, form)
        .then((res) => {
            console.log(res)
            setForm(res)
            console.log('is it changing', form.stars)
            history.push("/")

        })
        .catch((err) => console.log(err.message))
    }

    
    const handleChange = e => {
        // if(Array.isArray(e.target.name)) {
        //     setForm({...form, [e.target.name]: [...e.target.name, e.target.value]})
        // } else {
        //     setForm({...form, [e.target.name]: e.target.value})
        // }
        setForm({...form, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <h2>Update Movie</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type='text'
                name='title'
                onChange={handleChange}
                placeholder='Title'
                value={form.title}
                />

                <input 
                type='text'
                name='director'
                onChange={handleChange}
                placeholder='Director'
                value={form.director}
                />

                <input 
                type='number'
                name='metascore'
                onChange={handleChange}
                placeholder='Metascore'
                value={form.metascore}
                />

                <input 
                type='text'
                name='stars'
                onChange={handleChange}
                placeholder='Actors'
                value={form.stars}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default UpdateMovie
