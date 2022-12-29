import styles from "../styles/Home.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from "react-bootstrap";
import React from "react";
import Link from "next/link";


export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.title} mt-5 mb-3`}>
        <h4>
          Terminal de ventas <p className={styles.brand}>Silvifrid Organic</p>
        </h4>
      </div>
      <div className={styles.buttons}>
        <Link className={styles.incomes} href={"/cash-flow/incomes"}>
          <Button variant="outline-success">Ingresos</Button>
        </Link>
        <Link className={styles.expenses} href={"/cash-flow/expenses"}>
          <Button variant="outline-danger">Gastos</Button>
        </Link>
      </div>
    </div>
  );
}
