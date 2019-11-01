import React from 'react';
import CenteredColumns from './CenteredColumns';
import Slider from 'react-slick';
import './ContentCards.scss';
import { Link, useRouter } from './../util/router.js';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const renderImages = images => {
  return images.map(url => {
    return (
      <Link to="/listings/1">
        <img src={url} alt={url} />
      </Link>
    );
  });
};

function ContentCards({ apartments }) {
  return (
    <CenteredColumns>
      {apartments.map((apartment, index) => (
        <div
          className="column is-half-tablet is-one-quarter-desktop"
          key={index}
        >
          <a className="ContentCards__card card is-flex" href={apartment.url}>
            <div className="card-image">
              <Slider {...settings}>{renderImages(apartment.images)}</Slider>
            </div>
            <div className="card-content">
              <div className="content">
                <h4>{apartment.title}</h4>
                <p>{apartment.description}</p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </CenteredColumns>
  );
}

export default ContentCards;
