import React from 'react';
import LandingHeroSection from './../components/LandingHeroSection';
import FeaturesSection from './../components/FeaturesSection';
import FeaturedClasses from './../components/FeaturedClasses';
import { useRouter } from './../util/router.js';
import { useClassList } from '../util/requests';

function IndexPage() {
  const router = useRouter();
  const [classList] = useClassList();
  return (
    <>
      <LandingHeroSection
        color="primary is-outlined"
        size="large"
        title="Every class with one pass"
        subtitle="Learning on your own is hard — so don’t.  Drop into any class taught by people just like you who want to share their knowledge.  Try DropIn for free."
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
        items={classList.slice(0, 4)}
        color="white"
        size="medium"
        title="Top classes in your area"
        subtitle=""
      />
    </>
  );
}

export default IndexPage;
