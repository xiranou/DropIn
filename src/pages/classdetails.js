import React from 'react';
import Divider from '../components/Divider';
import Button from '../components/Button';
import Map from '../components/Map';

import { useParams } from '../util/router.js';
import { classes } from '../example';

function ClassDetailsPage(props) {
  const { id } = useParams();
  const classDetails = classes[id];
  return (
    <div className="SectionComponent section container">
      <div className="columns">
        <div className="column is-three-quarters">
          <section>
            <img
              className="hero full-width"
              style={{ width: '100%' }}
              src={classDetails.images[0]}
              alt="class-detail.hero"
            />
          </section>

          <div className="card">
            <section>
              <h1 className="title">{classDetails.title}</h1>
              <Button>Book Now</Button>
              <p>Class taught by:</p>
              <figure className="image is-128x128 is-rounded">
                <img
                  className="image is-128x128 is-rounded"
                  src={classDetails.owner.image}
                  alt="class-detail.owner"
                />
              </figure>
            </section>
          </div>

          <div className="card">
            <section>
              <div>Saturday, Nov 2</div>
              <div>8:30am - 9:30am</div>
              <div>{classDetails.owner.name}</div>
              <i class="far fa-calendar-plus"></i>
            </section>
          </div>

          <div className="card">
            <section>
              <div>{classDetails.owner.name}</div>
              <div>{classDetails.owner.name}</div>
            </section>
          </div>

          <div className="card">
            <section>
              <h1 className="title">Reviews</h1>
              <div>
                {classDetails.ratings[0].score}/5 ⭐⭐⭐⭐ from{' '}
                {classDetails.ratings.length} rating(s)
              </div>
              <div>DropIns say: {classDetails.ratings[0].review}</div>
              <a>Read all Reviews</a>
            </section>
          </div>

          <div className="card">
            <section>
              <h1 className="title">About the Class</h1>
              <div>
                Activity: {classDetails.ratings[0].score}/5 ⭐⭐⭐⭐ from{' '}
              </div>
              <div>Level: All Levels</div>
              <div>{classDetails.description}</div>
            </section>
          </div>

          <div className="card">
            <section>
              <h1 className="title">About the Space</h1>
              <div>Amentities: {classDetails.amentites[0]}</div>
              <div>{classDetails.description}</div>
              <Map
                classes={[classDetails]}
                zoom={15}
                center={{
                  lat: classDetails.location.latitude,
                  lng: classDetails.location.longitude
                }}
              />
            </section>
          </div>
        </div>
        <div className="column is-one-quarter">
          <div className="card"></div>
        </div>
      </div>
    </div>
  );
}

export default ClassDetailsPage;
