/* eslint-disable react/prop-types */
const Header = ({ title }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <div className="row m-auto">
          <i className="fa fa-hand-pointer-o fa-2x text-white mr-2" />
          <div className="text-light h2">{title}</div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
