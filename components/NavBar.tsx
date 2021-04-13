import React, {useState} from "react"
import favicon from "../assets/icons/favicon.png"
import logo from "../assets/icons/logo.png"
import logoHover from "../assets/icons/logo-hover.png"
import "../styles/navbar.less"

const NavBar: React.FunctionComponent = (props) => {
    let [logoHoverOn, setLogoHover] = useState(false)

    return (
        <>
        <nav className="navbar">
            <img src={favicon} className="nav-icon" width="106" height="87"/>
            <img src={logoHoverOn ? logoHover : logo} className="nav-logo" width="223" height="73"
            onClick={() => window.location.href = "/"} onMouseEnter={() => setLogoHover(true)} onMouseLeave={() => setLogoHover(false)}/>
        </nav>
        </>
    )
}

export default NavBar