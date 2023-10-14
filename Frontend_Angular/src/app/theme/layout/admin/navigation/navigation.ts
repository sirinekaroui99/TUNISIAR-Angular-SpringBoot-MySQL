import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
 
  {
    id: 'ui-element',
    title: 'GESTION',
    type: 'group',
    icon: 'icon-ui',
    children: [
      {
        id: 'basic',
        title: 'Gestion',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'button',
            title: 'Gestion des Vols',
            type: 'item',
            url: '/basic/vols',
          },
          {
            id: 'badges',
            title: 'Gestion des Staff',
            type: 'item',
            url: '/basic/hotesses',
          },
         // {
          //  id: 'breadcrumb-pagination',
         //   title: 'Gestion de stewards',
          //  type: 'item',
          //  url: '/basic/stewards',
          //},
          {
            id: 'collapse',
            title: 'Gestion des Pilotes',
            type: 'item',
            url: '/basic/pilotes',
          },
          //{
           // id: 'tabs-pills',
           // title: 'Gestion des co-pilotes',
           // type: 'item',
           // url: '/basic/co-pilotes',
         // },
           
        ],
      },
    ],
  },
  {
    id: 'forms',
    title: 'PAGES',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'forms-element',
        title: 'Deconnexion',
        type: 'item',
        url: '/home',
        classes: 'nav-item',
        icon: 'feather icon-power',
      }, 
    ],
  },
   
 
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
