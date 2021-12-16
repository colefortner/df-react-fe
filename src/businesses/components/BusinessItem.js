import { useState, useContext } from "react";

import { AuthContext } from "../../shared/context/auth-context";

import styles from "./BusinessItem.module.css";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";

const BusinessItem = (props) => {
  const auth = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    console.log("deleting");
  };

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
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <>
            <Button inverse onClick={cancelDeleteHandler}>
              Cancel
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              Delete
            </Button>
          </>
        }
      >
        <p>Do you want to proceed? This action cannot be undone.</p>
      </Modal>
      <li class={styles["place-item"]}>
        <Card class={styles["place-item__content"]}>
          <div class={styles["place-item__image"]}>
            <img src={props.image} alt={props.title} />
          </div>
          <div class={styles["place-item__info"]}>
            <h2>{props.name}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div class={styles["place-item__actions"]}>
            <Button inverse onClick={openMapHandler}>
              View On Map
            </Button>
            {auth.isLoggedIn && (
              <Button to={`/businesses/${props.id}`}>Edit</Button>
            )}
            {auth.isLoggedIn && (
              <Button danger onClick={showDeleteWarningHandler}>
                Delete
              </Button>
            )}
          </div>
        </Card>
      </li>
    </>
  );
};

export default BusinessItem;
