import React from "react";

import MarkerBlue from "./MarkerBlue";

const MapMarker = (props) => {
  if (props.clicked) {
    return (
      <div>Clicked</div>
    )
  } else if (props.$hover) {
    props.onHover();
    return (
      <div>Hover</div>
    )
  } else {
    return (
      <MarkerBlue
        lat={props.lat}
        lng={props.lng}
        text={props.title}
      />
    );
  }
};

export default MapMarker;