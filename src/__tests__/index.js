import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { isValidPinCode } from '../helpers/validations';

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it("Check pin validation", () => {
  let pin = 'JN-3117-5100-LH';
  expect(isValidPinCode(pin)).toBe(true);
  pin = 'JN-3117-5100-L';
  expect(isValidPinCode(pin)).toBe(false);
  pin = 'JN-5223-5100-LH';
  expect(isValidPinCode(pin)).toBe(false);
});