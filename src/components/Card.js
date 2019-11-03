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

const renderTags = tags => {
  return tags.map((tag, index) => (
    <span
      style={{ marginRight: "10px" }}
      className="tag is-info"
      key={`tag-${index}`}
    >
      {tag}
    </span>
  ));
};

const Card = props => {
  const { classDetails } = props;
  return (
    <div className={`column is-full ${props.isFocused ? "is-focused" : ""}`}>
      <div className="ContentCards__card card is-flex">
        <div className="card-content">
          <div className="columns">
            <div className="column is-three-fifths">
              <div className="content">
                <Link to={`/classes/${classDetails.id}`}>
                  <h4>{classDetails.title}</h4>
                </Link>
                <p
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: "3",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }}
                >
                  {classDetails.description}
                </p>

                {renderTags(classDetails.owner.skillset)}
              </div>
            </div>
            <div className="column is-two-fifths">
              <div className="card-image">
                <Slider {...settings}>
                  {renderImages(classDetails.images, classDetails.id)}
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
