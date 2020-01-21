import React from "react";
import { render, fireEvent } from '@testing-library/react';
import NavigationMenuItem from "./NavigationMenuItem";
import { ItemsInterface } from "@components/App/MenuContainer/types/types";
import {BrowserRouter} from 'react-router-dom';

const config = {
    name: "home",
    icon: "fas fa-home",
    path: "/random",
    nextMenu: [
        {
          name: "rem",
          icon: "far fa-address-book",
          path: "/rem"
        }
    ],
    active: true,
    setActive: (elem: boolean) => {}

}
const config2 = {
    name: "home",
    icon: "fas fa-home",
    path: "/random",
    nextMenu: [
        {
            name: "rem",
            icon: "far fa-address-book",
            path: "/rem"
        }
    ],
    active: false,
    setActive: (elem: boolean) => {}
}

describe('NavigationMenuItem', () => {
    it('test', () => {
        const { container, getByTitle, rerender } = render(<BrowserRouter>
            <NavigationMenuItem 
            name={config.name}
            icon={config.icon}
            path={config.path} 
            nextMenu={config.nextMenu} 
            active={config.active}
            setActive={config.setActive}
            />
        </BrowserRouter>);
        expect(getByTitle(config.name)).not.toBeNull();
        expect(container.querySelector('.fa-chevron-right')).not.toBeNull();
        expect(container.getElementsByClassName(config.icon)).not.toBeNull();
        let link = container.querySelector('a');
        if ( link ) {
            expect(link.getAttribute('href')).toBe(config.path);
        }
    
    
        rerender(<BrowserRouter>
            <NavigationMenuItem 
            name={config.name}
            icon={config.icon}
            path={config.path} 
            nextMenu={config.nextMenu} 
            active={config2.active}
            setActive={config.setActive}
            />
        </BrowserRouter>);
        expect(container.querySelector('.fa-chevron-right')).toBeNull();
    });
});
