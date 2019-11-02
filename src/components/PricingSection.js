import React from 'react';
import Section from './Section';
import SectionHeader from './SectionHeader';
import Pricing from './Pricing';
import './PricingSection.scss';

const items = [
  {
    id: '19',
    timespan: 'Month',
    price: '19',
    description: 'Includes 10 credits to book up to 3 classes'
  },
  {
    id: '49',
    timespan: 'Month',
    price: '49',
    description: 'Includes 27 credits to book up to 9 classes'
  },
  {
    id: '79',
    timespan: 'Month',
    price: '79',
    description: 'Includes 45 credits to book up to 15 classes'
  },
  {
    id: '159',
    timespan: 'Month',
    price: '159',
    description: 'Includes 100 credits to book up to 33 classes'
  },
  {
    id: '199',
    timespan: 'Month',
    price: '199',
    description: 'Includes 130 credits to book up to 43 classes'
  }
];

function PricingSection(props) {
  return (
    <Section color={props.color} size={props.size} id="pricing">
      <div className="PricingSection__container container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Pricing
          buttonText="Choose"
          onChoosePlan={planId => {
            // Add your own payments logic here
            alert(`You chose the plan "${planId}"`);
          }}
          items={items}
        />
      </div>
    </Section>
  );
}

export default PricingSection;
