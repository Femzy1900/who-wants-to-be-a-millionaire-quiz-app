import React from "react"
import './Tuts.css'
import { useState } from "react"

export default function State() {

    const [count, setCount] = useState(0)

    function Increase() {
        setCount(prevCount => prevCount + 1)
    }
    function Decrease() {
        setCount(prevCount => prevCount - 1)
    }
    return (
        <div className="counter">
            <button onClick={Decrease} className="counterMinus">-</button>
            <div className="counterCount">
                <h1>{count}</h1>
            </div>
            <button onClick={Increase} className="counterPlus">+</button>
        </div>
    )
}