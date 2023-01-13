import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeHandler = () => {
    setChangedText(true)
  }

  return (
    <Fragment>
      <div>Hello World!</div>
      <div>
        {changedText && 'Changed'}
        {!changedText && "Hasn't changed yet"}
      </div>
      <button onClick={changeHandler}>Change</button>
    </Fragment>
  )
}

export default Greeting;
