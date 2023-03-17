import useGetUser from "../hooks/useGetUser";

const UserProfile = (userId: number) => {
  const user = useGetUser(userId);
  return (
    <div>
      <h1>{user?.name}</h1>
      <h1>{user?.lastName}</h1>
      <h1>{user?.email}</h1>
    </div>
  );
};
export default UserProfile;
