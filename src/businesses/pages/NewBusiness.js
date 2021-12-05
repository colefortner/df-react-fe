import "./NewBusiness.css";
import Input from "../../shared/components/FormElements/Input";

const NewBusiness = () => {
  return (
    <form className="place-form">
      <Input element="input" type="text" label="Title" />
    </form>
  );
};

export default NewBusiness;
