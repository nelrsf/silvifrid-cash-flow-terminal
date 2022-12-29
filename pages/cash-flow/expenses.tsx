import TransactionsList from "../components/transactions/transactionsList";
import homestyles from "../../styles/Home.module.css";

function Expenses(){
    return(
        <div className={homestyles.mainContainer}>
        <div className={homestyles.title}>
          <h4>Gastos</h4>
        </div>      
        <TransactionsList />
      </div>
    )
}

export default Expenses;