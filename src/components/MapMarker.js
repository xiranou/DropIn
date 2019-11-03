import React from "react";

import MarkerBlue from "./MarkerBlue";

const MapMarker = props => {
  React.useEffect(() => {
    if (props.$hover) {
      props.onHover(props.classDetail.id);
    } else {
      props.onHover(null);
    }
  }, [props, props.$hover]);

  return (
    <MarkerBlue
      lat={props.lat}
      lng={props.lng}
      text={props.classDetail.title}
    />
  );
};

export default MapMarker;
