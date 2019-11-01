import React from 'react';
import ContentCardsSection from './../components/ContentCardsSection';
import ContentCard from './../components/ContentCard';
import Map from './../components/Map';
import { apartment } from '../apartment-example';

function ListingsPage(props) {
  return (
    <div className="columns">
      <div className="column is-half-desktop">
        <ContentCard apartment={apartment} />
        <ContentCardsSection
          color="white"
          size="medium"
          title="Featured Content"
          subtitle=""
        />
      </div>
      <div className="column is-half-desktop">
        <Map />
      </div>
    </div>
  );
}

export default ListingsPage;
