import React from 'react';
import Section from './Section';
import './PricingSection.scss';

function ProfileSection(props) {
  return (
    <Section color={props.color} size={props.size} id="">
      <div className="ProfileSection__container container">
        {props.children}
      </div>
    </Section>
  );
}

export default ProfileSection;
