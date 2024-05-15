import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a skilled developer passionate about creating amazing web experiences.</p>
        <Link to="/projects" className="cta-button">View Projects</Link>
      </div>
      <div className="about">
        <h2>About Me</h2>
        <p>I am a 4th year Computer Science Major at CSUFI.</p>
      </div>
    </section>
  );
};

export default Home;