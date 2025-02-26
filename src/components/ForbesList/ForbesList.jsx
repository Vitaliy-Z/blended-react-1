import styles from './ForbesList.module.css';
import ForbesListItem from '../ForbesListItem/ForbesListItem';

const ForbesList = ({ list }) => {
  return (
    <div className={styles.board}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          <span className={styles.titleTop}>Forbes</span>
          <span className={styles.titleBottom}>Leader board</span>
        </h2>
      </div>

      <ul className={styles.list}>
        {list.map(el => (
          <li className={styles.item} key={el.id}>
            <ForbesListItem
              name={el.name}
              capital={el.capital}
              avatar={el.avatar}
              isIncrease={el.isIncrease}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForbesList;
