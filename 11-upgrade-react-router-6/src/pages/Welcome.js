import { Routes, Route, Link } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Link to='new-user'>New User</Link>
      <Routes>
        <Route path='/new-user' element={<p>Welcome New User</p>} />
      </Routes>
    </section>
  )
};

export default Welcome;
