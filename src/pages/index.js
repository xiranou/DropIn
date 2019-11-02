import React from 'react';
import LandingHeroSection from './../components/LandingHeroSection';
import FeaturesSection from './../components/FeaturesSection';
import { useRouter } from './../util/router.js';

function IndexPage(props) {
  const router = useRouter();

  return (
    <>
      <LandingHeroSection
        color="primary"
        size="large"
        title="Every class with one pass"
        subtitle="Committing is hard — so don’t. Work out at any gym, try any workout and do it all with one app. Try ClassPass for free."
        buttonText="Try for free"
        buttonOnClick={() => {
          router.push('/classes');
        }}
      />
      <FeaturesSection
        color="white"
        size="medium"
        title="Here's what people are saying"
        subtitle=""
      />
    </>
  );
}

export default IndexPage;
