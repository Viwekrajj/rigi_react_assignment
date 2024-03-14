import React from "react";

const CustomSvg = ({
  src: src,
  width = 24,
  height = 24,
  color = "currentColor",
  onClick,
  className,
  ...rest
}) => {
  if (
    !src ||
    typeof width !== "number" ||
    typeof height !== "number" ||
    width <= 0 ||
    height <= 0 ||
    (onClick && typeof onClick !== "function")
  ) {
    return null;
  }

  return (
    <span  className ={className} onClick={onClick}>
      <img src={src} width={width} height={height} fill={color} {...rest} />
    </span>
  );
};

export default CustomSvg;
