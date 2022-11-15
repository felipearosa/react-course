import classes from './Input.module.css'

const Input = props => {
  return (
    <div className={`${classes.control} ${props.valid === false ? classes.invalid : ''}`}>
      <label htmlFor={props.type}>{props.type.charAt(0).toUpperCase() + props.type.slice(1)}</label>
      <input
        type={props.type}
        id={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  )
};

export default Input;
