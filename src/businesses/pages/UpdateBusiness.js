import { useParams } from "react-router";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from "../../shared/util/validators";

import "./BusinessForm.css";

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

const UpdateBusiness = (props) => {
  const businessId = useParams().businessId;

  const identifiedBusiness = businesses.find((b) => b.id === businessId);

  if (!identifiedBusiness) {
    return (
      <div className="center">
        <h2>Could not find a place!</h2>
      </div>
    );
  }
  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={() => {}}
        value={identifiedBusiness.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Title"
        validators={[VALIDATOR_MINLENGTH()]}
        errorText="Please enter a valid description"
        onInput={() => {}}
        value={identifiedBusiness.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>
        UPDATE BUSINESS
      </Button>
    </form>
  );
};

export default UpdateBusiness;
