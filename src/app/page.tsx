import React from 'react';
import ProviderWrapper from '@/components/ProviderWrapper/ProviderWrapper';
import Comp1 from '@/components/Comp1/Comp1';
import Comp2 from '@/components/Comp2/Comp2';

function Home() {
  return (
    <div>
      <Comp1 />
      <Comp2 />
    </div>
  );
}

export default Home