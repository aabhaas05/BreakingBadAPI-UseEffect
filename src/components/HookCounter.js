import React, { useState } from 'react'

const HookCounter = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    return (
        <>
            <button onClick={() => setCount(count + 1)}>Hook count - {count}</button>
        </>
    )
}

export default HookCounter
