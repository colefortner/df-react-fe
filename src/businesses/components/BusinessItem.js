import { useState } from "react";

import styles from "./BusinessItem.module.css";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";

const BusinessItem = (props) => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);
  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div class={styles["map-container"]}>
          <h2>MAP GOES HERE</h2>
        </div>
      </Modal>
      <li class={styles["place-item"]}>
        <Card class={styles["place-item__content"]}>
          <div class={styles["place-item__image"]}>
            <img src={props.image} alt={props.title} />
          </div>
          <div class={styles["place-item__info"]}>
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div class={styles["place-item__actions"]}>
            <Button inverse onClick={openMapHandler}>
              View On Map
            </Button>
            <Button to={`/businesses/${props.id}`}>Edit</Button>
            <Button danger>Delete</Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default BusinessItem;
