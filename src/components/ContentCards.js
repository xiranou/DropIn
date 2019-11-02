import React from 'react';
import CenteredColumns from './CenteredColumns';
import Slider from 'react-slick';
import './ContentCards.scss';
import { Link } from './../util/router.js';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const renderImages = images => {
  return images.map((url, index) => {
    return (
      <Link to="/listings/1" key={`apartment-image-${index}`}>
        <img src={url} alt={url} />
      </Link>
    );
  });
};

function ContentCards({ classes }) {
  return (
    <CenteredColumns>
      {classes.map((klass, index) => (
        <div className="column is-full" key={index}>
          <div className="ContentCards__card card is-flex">
            <div className="card-content">
              <div className="columns">
                <div className="column is-three-fifths">
                  <div className="content">
                    <h4>{klass.title}</h4>
                    <p>{klass.description}</p>
                    <span
                      className="has-text-weight-heavy"
                      style={{ marginRight: '10px' }}
                    >
                      ${klass.price}/hr
                    </span>
                    <span style={{ marginRight: '10px' }}>
                      {klass.bedrooms} Bedrooms
                    </span>
                    <span style={{ marginRight: '10px' }}>
                      {klass.bathrooms} Bathrooms
                    </span>
                    <span class="tag is-primary">
                      {klass.owner.skillset[0]}
                    </span>
                  </div>
                </div>
                <div className="column is-two-fifths">
                  <div className="card-image">
                    <Slider {...settings}>
                      {renderImages(klass.images)}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </CenteredColumns>
  );
}

export default ContentCards;
