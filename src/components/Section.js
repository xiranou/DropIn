import React from 'react';
import BackgroundImage from './BackgroundImage';
import './Section.scss';

function Section(props) {
  const {
    color,
    size,
    backgroundImage,
    backgroundImageOpacity,
    classNames,
    children,
    // Passed to section element
    ...otherProps
  } = props;

  return (
    <section
      className={
        'SectionComponent hero section is-block is-relative' +
        (color ? ` is-${color}` : '') +
        (size ? ` is-${size}` : '') +
        classNames
      }
      {...otherProps}
    >
      {backgroundImage && (
        <BackgroundImage
          image={backgroundImage}
          opacity={backgroundImageOpacity}
        />
      )}

      {props.children}
    </section>
  );
}

export default Section;
