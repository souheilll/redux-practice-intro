import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

function List() {
    const state = useSelector(state => state)
    console.log(state)
    return (
        <div>
            {state.map((el, index) => <Card key={index} el={el} />)}
        </div>
    )
}

export default List