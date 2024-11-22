import React from 'react';
import ProfileCard from './components/ProfileCard';
import BlogCard from './components/BlogCard';
import RegistrationForm from './components/RegistrationForm';
import './App.css';
import johnImage from './media/image.png';
import smith from './media/image2.png';
import react from './media/react.png';
import css from './media/css.png';

function App() {
  return (
    <div className="App">
      <h1>Component Examples</h1>
      
      <section>
        <h2>Profile Cards</h2>
        <div className="cards-container">
          <ProfileCard
            name="John Doe"
            imageUrl={johnImage}
            description="Frontend Developer with 5 years of experience"
            role="Senior Developer"
          />
          <ProfileCard
            name="Jane Smith"
            imageUrl={smith}
            description="UX Designer passionate about user experience"
            role="Lead Designer"
          />
        </div>
      </section>

      <section>
        <h2>Blog Posts</h2>
        <div className="cards-container">
          <BlogCard
            title="Getting Started with React"
            description="Learn the basics of React and start building web applications..."
            imageUrl={react}
            date="March 15, 2024"
            author="John Doe"
            url="https://medium.com/@ajayss/react-js-complete-beginners-guide-e90cc09f23d2"
          />
          <BlogCard
            title="Modern CSS Techniques"
            description="Explore modern CSS features and how to use them effectively..."
            imageUrl={css}
            date="March 14, 2024"
            author="Jane Smith"
            url="https://medium.com/@joaopaulocmarra/css-tutorial-for-beginners-advanced-css-techniques-bba9859e119"
          />
        </div>
      </section>

      <section>
        <h2>Registration</h2>
        <RegistrationForm />
      </section>
    </div>
  );
}

export default App;