import {Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {AddComponent} from './add/add.component';
import {DeleteComponent} from './delete/delete.component';
import {UpdateComponent} from './update/update.component';
import {LoginComponent} from './login/login.component';

export const ROUTER_CONFIG: Routes = [

    {
        path: 'main',
        component: MainComponent
    },
    {
      path: 'add',
      component: AddComponent
    },
    {
        path: 'delete',
        component: DeleteComponent
    },
    {
        path: 'update',
        component: UpdateComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        redirectTo: '/login'
    }
];
