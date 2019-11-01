import React from 'react';
import ContentCardsSection from './../components/ContentCardsSection';
import Map from './../components/Map';

function ListingsPage(props) {
  return (
    <div className="columns">
      <div className="column is-half-desktop">
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
