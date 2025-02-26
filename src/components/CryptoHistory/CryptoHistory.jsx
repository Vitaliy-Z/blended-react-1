import { formate } from '../../helpers/formateDate';

import styles from './CryptoHistory.module.css';

const CryptoHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th className={styles.th}>№</th>
          <th className={styles.th}>PRICE</th>
          <th className={styles.th}>AMOUNT</th>
          <th className={styles.th}>DATE</th>
        </tr>
      </thead>

      <tbody>
        {items.map((el, idx) => (
          <tr className={styles.tr} key={el.id}>
            <td className={styles.td}>{idx + 1}</td>
            <td className={styles.td}>{el.price}</td>
            <td className={styles.td}>{el.amount}</td>
            <td className={styles.td}>{formate(el.date)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CryptoHistory;
