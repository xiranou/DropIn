import React from "react";
import HeroSection from "./../components/HeroSection";
import FeaturesSection from "./../components/FeaturesSection";
import { useRouter } from "./../util/router.js";

function IndexPage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        color="primary"
        size="large"
        title="Your landing page title here"
        subtitle="This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan."
        buttonText="Start Free Trial"
        buttonOnClick={() => {
          router.push("/pricing");
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
