import React from 'react'

const Navba = () => {
    return (
        <header>
            <h1>
                Login <i className="fas fa-sign-in-alt"></i>
            </h1>
            <nav>
                <a href="#"> <i className="fas fa-home"></i> Home</a>
                <a href="#"> <i className="fas fa-user"></i> About</a>
                <a href="#"> <i className="fas fa-envelope"></i> Contact</a>
                <a href="#"> <i className="fas fa-question"></i> Help</a>
            </nav>
        </header>
    )
}

export default Navba