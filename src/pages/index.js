import React from 'react';
import LandingHeroSection from './../components/LandingHeroSection';
import FeaturesSection from './../components/FeaturesSection';
import FeaturedClasses from './../components/FeaturedClasses';
import { useRouter } from './../util/router.js';
import { classes } from './../example';

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
      <FeaturedClasses
        items={classes}
        color="white"
        size="medium"
        title="Here's what people are saying"
        subtitle=""
      />
    </>
  );
}

export default IndexPage;
