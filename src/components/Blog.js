import React from 'react'

export default function Blog(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}
