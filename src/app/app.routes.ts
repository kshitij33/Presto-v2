import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    // component: HomeComponent,
    loadComponent: () => import('./core/index/index').then(m => m.Index)
  },
  {
    path: 'login',
    // component: AboutUsComponent,
    loadComponent: () => import('./core/login-portal/login-portal').then(m => m.LoginPortal)
  },
  {
    path: 'about-us',
    // component: AboutUsComponent,
    loadComponent: () => import('./core/about-us/about-us').then(m => m.AboutUs)
  },
  {
    path: 'contact-us',
    // component: AboutUsComponent,
    loadComponent: () => import('./core/contact-us/contact-us').then(m => m.ContactUs)
  },
  {
    path: 'detail',
    loadComponent: () => import('./core/bank-detail/bank-detail').then(m => m.BankDetail)
  },
  {
    path: "admin",
    children: [
      {
        path: "login",
        loadComponent: () => import('./admin/login/login').then(m => m.Login)
      }
    ]
  }
];
