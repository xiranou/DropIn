import React from 'react';

function Avatar(props) {
  const { image, size, alt, style, ...otherProps } = props;

  return (
    <figure
      className={'image' + (size ? ` is-${size}x${size}` : '')}
      style={style}
    >
      <img className="is-rounded" src={image} alt={alt} {...otherProps} />
    </figure>
  );
}

export default Avatar;
