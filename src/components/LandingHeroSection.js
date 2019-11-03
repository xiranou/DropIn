import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Button from "./Button";
import "./LandingHeroSection.scss";

function LandingHeroSection(props) {
  return (
    <Section
      class="hero is-fullheight-with-navbar"
      color={props.color}
      size={props.size}
    >
      <video id="myVideo" autoPlay="true" muted="true" loop="true">
        <source src="/cooking-demo.mp4" type="video/mp4" />
      </video>
      <div
        data-test="mookie"
        style={{
          minWidth: "100%",
          position: "absolute",
          top: "84px",
          display: "block",
          height: "100%",
          color: "black",
          backgroundColor: "#00000026"
        }}
      ></div>
      <div
        className="container is-info"
        style={{ margin: "250px auto 0", paddingBottom: "20px" }}
      >
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={1}
        />
        <div className="buttons is-centered is-info">
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
