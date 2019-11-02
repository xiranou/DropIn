import React from "react";
import * as R from "ramda";
import GoogleMapReact from "google-map-react";

import MapMarker from "./MapMarker";

const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    const pos = {
      lat: null,
      lng: null
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          pos.lat = position.coords.latitude;
          pos.lng = position.coords.longitude;
          return resolve(pos);
        },
        error => {
          return reject(error);
        }
      );
    } else {
      return reject(new Error("NO GEOLOCATION DETECTED"));
    }
  });
};

const GoogleMap = props => {
  const [clickedMarker, setClickedMarker] = React.useState(null);
  const [showMarkers, setShowMarkers] = React.useState(false);
  const [pos, updatePos] = React.useState({
    lat: Number(props.center.lat),
    lng: Number(props.center.lng)
  });
  React.useEffect(() => {
    if (R.isEmpty(props.center)) {
      getCurrentLocation().then(userPos => {
        updatePos(userPos);
      });
    }
  }, [props.center]);

  const isPositionLocated = !!pos.lat && !!pos.lng;

  return (
    isPositionLocated && (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_MAP_KEY
          }}
          center={pos}
          zoom={props.zoom}
          onChildClick={setClickedMarker}
          onGoogleApiLoaded={() => setShowMarkers(true)}
        >
          {showMarkers &&
            props.classes.map(classDetail => {
              const clicked = clickedMarker === classDetail.id;

              return (
                <MapMarker
                  key={classDetail.id}
                  classDetail={classDetail}
                  lat={classDetail.location.latitude}
                  lng={classDetail.location.longitude}
                  clicked={clicked}
                  onHover={props.onHover}
                />
              );
            })}
        </GoogleMapReact>
      </div>
    )
  );
};

GoogleMap.defaultProps = {
  zoom: 11,
  center: {},
  onHover: () => void 0
};

export default GoogleMap;
