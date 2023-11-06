import { Route } from '@angular/router';
import { LoginComponent, SignUpComponent } from '@web/auth'

export const appRoutes: Route[] = [
    {
        path:'signup',
        component:SignUpComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'**',
        redirectTo:'signup',
        pathMatch:'full'
    }
];
