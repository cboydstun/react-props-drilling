import React from 'react'

function SayHello(props){
    return <h1>Hello, {props.name}!</h1>;
}

export default function Greet() {
    return (
        <div>
            <SayHello name="Bruce" />
            <SayHello name="Tiffany" />
            <SayHello name="Jenny" />
        </div>
    )
}
