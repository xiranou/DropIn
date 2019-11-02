import React from 'react';
import Section from './Section';
import SectionHeader from './SectionHeader';
import ContentCards from './ContentCards';

function ContentCardsSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <ContentCards apartments={props.apartments} />
      </div>
    </Section>
  );
}

export default ContentCardsSection;
