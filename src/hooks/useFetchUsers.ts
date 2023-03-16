import { useState, useEffect } from "react";

type User = {
  id: number;
  name: string;
  prefix: string;
  title: string;
  imageUrl: string;
};

const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/1/50"
      );
      const data = await response.json();
      setUsers(data.list);
      console.log(data);
    };
    fetchData();
  }, []);

  return users;
};

export default useFetchUsers;
