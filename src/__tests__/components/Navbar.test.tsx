import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import Navbar from '../../components/Navbar';
import Dashboard from '../../pages/dashboard/Dashboard';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import '@testing-library/jest-dom';
/**
 * @jest-environment jsdom
 */

describe('Navbar', () => {
  const navbar = (
    <Provider store={store}>
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    </Provider>
  );

  it('exit to dashboard by clicking button EXIT', () => {
    render(navbar);
    const exitButton = screen.getByTestId('exit');

    fireEvent.click(exitButton);

    expect(window.location.pathname).toBe('/');
  });

  it('exit to dashboard by clicking button DELETE', async () => {
    render(navbar);
    const deleteButton = screen.getByText('Delete') as HTMLButtonElement;

    fireEvent.click(deleteButton);

    await waitFor(() => {
      expect(
        screen.getByText('Are you sure you want to delete that spreadsheet?')
      ).toBeInTheDocument();
    });
  });

  it('input value initially must be Untitled', () => {
    render(navbar);
    const inputElement = screen.getByTestId('input') as HTMLInputElement;

    expect(inputElement.value).toBe('Untitled');
  });

  it('input value is updated correctly', () => {
    render(navbar);
    const inputElement = screen.getByTestId('input') as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: 'Title of the project' } });

    expect(inputElement.value).toBe('Title of the project');
  });
});
