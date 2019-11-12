import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-dom/extend-expect';

import Controls from './Controls';

test('it renders correctly', () => {
  render(<Controls />);
})

// const toggleLockedMock = jest.fn();
// const toggleClosedMock = jest.fn();



test('',() => {
  const { getByText } = render(<Controls locked={true} closed={true} toggleLocked={toggleLockedMock} toggleClosed={toggleClosedMock} />)

  const toggleLockedMock = jest.fn();
  const toggleClosedMock = jest.fn();

  //Act - getting the node by test
  const unLockButton = getByText(/unlock gate/i);
  const openGateButton = getByText(/open gate/i);

  // Assertion is if ^^ is truthy

  fireEvent.click(unLockButton);

  fireEvent.click(openGateButton);

  expect(toggleLockedMock).toHaveBeenCalled();
  expect(toggleClosedMock).toHaveBeenCalled();

});

test()

//provide buttons to toggle the closed and locked states.
//buttons' text changes to reflect the state the door will be in if clicked
//the closed toggle button is disabled if the gate is locked
//the locked toggle button is disabled if the gate is open