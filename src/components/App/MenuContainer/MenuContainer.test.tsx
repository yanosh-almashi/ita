import React from "react";
import { render, cleanup } from '@testing-library/react';
import MenuContainer from "./MenuContainer";
import '@testing-library/jest-dom';

describe('Test menu container', () => {
    it('render without crashing', () => {
        const { getByTestId } = render(<MenuContainer />);
        expect(getByTestId('menu-container')).toBeInTheDocument();
    })
});
