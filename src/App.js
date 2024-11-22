import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Simple Homepage</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about">
        <h2>About Us</h2>
        <p>We are a team dedicated to providing the best services to our clients. Our goal is to deliver high-quality solutions.</p>
      </section>

      <section id="services" className="services">
        <h2>Our Services</h2>
        <ul>
          <li>Web Development</li>
          <li>Mobile App Development</li>
          <li>SEO Optimization</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <p>Email: nurlan.shaidullaev@ucentralasia.org</p>
        <p>Phone: +996 777 97 05 55</p>
      </section>

      <footer>
        <p>© 2024 My Simple Homepage. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;