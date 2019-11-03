import React from "react";
import LandingHeroSection from "./../components/LandingHeroSection";
import FeaturesSection from "./../components/FeaturesSection";
import FeaturedClasses from "./../components/FeaturedClasses";
import { useRouter } from "./../util/router.js";
import { useClassList } from "../util/requests";

function IndexPage() {
  const router = useRouter();
  const [classList] = useClassList();
  return (
    <>
      <LandingHeroSection
        color="primary"
        size="large"
        title="Every class with one pass"
        subtitle="Committing is hard — so don’t. Work out at any gym, try any workout and do it all with one app. Try ClassPass for free."
        buttonText="Try for free"
        buttonOnClick={() => {
          router.push("/classes");
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
