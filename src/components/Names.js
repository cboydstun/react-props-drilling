import React, {useState} from 'react'

import NameList from './NameList'

export default function Names() {
    const [data, setData] = useState([
    {
     name:'Tommy',
     age: 26,
    },
    {
     name:'Susan',
     age: 23,
    }
    ])


    return (
        <div>
            <NameList data={data} />
        </div>
    )
}
