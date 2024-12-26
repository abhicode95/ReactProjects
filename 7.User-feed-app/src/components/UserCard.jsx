const UserCard = (user) => {
  const {
    name: { title, first, last },
    login: { username },
    email,
    picture: { medium },
    registered: { age },
    dob: { age: userAge },
    nat,
    phone,
    location: {
      country,
      street: { name, number },
      state,
      postcode,
    },
  } = user;
  return (
    <div
      className="col-sm-12 d-flex justify-content-center"
      style={{ marginBottom: "15px" }}
    >
      <div className="card" style={{ width: "30rem" }}>
        <h5 className="card-header">User: {username}</h5>
        <div className="card-body">
          <div className="row">
            <div className="col">
              <h4 className="card-title">
                {title} {first} {last}
              </h4>
              <p className="card-text">Email: {email}</p>
            </div>
            <div className="col-3">
              <img
                src={medium}
                className="img-fluid rounded mb-3 float-right"
              ></img>
            </div>
          </div>
          <div className="row d-flex flex-nowrap">
            <div className="col">
              <h5 className="card-text mb-0">
                User for {age} {age === 1 ? "year" : " years"}
              </h5>
              <p className="card-text mb-0">Age: {userAge}</p>
              <p className="card-text mb-0">Nationality: {nat}</p>
              <p className="card-text mb-0">Phone : {phone}</p>
            </div>
            <div className="col text-right">
              <h6 className="card-text mb-0">Address:</h6>
              <p className="card-text mb-0">
                <small>
                  {number} {name},
                </small>
              </p>
              <p className="card-text mb-0 text-wrap">
                <small>
                  {state}, {country},
                </small>
              </p>
              <p className="card-text mb-0">
                <small>{postcode}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
