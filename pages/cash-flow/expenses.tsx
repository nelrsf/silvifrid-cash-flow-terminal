import TransactionsList from "../components/transactions/transactionsList";
import homestyles from "../../styles/Home.module.css";
import BackButton from "../components/buttons/back";
import BackHomeButton from "../components/buttons/backHome";
import AddButton from "../components/buttons/addButton";

function Expenses() {
  const returnUrl = "/cash-flow/expenses";
  return (
    <div className={homestyles.mainContainer}>
      <div className={homestyles.title}>
        <BackButton returnUrl="/" />
        <h4>Gastos</h4>
        <BackHomeButton />
      </div>
      <TransactionsList returnUrl={returnUrl} />
      <AddButton returnUrl={returnUrl}/>
    </div>
  );
}

export default Expenses;
