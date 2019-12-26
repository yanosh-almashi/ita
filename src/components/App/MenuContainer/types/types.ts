import {ReactElement} from "react";

export interface ItemsInterface {
    name: string;
    id: number;
    icon: string;
    path?: string;
    nextMenu?: ItemsInterface[];
    isActive?: boolean;
}

export type SubMenuType = null | ReactElement;
