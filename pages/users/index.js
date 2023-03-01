import React, { useState, useEffect } from 'react';
import Avatar, { genConfig } from 'react-nice-avatar';
import { Triangle } from 'react-loader-spinner';
import Link from 'next/link';

// useEffect -> pageiig hereglegch duudah vued hamgiin ehend duudagna

function Users() {
  const [users, setUsers] = useState([]);

  // ogogdol tatah veiin tolov
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((result) => result.json())
      .then((data) => {
        console.log('Data', data);
        setUsers(data);
        setLoading(false);
      });
    // console.log('Use Effect');
  }, []);

  if (loading) {
    return (
      <section className="w-full h-screen flex justify-center items-center">
        <Triangle
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </section>
    );
  }

  return (
    <section className="p-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
      {users &&
        users.length > 0 &&
        users.map((user) => {
          const config = genConfig(user.email);
          return (
            <Link href={`/users/${user.id}`}>
              <div className="p-5 cursor-pointer hover:bg-gray-200 hover:rounded-lg">
                <Avatar className="w-32 h-32" {...config} />
                <h1 className="mt-4">{user.name}</h1>
                {/* <h3>Email: {user.email}</h3> */}
              </div>
            </Link>
          );
        })}
    </section>
  );
}

export default Users;
