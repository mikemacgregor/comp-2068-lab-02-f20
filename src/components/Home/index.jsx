import React from 'react';
import Header from '../shared/Header';
import Button from '../shared/Button';
import Footer from '../shared/Footer';

const Home = () => {

  return (
    <>
      <Header title="My Home Page"/>
        <Button to="/About" text="Click For My Fun Fact"/>
      <Footer/>
    </>
  );
}

export default Home;