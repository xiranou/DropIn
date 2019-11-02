import React, { Component } from 'react';
import ContentCardsSection from '../components/ContentCardsSection';
import Map from '../components/Map';
import { classes } from '../example';

const filtersList = [
  'Classical',
  'Sports',
  'Singing',
  'Dancing',
  'Cooking',
  'Designer',
  'Photo Shoots'
];

class ClassesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilters: []
    };
  }

  onClickFilter = filter => {
    let activeFilters = [...this.state.activeFilters]; // make a separate copy of the array
    const index = activeFilters.indexOf(filter);
    if (index !== -1) {
      activeFilters.splice(index, 1);
      this.setState({ activeFilters });
    } else {
      activeFilters.push(filter);
      this.setState({ activeFilters });
    }
  };

  filteredClasses = () => {
    const { activeFilters } = this.state;
    if (activeFilters.length === 0) return classes;
    return classes.filter(apt => activeFilters.includes(apt.owner.skillset[0]));
  };

  render() {
    const isActiveClass = filter =>
      this.state.activeFilters.includes(filter) ? 'is-info' : 'is-light';

    return (
      <div className="columns">
        <div className="column is-half-desktop">
          {filtersList.map((filter, index) => (
            <span
              key={`filter-${index}`}
              onClick={() => this.onClickFilter(filter)}
              class={`tag ${isActiveClass(filter)}`}
            >
              {filter}
            </span>
          ))}
          <ContentCardsSection
            color="white"
            size="medium"
            classes={this.filteredClasses()}
          />
        </div>
        <div className="column is-half-desktop">
          <Map classes={this.filteredClasses()} />
        </div>
      </div>
    );
  }
}

export default ClassesPage;
