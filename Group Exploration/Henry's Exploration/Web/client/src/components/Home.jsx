import React from 'react';
import Navbar from './Navbar';
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="game-container">
        <iframe src="https://i.simmer.io/@Prelude14/colourbreakvpeertest-2 " style={{ width: '960px', height: '600px' }}></iframe>
      </div>
    </>
  );
};

export default Home;
