import { useParams } from "react-router";
import { useEffect, useState } from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
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
  const [isLoading, setIsLoading] = useState(true);
  const businessId = useParams().businessId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false
      },
      description: {
        value: "",
        isValid: false
      }
    },
    false
  );

  const identifiedBusiness = businesses.find((b) => b.id === businessId);

  useEffect(() => {
    setFormData(
      {
        title: {
          value: identifiedBusiness.title,
          isValid: true
        },
        description: {
          value: identifiedBusiness.description,
          isValid: true
        }
      },
      true
    );
    setIsLoading(false);
  }, [setFormData, identifiedBusiness]);

  const businessUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedBusiness) {
    return (
      <div className="center">
        <h2>Could not find a place!</h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={businessUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValidity={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValidity={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE BUSINESS
      </Button>
    </form>
  );
};

export default UpdateBusiness;
