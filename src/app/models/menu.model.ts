

export interface MenuItem {
  name: string;
  url: string;
  icon?: string;
}

export const MenuBarMock: MenuItem[] = [
  {name: 'Home', url: 'home'},
  {name: 'Shop', url: 'products'},
  {name: 'Blog', url: 'blog'},
  {name: 'Contact', url: 'contact'},
];
