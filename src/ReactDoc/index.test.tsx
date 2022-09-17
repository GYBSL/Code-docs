import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDoc from './index';

describe('<ReactDoc />', () => {
  it('render ReactDoc with dumi', () => {
    const msg = 'dumi';

    render(<ReactDoc title={msg} />);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
