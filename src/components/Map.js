import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

import MapMarker from './MapMarker';


const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    const pos = {
      lat: null,
      lng: null
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        pos.lat = position.coords.latitude;
        pos.lng = position.coords.longitude;
        return resolve(pos);
      }, (error) => {
        return reject(error);
      });
    } else {
      return reject(new Error('NO GEOLOCATION DETECTED'));
    }
  });
}

const GoogleMap = ({ children, ...props }) => {
  const [clickedMarker, setClickedMarker] = React.useState(null);
  const [pos, updatePos] = React.useState({
    lat: null,
    lng: null
  });
  React.useEffect(() => {
    getCurrentLocation().then((userPos) => {
      updatePos(userPos);
    })
  }, []);

  const isPositionLocated = !!pos.lat && !!pos.lng;

  return isPositionLocated && (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_MAP_KEY,
        }}
        center={pos}
        zoom={props.zoom}
        onChildClick={(id) => {
          setClickedMarker(id);
        }}
      >
        {
          props.apartments.map((apt) => {
            const clicked = clickedMarker === apt.id;

            return (
              <MapMarker
                key={apt.id}
                lat={apt.location.latitude}
                lng={apt.location.longitude}
                title={apt.title}
                clicked={clicked}
                onHover={() => console.log('Hover: ', apt.id)}
              />
            )
          })
        }
      </GoogleMapReact>
    </div>
  )
};

GoogleMap.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

GoogleMap.defaultProps = {
  children: null,
  zoom: 11
};

export default GoogleMap;