import UsersList from "../components/UsersList";

const Users = () => {
  const user_data = [
    {
      id: "1",
      name: "Kate",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1347527875.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*",
      businesses: 1
    }
  ];
  return <UsersList items={user_data} />;
};

export default Users;
