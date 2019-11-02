import React from 'react';
import CenteredColumns from './CenteredColumns';
import Slider from 'react-slick';
import './ContentCards.scss';
import { Link } from '../util/router.js';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const renderImages = (images, id) => {
  return images.map(url => {
    return (
      <Link to={`/classes/${id}`} key={`class-image-${id}`}>
        <img src={url} alt={url} />
      </Link>
    );
  });
};

function ContentCard({ classDetail }) {
  return (
    <div style={{ position: 'absolute' }}>
      <div data-test="mookie">
        <div className="card is-flex">
          <div className="card-image">
            <Slider {...settings}>
              {renderImages(classDetail.images, classDetail.id)}
            </Slider>
          </div>
          <div className="card-content">
            <div className="content">
              <span class="tag is-primary">
                {classDetail.owner.skillset[0]}
              </span>
              <h4>{classDetail.title}</h4>
              <p>{classDetail.description}</p>
              <span
                className="has-text-weight-heavy"
                style={{ marginRight: '10px' }}
              >
                ${classDetail.price}/hr
              </span>
              <span style={{ marginRight: '10px' }}>
                {classDetail.bedrooms} Bedrooms
              </span>
              <span style={{ marginRight: '10px' }}>
                {classDetail.bathrooms} Bathrooms
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentCard;
