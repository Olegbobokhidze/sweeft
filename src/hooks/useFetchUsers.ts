import { useState, useEffect } from "react";
import { User } from "../types/Types";

const useFetchUsers = (userId?: number, isFriend?: boolean) => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState<number>(1);
  const [userNumber, setUserNumber] = useState<number>(30);

  useEffect(() => {
    const fetchData = async () => {
      let url = `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/${userNumber}`;
      if (isFriend && userId) {
        url = `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}/friends/${page}/${userNumber}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      if (Array.isArray(data.list)) {
        setUsers((prev) => [...prev, ...data.list]);
      }
      console.log(data.list);
      console.log(data);
    };

    fetchData();
  }, [isFriend, userId, page, userNumber]);

  useEffect(() => {
    const handleScroll = (e: any) => {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight =
        e.target.documentElement.scrollTop + window.innerHeight;
      if (currentHeight + 1 >= scrollHeight) {
        setPage((pre) => pre + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return users;
};

export default useFetchUsers;
