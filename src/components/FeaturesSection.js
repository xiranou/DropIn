import React from 'react';
import Section from './Section';
import Features from './Features';

function FeaturesSection(props) {
  return (
    <Section title="Checkout this out" color={props.color} size={props.size}>
      <div className="container">
        <Features
          items={[
            {
              title: 'Meditation & Mindfulness',
              subtitle: `Meditation and Mindfulness Balances the Body's Systems. Most people aren't raised to sit and say "Om." But meditation has gained millions of converts, helping them ease chronic pain, anxiety, stress, improve heart health, boost mood and immunity, and resolve pregnancy problems.`,
              iconClass: 'fas fa-spa',
              iconColor: 'warning'
            },
            {
              title: 'Hobbies and Creativity',
              subtitle: `Being creative helps you become a better problem solver in all areas of your life and work. Instead of coming from a linear, logical approach, your creative side can approach a situation from all angles. Creativity helps you see things differently and better deal with uncertainty.`,
              iconClass: 'fas fa-guitar',
              iconColor: 'danger'
            },
            {
              title: 'Learning a New Skill',
              subtitle: `On a physiological level, learning new things is good for your brain. According to CCSU Business & Development, practicing a new skill increases the density of your myelin, or the white matter in your brain that helps improve performance on a number of tasks.`,
              iconClass: 'fas fa-language',
              iconColor: 'primary'
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default FeaturesSection;
