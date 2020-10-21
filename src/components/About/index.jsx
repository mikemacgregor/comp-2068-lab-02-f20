import React from 'react';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import Styles from './styles';

const Home = () => {
  return (
    <Styles.About>
      <Header title="My About Page"/>
      <div>
        <p>
          Fun fact: I am a CPA, CA
          <small>
            (because my wife keeps making me pay the annual dues)
          </small>
        </p>
      </div>
      <Footer/>
    </Styles.About>
  );
}
 
export default Home;