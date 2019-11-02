import React from "react";
import CenteredColumns from "./CenteredColumns";
import Slider from "react-slick";
import "./ContentCards.scss";
import { Link } from "./../util/router.js";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const renderImages = images => {
  return images.map((url, index) => {
    return (
      <Link to="/classes/1" key={`apartment-image-${index}`}>
        <img src={url} alt={url} />
      </Link>
    );
  });
};

function ContentCards({ classes, focusedClassId }) {
  return (
    <CenteredColumns>
      {classes.map((classDetails, index) => {
        const isFocused = focusedClassId === classDetails.id;
        console.log(isFocused);
        return (
          <div className="column is-full" key={index}>
            <div className="ContentCards__card card is-flex">
              <div className="card-content">
                <div className="columns">
                  <div className="column is-three-fifths">
                    <div className="content">
                      <Link to={`/classes/${index}`}>
                        <h4>{classDetails.title}</h4>
                      </Link>
                      <p
                        style={{
                          display: "-webkit-box",
                          webkitLineClamp: "3",
                          webkitBoxOrient: "vertical",
                          overflow: "hidden"
                        }}
                      >
                        {classDetails.description}
                      </p>
                      <span
                        className="has-text-weight-heavy"
                        style={{ marginRight: "10px" }}
                      >
                        ${classDetails.price}/hr
                      </span>
                      <span style={{ marginRight: "10px" }}>
                        {classDetails.bedrooms} Bedrooms
                      </span>
                      <span style={{ marginRight: "10px" }}>
                        {classDetails.bathrooms} Bathrooms
                      </span>
                      <span class="tag is-primary">
                        {classDetails.owner.skillset[0]}
                      </span>
                    </div>
                  </div>
                  <div className="column is-two-fifths">
                    <div className="card-image">
                      <Slider {...settings}>
                        {renderImages(classDetails.images)}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </CenteredColumns>
  );
}

export default ContentCards;
