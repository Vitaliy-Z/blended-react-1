import { IconContext } from 'react-icons';

import styles from './StatisticsItem.module.css';

const StatisticsItem = ({ title, total, icon }) => {
  return (
    <>
      <IconContext.Provider value={{ color: '#2196f3', size: 30 }}>
        {icon}
      </IconContext.Provider>
      <span className={styles.counter}>{total}</span>
      <p className={styles.text}>{title}</p>
    </>
  );
};

export default StatisticsItem;
