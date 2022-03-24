import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { PaginationList } from './index';

describe('PaginationList Component', () => {
  const onChangePage = jest.fn();
  test('called onChange function props', () => {
    const component = render(
                <PaginationList count={10} onChangePage={onChangePage} page={1}/>
    );
    const button = component.getByText('2');
    fireEvent.click(button);
    expect(onChangePage).toHaveBeenCalled();
  });
});
