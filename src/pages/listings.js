import React, { Component } from 'react';
import ContentCardsSection from './../components/ContentCardsSection';
import Map from './../components/Map';
import { apartments } from '../apartment-example';

const filtersList = [
  'Classical',
  'Sports',
  'Singing',
  'Dancing',
  'Cooking',
  'Designer',
  'Photo Shoots'
];

class ListingsPage extends Component {
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

  filteredApartments = () => {
    const { activeFilters } = this.state;
    if (activeFilters.length === 0) return apartments;
    return apartments.filter(apt =>
      activeFilters.includes(apt.owner.skillset[0])
    );
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
            apartments={this.filteredApartments()}
          />
        </div>
        <div className="column is-half-desktop">
          <Map apartments={this.filteredApartments()} />
        </div>
      </div>
    );
  }
}

export default ListingsPage;
