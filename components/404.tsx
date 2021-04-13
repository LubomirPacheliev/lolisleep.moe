import React, {useEffect} from "react"
import img404 from "../assets/images/404.png"
import NavBar from "./NavBar"
import Footer from "./Footer"
import "../styles/404.less"

const $404: React.FunctionComponent = (props) => {
    useEffect(() => {
        document.title = "404"
    }, [])

    return (
        <>
        <NavBar/>
        <section className="section-404">
                <h1 className="text-404"><span>404 Error</span></h1>
                <img className="img-404" src={img404} alt="404" width="479" height="362"/>
        </section>
        <Footer/>
        </>
    )
}

export default $404