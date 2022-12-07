import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";

import Comments from './../components/comments/Comments'

const QuoteDetails = () => {
  const params = useParams();
  const { quoteId } = params

  return (
    <Fragment>
      <h1>Quote Detail page</h1>
      <p>{quoteId}</p>
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  )
}

export default QuoteDetails;
