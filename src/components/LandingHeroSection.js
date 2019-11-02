import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Button from "./Button";
import "./LandingHeroSection.scss";

function LandingHeroSection(props) {
  return (
    <Section
      class="hero is-success is-fullheight-with-navbar"
      color={props.color}
      size={props.size}
    >
      <video id="myVideo" autoPlay="true" muted="true" loop="true">
        <source src="/cooking-demo.mp4" type="video/mp4" />
      </video>
      <div className="container" style={{ margin: "200px auto 0" }}>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={1}
        />
        <div className="buttons is-centered">
          <Button
            parentColor={props.color}
            size="medium"
            onClick={props.buttonOnClick}
          >
            {props.buttonText}
          </Button>
        </div>
      </div>
    </Section>
  );
}

export default LandingHeroSection;
