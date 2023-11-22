import React from 'react';
import Navbar from './Navbar';
const Home = () => {
  return (
    <div style={{ backgroundColor: 'blanchedalmond', height: '100vh' }}>
      <Navbar />
      <div className="game-container">
        <iframe src="https://i.simmer.io/@dk2706/democcg-v1" style={{ width: '960px', height: '600px' }}></iframe>
      </div>
    </div>
  );
};

export default Home;
