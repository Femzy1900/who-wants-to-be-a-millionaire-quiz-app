import React from 'react'
import { useState } from 'react'
import "./Tuts.css"

function App() {

    const [things, setThings] = useState(["Thing 1", "Thing 2"])

    const thingElements = things.map(things => <p key={things}>{things}</p>)

    function addItem() {
        const newThing = `Thing ${things.length + 1}`
        setThings(prevState => [...prevState, newThing])
    }

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingElements}
        </div>
    )
}

export default App;