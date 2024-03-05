import { render, screen } from '@testing-library/react';
import InputContainer from '.';

test('menu does not show on load ', () => {
  render(<InputContainer />);
  const cancelText = screen.queryByTestId('result-menu');
  expect(cancelText).not.toBeInTheDocument();
});
