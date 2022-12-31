import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import Link from "next/link";


function BackHomeButton() {
  return (
    <Link href="/">
      <Button variant="outline-secondary">
        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
      </Button>
    </Link>
  );
}

export default BackHomeButton;
