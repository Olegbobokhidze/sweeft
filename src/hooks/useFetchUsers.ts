import { useState, useEffect } from "react";

type User = {
  id: number;
  name: string;
  prefix: string;
  title: string;
  lastName: string;
  imageUrl: string;
};

const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState<number>(1);
  const [userNumber, setUserNumber] = useState<number>(50);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/${userNumber}`
      );
      const data = await response.json();
      setUsers(data.list);
    };
    fetchData();
  }, [page, userNumber]);

  return users;
};

export default useFetchUsers;
