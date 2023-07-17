import React from "react"
import '../style.css'
import Logo from "./TrollFace.png"

function Navbar() {
    return (
        <nav>
            <div className="left">
                <img src={Logo} alt="Logo"/>
                <h3>MemeGenerator</h3>
            </div>
            <div className="right">
                <h4>React-Project</h4>
            </div>
        </nav>
    )
}
export default Navbar;