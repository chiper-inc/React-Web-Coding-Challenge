import React from 'react';
import { render } from '@testing-library/react';
import { ItemByke } from './index';

const mockItemData = {
  thumb: '', title: 'Byke test', description: '', date_stolen: '1223333', stolen_location: 'Barranquilla'
};
describe('ItemByke Component', () => {
  test('render component', () => {
    const itemBykeComponent = render(
            <ItemByke {...mockItemData }/>
    );
    expect(itemBykeComponent.findAllByAltText(`There isn't description`)).not.toBeFalsy();
  });
});
