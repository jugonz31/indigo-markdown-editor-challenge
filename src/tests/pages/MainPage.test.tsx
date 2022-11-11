import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MainPage } from '../../pages';

describe('MainPage', () => {
  it('renders textarea', () => {
    render(<MainPage />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeInTheDocument();
  });

  it('renders document preview', () => {
    render(<MainPage />);
    const preview = screen.getByTestId('document-preview');
    expect(preview).toBeInTheDocument();
  });

  it('should show preview results from text area', () => {
    render(<MainPage />);
    const textarea = screen.getByRole('textbox');
    userEvent.type(textarea, '# test');
    expect(textarea).toHaveValue('# test');
    const preview = screen.getByTestId('document-preview');
    expect(preview.innerHTML).toBe('<h1>test</h1>');
  });
});
