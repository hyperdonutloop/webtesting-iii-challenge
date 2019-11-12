import React from 'react';

describe('gate default', () => {
  it('is unlocked and open', () => {
    expect state.locked.toBe('false');
  })
})