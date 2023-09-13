/* eslint-disable react/prop-types */
const MyImage = ({ src, alt, ...rest }) => {
  return <img src={src} alt={alt} {...rest} />;
};

export default MyImage;
