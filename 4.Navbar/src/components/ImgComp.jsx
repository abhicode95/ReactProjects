/* eslint-disable react/prop-types */
const ImgComp = ({ title, imgSrc }) => {
  return (
    <>
      <h1>{`Welcome to ${title} Page`}</h1>
      <div className="imageCls">
        <img src={imgSrc} alt={title} />
      </div>
    </>
  );
};
export default ImgComp;
