import React from 'react';
import { shallow } from 'enzyme';
import Pagination from '../components/Pagination';

test('renders the component Pagination Test', () => {
  // const [page, setPage] = React.useState('');
  const setPage = jest.fn();
  const component = shallow(
    <Pagination page={1} setPage={() => setPage()} totalPage={7} />
  );
  expect(component).toMatchSnapshot();
});
