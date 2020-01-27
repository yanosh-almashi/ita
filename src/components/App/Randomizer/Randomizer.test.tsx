import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Randomizer from './Randomizer';

afterEach(cleanup);

describe('Randomizer test', () => {
  const component = () => {
    return render(<Randomizer />);
  };
  it('Should render Randomize button', () => {
    const { getByText } = component();
    expect(getByText('Randomize')).toBeInTheDocument();
  });

  it('Should render input', () => {
    const { baseElement } = component();
    const input = baseElement.querySelector('input[type="number"]');
    expect(input).toBeInTheDocument();
  });
  it('Should render textarea', () => {
    const { baseElement } = component();
    const textarea = baseElement.querySelector('textarea');
    expect(textarea).toBeInTheDocument();
  });
  it('Should render <li>', () => {
    const { baseElement } = component();
    const button = baseElement.querySelector('#RandomizeButton');
    const input = baseElement.querySelector('input[type="number"]');
    const textarea = baseElement.querySelector('textarea');
    const items = 'first \n second \n third';

    if (button === null || textarea === null || input === null) {
      return;
    }

    fireEvent.change(textarea, { target: { value: items } });
    fireEvent.change(input, { target: { value: 2 } });
    fireEvent.click(button);
    const li = baseElement.querySelectorAll('li');
    expect(li).toHaveLength(2);
  });
});
