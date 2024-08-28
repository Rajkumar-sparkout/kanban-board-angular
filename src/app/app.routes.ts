import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ResgistrationComponent } from './components/resgistration/resgistration.component';
import { AuthGuard } from './guard/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: ResgistrationComponent },
    { 
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadComponent: ()=> import('./components/dashboard/dashboard.component').then(m=> m.DashboardComponent)
    },
    { 
        path: 'createTask',
        canActivate: [AuthGuard],
        loadComponent: ()=> import('./components/dashboard/create-task/create-task.component').then(m=> m.CreateTaskComponent)
    },
    { 
        path: 'createTask/:id',
        canActivate: [AuthGuard],
        loadComponent: ()=> import('./components/dashboard/create-task/create-task.component').then(m=> m.CreateTaskComponent)
    },
];
