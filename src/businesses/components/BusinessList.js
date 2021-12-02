import styles from "./BusinessList.module.css";

import Card from "../../shared/components/UIElements/Card";
import BusinessItem from "./BusinessItem";

const BusinessList = (props) => {
  if (props.items.length === 0) {
    return (
      <div class={`${styles["place-list"]} center`}>
        <Card>
          <h2>No Businesses Found</h2>
          <button>Share Business</button>
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
          image={business.imageUrl}
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
