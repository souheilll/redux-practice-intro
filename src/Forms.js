import React, { useState } from 'react'
import { AddUser } from './Redux/action'
import { useDispatch } from 'react-redux'

function Forms() {
    const [user, setUser] = useState('')
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setUser(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(AddUser(user))
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange} />
            <button>submit</button>
        </form>
    )
}

export default Forms