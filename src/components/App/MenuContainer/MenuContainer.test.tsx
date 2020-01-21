import React from "react";
import { render } from '@testing-library/react';
import MenuContainer from "./MenuContainer";
import '@testing-library/jest-dom';

describe('Test menu container', () => {
    it('render without crashing', () => {
        const { container } = render(<MenuContainer />);
        expect(container.querySelector('[data-testid="menu-container"]')).not.toBeNull();
    })
});
