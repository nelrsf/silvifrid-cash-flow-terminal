import Card from "react-bootstrap/Card";
import styles from "../../../styles/Transactions.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Link from "next/link";

function Transaction(props: any) {
  return (
    <Card>
      <div className={`${styles.cardItem} row`}>
        <div className={`${styles.imgViewport} col-sm-2`}>
          <img src={props.transactionData?.image} alt="transacción" />
        </div>
        <div className={`${styles.cardInfo}  col-sm-4`}>
          <Card.Body>
            <Card.Title className={styles.productName}>
              {props.transactionData?.productName}
            </Card.Title>
            <Card.Text className={styles.transactionDate}>
              {props.transactionData?.date}
            </Card.Text>
          </Card.Body>
        </div>
        <div className={`${styles.value}  col-sm-3`}>
          <strong>{props.transactionData?.price} $</strong>
        </div>
        <div className={`${styles.actions}  col-sm-3`}>
          <Link
            href={{
              pathname: "/components/details/transactionDetails",
              query: {
                id: props.transactionData?.id,
                mode: "edit",
                returnUrl: props.returnUrl || "/"
              },
            }}
          >
            <Button variant="outline-secondary" className="ml-1">
              <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
            </Button>
          </Link>

          <Button variant="outline-danger" className="ml-1">
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default Transaction;
