import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const newUserHandler = newUser => {
    setUsers(prevUsers => {
      return [...prevUsers, newUser];
    })
  }

  return (
    <div>
      <AddUser onNewUser={newUserHandler}/>
      <UserList users={users} />
    </div>
  );
}

export default App;
