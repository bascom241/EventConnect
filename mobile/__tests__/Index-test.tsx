import React from 'react';
import { render } from '@testing-library/react-native';
import Index from '../app/index'; // adjust path if needed

describe('Index Redirect', () => {
  it('renders a Redirect to /onboarding', () => {
    const { getByTestId } = render(<Index />);
    // We can give the Redirect a testID in the component to query it
    getByTestId("Welcome to Home screen")
  });
});
