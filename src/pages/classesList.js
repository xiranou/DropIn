import React, { Component } from "react";
import ContentCardsSection from "../components/ContentCardsSection";
import Map from "../components/Map";
import { classes } from "../example";

const filtersList = [
  "Classical",
  "Sports",
  "Singing",
  "Dancing",
  "Cooking",
  "Designer",
  "Photo Shoots"
];

const ClassesPage = () => {
  const [activeFilters, setActiveFilters] = React.useState([]);
  const [focusedClassId, setFocusedClassId] = React.useState(null);

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
    if (activeFilters.length === 0) return classes;
    return classes.filter(apt => activeFilters.includes(apt.owner.skillset[0]));
  };

  const isActiveClass = filter =>
    activeFilters.includes(filter) ? "is-info" : "is-light";

  return (
    <div className="columns">
      <div className="column is-half-desktop">
        {filtersList.map((filter, index) => (
          <span
            key={`filter-${index}`}
            onClick={() => onClickFilter(filter)}
            className={`tag ${isActiveClass(filter)}`}
          >
            {filter}
          </span>
        ))}
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
