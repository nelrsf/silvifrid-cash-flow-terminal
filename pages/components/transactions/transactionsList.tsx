import styles from "../../../styles/Transactions.module.css";
import transacrionData from "../../../transactionsData";
import Transaction from "./transaction";

function TransactionsList(props: any) {
  return (
    <ul className={styles.transactionContainer}>
      {transacrionData.map((transaction) => {
        return (
          <li key={transaction.id} className={styles.transactionItem}>
            <Transaction transactionData={transaction} returnUrl={props.returnUrl || "/"}/>
          </li>
        );
      })}
    </ul>
  );
}

export default TransactionsList;
