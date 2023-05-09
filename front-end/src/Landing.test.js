import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Landing from './components/layout/Landing';


test('renders Landing component without crashing', () => {
    render(<Landing />);
  });

  test('handleLogin function is executed when Login button is clicked', () => {
    const handleLoginMock = jest.fn();
    const props = {
      handleLogin: handleLoginMock,
      handleCreateAccount: jest.fn(),
    };
    const { getByText } = render(<Landing {...props} />);
    const loginButton = getByText(/Login/);
    fireEvent.click(loginButton);
    expect(handleLoginMock).toHaveBeenCalled();
  });
  
  test('handleCreateAccount function is executed when Create Account button is clicked', () => {
    const handleCreateAccountMock = jest.fn();
    const props = {
      handleLogin: jest.fn(),
      handleCreateAccount: handleCreateAccountMock,
    };
    const { getByText } = render(<Landing {...props} />);
    const createAccountButton = getByText(/Create Account/i);
    fireEvent.click(createAccountButton);
    expect(handleCreateAccountMock).toHaveBeenCalled();
  });

