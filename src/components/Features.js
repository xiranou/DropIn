import React from "react";
import CenteredColumns from "./CenteredColumns";
import "./Features.scss";

function Features(props) {
  return (
    <CenteredColumns>
      {props.items.map((item, index) => (
        <div className="column has-text-centered" key={index}>
          <div className="Features__feature">
            <div
              className={`Features__icon icon is-size-1 has-text-${
                item.iconColor
              }`}
            >
              <i className={`${item.iconClass}`} />
            </div>
            <h1 className="title is-4 is-spaced">{item.title}</h1>
            <h2 className="subtitle is-6 has-text-grey-darker">
              {item.subtitle}
            </h2>
          </div>
        </div>
      ))}
    </CenteredColumns>
  );
}

export default Features;
