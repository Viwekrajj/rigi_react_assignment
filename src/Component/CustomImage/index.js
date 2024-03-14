import React from 'react';

const SvgIcon = ({ icon: Icon, width = 24, height = 24, color = 'currentColor', ...rest }) => {
  return (
    <Icon width={width} height={height} fill={color} {...rest} />
  );
};

export default SvgIcon;