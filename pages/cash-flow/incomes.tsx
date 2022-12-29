import TransactionsList from "../components/transactions/transactionsList";
import homestyles from "../../styles/Home.module.css";

function Incomes() {
  return (
    <div className={homestyles.mainContainer}>
      <div className={homestyles.title}>
        <h4>Ingresos</h4>
      </div>      
      <TransactionsList />
    </div>
  );
}

export default Incomes;
