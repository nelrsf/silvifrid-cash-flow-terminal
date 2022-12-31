import styles from "../../../styles/buttons/Buttons.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import Link from "next/link";


function AddButton(props: any) {
  return (
    <Link href={{
      pathname: "/components/details/transactionDetails",
      query: {
        mode: "create",
        returnUrl: props.returnUrl || "/"
      }
    }}>
      <Button variant="outline-danger" className={styles.roundButton}>
        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
      </Button>
    </Link>
  );
}

export default AddButton;