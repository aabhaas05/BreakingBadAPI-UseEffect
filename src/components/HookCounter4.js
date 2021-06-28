import React, { useState } from 'react'

const HookCounter4 = () => {
    const [items, setItems] = useState([{ id: 0, value: Math.random() * 10 }])

    const addItem = () => {
        setItems([...items, { id: items.length, value: Math.random() * 10 }])
    }

    return (
        <>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {items.map(item => <li key={item.id}>{item.value}</li>)}
            </ul>
        </>
    )
}

export default HookCounter4
