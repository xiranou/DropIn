import React from 'react';
import ContentCardsSection from '../components/ContentCardsSection';
import Section from '../components/Section';
import Map from '../components/Map';
import { tags } from '../util/tags';
import { useClassList } from '../util/requests';
import * as R from 'ramda';

const ClassesPage = () => {
  const [activeFilters, setActiveFilters] = React.useState([]);
  const [focusedClassId, setFocusedClassId] = React.useState(null);
  const [classList] = useClassList();

  const onClickFilter = filter => {
    const newFilters = [...activeFilters];
    const index = newFilters.indexOf(filter);
    if (index !== -1) {
      newFilters.splice(index, 1);
      setActiveFilters(newFilters);
    } else {
      newFilters.push(filter);
      setActiveFilters(newFilters);
    }
  };

  const filteredClasses = () => {
    if (activeFilters.length === 0) return classList;
    return classList.filter(apt =>
      R.any(R.flip(R.contains)(activeFilters))(apt.owner.skillset)
    );
  };

  const isActiveClass = filter =>
    activeFilters.includes(filter) ? 'is-info' : 'is-light';

  return (
    <div className="columns">
      <div className="column is-half-desktop">
        <Section style={{ paddingBottom: '0' }}>
          {tags.map((filter, index) => (
            <span
              key={`filter-${index}`}
              onClick={() => onClickFilter(filter)}
              className={`tag tagHover ${isActiveClass(filter)}`}
            >
              {filter}
            </span>
          ))}
        </Section>
        <ContentCardsSection
          color="white"
          size="medium"
          classes={filteredClasses()}
          focusedClassId={focusedClassId}
        />
      </div>
      <div className="column is-half-desktop">
        <Map classes={filteredClasses()} onHover={setFocusedClassId} />
      </div>
    </div>
  );
};

export default ClassesPage;
