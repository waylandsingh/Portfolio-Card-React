import React from "react"
import Info from "./components/Info.js"
import About from "./components/About.js"
import Interests from "./components/Interests.js"
import Footer from "./components/Footer.js"
import Headshot from "./components/Headshot.js"

// ripe for refactor into "headshot" and Info parts of the page

export default function App() {
    return (
        <div id="container">
            <Headshot />
            <div id="content">
                <Info />
                <About />
                <Interests />
            </div>
            <Footer />
            
        </div>
    )
}