import React from 'react';
import ContentCard from './ContentCard';
import Section from './Section';
import './Features.scss';

function FeaturedClasses(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <div className="columns">
          {props.items.map((item, index) => (
            <ContentCard classDetail={item} />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default FeaturedClasses;
