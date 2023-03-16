import { useState, useEffect } from "react";

type User = {
  id: number;
  name: string;
  prefix: string;
  title: string;
  lastName: string;
  imageUrl: string;
};

// const useFetchUsers = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [page, setPage] = useState<number>(1);
//   const [userNumber, setUserNumber] = useState<number>(50);
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(
//         `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/${userNumber}`
//       );
//       const data = await response.json();
//       console.log(data.list);
//       console.log(data);
//       setUsers((prev) => [...prev, ...data.list]);
//     };
//     fetchData();
//   }, [page, userNumber]);
//   useEffect(() => {
//     const handleScroll = (e: any) => {
//       const scrollHeight = e.target.documentElement.scrollHeight;
//       const currentHeight =
//         e.target.documentElement.scrollTop + window.innerHeight;
//       if (currentHeight + 1 >= scrollHeight) {
//         setUserNumber((pre) => pre + 30);
//         setPage((pre) => pre + 1);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   });
//   return users;
// };

// export default useFetchUsers;
const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState<number>(1);
  const [userNumber, setUserNumber] = useState<number>(100);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/${userNumber}`
      );
      const data = await response.json();
      if (Array.isArray(data.list)) {
        setUsers((prev) => [...prev, ...data.list]);
      }
      console.log(data.list);
    };

    fetchData();
  }, [page, userNumber]);
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
