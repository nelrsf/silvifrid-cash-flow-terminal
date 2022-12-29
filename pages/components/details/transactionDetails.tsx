import styles from "../../../styles/TransactionDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { Card, Form, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import BackButton from "../buttons/back";
import { useEffect, useState } from "react";
import Camera from "react-html5-camera-photo";
import 'react-html5-camera-photo/build/css/index.css';
import { useRef } from 'react'
import transacrionData from "../../../transactionsData";

function TransactionDetails() {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const router = useRouter();
  const { id, mode } = router.query;
  let transaction = getTransactionById(parseInt(id as string));
  const miDiv = useRef(null);

  function toggleCamera() 
  {
    setIsCameraOpen(!isCameraOpen);
  }

  useEffect(()=>{
    let video = document.querySelector('video');
    if(!video){
      return
    }
    video.style.width = '100%';
  })
  function takePhoto(uri: any) {
    if(!transaction){
      return
    }
    transaction.image = uri as string;
    setIsCameraOpen(false);
    console.log(uri)
  }


  useEffect(() => {
    console.log(document.querySelector("Camera"))
    // Código para utilizar el ancho del div aquí
  }, [miDiv]);

  return (
    <div className={styles.mainContainer}>
      <Card className={styles.cardWrapper}>
        <Card.Header className={styles.cardHeader}>
          <BackButton />
          <Card.Title className={styles.title}>Titulo {id}</Card.Title>
        </Card.Header>
        <div ref={miDiv} className="imgContainer">
          {isCameraOpen ? (
            <Camera
              onTakePhoto={takePhoto}
              // idealResolution={{width:miDiv.current.offsetWidth}}
              
            ></Camera>
          ) : (
            <Card.Img src={transaction?.image} width="60rem"></Card.Img>
          )}
        </div>
        {/* <Form.Control
          type="file"
          onChange={changeImage}
          className={`${styles.updateImage} mt-2`}
          accept="image/*"
        ></Form.Control> */}
        <Button onClick={toggleCamera} className={`${styles.updateImage} mt-2`}>
          <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon>
        </Button>
        <Card.Body>
          <Form.Label>Producto</Form.Label>
          <Form.Control
            type="text"
            value={transaction?.productName}
            onChange={changeProductName}
          ></Form.Control>
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            value={transaction?.price}
            onChange={changePrice}
          ></Form.Control>
          <Form.Label>Fecha</Form.Label>
          <Form.Control
            type="date"
            value={transaction?.date}
            onChange={changeDate}
          ></Form.Control>
          <Form.Label>Observacion</Form.Label>
          <Form.Control as="textarea" rows={3}></Form.Control>
          <Button className={styles.submit} variant="outline-success">
            Guardar
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}



// const [file, setFile] = useState(null);

const changeImage = (event: any) => {
  // setFile(event.target.files[0]);
  // console.log(event.target.files[0]);
  //   const file = event.target.files[0];
  //   const fileReader = new FileReader();
  //   fileReader.onload = (e) => setFile(event.target.files[0]);
  //   fileReader.readAsDataURL(file);
};

function changeProductName() {}
function changeDate() {}
function changePrice() {}

function getTransactionById(id: number) {
  return transacrionData.find((t) => {
    return t.id === id;
  });
}

export default TransactionDetails;
