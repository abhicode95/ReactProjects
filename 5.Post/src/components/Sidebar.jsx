/* eslint-disable react/prop-types */
import { BiSolidConversation } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaHome, FaWallet, FaYoutube } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { RiLogoutBoxFill } from "react-icons/ri";

const Sidebar = ({ bgColor }) => {
  return (
    <>
      <div
        className="sidebar_content"
        style={{ backgroundColor: `${bgColor}`, color: "white" }}
      >
        <div className="top_content">
          <div className="item">
            <FaHome className="icons" />
            Home
          </div>
          <div className="item">
            <IoIosNotifications className="icons" />
            Notification
          </div>
          <div className="item">
            <FaCartShopping className="icons" />
            Shop
          </div>
          <div className="item">
            <BiSolidConversation className="icons" />
            Conversation
          </div>
          <div className="item">
            <FaWallet className="icons" />
            Wallet
          </div>
          <div className="item">
            <FaYoutube className="icons" />
            Subscription
          </div>
          <div className="item">
            <CgProfile className="icons" />
            My Profile
          </div>
        </div>
        <div className="bottom_content item">
          <RiLogoutBoxFill className="icons" />
          Log Out
        </div>
      </div>
    </>
  );
};
export default Sidebar;
