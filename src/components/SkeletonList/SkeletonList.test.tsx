import React from 'react';
import { render } from '@testing-library/react';
import { SkeletoList } from './index';

describe('SkeletonList Component', () => {
  test('render component', () => {
    const component = render(
            <SkeletoList />
    );
    expect(component.container.getElementsByClassName(`MuiSkeleton-root`).length).toBeGreaterThan(0);
  });
});
