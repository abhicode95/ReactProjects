import { useDispatch, useSelector } from "react-redux";
import { fetchRandomQuote } from "./slices/quoteSlice";
import { useEffect } from "react";

const Quote = () => {
  const { quote, status } = useSelector((state) => state.quote);
  const dispatch = useDispatch();

  const handleFetchQuote = () => {
    dispatch(fetchRandomQuote());
  };

  useEffect(() => {
    handleFetchQuote();
  }, [dispatch]);

  return (
    <div className="card col-lg-6 col-md-6 col-10 d-flex justify-content-center">
      <div className="heading">
        {status === "loading" ? (
          <div className="spinner-border text-secondary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : null}
        {quote && status !== "loading" ? <div>{quote.quote}</div> : null}
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => handleFetchQuote()}
      >
        <span>Generate Quote</span>
      </button>
    </div>
  );
};
export default Quote;
