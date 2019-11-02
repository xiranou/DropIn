import React from 'react';
import Section from './Section';
import SectionHeader from './SectionHeader';
import Button from './Button';

function CtaSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <div className="columns is-vcentered has-text-centered-mobile is-centered is-variable is-8">
          <div className="column is-narrow">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={3}
            />
          </div>
          <div className="column is-narrow">
            <Button
              parentColor={props.color}
              size="medium"
              onClick={props.buttonOnClick}
            >
              {props.buttonText}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default CtaSection;
