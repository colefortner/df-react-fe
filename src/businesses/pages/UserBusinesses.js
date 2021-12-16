import BusinessList from "../components/BusinessList";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

// const businesses = [
//   {
//     id: "1",
//     title: "Pinellas Ale Works",
//     description: "Dog bar",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKcUEp6zPgzVvrOThJ_gqLmYExy-2mwij_7Q&usqp=CAU",
//     address: "1962 1st Ave S, St. Petersburg, FL 33712",
//     location: {
//       lat: 27.7699,
//       lng: -82.660099
//     },
//     creator: "2"
//   },
//   {
//     id: "2",
//     title: "Pinellas Ale Works",
//     description: "Dog bar",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKcUEp6zPgzVvrOThJ_gqLmYExy-2mwij_7Q&usqp=CAU",
//     address: "1962 1st Ave S, St. Petersburg, FL 33712",
//     location: {
//       lat: 27.7699,
//       lng: -82.660099
//     },
//     creator: "1"
//   }
// ];

const UserBusinesses = () => {
  const [loadedBusinesses, setLoadedBusinesses] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const userId = useParams().userId;
  console.log(userId);
  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5050/api/businesses/user/${userId}`
        );
        setLoadedBusinesses(responseData.businesses);
      } catch (err) {}
    };
    fetchBusinesses();
  }, [sendRequest, userId]);

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedBusinesses && (
        <BusinessList items={loadedBusinesses} />
      )}
    </>
  );
};

export default UserBusinesses;
