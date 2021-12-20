import { useNavigate, useParams } from "react-router";
import { useEffect, useState, useContext } from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";
import "./BusinessForm.css";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";

const UpdateBusiness = (props) => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedBusiness, setLoadedBusiness] = useState();
  const businessId = useParams().businessId;
  const navigate = useNavigate();

  const [formState, inputHandler, setFormData] = useForm(
    {
      name: {
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

  useEffect(() => {
    const fetchBusiness = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5050/api/businesses/${businessId}`
        );
        setLoadedBusiness(responseData.business);
        setFormData(
          {
            name: {
              value: responseData.business.name,
              isValid: true
            },
            description: {
              value: responseData.business.description,
              isValid: true
            }
          },
          true
        );
      } catch (err) {}
    };
    fetchBusiness();
  }, [sendRequest, businessId, setFormData]);

  const businessUpdateSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await sendRequest(
        `http://localhost:5050/api/businesses/${businessId}`,
        "PATCH",
        JSON.stringify({
          name: formState.inputs.name.value,
          description: formState.inputs.description.value
        }),
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token
        }
      );
      navigate("/" + auth.userId + "/businesses");
    } catch (err) {}
  };

  if (isLoading) {
    return (
      <div className="center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!loadedBusiness && !error) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find a place!</h2>
        </Card>
      </div>
    );
  }

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {!isLoading && loadedBusiness && (
        <form className="place-form" onSubmit={businessUpdateSubmitHandler}>
          <Input
            id="name"
            element="input"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title"
            onInput={inputHandler}
            initialValue={loadedBusiness.name}
            initialValidity={true}
          />
          <Input
            id="description"
            element="textarea"
            label="Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid description"
            onInput={inputHandler}
            initialValue={loadedBusiness.description}
            initialValidity={true}
          />
          <Button type="submit" disabled={!formState.isValid}>
            UPDATE BUSINESS
          </Button>
        </form>
      )}
    </>
  );
};

export default UpdateBusiness;
