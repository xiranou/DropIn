import React from 'react';
import Section from './Section';
import SectionHeader from './SectionHeader';
import Button from './Button';

function HeroSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
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

export default HeroSection;
