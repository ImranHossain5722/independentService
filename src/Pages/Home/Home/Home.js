import React from 'react';
import Banner from '../Banner/Banner';
import BottomSection from '../BottomSection/BottomSection';
import Services from '../Services/Services';

const Home = () => {
    return (
      <div>
          <Banner></Banner>
          <Services></Services>
          <BottomSection></BottomSection>
      </div>
    );
};

export default Home;