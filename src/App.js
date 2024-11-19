import React, { useState } from 'react';
const App = () => {
    const [count, setCount] = useState('');
    return <>
        <h1>Counter Application</h1>
        <input placeholder='Enter number' value={count} onChange={(e) => setCount(e.target.value)}/>
        <br/>
        <br/>
        <button onClick={() => setCount((prev) => Number(prev) + 1)}>Increment</button>
        <button onClick={() => setCount((prev) => Number(prev) - 1)}>Decrement</button>
        <button onClick={() => setCount('')}>Clear</button>
    </>
}

export default App;