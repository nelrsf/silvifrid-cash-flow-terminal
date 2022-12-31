import styles from "../../../styles/TransactionDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { Card, Form, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import BackHomeButton from "../buttons/backHome";
import { useEffect, useState, useRef } from "react";
import Camera, { FACING_MODES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import transacrionData from "../../../transactionsData";
import BackButton from "../buttons/back";
import QuantityInput from "../QuantityInput/quantityInput";

function TransactionDetails(props: any) {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  let transaction = getTransaction(parseInt(id as string));
  const imageDiv = useRef(null);
  const totalInput = useRef(null);
  const total = useRef(0);
  const quantity = useRef(0);

  function toggleCamera() {
    setIsCameraOpen(!isCameraOpen);
  }

  const setCameraFacingMode = async (video: any) => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: { exact: "environment" },
      },
    });
    video.srcObject = stream;
  };

  useEffect(() => {
    let video = document.querySelector("video");
    if (!video) {
      return;
    }
    video.style.width = "100%";
    setCameraFacingMode(video);
  });

  function takePhoto(uri: any) {
    if (!transaction) {
      return;
    }
    transaction.image = uri as string;
    setIsCameraOpen(false);
  }

  const changeImage = (event: any) => {};

  function changeProductName(event: any) {
    if (!transaction) {
      return;
    }
    transaction.productName = event.target.value;
  }

  function changeDate(event: any) {
    if (!transaction) {
      return;
    }
    transaction.date = event.target.value;
  }

  function changePrice(event: any) {
    if (!transaction) {
      return;
    }
    transaction.price = parseInt(event.target.value);
    updateTotal();
  }

  function updateQuantity(event: any) {
    quantity.current = event;
    updateTotal();
  }

  function updateTotal() {
    let price = parseInt(transaction?.price || "0");
    total.current = price * quantity.current;
    if (totalInput.current) {
      totalInput.current.value = total.current;
    }
  }

  return (
    <div className={styles.mainContainer}>
      <Card className={styles.cardWrapper}>
        <Card.Header className={styles.cardHeader}>
          <BackButton returnUrl="/cash-flow/incomes" />
          <Card.Title className={styles.title}>Titulo</Card.Title>
          <BackHomeButton />
        </Card.Header>
        <div ref={imageDiv} className="imgContainer">
          {isCameraOpen ? (
            <Camera
              onTakePhoto={takePhoto}
              idealFacingMode={FACING_MODES.ENVIRONMENT}
            ></Camera>
          ) : (
            <Card.Img
              src={transaction?.image}
              width="60rem"
            ></Card.Img>
          )}
        </div>
        <Button onClick={toggleCamera} className={`${styles.updateImage} mt-2`}>
          <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon>
        </Button>
        <Card.Body>
          <Form.Label className="mt-3">Producto</Form.Label>
          <Form.Control
            type="text"
            defaultValue={transaction?.productName}
            onChange={changeProductName}
          ></Form.Control>
          <Form.Label className="mt-3">Precio</Form.Label>
          <Form.Control
            type="number"
            defaultValue={transaction?.price.toLocaleString()}
            onChange={changePrice}
          ></Form.Control>
          <QuantityInput updateMessage={updateQuantity} />
          <Form.Label className="mt-3">Total</Form.Label>
          <Form.Control
            ref={totalInput}
            type="number"
            disabled={true}
            defaultValue={total.current}
          ></Form.Control>
          <Form.Label className="mt-3">Fecha</Form.Label>
          <Form.Control
            type="date"
            defaultValue={transaction?.date}
            onChange={changeDate}
          ></Form.Control>
          <Form.Label className="mt-3">Observacion</Form.Label>
          <Form.Control as="textarea" rows={3}></Form.Control>
          <Button className={styles.submit} variant="outline-success">
            Guardar
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

function getTransaction(id: number) {
  if(id){
    return getTransactionById(id);
  } else {
    return getNewTransaction();
  }
}

function getNewTransaction(){
  const currentDate = new Date();
  const dateString = new Intl.DateTimeFormat('en-US').format(currentDate);
  const arrayDate = dateString.split("/");
  const dateNewFormat = [arrayDate[2],arrayDate[0],arrayDate[1]].join("-");
  return {
    productName: "Nuevo producto",
    date:  dateNewFormat,
    image: "https://cdn-icons-png.flaticon.com/512/2878/2878547.png",
    price: 0
  }
}

function getTransactionById(id: number) {
  return transacrionData.find((t) => {
    return t.id === id;
  });
}

export default TransactionDetails;
