/* eslint-disable react/prop-types */
import { FaComment, FaHeart, FaShare } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";

const Post = ({ item, bgColor, color }) => {
  const { userName, title, description, pImg, mImg, like, comment, share } =
    item;
  return (
    <>
      <div
        className="post_container"
        style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
      >
        <div className="person">
          <div className="author">
            <div className="img">
              <img src={pImg} alt="Profile" />
            </div>
            <div className="text">
              <h3>{userName}</h3>
              <p>{title}</p>
            </div>
          </div>
          <div className="dot">
            <HiOutlineDotsVertical />
          </div>
        </div>
        <p style={{ marginLeft: "4rem" }}>{description}</p>
        <div className="post_image">
          <img src={mImg} alt={title} />
        </div>
        <div className="social_media">
          <div className="likes">
            <FaHeart className="items" /> {like}k
          </div>
          <div className="comments">
            <FaComment className="items" />
            {comment}k
          </div>
          <div className="share">
            <FaShare className="items" />
            {share}k
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
