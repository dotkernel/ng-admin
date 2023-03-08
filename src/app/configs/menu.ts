import { MenuItem } from '../interfaces/navigation';

export const menuItems: MenuItem[] = [
    {
        title: 'Dashboard',
        icon: 'dashboard',
        path: '/main/home'
    },
    {
        title: 'Admins',
        icon: 'admin_panel_settings',
        path: '/main/home/admins',
    },
    {
        title: 'Users',
        icon: 'supervisor_account',
        path: '/main/home/users',
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
