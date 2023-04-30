import { ProfilePage } from './profile/profile.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TabsPage } from './tabs/tabs.page';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: ProfilePage },
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'tab1',
                loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule),
            },
            {
                path: 'tab2',
                loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
            },
            {
                path: 'tab3',
                loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
        path: 'viewDetails',
        loadChildren: () => import('./view-details/view-details.module').then(m => m.ViewDetailsModule)
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
