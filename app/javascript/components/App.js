import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

class App extends React.Component {
    render (){
        return(
            <div>
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/rr/about" element={ <About /> } />
                    <Route path="/rr/contact" element={ <Contact /> } />
                </Routes>
            </div>
        )
    }
}

export default App