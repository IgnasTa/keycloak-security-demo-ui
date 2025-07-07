import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { canActivateAuthRole } from './guards/auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';

export const routes: Routes = [
    { 
        path: '',         
        component: HomepageComponent
    },
        { 
        path: 'user',         
        component: HomepageComponent ,
        data: {
            role: ['user']
        },
        canActivate: [canActivateAuthRole]
    },
        { 
        path: 'admin',         
        component: HomepageComponent ,
        data: {
            role: ['admin']
        },
        canActivate: [canActivateAuthRole]
    },
    { 
        path: 'unauthorised',         
        component: ForbiddenComponent
    },
];
