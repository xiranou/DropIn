import React from "react";

import "./Card.scss";

import { Link } from "./../util/router.js";
import Slider from "react-slick";

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

const Card = props => {
  return (
    <div className={`column is-full ${props.isFocused ? "is-focused" : ""}`}>
      <div className="ContentCards__card card is-flex">
        <div className="card-content">
          <div className="columns">
            <div className="column is-three-fifths">
              <div className="content">
                <Link to={`/classes/${props.classDetails.id}`}>
                  <h4>{props.classDetails.title}</h4>
                </Link>
                <p
                  style={{
                    display: "-webkit-box",
                    webkitLineClamp: "3",
                    webkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }}
                >
                  {props.classDetails.description}
                </p>
                <span
                  className="has-text-weight-heavy"
                  style={{ marginRight: "10px" }}
                >
                  ${props.classDetails.price}/hr
                </span>
                <span style={{ marginRight: "10px" }}>
                  {props.classDetails.bedrooms} Bedrooms
                </span>
                <span style={{ marginRight: "10px" }}>
                  {props.classDetails.bathrooms} Bathrooms
                </span>
                <span class="tag is-primary">
                  {props.classDetails.owner.skillset[0]}
                </span>
              </div>
            </div>
            <div className="column is-two-fifths">
              <div className="card-image">
                <Slider {...settings}>
                  {renderImages(
                    props.classDetails.images,
                    props.classDetails.id
                  )}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
