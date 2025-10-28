import React from 'react'
import logo from "../assets/investment-calculator-logo.png"

const Header = () => {
    return (
        <header id='header'>
            <img src={logo}/>
            <h1> Invesment caculator</h1>
        </header>
    )
}

export default Header