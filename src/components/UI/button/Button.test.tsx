// @ts-nocheck

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './index';

describe('Button Component', () => {
  it('renders the button with correct label', () => {
    render(<Button label="Click Me" onClick={() => {}} />);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);

    const buttonElement = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when prop is passed', () => {
    render(<Button label="Disabled" onClick={() => {}} disabled />);

    const buttonElement = screen.getByRole('button', { name: /disabled/i });
    expect(buttonElement).toBeDisabled();
  });
});
