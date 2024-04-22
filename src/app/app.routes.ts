import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./modules/login/login.component').then((x) => x.LoginComponent),
        title: 'LogIn'
    },
    {
        path: '',
        loadComponent: () => import('./modules/Delivery/components/order/order.component').then((x) => x.OrderComponent),
        title: 'Order',
        canActivate: [authGuard]

        // children : [
        //     {
        //         path:'',
        //         loadComponent: () => import('./modules/admin/components/category-list/category-list.component').then((x) => x.CategoryListComponent),
        //         title: 'All Category',
        //     },
        //     // {
        //     //     path:'childTwo',
        //     //     loadComponent: () => import('./home/child2/child2.component').then((x) => x.Child2Component),
        //     //     title: 'childTwo',
        //     // }
        // ],
        

    },
];
