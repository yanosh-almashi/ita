import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SignupInput from './input-validation.hoc';
import { Form } from 'react-final-form';

afterEach(cleanup);

describe('Signup input', () => {
  it('Should render 1 inputs', () => {
    const { container } = render(
      <Form
        onSubmit={() => {}}
        render={({ handleSubmit }) => (
          <form onSubmit={() => {}}>
            <SignupInput
              id="GroupSignup"
              label="GroupSignup"
              variant="outlined"
              type="text"
              fieldName="group"
            />
          </form>
        )}
      />
    );

    const inputItems = container.querySelector('input[type="text"]');
    expect(inputItems).toBeInTheDocument();
  });
});
