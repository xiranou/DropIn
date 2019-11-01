import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

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
        defaultCenter={pos}
        center={pos}
        defaultZoom={props.zoom}
      >
        {children}
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