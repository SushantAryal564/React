import { Outlet, useParams, Link } from "react-router-dom";
import { Fragment } from "react";
import HighlightedQuotes from "./../quotes/HighlightedQuote";
const DUMMY_QUOTES = [
  { id: "q1", author: "Sushant", text: "Learning React is Fun" },
  { id: "q2", author: "Aryal", text: "Learning React is great" },
];
const QuoteDetail = () => {
  const params = useParams();
  const id = params.quoteId;
  const quote = DUMMY_QUOTES.find((quote) => quote.id === id);
  if (!quote) {
    return <p>No Quote Found</p>;
  }
  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <HighlightedQuotes text={quote.text} author={quote.author} />
      <div className="centered">
        <Link className="btn--flat" to={`/quotes/${params.quoteID}/comments`}>
          Load Comments
        </Link>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default QuoteDetail;
