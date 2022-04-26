import React from 'react'
import HeroImage from "../assets/note-taking-home1.png";
import {Link} from "react-router-dom";
import "../css/main.css";

function HomePage() {
  return (
    <div className='homepage'>
        <main>
            <div className="big-wrapper">
                <header>
                    <div className="container">
                        <div className="logo">
                            <h3 ><Link to="/" className='brand-name'>Keeper</Link></h3>
                        </div>
                        <div className="links">
                            <ul>
                            <li><a href="https://github.com/RahulSingh9131" target="_blank">Github</a></li>
                            <li><a href="https://twitter.com/singhrahul3112" target="_blank">Twitter</a></li>
                            <li><a href="https://www.linkedin.com/in/rahul-singh-06b83917a/" target="_blank">LinkedIn</a></li>
                            <li><Link to="/login" className='btn'>LogIn</Link></li>
                            </ul>
                        </div>
                    </div>
                </header>
                <section className="showcase-area">
                    <div className="container">
                        <div className="left-side">
                            <div className="big-title">
                                <h1>Welcome to <span>keeper</span></h1>
                                <h1>Start exploring now</h1>
                            </div>
                            <p className="text">
                               Start writing your stuffs on keeper. Keeper app helps you keep track of your notes in an ordered manner. 
                            </p>
                            <div className="cta">
                                <Link to="/" className='btn'>Enter</Link>
                            </div>
                        </div>
                        <div className="right-side">
                            <img src={HeroImage} alt="hero-image" className="hero-image"/>
                        </div>
                    </div>
                </section>
                <footer className="bottom-area">
                    <div className="container">
                        <p>Designed and built with love. </p>
                        <small>© Rahul Singh</small>
                    </div>
                </footer>
            </div>
        </main>
    </div>
  )
}

export default HomePage