import React, { useState, useEffect } from 'react';

function Users() {
  const [users, setUsers] = useState([]);
  return (
    <section>
      <h1>Users {users.length}</h1>
    </section>
  );
}

export default Users;
