import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import styles from "../../../styles/quantityInput/QuantityInput.module.css";

function QuantityInput(this: any, props: any) {
  const quantity: any = useRef(1);
  let input = useRef<HTMLInputElement>();

  function changeQuntity(event: any) {
    quantity.current = parseInt(event.target.value);
    props.updateMessage(quantity.current);
  }

  function addQuntity() {
    quantity.current++;
    if (input.current) {
      input.current.value = quantity.current;
    }
    props.updateMessage(quantity.current);
  }

  function reduceQuntity() {
    quantity.current = quantity.current > 1 ? quantity.current - 1 : 1;
    if (input.current) {
      input.current.value = quantity.current;
    }
    props.updateMessage(quantity.current);
  }

  return (
    <>
      <Form.Label className="mt-3">Cantidad</Form.Label>
      <div className={styles.quantityInput}>
        <Button onClick={addQuntity}>
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </Button>
        <Form.Control
          ref={this?.input}
          className={styles.quantityField}
          type="number"
          defaultValue={quantity.current}
          onChange={changeQuntity}
        ></Form.Control>
        <Button onClick={reduceQuntity}>
          <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
        </Button>
      </div>
    </>
  );
}

export default QuantityInput;
