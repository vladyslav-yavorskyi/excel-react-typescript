import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Toolbar from '../../components/Toolbar';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('Toolbar', () => {
  test('click to bold button has to change background', () => {
    render(
      <Provider store={store}>
        <Toolbar />
      </Provider>
    );
    const boldButton = screen.getByTestId('bold');

    fireEvent.click(boldButton);

    expect(boldButton).toHaveStyle('background-color: gray');
  });
  test('click to italic button has to change background', () => {
    render(
      <Provider store={store}>
        <Toolbar />
      </Provider>
    );
    const italicButton = screen.getByTestId('italic');

    fireEvent.click(italicButton);

    expect(italicButton).toHaveStyle('background-color: gray');
  });
  test('click to underline button has to change background', () => {
    render(
      <Provider store={store}>
        <Toolbar />
      </Provider>
    );
    const underlineButton = screen.getByTestId('underline');

    fireEvent.click(underlineButton);

    expect(underlineButton).toHaveStyle('background-color: gray');
  });
});
