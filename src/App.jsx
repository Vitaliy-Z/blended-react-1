import BlogCard from './components/BlogCard/BlogCard';
import Container from './components/Container/Container';
import CryptoHistory from './components/CryptoHistory/CryptoHistory';
import ForbesList from './components/ForbesList/ForbesList';
import Heading from './components/Heading/Heading';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';

import {
  name,
  postedAt,
  poster,
  tag,
  title,
  description,
  avatar,
} from './data/article.json';
import statsData from './data/stats.json';
import forbesData from './data/forbes.json';
import transactionsData from './data/transactions.json';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading title="Task 1 Blog Card" bottom />
        <BlogCard
          poster={poster}
          tag={tag}
          title={title}
          description={description}
          name={name}
          avatar={avatar}
          postedAt={postedAt}
        />
        <Heading title="Task 2 Statistics" top bottom />
        <Statistics stats={statsData} />
        <Statistics title="Main Statistics" stats={statsData} />
        <Heading title="Task 3 Forbes list" top bottom />
        <ForbesList list={forbesData} />
        <Heading title="Task 4 Crypto history" top bottom />
        <CryptoHistory items={transactionsData} />
      </Container>
    </Section>
  );
};
