import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Avatar, { genConfig } from 'react-nice-avatar';

function UserDetail() {
  const router = useRouter();
  const [config, setConfig] = useState();
  const { id } = router.query;
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((result) => result.json())
      .then((data) => {
        console.log('Data', data);
        const c = genConfig(data.email);
        setConfig(c);
      });
  }, [id]);

  return (
    <section>{config && <Avatar className="w-32 h-32" {...config} />}</section>
  );
}

export default UserDetail;
