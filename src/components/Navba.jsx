/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useRef } from 'react'
import './Navbar.css'
const Navba = () => {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>
                <a href="https://github.com/benetesla">My Portfolio</a>
            </h3>
			<nav ref={navRef}>
				<a href="/#"><i className="fas fa-home"></i> Home</a>
				<a href="/#"> <i className="fas fa-user"></i> About me</a>
				<a href="/#"> <i className="fas fa-envelope"></i> Contact</a>
				<a href="/#"> <i className="fas fa-briefcase"></i> Portfolio</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<i className="fas fa-times"></i>
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<i className="fas fa-bars"></i>
			</button>
		</header>
	);
}

export default Navba