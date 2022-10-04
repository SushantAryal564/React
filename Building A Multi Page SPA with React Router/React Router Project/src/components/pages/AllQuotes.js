import QuoteList from "./../quotes/QuoteList";
const DUMMY_QUOTES = [
  { id: "q1", author: "Sushant", text: "Learning React is Fun" },
  { id: "q2", author: "Aryal", text: "Learning React is great" },
];
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};
export default AllQuotes;
