import { useState, useEffect } from "react";
import { FullUser } from "../types/Types";

const useGetUser = (id: number) => {
  const [user, setUser] = useState<FullUser>();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`
      );
      const data = await response.json();
      setUser(data);
    };
    fetchData();
  }, [id]);
  return user;
};

export default useGetUser;
