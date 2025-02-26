import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import styles from './Statistics.module.css';

const icons = [
  <FaRegThumbsUp key={1} />,
  <MdPeople key={2} />,
  <MdOutlineProductionQuantityLimits key={3} />,
  <GiTreeDoor key={4} />,
];

const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <h3 className={styles.title}>{title}</h3>}

      <ul className={styles.list}>
        {stats.map((el, idx) => (
          <li className={styles.item} key={el.id}>
            <StatisticsItem
              title={el.title}
              total={el.total}
              icon={icons[idx]}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Statistics;
