
import Cart from '@/components/ui/Cart';
import Header from '@/components/ui/Header';
import LatestNews from '@/components/ui/LatestNews';
import Services from '@/components/ui/Services';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <LatestNews></LatestNews>
      <Cart></Cart>
    </div>
  );
};

export default HomePage;