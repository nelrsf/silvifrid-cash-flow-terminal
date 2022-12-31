import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import Link from "next/link";


function BackButton(props: any) {
  return (
    <Link href={props.returnUrl || "/"}>
      <Button variant="outline-secondary">
        <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
      </Button>
    </Link>
  );
}

export default BackButton;
