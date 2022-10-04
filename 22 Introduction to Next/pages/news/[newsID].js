import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();

  // send a request to the backend API
  // to fetch the news item with newsID

  return <h1>You are in {router.query.newsID}</h1>;
}
export default DetailPage;
