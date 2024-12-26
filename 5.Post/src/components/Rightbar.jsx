/* eslint-disable react/prop-types */
const Rightbar = ({ item, bgColor, color }) => {
  const { img, authorImg, authorName, authortext } = item;
  return (
    <>
      <div
        className="right_container"
        style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
      >
        <div className="postImg">
          <img src={img} alt="title" id="_img" />
          <div className="inside_img">
            <div className="img">
              <img src={authorImg} alt="" />
            </div>
            <div className="text">
              <h3>{authorName}</h3>
              <p>{authortext}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Rightbar;
