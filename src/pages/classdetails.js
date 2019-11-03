import React from "react";
import Map from "../components/Map";
import Spinner from "../components/Spinner";

import { useParams } from "../util/router.js";
import { useClassList } from "../util/requests";

function ClassDetailsPage() {
  const { id } = useParams();
  const [classList, isFetched] = useClassList();
  const [isBooked, setBookStatus] = React.useState(false);
  const classDetails = classList.find(({ id: classId }) => classId === id) || {
    images: []
  };

  return !isFetched ? (
    <Spinner />
  ) : (
    <div className="SectionComponent section container">
      <div className="columns">
        <div className="column is-three-quarters">
          <div className="box is-paddingless">
            <img
              className="hero full-width"
              style={{ width: "100%" }}
              src={classDetails.images[0]}
              alt="class-detail.hero"
            />
          </div>

          <div className="box">
            <section>
              <h1 className="title">{classDetails.title}</h1>
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

          <div className="box">
            <section>
              <div>Saturday, Nov 2</div>
              <div>8:30am - 9:30am</div>
              <div>{classDetails.owner.name}</div>
              <i class="far fa-calendar-plus"></i>
            </section>
          </div>

          <div className="box">
            <section>
              <h1 className="title">Reviews</h1>
              <div>
                {classDetails.ratings[0].score}/5 ⭐⭐⭐⭐ from{" "}
                {classDetails.ratings.length} rating(s)
              </div>
              <div>DropIns say: {classDetails.ratings[0].review}</div>
              <a href="/#">Read all Reviews</a>
            </section>
          </div>

          <div className="box">
            <section>
              <h1 className="title">About the Class</h1>
              <div>
                Activity: {classDetails.ratings[0].score}/5 ⭐⭐⭐⭐ from{" "}
              </div>
              <div>Level: All Levels</div>
              <div>{classDetails.description}</div>
            </section>
          </div>
        </div>
        <div className="column is-one-quarter">
          <div
            className="card card-content"
            style={{ position: "sticky", top: "4px" }}
          >
            <Map
              height="258px"
              classes={[classDetails]}
              zoom={15}
              center={{
                lat: classDetails.location.latitude,
                lng: classDetails.location.longitude
              }}
            />
            <h1 className="title is-size-5" style={{ marginBottom: "1rem" }}>
              About the Space
            </h1>
            <div style={{ marginBottom: "1rem" }}>
              Amentities: {classDetails.amentites[0]}
            </div>
            <div style={{ marginBottom: "1rem" }}>
              {classDetails.description}
            </div>
            <section
              className="section is-small"
              style={{
                padding: "1rem",
                justifyContent: "center",
                display: "flex",
                alignItems: "center"
              }}
            >
              <button
                class={`button is-info ${
                  isBooked ? "is-success" : "is-outlined"
                }`}
                disabled={isBooked}
                onClick={() => setBookStatus(booked => !booked)}
              >
                {isBooked ? "Booked" : "Book Now"}
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassDetailsPage;
