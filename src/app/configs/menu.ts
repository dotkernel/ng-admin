import { MenuItem } from '../interfaces/navigation';

export const menuItems: MenuItem[] = [
    {
        title: 'Dashboard',
        icon: 'dashboard',
        path: '/main/home'
    },
    {
        title: 'Collapse',
        icon: 'receipt',
        childrens: [
            {
                title: 'Invoice',
                icon: 'notes',
                path: '/main/home/invoice'
            },
        ]
    },
];