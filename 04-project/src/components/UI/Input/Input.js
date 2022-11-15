import React, { useRef, useImperativeHandle } from 'react';
import classes from './Input.module.css'

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  }

  useImperativeHandle(ref, () => {
    return {
      focus: activate
    }
  })

  return (
    <div className={`${classes.control} ${props.valid === false ? classes.invalid : ''}`}>
      <label htmlFor={props.type}>{props.type.charAt(0).toUpperCase() + props.type.slice(1)}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  )
});

export default Input;
