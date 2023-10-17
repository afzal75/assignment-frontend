
import AddServiceCart from '@/components/ui/Cart';
import Header from '@/components/ui/Header';
import LatestNews from '@/components/ui/LatestNews';
import Services from '@/components/ui/Services';
import Upcoming from '@/components/ui/Upcoming';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <LatestNews></LatestNews>
      <AddServiceCart></AddServiceCart>
      <Upcoming></Upcoming>
    </div>
  );
};

export default HomePage;