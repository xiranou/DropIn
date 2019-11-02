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
        title="Your landing page title here"
        subtitle="This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan."
        buttonText="Start Free Trial"
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
