
import React from 'react'

export default function Navbar() {
    return (
        <nav className='container'>
            <div className="logo">
                <img src="../../../public/images/brand_logo.png" alt="brandlogo" />
            </div>
            <ul>
                <li href='#'>MENU</li>
                <li href='#'>LOCATION</li>
                <li href='#'>ABOUT</li>
                <li href='#'>CONTACT</li>
            </ul>

            <button>Login</button>
       
        </nav>
    )
}
