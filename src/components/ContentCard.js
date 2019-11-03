import React from 'react';
import dayjs from 'dayjs';

import './ContentCards.scss';
import { Link } from './../util/router.js';

function ContentCard({ classDetail }) {
  return (
    <div className="column">
      <div class="card">
        <div class="card-image">
          <Link
            to={`/classes/${classDetail.id}`}
            key={`class-image-${classDetail.id}`}
          >
            <img src={classDetail.images[0]} alt={classDetail.images[0]} />
          </Link>
        </div>
        <div className="card-content">
          <span class="tag is-info ">{classDetail.owner.skillset[0]}</span>
          <span class="tag is-light is-pulled-right">8</span>
          <span class="tag is-info is-light is-pulled-right">
            7:30PM
            {/* {dayjs(classDetail.classDates[0].start).format('H:mm')} */}
          </span>

          <h4 className="has-text-weight-semibold	is-family-primary">
            {classDetail.title}
          </h4>
          <p
            className="is-family-seconday"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: '3',
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              margin: '0.5rem 0'
            }}
          >
            {classDetail.description}
          </p>
          <span
            className="is-italic has-text-weight-light"
            style={{ marginRight: '10px' }}
          >
            Ratings: {classDetail.ratings[0].score}/5
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContentCard;
