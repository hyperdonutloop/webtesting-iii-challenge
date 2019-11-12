import React from 'react';
import { render, findByText } from '@testing-library/react';
import 'jest-dom/extend-expect';

import Display from './Display';

//displays if gate is open/closed and if it is locked/unlocked
//displays 'Closed' if the closed prop is true and 'Open' if otherwise
//displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise

//getByText(/^locked$/i) - 

test('shows locked and closed', () => {
  const { getByText } = render(<Display locked={true} closed={true} />)

  getByText(/closed/i);
  getByText(/locked/i);
});

test('shows unlocked and open', () => {
  const { getByText } = render(<Display locked={false} closed={false} /> );

  getByText(/open/i);
  getByText(/unlocked/i);
});

//when locked or closed use the red-led class
//when unlocked or open use the green-led class

test('Red class when locked or closed', () => {
  const { getByText } = render(<Display locked={true} closed={true} />);

  expect(getByText(/Locked/i)).toHaveClass('red-led');
  expect(getByText(/Closed/i)).toHaveClass('red-led');
});

test('Green class when unlocked or open', () => {
  const { getByText } = render(<Display locked={false} closed={false} />);

  const unlocked = getByText(/unlocked/i);
  const open = getByText(/open/i);

  expect (unlocked).toHaveClass('green-led');
  expect(open).toHaveClass('green-led');
})