import { ReactElement } from 'react';

export interface ItemsInterface {
  name: string;
  icon?: string;
  path: string;
  nextMenu?: ItemsInterface[];
}

export type NestedMenuType = ReactElement | null;
