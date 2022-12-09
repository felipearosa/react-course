import QuoteList from './../components/quotes/QuoteList'

const DUMMY_QUOTES = [
  {id: 'q1', author: 'someone', text: 'hvewnj fwen wefn fwnei'},
  {id: 'q2', author: 'someone else', text: 'vempavmwo movwempvwe vwme'}
]

const AllQuotes = () => {
  return (
    <QuoteList quotes={DUMMY_QUOTES} />
  )
}

export default AllQuotes
