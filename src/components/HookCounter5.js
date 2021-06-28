import React, { useState, useEffect }from 'react'

const HookCounter5 = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    useEffect(() => {
        console.log('useffect - Updating document title');
        document.title = `Clicked ${count} times`
    },[count])

    return (
        <>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count+1)}>Click {count} times</button>
        </>
    )
}

export default HookCounter5
