import React from 'react';
import { render } from  '@testing-library/react';
import Display from '../display/Display';

describe('dashboard component', () => {
  it('renders the control element', () => {
    const result = render(<Display />)
  })
});

