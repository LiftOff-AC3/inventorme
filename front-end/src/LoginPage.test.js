import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Login from "./components/layout/LoginPage";

test('renders Login component without crashing', () => {
  render(<Login />);
});
test('renders empty email and password inputs', () => {
  const { getByLabelText } = render(<Login />);
  expect(getByLabelText('Email:')).toHaveValue('');
  expect(getByLabelText('Password:')).toHaveValue('');
});
test('updates email input correctly', () => {
  const { getByLabelText } = render(<Login />);
  const emailInput = getByLabelText('Email:');
  fireEvent.change(emailInput, { target: { value: 'test@gmail.com' } });
  expect(emailInput).toHaveValue('test@gmail.com');
});
test('updates password input correctly', () => {
  const { getByLabelText } = render(<Login />);
  const passwordInput = getByLabelText('Password:');
  fireEvent.change(passwordInput, { target: { value: 'test123' } });
  expect(passwordInput).toHaveValue('test123');
});
test('submit button is initially disabled', () => {
  const { getByRole } = render(<Login />);
  expect(getByRole('button', { name: 'Submit' })).toBeDisabled();
});
test('submit button is enabled when both email and password are filled in', () => {
  const { getByRole, getByLabelText } = render(<Login />);
  const emailInput = getByLabelText('Email:');
  const passwordInput = getByLabelText('Password:');
  const submitButton = getByRole('button', { name: 'Submit' });

  fireEvent.change(emailInput, { target: { value: 'test@gmail.com' } });
  fireEvent.change(passwordInput, { target: { value: 'test123' } });

  expect(submitButton).toBeEnabled();
});
test('handleSubmit function is called when Submit button is clicked', () => {
    const handleSubmitMock = jest.fn();
    Login.prototype.handleSubmit = function() {  handleSubmitMock() };

});
