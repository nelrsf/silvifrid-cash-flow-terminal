import styles from "../../../styles/Transactions.module.css";
import { transacrionData } from "../../cash-flow/transactionsData";
import Transaction from "./transaction";

function TransactionsList() {
  return (
    <ul className={styles.transactionContainer}>
      {transacrionData.map((transaction) => {
        return (
          <li key={transaction.id} className={styles.transactionItem}>
            <Transaction transactionData={transaction} />
          </li>
        );
      })}
    </ul>
  );
}

export default TransactionsList;
