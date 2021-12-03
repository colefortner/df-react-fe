import BusinessList from "../components/BusinessList";
import { useParams } from "react-router";

const businesses = [
  {
    id: "1",
    title: "Pinellas Ale Works",
    description: "Dog bar",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKcUEp6zPgzVvrOThJ_gqLmYExy-2mwij_7Q&usqp=CAU",
    address: "1962 1st Ave S, St. Petersburg, FL 33712",
    location: {
      lat: 27.7699,
      lng: -82.660099
    },
    creator: "2"
  },
  {
    id: "2",
    title: "Pinellas Ale Works",
    description: "Dog bar",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKcUEp6zPgzVvrOThJ_gqLmYExy-2mwij_7Q&usqp=CAU",
    address: "1962 1st Ave S, St. Petersburg, FL 33712",
    location: {
      lat: 27.7699,
      lng: -82.660099
    },
    creator: "1"
  }
];

const UserBusinesses = () => {
  const userId = useParams().userId;
  const loadedBusinesses = businesses.filter((b) => b.creator === userId);
  return <BusinessList items={loadedBusinesses} />;
};

export default UserBusinesses;
