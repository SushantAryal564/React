// our-domain.com/new
import { Fragment } from "react";
import Link from "next/link";
function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/next-js-a-great-framework">
            NextJS is a great Framework
          </Link>
        </li>
        <li>
          <Link href="/news/something">Something else</Link>
        </li>
      </ul>
    </Fragment>
  );
}
export default NewsPage;
