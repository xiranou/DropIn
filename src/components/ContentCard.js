import React from "react";
import dayjs from "dayjs";

import "./ContentCards.scss";
import { Link } from "./../util/router.js";

function ContentCard({ classDetail }) {
  return (
    <div className="column">
      <div className="card" style={{ height: "400px" }}>
        <div className="card-image">
          <Link
            to={`/classes/${classDetail.id}`}
            key={`class-image-${classDetail.id}`}
          >
            <img
              style={{ height: "181px" }}
              src={classDetail.images[0]}
              alt={classDetail.images[0]}
            />
          </Link>
        </div>
        <div className="card-content">
          <span className="tag is-info ">{classDetail.owner.skillset[0]}</span>
          <span className="tag is-light is-pulled-right">8</span>
          <span className="tag is-info is-light is-pulled-right">
            {dayjs(classDetail.classDates[0].start).format("h:mm A")}
          </span>

          <h4
            className="has-text-weight-semibold	is-family-primary"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: "1",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              marginTop: "0.5rem"
            }}
          >
            {classDetail.title}
          </h4>
          <p
            className="is-family-seconday"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: "3",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              margin: "0.5rem 0"
            }}
          >
            {classDetail.description}
          </p>
          <span
            className="is-italic has-text-weight-light"
            style={{ marginRight: "10px" }}
          >
            Ratings: {classDetail.ratings[0].score}/5
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContentCard;
