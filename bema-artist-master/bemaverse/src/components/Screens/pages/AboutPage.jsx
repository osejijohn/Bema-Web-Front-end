import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>Welcome to the About page</h1>
      <Link to="/home">Go to Home page</Link>
    </div>
  );
};

export default About;
