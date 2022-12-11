import { Fragment } from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";

import Comments from './../components/comments/Comments';
import HighlightedQuote from './../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'someone', text: 'hvewnj fwen wefn fwnei' },
  { id: 'q2', author: 'someone else', text: 'vempavmwo movwempvwe vwme' }
]

const QuoteDetails = () => {
  const params = useParams();
  const match = useRouteMatch();
  const { quoteId } = params;

  const quote = DUMMY_QUOTES.find(quote => quote.id === quoteId);

  if (!quote) {
    return <p>No quote found!</p>
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${quoteId}/comments`}>Load Comments</Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  )
}

export default QuoteDetails;
