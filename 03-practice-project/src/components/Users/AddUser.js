import { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from './AddUser.module.css'

const AddUser = props => {
  const [username, setUsername] = useState('')
  const [age, setAge] = useState('')

  const addUserHandler = e => {
    e.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      return
    }

    if (+age <= 0){
      return;
    }

    let newUser = {};
    newUser.username = username;
    newUser.age = age;
    newUser.id = Math.random()

    props.onNewUser(newUser);

    setUsername('');
    setAge('');
  }

  const usernameHandler = e => {
    setUsername(e.target.value);
  }

  const ageHandler = e => {
    setAge(e.target.value);
  }

  const buttonHandler = e => {

  }

  return(
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={username} onChange={usernameHandler}/>
        <label htmlFor="age">Age(Years)</label>
        <input type="number" id="age" value={age} onChange={ageHandler}/>
        <Button type="submit" onClick={buttonHandler}>
          Add User
        </Button>
      </form>
    </Card>
  )
}

export default AddUser
