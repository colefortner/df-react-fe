import styles from "./BusinessList.module.css";

import Card from "../../shared/components/UIElements/Card";
import BusinessItem from "./BusinessItem";
import Button from "../../shared/components/FormElements/Button";

const BusinessList = (props) => {
  if (props.items.length === 0) {
    return (
      <div class={`${styles["place-list"]} center`}>
        <Card>
          <h2>No Businesses Found</h2>
          <Button to="/businesses/new">Share Business</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul class={styles["place-list"]}>
      {props.items.map((business) => (
        <BusinessItem
          key={business.id}
          id={business.id}
          image={business.image}
          title={business.title}
          description={business.description}
          address={business.address}
          creatorId={business.creator}
          coordinates={business.location}
        />
      ))}
    </ul>
  );
};

export default BusinessList;
